export type WaterQualityAlert = {
  title: string;
  message: string;
  severity: "INFO" | "WARNING" | "HIGH" | "CRITICAL";
}
