import type { NextFunction, Request, Response } from "express";
import { getAuthenticatedUserId } from "../lib/auth.server.js";

declare global {
  namespace Express {
    interface Request {
      userId?: string; // This allows req.userId down the line
    }
  }
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    // Note: Make sure getAuthenticatedUserId can accept an Express Request object
    const userId = await getAuthenticatedUserId(req);

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }

    // Attach the ID to the request object so subsequent routes can read it
    req.userId = userId;

    // Move to the next function (your actual route logic)
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized wrapper error." });
  }
}
