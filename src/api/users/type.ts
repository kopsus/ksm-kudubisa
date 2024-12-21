type TypeRole = {
  id?: string;
  role_name: "MASYARAKAT" | "PENGEPUL" | "AGEN" | "ADMIN";
};

type TypeUser = {
  id: string;
  username: string;
  nama_lengkap: string;
  no_tlp: string;
  rt: string;
  rw: string;
  role: TypeRole;
};

export type { TypeUser };
