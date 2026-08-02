import z from "zod";

export const createScheduleSchema = z.object({
  pondId: z.string().trim().min(1, "Select a pond."),
  feedType: z.string().trim().min(1, "Feed type is required."),
  quantity: z.number().positive("Quantity must be greater than zero"),
  unit: z.string().trim().min(1, "Unit is required."),
  hour: z.number().int().min(0).max(23),
  minute: z.number().int().min(0).max(59),
  repeatDays: z.array(z.string()).optional(),
});

export const updateScheduleSchema = z.object({
  isActive: z.boolean().optional(),
});