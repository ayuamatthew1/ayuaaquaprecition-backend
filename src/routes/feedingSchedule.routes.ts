import { Router, type Request, type Response } from "express";
import z from "zod";
import { requireAuth } from "../authMiddlewares/auth.middleware.js";
import { prisma } from "../lib/prisma.js";
import { createScheduleSchema, updateScheduleSchema } from "../validations/schedule.validations.js";

const feedingScheduleRouter = Router();

type FEED_TYPE = "STARTER" | "GROWER" | "FINISHER" | "FLOATING" | "SINKING" | "CUSTOM"


function formatFeedTime(hour: number, minute: number) {
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  return date;
}

// GET Handler - Fetch all schedules
feedingScheduleRouter.get("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;

    const schedules = await prisma.feedingSchedule.findMany({
      where: {
        pond: {
          farm: { ownerId: userId },
        },
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        pondId: true,
        feedType: true,
        quantity: true,
        unit: true,
        feedTime: true,
        repeatDays: true,
        isActive: true,
        pond: {
          select: {
            name: true,
            fishBatches: {
              orderBy: { stockedAt: "desc" },
              take: 1,
              select: { species: true },
            },
          },
        },
      },
    });

    const formattedData = schedules.map((schedule: any) => ({
      id: schedule.id,
      pondId: schedule.pondId,
      feedType: schedule.feedType,
      quantity: schedule.quantity,
      unit: schedule.unit,
      feedTime: schedule.feedTime.toISOString(),
      repeatDays: schedule.repeatDays,
      isActive: schedule.isActive,
      pondName: schedule.pond.name,
      species: schedule.pond.fishBatches[0]?.species ?? null,
    }));

    return res.status(200).json({ success: true, data: formattedData });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// POST Handler - Create a schedule
feedingScheduleRouter.post("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;

    const data = createScheduleSchema.parse(req.body);

    const pond = await prisma.pond.findFirst({
      where: { id: data.pondId, farm: { ownerId: userId } },
      select: { id: true, name: true },
    });

    if (!pond) {
      return res.status(404).json({ success: false, message: "Pond not found." });
    }

    const schedule = await prisma.feedingSchedule.create({
      data: {
        pondId: pond.id,
        feedType: data.feedType as FEED_TYPE,
        quantity: data.quantity,
        unit: data.unit,
        feedTime: formatFeedTime(data.hour, data.minute),
        repeatDays: data.repeatDays ?? ["DAILY"],
        isActive: true,
      },
      select: {
        id: true,
        pondId: true,
        feedType: true,
        quantity: true,
        unit: true,
        feedTime: true,
        repeatDays: true,
        isActive: true,
      },
    });

    return res.status(201).json({
      success: true,
      data: {
        ...schedule,
        feedTime: schedule.feedTime.toISOString(),
        pondName: pond.name,
        species: null,
      },
    });
  } catch (error) {
    const isValidationError = error instanceof z.ZodError;
    return res.status(isValidationError ? 400 : 500).json({
      success: false,
      message: isValidationError ? "Please enter valid schedule details." : "Unable to create feeding schedule.",
    });
  }
});

// PATCH Handler - Update status of a specific schedule
feedingScheduleRouter.patch("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;
    const scheduleId = req.params.id;
    
    if (!scheduleId) {
      return res.status(400).json({ success: false, message: "Schedule id is required." });
    }

    const data = updateScheduleSchema.parse(req.body);
    const existing = await prisma.feedingSchedule.findFirst({
      where: { id: scheduleId as string, pond: { farm: { ownerId: userId } } },
      select: { id: true },
    });

    if (!existing) {
      return res.status(404).json({ success: false, message: "Schedule not found." });
    }

    const updated = await prisma.feedingSchedule.update({
      where: { id: scheduleId as string },
      data: { isActive: data.isActive ?? true },
      select: { id: true, isActive: true },
    });

    return res.status(200).json({ success: true, data: updated });
  } catch (error) {
    const isValidationError = error instanceof z.ZodError;
    return res.status(isValidationError ? 400 : 500).json({
      success: false,
      message: isValidationError ? "Please enter valid updates." : "Unable to update feeding schedule.",
    });
  }
});

// DELETE Handler - Remove a specific schedule
feedingScheduleRouter.delete("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;

    const scheduleId = req.params.id;
    if (!scheduleId) {
      return res.status(400).json({ success: false, message: "Schedule id is required." });
    }

    const existing = await prisma.feedingSchedule.findFirst({
      where: { id: scheduleId as string, pond: { farm: { ownerId: userId } } },
      select: { id: true },
    });

    if (!existing) {
      return res.status(404).json({ success: false, message: "Schedule not found." });
    }

    await prisma.feedingSchedule.delete({ where: { id: scheduleId as string } });
    return res.status(200).json({ success: true, message: "Schedule deleted." });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Unable to delete feeding schedule." });
  }
});

// POST Handler - Log a completed event for a schedule (POST_COMPLETE replacement)
feedingScheduleRouter.post("/:id/complete", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;

    const scheduleId = req.params.id;
    if (!scheduleId) {
      return res.status(400).json({ success: false, message: "Schedule id is required." });
    }

    const schedule = await prisma.feedingSchedule.findFirst({
      where: { id: scheduleId as string, pond: { farm: { ownerId: userId } } },
      select: { id: true, quantity: true, unit: true, feedType: true },
    });

    if (!schedule) {
      return res.status(404).json({ success: false, message: "Schedule not found." });
    }

    const history = await prisma.feedHistory.create({
      data: {
        scheduleId: schedule.id,
        completedById: userId,
        quantity: schedule.quantity,
        fedAt: new Date(),
        notes: `${schedule.feedType} feed completed`,
      },
      select: { id: true, fedAt: true },
    });

    return res.status(201).json({ success: true, data: history });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Unable to complete schedule." });
  }
});

export default feedingScheduleRouter;
