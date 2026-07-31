export type DashboardPond = {
  id: string;
  name: string;
  device: {
    id: string;
    sensorReadings: Array<{
      id: string;
      temperature: number;
      ph: number;
      dissolvedOxygen: number;
      turbidity: number;
      ammonia: number | null;
      recordedAt: Date;
    }>;
  } | null;
};