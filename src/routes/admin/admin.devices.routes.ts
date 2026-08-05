import { Router, type Request, type Response } from "express";
import z from "zod";
import { requireAuth } from "../../authMiddlewares/auth.middleware.js";
import { requireAdminRole, validatePondAccess } from "../../lib/admin.server.js";
import { prisma } from "../../lib/prisma.js";
import { createDeviceSchema } from "../../validations/adminDevice.validation.js";


const router = Router();

/**
 * GET /api/admin/devices - List all devices or filter by pond/farm
 */
router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || user === null) {
      res.status(401).json({ success: false, message: "User NOT found." })
    }
    requireAdminRole(user);


    const page = parseInt(req.query.page as string || "1");
    const limit = parseInt(req.query.limit as string || "10");
    const status = req.query.status as string;
    const pondId = req.query.pondId as string;
    const isListed = req.query.isListed as string;
    const owned = req.query.owned as string;

    const skip = (page - 1) * limit;

    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (isListed === "true") {
      where.isListed = true;
    } else if (isListed === "false") {
      where.isListed = false;
    }

    if (owned === "true") {
      where.ownerId = { not: null };
    } else if (owned === "false") {
      where.ownerId = null;
    }

    if (pondId) {
      await validatePondAccess(user!, pondId, prisma);
      where.pondId = pondId;
    } else if (user?.role === "ADMIN") {
      // ADMIN sees devices only in their ponds or assigned to their farms
      where.OR = [
        { pond: { farm: { ownerId: user.id } } },
        { owner: { role: "FARMER" }, pond: { farm: { ownerId: user.id } } },
      ];
    }

    const [devices, total] = await Promise.all([
      prisma.device.findMany({
        where,
        include: {
          pond: {
            select: {
              id: true,
              name: true,
              farm: { select: { name: true } },
            },
          },
          owner: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
          sensorReadings: {
            take: 1,
            orderBy: { recordedAt: "desc" },
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
      prisma.device.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        devices,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.error("Error retrieving devices: ", error);
    const message = error instanceof Error ? error.message : "Server Error"
    res.status(500).json({ success: false, message });
  }
});

// CREATE DEVICE ROUTE
router.post("/", requireAuth, async (req: Request, res: Response) => {

  try {
    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    requireAdminRole(user, ["SUPER_ADMIN"]);
    const data = createDeviceSchema.parse(req.body);

    const device = await prisma.device.create({
      data: {
        name: data.name,
        serialNumber: data.serialNumber,
        firmwareVersion: data.firmwareVersion || null,
        hardwareVersion: data.hardwareVersion || null,
        macAddress: data.macAddress || null,
        status: "OFFLINE",
        isListed: data.isListed ?? false,
        listedPrice: data.listedPrice ?? null,
        pondId: data.pondId ?? null,
        listedById: userId,
      },
    });

    return res.status(201).json({ success: true, data: device });
  } catch (error) {
    console.error("Devices API POST error:", error);
    const isValidationError = error instanceof z.ZodError;

    return res.status(isValidationError ? 400 : 500).json(
      { success: false, message: isValidationError ? "Please provide valid device data." : error instanceof Error ? error.message : "Server error" },
    );
  }
})

/**
 * PUT /api/admin/devices/:id - Update device (technician action)
 */
router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } })
    requireAdminRole(user, ["SUPER_ADMIN", "ADMIN", "TECHNICIAN"]);

    const deviceId = req.params.id as string;

    if (!deviceId) {
      return res.status(400).json({ success: false, message: "Device ID required" });
    }

    const { status, firmwareVersion, notes, action } = req.body;

    const device = await prisma.device.findUnique({
      where: { id: deviceId },
      select: { pondId: true },
    });

    if (!device) {
      return res.status(404).json({ success: false, message: "Device not found" });
    }

    await validatePondAccess(user!, device.pondId as string, prisma);

    const updateData: any = {};

    if (action === "calibrate") {
      // Mark calibration timestamp
      updateData.updatedAt = new Date();
      updateData.notes = notes || "Device calibrated";
    } else if (action === "restart") {
      updateData.status = "OFFLINE";
      updateData.notes = notes || `Device restarted by ${user?.firstName}`;
    } else {
      if (status) updateData.status = status;
      if (firmwareVersion) updateData.firmwareVersion = firmwareVersion;
      if (notes !== undefined) updateData.notes = notes;
    }

    const updatedDevice = await prisma.device.update({
      where: { id: deviceId },
      data: updateData,
      include: {
        pond: { select: { name: true } },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Device updated successfully",
      data: updatedDevice,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Server Error"
    return res.status(500).json({ success: false, message });
  }
});

/**
 * GET /api/admin/devices/:id/history - Get device sensor history
 */
router.get("/:id/history", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    requireAdminRole(user);

    const deviceId = req.params.id as string;
    const hours = parseInt(req.query.hours as string || "24");

    if (!deviceId) {
      return res.status(400).json({ success: false, message: "Device ID required" });
    }

    const device = await prisma.device.findUnique({
      where: { id: deviceId },
      select: { pondId: true },
    });

    if (!device) {
      return res.status(404).json({ success: false, message: "Device not found" });
    }

    await validatePondAccess(user!, device.pondId!, prisma);

    const since = new Date(Date.now() - hours * 60 * 60 * 1000);

    const readings = await prisma.sensorReading.findMany({
      where: {
        deviceId,
        recordedAt: { gte: since },
      },
      orderBy: { recordedAt: "desc" },
      take: 100,
    });

    return res.status(200).json({
      success: true,
      data: {
        deviceId,
        readings,
        period: `${hours} hours`,
        count: readings.length,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Server error.";
    res.status(500).json({ success: false, message })
  }
});

export default router;