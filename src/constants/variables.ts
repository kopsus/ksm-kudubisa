import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const roleId = process.env.NEXT_PUBLIC_ROLE_MASYARAKAT;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const imageURL = process.env.NEXT_PUBLIC_IMAGE;

export { prisma, baseURL, roleId, imageURL };
