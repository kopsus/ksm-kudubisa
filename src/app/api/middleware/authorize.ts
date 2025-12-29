import { ResponseHandler } from "@/lib/responseHandler";

type Role = "Admin" | "Agen" | "Pengepul" | "Masyarakat";

export interface DecodedToken {
  id?: string;
  role?: Role;
  rt?: string | null;
  username?: string;
}

export function requireRole(
  decoded: DecodedToken,
  allowed: Role[]
): Response | null {
  const userRole = decoded.role as Role | undefined;
  if (!userRole) return ResponseHandler.unauthorized("Token tidak valid.");
  if (!allowed.includes(userRole)) return ResponseHandler.forbidden();
  return null;
}

export function requireOwnershipOrAdmin(
  decoded: DecodedToken,
  ownerId: string
): Response | null {
  if (!decoded.id) return ResponseHandler.unauthorized();
  if (decoded.role === "Admin" || decoded.id === ownerId) return null;
  return ResponseHandler.forbidden();
}

export function allowTransactionAccess(
  decoded: DecodedToken,
  opts: {
    ownerId: string;
    ownerRt?: string | null;
    updatedByRoleAgen?: string | null;
  }
): Response | null {
  const role = decoded.role as Role | undefined;
  if (!role) return ResponseHandler.unauthorized();

  // Admin can access all
  if (role === "Admin") return null;

  // Masyarakat can only access own
  if (role === "Masyarakat") {
    return decoded.id === opts.ownerId ? null : ResponseHandler.forbidden();
  }

  // Agen can access transactions of users in same RT
  if (role === "Agen") {
    if (!decoded.rt) return ResponseHandler.forbidden();
    return decoded.rt === opts.ownerRt ? null : ResponseHandler.forbidden();
  }

  // Pengepul can access transactions that were updated by Agen
  if (role === "Pengepul") {
    return opts.updatedByRoleAgen ? null : ResponseHandler.forbidden();
  }

  return ResponseHandler.forbidden();
}

