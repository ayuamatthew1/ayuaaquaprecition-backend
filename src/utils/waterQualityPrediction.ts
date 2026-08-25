import type { WaterQualityAlert } from "../types/waterQualityAlerts.js";


type WaterQualityReading = {
  temperature: number;
  dissolvedOxygen: number;
  ph: number;
  turbidity: number;
  ammonia: number | null;
};

export function predictWaterQuality(
  data: WaterQualityReading
): WaterQualityAlert[] {
  const alerts: WaterQualityAlert[] = [];

  if (data.temperature > 30) {
    alerts.push({
      title: "High Water Temperature",
      message:
        "Increase aeration and reduce sunlight exposure.",
      severity: "WARNING",
    });
  }

  if (data.ph < 6.5 || data.ph > 8.5) {
    alerts.push({
      title: "Unsafe pH Level",
      message:
        "Gradually adjust pH using approved buffers.",
      severity: "HIGH",
    });
  }

  if (data.dissolvedOxygen < 5) {
    alerts.push({
      title: "Low Dissolved Oxygen",
      message:
        "Activate aerators immediately.",
      severity: "HIGH",
    });
  }

  if (data.ammonia !== null && data.ammonia > 0.02) {
    alerts.push({
      title: "High Ammonia",
      message:
        "Perform water exchange and reduce feeding.",
      severity: "HIGH",
    });
  }

  if (data.turbidity > 25) {
    alerts.push({
      title: "High Turbidity",
      message:
        "Inspect filters and remove waste buildup.",
      severity: "WARNING",
    });
  }

  return alerts;
}
