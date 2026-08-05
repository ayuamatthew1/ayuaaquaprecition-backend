import { Router, type Request, type Response } from "express";
import { requireAuth } from "../../authMiddlewares/auth.middleware.js";
import { requireAdminRole, validateFarmAccess } from "../../lib/admin.server.js";
import { prisma } from "../../lib/prisma.js";


const router = Router();
/**
 * GET /api/admin/farms - List all farms accessible to admin
 */
router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    requireAdminRole(user);

    const page = parseInt(req.query.page as string || "1");
    const limit = parseInt(req.query.limit as string || "10");
    const status = req.query.status as string;

    const skip = (page - 1) * limit;

    const where: any = {
      ...(status && { status }),
    };

    // If ADMIN (not SUPER_ADMIN), only see their farms
    if (user?.role === "ADMIN") {
      where.ownerId = user.id;
    }

    const [farms, total] = await Promise.all([
      prisma.farm.findMany({
        where,
        select: {
          id: true,
          name: true,
          description: true,
          address: true,
          city: true,
          state: true,
          country: true,
          latitude: true,
          longitude: true,
          status: true,
          owner: { select: { id: true, firstName: true, lastName: true, email: true } },
          ponds: { select: { id: true } },
          subscription: { select: { plan: true, status: true, endsAt: true } },
          createdAt: true,
          updatedAt: true,
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.farm.count({ where }),
    ]);

    // Add pond count to each farm
    const farmsWithStats = farms.map((farm: any) => ({
      ...farm,
      pondCount: farm.ponds.length,
      ponds: undefined,
    }));

    return res.status(200).json({
      success: true,
      data: {
        farms: farmsWithStats,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error." })
  }
});

/**
 * PUT /api/admin/farms/:id - Update farm details or status
 */
router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    requireAdminRole(user);


    const farmId = req.params.id as string;

    if (!farmId) {
      return res.status(400).json({ success: false, message: "Farm ID required" });
    }

    await validateFarmAccess(user!, farmId, prisma);

    const { name, description, address, city, state, country, latitude, longitude, status } = req.body

    const updatedFarm = await prisma.farm.update({
      where: { id: farmId },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(address !== undefined && { address }),
        ...(city !== undefined && { city }),
        ...(state !== undefined && { state }),
        ...(country !== undefined && { country }),
        ...(latitude !== undefined && { latitude }),
        ...(longitude !== undefined && { longitude }),
        ...(status && { status }),
      },
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        owner: { select: { email: true } },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Farm updated successfully",
      data: updatedFarm,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error." })
  }
});

/**
 * GET /api/admin/farms/:id/overview - Get detailed farm overview with stats
 */
router.get("/:id/overview", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    requireAdminRole(user);


    const farmId = req.params.id as string;

    if (!farmId) {
      return res.status(40).json({ success: false, message: "Farm ID required" });
    }

    await validateFarmAccess(user!, farmId, prisma);

    const farm = await prisma.farm.findUnique({
      where: { id: farmId },
      include: {
        ponds: {
          select: {
            id: true,
            name: true,
            type: true,
            status: true,
            capacity: true,
            waterVolume: true,
            device: { select: { status: true } },
            fishBatches: { select: { quantity: true } },
          },
        },
        subscription: true,
      },
    });

    if (!farm) {
      return res.status(404).json({ success: false, message: "Farm not found" });
    }

    const alerts = await prisma.alert.count({
      where: {
        pond: { farmId },
        status: "ACTIVE",
      },
    });

    return res.status(200).json({
      success: true,
      data: {
        ...farm,
        stats: {
          totalPonds: farm.ponds.length,
          activePonds: farm.ponds.filter((p: any) => p.status === "ACTIVE").length,
          onlineDevices: farm.ponds.filter((p: any) => p.device?.status === "ONLINE").length,
          activeAlerts: alerts,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error" })
  }
});

export default router