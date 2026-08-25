import { Router, type Request, type Response } from "express";
import { requireAuth } from "../authMiddlewares/auth.middleware.js";
import { prisma } from "../lib/prisma.js";
import { predictWaterQuality } from "../utils/waterQualityPrediction.js";

const router = Router();

type SensorDataType = {
  pondId: string,
  deviceId: string,
  temperature: number,
  ph: number,
  dissolvedOxygen: number,
  turbidity: number,
  ammonia: number,
}

router.post('/', requireAuth, async (req: Request, res: Response) => {

  try {
    const userId = req.userId as string;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized." })
    }

    const sensorData: SensorDataType = await req.body;
    const device = await prisma.device.findUnique({ where: { id: sensorData.deviceId } });
    if (!device) {
      return res.status(404).json({ success: false, message: "Device NOT found." });
    }

    const readings = await prisma.sensorReading.findFirst({
      where: { deviceId: sensorData.deviceId },
      orderBy: { recordedAt: "desc" },
      take: 1
    })
    if (readings) {
      const lastReadingDate = new Date(readings.recordedAt).getTime()
      const currentTime = Date.now()
      const twoHours = 2 * 60 * 60 * 1000
      const elapseTime = currentTime - lastReadingDate

      if (elapseTime < twoHours) {
        const remainingMs = twoHours - elapseTime

        const hours = Math.floor(remainingMs / (1000 * 60 * 60))
        const minutes = Math.ceil((remainingMs % (1000 * 60 * 60)) / (1000 * 60))

        let timeString = ""
        if (hours > 0) {
          timeString += `${hours} hour${hours > 1 ? 's' : ''} and `
        }
        timeString += `${minutes} minute${minutes !== 1 ? 's' : ''}`

        return res.status(429).json(
          { success: false, message: `All parameters are within range, try again in ${timeString}.` },
        )
      }
    }


    const alerts = predictWaterQuality({
      temperature: sensorData.temperature,
      dissolvedOxygen: sensorData.dissolvedOxygen,
      ph: sensorData.ph,
      turbidity: sensorData.turbidity,
      ammonia: sensorData.ammonia,
    });
    await prisma.$transaction(async (p) => {
      const sensorReading = await p.sensorReading.create({
        data: {
          deviceId: sensorData.deviceId,
          temperature: sensorData.temperature,
          dissolvedOxygen: sensorData.dissolvedOxygen,
          ph: sensorData.ph,
          turbidity: sensorData.turbidity,
          ammonia: sensorData.ammonia ?? null,
        }
      });
      if (alerts) {

        await p.alert.createMany({
          data: alerts.map(alert => ({
            sensorReadingId: sensorReading.id,
            pondId: sensorData.pondId,
            title: alert.title,
            message: alert.message,
            severity: alert.severity,
          })),
          skipDuplicates: true
        })
      }
    })

    return res.status(200).json({ success: true, message: "Reading created successfully." });

  } catch (error) {
    console.error("Error Simulating Reading: ", error)
    return res.status(500).json({
      success: false,
      messages: error instanceof Error ? error.message : "Failed to record reading."
    })
  }
});

export default router;