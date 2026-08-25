import { Router, type Request, type Response } from "express";
import { requireAuth } from "../authMiddlewares/auth.middleware.js";
import { prisma } from "../lib/prisma.js";

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;
    const alerts = await prisma.alert.findMany({
      where: {
        pond: {
          farm: {
            ownerId: userId,
          },
        },
      },
      select: {
        id: true,
        title: true,
        message: true,
        severity: true,
        status: true,
        createdAt: true,
        resolvedAt: true,
        pond: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({ success: true, message: "Alerts retrieved successfully.", alerts })

  } catch (error) {
    console.error("Error retrieving alerts: ", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});


export default router;