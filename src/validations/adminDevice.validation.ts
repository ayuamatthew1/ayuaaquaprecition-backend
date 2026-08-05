import z from "zod";
export const createDeviceSchema = z.object({
  name: z.string().trim().min(2),
  serialNumber: z.string().trim().min(2),
  firmwareVersion: z.string().trim().optional(),
  hardwareVersion: z.string().trim().optional(),
  macAddress: z.string().trim().optional(),
  listedPrice: z.number().positive().optional(),
  isListed: z.boolean().optional(),
  pondId: z.string().cuid().optional(),
});