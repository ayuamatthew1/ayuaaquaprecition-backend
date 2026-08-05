import { Router, type Request, type Response } from "express";
import { requireAuth } from "../../authMiddlewares/auth.middleware.js";
import { isAdmin, requireAdminRole } from "../../lib/admin.server.js";
import { prisma } from "../../lib/prisma.js";

const router = Router();

// AADMIN DASHBOAD DATA
router.get("/dashboard", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    requireAdminRole(user);

    let farmFilter = {};
    let userFilter = {};

    // If ADMIN (not SUPER_ADMIN), only see their data
    if (isAdmin(user?.role as string)) {
      farmFilter = { ownerId: user?.id };
      userFilter = { farms: { some: { ownerId: user?.id } } };
    }

    // Get statistics
    const totalUsers = await prisma.user.count({ where: userFilter });
    const activeFarms = await prisma.farm.count({
      where: { ...farmFilter, status: "ACTIVE" },
    });

    const totalPonds = await prisma.pond.count({
      where: { farm: farmFilter || { ownerId: user?.id } },
    });

    const onlineDevices = await prisma.device.count({
      where: { status: "ONLINE" },
    });

    const criticalAlerts = await prisma.alert.count({
      where: {
        severity: { in: ["CRITICAL", "HIGH"] },
        status: "ACTIVE",
      },
    });

    const totalSubscriptions = await prisma.subscription.count({
      where: { status: "ACTIVE" },
    });

    return res.status(200).json({
      success: true,
      data: {
        totalUsers,
        activeFarms,
        totalPonds,
        onlineDevices,
        criticalAlerts,
        totalSubscriptions,
        timestamp: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error("Dashboard API error:", error);
    return res.status(500).json(
      { success: false, message: error instanceof Error ? error.message : "Server error" }
    );
  }
});

/*
  GET /api/admin/alerts - List all active alerts
 */
router.get("/alerts", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }
    requireAdminRole(user);

    const page = parseInt(String(req.query.page || "1"), 10);
    const limit = parseInt(String(req.query.limit || "10"), 10);

    const severity = req.query.severity ? String(req.query.severity) : undefined;
    const status = req.query.status ? String(req.query.status) : undefined;


    const skip = (page - 1) * limit;

    const where: any = {};

    if (severity) {
      where.severity = severity;
    }
    if (status) {
      where.status = status;
    } else {
      where.status = "ACTIVE"; // Default to active alerts
    }

    // If ADMIN, only see alerts from their farms
    if (user.role === "ADMIN") {
      where.pond = { farm: { ownerId: user.id } };
    }

    const [alerts, total] = await Promise.all([
      prisma.alert.findMany({
        where,
        include: {
          pond: {
            select: {
              id: true,
              name: true,
              farm: { select: { name: true } },
            },
          },
          sensorReading: {
            select: {
              temperature: true,
              ph: true,
              dissolvedOxygen: true,
              turbidity: true,
              recordedAt: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.alert.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        alerts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong, please try again."
    console.error("Error getting alerts: ", error);
    return res.status(500).json({ success: false, message })
  }
});

/*
  PUT /api/admin/alerts/:id - Update alert status
 */
router.patch("/alerts/:id", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    requireAdminRole(user);

    const alertId = req.params.id as string

    if (!alertId) {
      return res.status(400).json({ success: false, message: "Alert ID required" });
    }

    const { status, action } = req.body;

    const updateData: any = {};

    if (status === "ACKNOWLEDGED") {
      updateData.status = "ACKNOWLEDGED";
      updateData.acknowledgedAt = new Date();
    } else if (status === "RESOLVED") {
      updateData.status = "RESOLVED";
      updateData.resolvedAt = new Date();
    } else if (action === "acknowledge") {
      updateData.status = "ACKNOWLEDGED";
      updateData.acknowledgedAt = new Date();
    } else if (action === "resolve") {
      updateData.status = "RESOLVED";
      updateData.resolvedAt = new Date();
    } else if (action === "reopen") {
      updateData.status = "ACTIVE";
      updateData.acknowledgedAt = null;
      updateData.resolvedAt = null;
    }

    const updatedAlert = await prisma.alert.update({
      where: { id: alertId },
      data: updateData,
      include: {
        pond: { select: { name: true } },
      },
    });

    return res.status(200).json({
      success: true,
      message: `Alert ${updateData.status?.toLowerCase() || "updated"} successfully`,
      data: updatedAlert,
    });
  } catch (error) {
    console.log("Error Updating alert: ", error);
    const message = error instanceof Error ? error.message : "Something went wrong please try again.";
    res.status(500).json({ success: false, message })
  }
});

/*
  POST /api/admin/alerts/batch - Batch update alerts
 */
router.post("/alerts/batch", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } })

    requireAdminRole(user);

    const { alertIds, action } = req.body;

    if (!alertIds || alertIds.length === 0) {
      return res.status(400).json({ success: false, message: "Alert IDs required" });
    }

    const updateData: any = {};

    if (action === "acknowledge") {
      updateData.status = "ACKNOWLEDGED";
      updateData.acknowledgedAt = new Date();
    } else if (action === "resolve") {
      updateData.status = "RESOLVED";
      updateData.resolvedAt = new Date();
    } else {
      return res.status(400).json({ success: false, message: "Invalid action" });
    }

    const result = await prisma.alert.updateMany({
      where: { id: { in: alertIds } },
      data: updateData,
    });

    return res.status(200).json({
      success: true,
      message: `${result.count} alerts updated successfully`,
      data: { updatedCount: result.count },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong please try again after sometimes"
    console.error("Error updating batch of alerts: ", error)
    return res.status(500).json({ success: false, message })
  }
});

export default router