type Role = "Admin" | "Agen" | "Pengepul" | "Masyarakat";

type TypeRole = {
  id?: string;
  role: Role;
};

export type { TypeRole, Role };
