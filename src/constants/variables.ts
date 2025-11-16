import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const baseURLAPI = process.env.NEXT_PUBLIC_BASE_URL_API;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export { prisma, baseURLAPI, baseURL };
