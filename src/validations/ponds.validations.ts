import z from "zod";

export const createPondSchema = z.object({
  name: z.string().trim().min(2, "Pond name must be at least 2 characters.").max(80),
  type: z.enum(["EARTHEN", "CONCRETE", "TARPAULIN", "FIBER", "PLASTIC"]),
  capacity: z.number().positive().optional(),
  waterVolume: z.number().positive().optional(),
});

export const updatePondSchema = z.object({
  name: z.string().trim().min(2, "Pond name must be at least 2 characters.").max(80).optional(),
  type: z.enum(["EARTHEN", "CONCRETE", "TARPAULIN", "FIBER", "PLASTIC"]).optional(),
  capacity: z.number().positive().optional(),
  waterVolume: z.number().positive().optional(),
});

export const createFishBatchSchema = z.object({
  pondId: z.string().min(5, "PondId is required"),
  species: z.string().trim().min(2, "Species is required.").max(80),
  quantity: z.number().int().positive("Quantity must be a positive whole number."),
  breed: z.string().trim().max(80).optional(),
  averageWeight: z.number().positive().optional(),
  source: z.string().trim().max(80).optional(),
});

export const createDeviceSchema = z.object({
  pondId: z.string().trim().min(2, "Pond ID is required."),
  deviceId: z.string().trim().min(2, "Device ID is required."),
});