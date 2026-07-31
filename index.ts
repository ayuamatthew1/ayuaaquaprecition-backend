import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import { prisma } from "./src/lib/prisma.js";
import { loginSchema, registerSchema } from "./src/validations/auth.validations.js";
import {
  verifyPassword,
  signAccessToken,
  toAuthUser,
  hashPassword,
} from "./src/lib/auth.server.js"

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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
})


app.listen(PORT, () =>
  console.log(`🚀 Backend running smoothly on port ${PORT}`),
);
