import { Router, type Request, type Response } from "express";
import { requireAuth } from "../authMiddlewares/auth.middleware.js";
import { prisma } from "../lib/prisma.js";
import z from "zod";

const purchaseDeviceSchema = z.object({
  deviceId: z.string().cuid(),
});

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;
    const devices = await prisma.device.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: "asc" },
      select: { id: true, name: true, status: true },
    });
    return res.status(200).json({
      success: true,
      message: devices.length
        ? "Devices retrieved successfully."
        : "No unassigned devices found.",
      data: {
        devices,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});

router.post("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;

    const data = purchaseDeviceSchema.parse(req.body);

    const purchase = await prisma.$transaction(async (tx) => {
      const device = await tx.device.findUnique({
        where: { id: data.deviceId },
        select: {
          id: true,
          isListed: true,
          ownerId: true,
          listedPrice: true,
        },
      });

      if (!device) {
        throw new Error("Device not found.");
      }

      if (!device.isListed || device.ownerId) {
        throw new Error("Device is not available for purchase.");
      }

      const purchase = await tx.purchase.create({
        data: {
          buyerId: userId,
          deviceId: data.deviceId,
          price: device.listedPrice ?? 0,
          status: "COMPLETED",
        },
        select: {
          id: true,
          deviceId: true,
          price: true,
          status: true,
          createdAt: true,
        },
      });

      await tx.device.update({
        where: { id: data.deviceId },
        data: {
          ownerId: userId,
          isListed: false,
          listedPrice: null,
        },
      });

      return purchase;
    });

    return res.status(201).json({ success: true, data: purchase });
  } catch (error) {
    console.error("Device purchase POST error:", error);
    const isValidationError = error instanceof z.ZodError;
    const message = isValidationError
      ? "Invalid purchase request."
      : error instanceof Error
        ? error.message
        : "Server error";

    const status = isValidationError ? 400 : error instanceof Error && error.message === "Device not found." ? 404 : 409;

    return res.status(status).json({ success: false, message });
  }
});

export default router;

import { Router, type Request, type Response } from "express";
import z from "zod";
import { requireAuth } from "../authMiddlewares/auth.middleware.js";
import { prisma } from "../lib/prisma.js";

const purchaseDeviceSchema = z.object({
  deviceId: z.string().cuid(),
});

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;
    const devices = await prisma.device.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: "asc" },
      select: { id: true, name: true, status: true },
    });
    return res.status(200).json({
      success: true,
      message: devices.length
        ? "Devices retrieved successfully."
        : "No unassigned devices found.",
      data: {
        devices,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});

router.get("/listings", async (_req: Request, res: Response) => {
  try {
    const devices = await prisma.device.findMany({
      where: { isListed: true, ownerId: null },
      select: {
        id: true,
        name: true,
        serialNumber: true,
        firmwareVersion: true,
        listedPrice: true,
        status: true,
        notes: true,
      }
    });
    console.log("Available Devices: ", devices);
    return res.status(200).json({ success: true, data: devices });
  } catch (error) {
    console.error("Error retrieving devices: ", error);
    return res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server error." })
  }
});

router.post("/purchase", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId as string;

    const data = purchaseDeviceSchema.parse(req.body);

    const device = await prisma.device.findUnique({
      where: { id: data.deviceId },
      select: {
        id: true,
        isListed: true,
        ownerId: true,
        listedPrice: true,
      },
    });

    if (!device) {
      throw new Error("Device not found.");
    }

    if (!device.isListed || device.ownerId) {
      throw new Error("Device is not available for purchase.");
    }


    const purchase = await prisma.$transaction(async (tx) => {

      const purchase = await tx.purchase.create({
        data: {
          buyerId: userId,
          deviceId: data.deviceId,
          price: device.listedPrice ?? 0,
          status: "COMPLETED",
        },
        select: {
          id: true,
          deviceId: true,
          price: true,
          status: true,
          createdAt: true,
        },
      });

      await tx.device.update({
        where: { id: data.deviceId },
        data: {
          ownerId: userId,
          isListed: false,
          listedPrice: null,
        },
      });

      return purchase;
    });

    return res.status(201).json({ success: true, data: purchase });
  } catch (error) {
    console.error("Device purchase POST error:", error);
    const isValidationError = error instanceof z.ZodError;
    const message = isValidationError
      ? "Invalid purchase request."
      : error instanceof Error
        ? error.message
        : "Server error";

    const status = isValidationError ? 400 : error instanceof Error && error.message === "Device not found." ? 404 : 409;

    return res.status(status).json({ success: false, message });
  }
});

export default router;
