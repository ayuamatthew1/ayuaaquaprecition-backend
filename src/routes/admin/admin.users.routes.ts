import { Router, type Request, type Response } from "express";
import { requireAuth } from "../../authMiddlewares/auth.middleware.js";
import { UserRole } from "../../generated/prisma/enums.js";
import { requireAdminRole } from "../../lib/admin.server.js";
import { prisma } from "../../lib/prisma.js";


const router = Router()
/**
 * GET /api/admin/users - List all users (SUPER_ADMIN) or users in admin's farms
 */
router.get("/", requireAuth, async (req: Request, res: Response) => {

  try {

    const userId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    requireAdminRole(user);

    const page = parseInt(req.query.page as string || "1");
    const limit = parseInt(req.query.limit as string || "10")
    const role = req.query.role as string;
    const status = req.query.status as string;

    const skip = (page - 1) * limit;

    const where: any = {};
    if (role && Object.values(UserRole).includes(role as UserRole)) {
      where.role = role;
    }
    if (status) {
      where.status = status;
    }

    // SUPER_ADMIN sees all, ADMIN sees only their farm owners
    if (user?.role === "ADMIN") {
      where.farms = { some: { ownerId: user.id } };
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          role: true,
          status: true,
          emailVerified: true,
          lastLoginAt: true,
          createdAt: true,
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.user.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error." });
  }
});

/**
 * PUT /api/admin/users/:id - Update user role/status
 */
router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  try {

    const superAdminId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: superAdminId } });
    requireAdminRole(user, [UserRole.SUPER_ADMIN]); // Only SUPER_ADMIN can modify users

    const userId = req.params.id as string;

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID required" });
    }

    const { role, status } = req.body;

    if (role && !Object.values(UserRole).includes(role)) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(role && { role }),
        ...(status && { status }),
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        status: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error" })
  }
});

/**
 * DELETE /api/admin/users/:id - Soft delete user
 */
router.delete("/:id", requireAuth, async (req: Request, res: Response) => {
  try {

    const superAdminId = req.userId as string;
    const user = await prisma.user.findUnique({ where: { id: superAdminId } });
    requireAdminRole(user, [UserRole.SUPER_ADMIN]); // Only SUPER_ADMIN can modify users

    const userId = req.params.id as string;

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID required" });
    }

    const deletedUser = await prisma.user.update({
      where: { id: userId },
      data: { deletedAt: new Date() },
      select: { id: true, email: true },
    });

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Server Error."
    })
  }
});

export default router;