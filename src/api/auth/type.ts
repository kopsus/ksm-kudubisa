type TypeLogin = {
  username: string;
  password: string;
};

type TypeRegister = {
  roleId: string;
  username: string;
  namaLengkap: string;
  noTlp: string;
  rt: string;
  rw: string;
  password: string;
};

export type { TypeLogin, TypeRegister };
