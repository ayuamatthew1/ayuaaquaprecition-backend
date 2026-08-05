import { Router, type Request, type Response } from "express";
import { requireAuth } from "../../authMiddlewares/auth.middleware.js";
import { requireAdminRole } from "../../lib/admin.server.js";
import { prisma } from "../../lib/prisma.js";


const router = Router()
/**
 * GET /api/admin/subscriptions - List all subscriptions
 */
router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } })
    requireAdminRole(user);

    const page = parseInt(req.query.page as string || "1");
    const limit = parseInt(req.query.limit as string || "10");
    const status = req.query.status as string;
    const plan = req.query.plan as string;

    const skip = (page - 1) * limit;

    const where: any = {};

    if (status) {
      where.status = status;
    }
    if (plan) {
      where.plan = plan;
    }

    // If ADMIN, only see subscriptions for their farms
    if (user?.role === "ADMIN") {
      where.farm = { ownerId: user.id };
    }

    const [subscriptions, total] = await Promise.all([
      prisma.subscription.findMany({
        where,
        include: {
          farm: {
            select: {
              id: true,
              name: true,
              owner: { select: { firstName: true, lastName: true, email: true } },
            },
          },
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.subscription.count({ where }),
    ]);

    // Calculate days remaining
    const subscriptionsWithDaysRemaining = subscriptions.map((sub: { endsAt: { getTime: () => number; }; }) => ({
      ...sub,
      daysRemaining: Math.ceil((sub.endsAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
    }));

    return res.status(200).json({
      success: true,
      data: {
        subscriptions: subscriptionsWithDaysRemaining,
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
})

/**
 * PUT /api/admin/subscriptions/:id - Update subscription
 */
router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } })
    requireAdminRole(user, ["SUPER_ADMIN"]); // Only SUPER_ADMIN can modify subscriptions

    const subscriptionId = req.params.id as string;

    if (!subscriptionId) {
      return res.status(400).json(
        { success: false, message: "Subscription ID required" }
      );
    }

    const { status, plan, endsAt } = req.body;

    const updatedSubscription = await prisma.subscription.update({
      where: { id: subscriptionId },
      data: {
        ...(status && { status }),
        ...(plan && { plan }),
        ...(endsAt && { endsAt: new Date(endsAt) }),
      },
      include: {
        farm: { select: { name: true } },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Subscription updated successfully",
      data: updatedSubscription,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error." })
  }
});

export default router;