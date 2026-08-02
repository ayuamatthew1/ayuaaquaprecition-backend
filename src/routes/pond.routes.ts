import { Router, type Request, type Response } from "express";
import { z } from "zod";
import { requireAuth } from "../authMiddlewares/auth.middleware.js";
import { prisma } from "../lib/prisma.js";
import { createDeviceSchema, createFishBatchSchema, createPondSchema, updatePondSchema } from "../validations/ponds.validations.js";

const router = Router();

// GET Handler - Fetch all ponds for the authenticated user
router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;

    const ponds = await prisma.pond.findMany({
      where: { farm: { ownerId: userId } },
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        name: true,
        type: true,
        capacity: true,
        waterVolume: true,
        device: { select: { id: true, name: true } },
        fishBatches: {
          where: { harvestedAt: null },
          orderBy: { stockedAt: "desc" },
          take: 1,
          select: { species: true, quantity: true },
        },
      },
    });

    return res.status(200).json({ success: true, data: { ponds } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// GET Handler - Fetch a single pond by ID
router.get("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const pondId = req.params.id;

    if (!pondId) {
      return res.status(400).json({ success: false, message: "Pond ID is required." });
    }

    const pond = await prisma.pond.findFirst({
      where: { id: pondId as string, farm: { ownerId: userId } },
      select: {
        id: true,
        name: true,
        type: true,
        capacity: true,
        waterVolume: true,
        code: true,
      },
    });

    if (!pond) {
      return res.status(404).json({ success: false, message: "Pond not found." });
    }

    return res.status(200).json({ success: true, data: pond });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// POST Handler - Create a new pond
router.post("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const data = createPondSchema.parse(req.body);

    const farm = await prisma.farm.findFirst({
      where: { ownerId: userId },
      orderBy: { createdAt: "asc" },
    });

    if (!farm) {
      return res.status(409).json({
        success: false,
        message: "Set up a farm before creating a pond.",
      });
    }

    const pond = await prisma.pond.create({
      data: {
        farmId: farm.id,
        name: data.name,
        type: data.type,
        capacity: data.capacity || null,
        waterVolume: data.waterVolume || null,
        code: `POND-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
      },
      select: { id: true, name: true, type: true, capacity: true },
    });

    return res.status(201).json({ success: true, data: pond });

  } catch (error) {
    const isValidationError = error instanceof z.ZodError;
    return res.status(isValidationError ? 400 : 500).json({
      success: false,
      message: isValidationError ? "Please enter valid pond details." : "Unable to create pond.",
    });
  }
});

// ADD FISH BATCH HANDLER
router.post('/:id/fish-batches', requireAuth, async (req: Request, res: Response) => {
  try {
    const pondId = req.params.id as string;

    if (!pondId) {
      return res.status(400).json({ success: false, message: "Pond ID is required." });
    }
    const existingFishBatch = await prisma.fishBatch.findFirst({
      where: { pondId, harvestedAt: null }
    });

    if (existingFishBatch) {
      return res.status(409).json({ success: false, message: "A fish batch already exists in this pond. Please harvest it before adding a new batch." });
    }

    const data = createFishBatchSchema.parse(req.body);

    const fishBatch = await prisma.fishBatch.create({
      data: {
        pondId,
        species: data.species,
        quantity: data.quantity,
        breed: data.breed || null,
        averageWeight: data.averageWeight || null,
        source: data.source || null,
        stockedAt: new Date(),
        expectedHarvestDate: new Date(new Date().setMonth(new Date().getMonth() + 4))
      },
      select: {
        id: true,
        species: true,
        quantity: true,
        stockedAt: true,
      },
    });

    return res.status(201).json({ success: true, data: fishBatch });

  } catch (error) {
    console.error("Error creating fish batch: ", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: "Please provide valid fish batch details." });
    }
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// ADD DEVICE HANDLER
router.post("/:id/device", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;
    const pondId = req.params.id as string;
    if (!pondId) {
      return res.status(400).json({ success: false, message: "Pond Id is required." });
    }

    const data = createDeviceSchema.parse(req.body);

    const pond = await prisma.pond.findFirst({
      where: { id: data.pondId, farm: { ownerId: userId } },
      select: { id: true },
    });

    if (!pond) {
      return res.status(404).json({ success: false, message: "Pond not found." });
    }

    const existingDevice = await prisma.device.findFirst({ where: { pondId } });

    if (existingDevice) {
      return res.status(409).json({ success: false, message: "This pond already has a device assigned." });
    }

    const device = await prisma.device.update({
      where: { id: data.deviceId },
      data: {
        pondId: pond.id,
        installedAt: new Date(),
        lastSeenAt: new Date()
      }
    });
    return res.status(200).json({ success: true, data: device });

  } catch (error) {
    console.error("Error adding device: ", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: "Please provide a valid device details" });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again"
    });
  }
})

// PATCH Handler - Update a specific pond
router.patch("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const pondId = req.params.id as string;
    const data = updatePondSchema.parse(req.body);

    // Verify ownership before applying edits
    const existingPond = await prisma.pond.findFirst({
      where: { id: pondId, farm: { ownerId: userId } },
    });

    if (!existingPond) {
      return res.status(404).json({ success: false, message: "Pond not found or unauthorized." });
    }

    const updatedPond = await prisma.pond.update({
      where: { id: pondId },
      data: {
        name: data.name ?? existingPond.name,
        type: data.type ?? existingPond.type,
        capacity: data.capacity ?? existingPond.capacity,
        waterVolume: data.waterVolume ?? existingPond.waterVolume,
      },
      select: { id: true, name: true, type: true, capacity: true, waterVolume: true },
    });

    return res.status(200).json({ success: true, data: updatedPond });
  } catch (error) {
    const isValidationError = error instanceof z.ZodError;
    return res.status(isValidationError ? 400 : 500).json({
      success: false,
      message: isValidationError ? "Invalid update parameters." : "Unable to update pond.",
    });
  }
});

// DELETE Handler - Remove a specific pond
router.delete("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const pondId = req.params.id as string;

    // Verify ownership before deleting
    const existingPond = await prisma.pond.findFirst({
      where: { id: pondId, farm: { ownerId: userId } },
    });

    if (!existingPond) {
      return res.status(404).json({ success: false, message: "Pond not found or unauthorized." });
    }

    await prisma.pond.delete({ where: { id: pondId } });

    return res.status(200).json({ success: true, message: "Pond successfully deleted." });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Unable to delete pond." });
  }
});

export default router;
