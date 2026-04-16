import TransaksiPengepulView from "@/components/dashboard/transaksi/TransaksiPengepulView";
import { getTransactions } from "@/lib/action/transactionAction";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function TransaksiPengepulPage() {
  const res = await getTransactions();
  const dataTransactions = res.success ? (res.data as any[]) : [];

  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  let userRole = "";

  if (token) {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      userRole = decoded.role;
    } catch (err) {}
  }

  return (
    <TransaksiPengepulView
      dataTransactions={dataTransactions}
      userRole={userRole}
    />
  );
}
