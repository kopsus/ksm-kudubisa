import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const roleId = process.env.NEXT_PUBLIC_ROLE_MASYARAKAT;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const imageURL = process.env.NEXT_PUBLIC_IMAGE;

// cloudflare
const cloudflareURL = process.env.BASE_URL_CLOUDFLIRE;
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRETE_ACCESS_KEY;

export {
  prisma,
  baseURL,
  roleId,
  imageURL,
  cloudflareURL,
  accessKeyId,
  secretAccessKey,
};
