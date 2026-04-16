import ProfileView from "@/components/profile/ProfileView";
import { getTransactions } from "@/lib/action/transactionAction";
import { getProfile } from "@/lib/action/userAction";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const [profileRes, transRes] = await Promise.all([
    getProfile(),
    getTransactions(),
  ]);

  // Jika profile tidak sukses (misal token expired/kosong), lempar ke login
  if (!profileRes.success) {
    redirect("/login"); // Sesuaikan URL login kamu
  }

  const profileData = profileRes.data;
  const transactionsData = transRes.success ? (transRes.data as any[]) : [];

  return (
    <ProfileView
      profileData={profileData}
      transactionsData={transactionsData}
    />
  );
}
