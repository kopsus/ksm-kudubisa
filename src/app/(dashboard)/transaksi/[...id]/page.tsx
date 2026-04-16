import TransactionDetailView from "@/components/dashboard/transaksi/detailTransaksi/TransactionDetailView";
import { getTransactionById } from "@/lib/action/transactionAction";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function TransaksiDetailPage({ params }: any) {
  const { id } = await params;

  // 1. Ambil data Transaksi by ID
  const res = await getTransactionById(id);
  const detailTransaction = res.success ? res.data : null;

  // 2. Ambil Role dari JWT
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  let userRole = "";

  if (token) {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      userRole = decoded.role;
    } catch (err) {}
  }

  if (!detailTransaction) {
    return <div className="p-10 text-center">Transaksi tidak ditemukan.</div>;
  }

  // 3. Lempar ke Client Component
  return (
    <TransactionDetailView
      initialData={detailTransaction}
      userRole={userRole}
    />
  );
}
