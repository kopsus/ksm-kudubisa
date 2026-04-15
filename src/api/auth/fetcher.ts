import axios from "axios";

const mutationAuth = async ({ body, params }: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/${params}`,
    body,
  );
  return res.data;
};

const fetchLogout = async () => {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,
  );
  return res.data;
};

export { mutationAuth, fetchLogout };
