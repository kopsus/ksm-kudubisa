import { TypeUser } from "@/api/users/type";
import UserAgenView from "@/components/dashboard/user/AgenView";
import { getUsers } from "@/lib/action/userAction";

export default async function UserAgenPage() {
  const response = await getUsers();

  let dataUsers = (response.success ? response.data : []) as TypeUser[];

  const filteredData = dataUsers.filter((item) => item.role === "Agen");

  return <UserAgenView dataUsers={filteredData} />;
}
