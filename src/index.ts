import cors from "cors";
import express, { type Express, type NextFunction, type Request, type Response } from 'express';
import { requireAuth } from "./authMiddlewares/auth.middleware.js";
import {
  hashPassword,
  signAccessToken,
  toAuthUser,
  verifyPassword
} from "./lib/auth.server.js";
import { prisma } from "./lib/prisma.js";
import adminDeviceRouter from "./routes/admin/admin.devices.routes.js";
import adminFarmRouter from "./routes/admin/admin.farms.routes.js";
import adminSubscriptionRouter from "./routes/admin/admin.subscriptions.routes.js";
import adminUserRouter from "./routes/admin/admin.users.routes.js";
import adminRouter from "./routes/admin/adminAlert+dashboard.routes.js";
import deviceRouter from "./routes/devices.routes.js";
import farmRouter from "./routes/farm.routes.js";
import feedingScheduleRouter from "./routes/feedingSchedule.routes.js";
import pondRouter from "./routes/pond.routes.js";
import { loginSchema, registerSchema } from "./validations/auth.validations.js";


const app: Express = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS ROUTES
app.use("/api/farms", farmRouter);
app.use("/api/feeding-schedules", feedingScheduleRouter);
app.use("/api/ponds", pondRouter);
app.use("/api/devices", deviceRouter);
app.use("/api/admin", adminRouter);
app.use("/api/admin/devices", adminDeviceRouter);
app.use("/api/admin/farms", adminFarmRouter);
app.use("/api/admin/users", adminUserRouter);
app.use("/api/admin/subscriptions", adminSubscriptionRouter);


// LOGIN ROUTE
app.post("/api/login", async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body);

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: data.identifier }, { phone: data.identifier }],
      },
    });

    if (!user || user.status !== "ACTIVE") {
      return res.status(401).json({
        success: false,
        message: "Invalid email, phone number, or password.",
      });
    }

    const isMatch = await verifyPassword(data.password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email, phone number, or password.",
      });
    }

    const accessToken = await signAccessToken(user);
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: { user: toAuthUser(user), accessToken },
    });
  } catch (error) {
    console.error("Login error:", error);
    const status = error instanceof Error ? error.name === "ZodError" ? 400 : 500 : 500;
    return res.status(status).json({
      success: false,
      message: status === 400 ? "Invalid login details." : "Unable to sign in.",
    });
  }
});

// REGISTER ROUTE
app.post("/api/register", async (req: Request, res: Response) => {
  try {
    const data = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { phone: data.phone },
        ]
      }
    });

    if (existingUser) {
      return res.status(409).json(
        {
          success: false,
          message: "User already exists."
        },
      );
    }

    const passwordHash = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        passwordHash
      }
    });
    const accessToken = await signAccessToken(user);

    return res.status(201).json(
      {
        success: true,
        message: "Account created successfully.",
        data: { user: toAuthUser(user), accessToken },
      },
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    if (error.name === "ZodError") {
      return res.status(400).json(
        {
          success: false,
          errors: error.flatten(),
        },
      );
    }

    return res.status(500).json(
      {
        success: false,
        message: error.message ?? "Internal server error.",
      },
    );
  }
});

// AUTH VERIFICATION API
app.get("/api/me", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || user.status !== "ACTIVE") {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }

    return res.status(200).json({ success: true, data: toAuthUser(user) });
  } catch (error) {
    console.error("Error retrieving user: ", error)
  }
});

// DASHBOARD API
app.get("/api/dashboard", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.userId!;

    const ponds = await prisma.pond.findMany({
      where: { farm: { ownerId: userId } },
      select: {
        id: true,
        name: true,
        device: {
          select: {
            id: true,
            sensorReadings: {
              orderBy: { recordedAt: "desc" },
              take: 1,
              select: {
                id: true,
                temperature: true,
                ph: true,
                dissolvedOxygen: true,
                turbidity: true,
                ammonia: true,
                recordedAt: true,
              },
            },
          },
        },
      },
    });
    return res.status(200).json({ success: true, data: ponds });

  } catch (error) {
    console.error("Dashboard data error:", error);
    return res.status(500).json(
      { success: false, message: "Unable to load dashboard data." },
    );
  }
});

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, message: "Route not found Or yet to be implemented." });
});

app.listen(PORT, () =>
  console.log(`🚀 Backend running smoothly on port ${PORT}`),
);
