import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const roleId = process.env.NEXT_PUBLIC_ROLE_MASYARAKAT;

export { prisma, baseURL, roleId };
