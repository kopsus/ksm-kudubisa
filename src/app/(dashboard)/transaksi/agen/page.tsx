import TransaksiMasyarakatView from "@/components/dashboard/transaksi/TransaksiMasyarakatView";
import { getTransactions } from "@/lib/action/transactionAction";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function TransaksiMasyarakatPage() {
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
    <TransaksiMasyarakatView
      dataTransactions={dataTransactions}
      userRole={userRole}
    />
  );
}
