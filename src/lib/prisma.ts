import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { withAccelerate } from "@prisma/extension-accelerate";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Connection string is not found.");
}

const prisma = new PrismaClient({
  accelerateUrl: connectionString,
}).$extends(withAccelerate());

export { prisma };




// import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma/client.js";

// const connectionString = process.env.DATABASE_URL;

// if (!connectionString) {
//   throw new Error("Connection string is not found.")
// }

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

// export { prisma };