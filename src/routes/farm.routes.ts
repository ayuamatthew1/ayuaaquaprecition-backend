import { type Request, type Response, Router } from "express";
import { z } from "zod";
import { requireAuth } from "../authMiddlewares/auth.middleware.js";
import { prisma } from "../lib/prisma.js";
import { createFarmSchema } from "../validations/farms.validations.js";

const router = Router();

// GET Handler
router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {

    const userId = req.userId as string;

    const farms = await prisma.farm.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: "asc" },
      select: { id: true, name: true, city: true, state: true, country: true, status: true },
    });

    return res.status(200).json({ success: true, data: farms });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// POST Handler
router.post("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }

    // Express parses the JSON body into req.body automatically
    const data = createFarmSchema.parse(req.body);

    const farm = await prisma.farm.create({
      data: {
        ownerId: userId,
        name: data.name,
        description: data.description || null,
        address: data.address || null,
        city: data.city || null,
        state: data.state || null,
        country: data.country || null,
      },
      select: { id: true, name: true, city: true, state: true, country: true, status: true },
    });

    return res.status(201).json({ success: true, data: farm });

  } catch (error) {
    const isValidationError = error instanceof z.ZodError;
    return res.status(isValidationError ? 400 : 500).json({
      success: false,
      message: isValidationError ? "Please enter valid farm details." : "Unable to create farm.",
    });
  }
});

export default router;
