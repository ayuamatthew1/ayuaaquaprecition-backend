import { z } from "zod";

export const createFarmSchema = z.object({
  name: z.string().trim().min(2, "Farm name must be at least 2 characters.").max(100),
  description: z.string().trim().max(500).optional(),
  address: z.string().trim().max(200).optional(),
  city: z.string().trim().max(100).optional(),
  state: z.string().trim().max(100).optional(),
  country: z.string().trim().max(100).optional(),
});

