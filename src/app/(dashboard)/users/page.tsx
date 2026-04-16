import UserView from "@/components/dashboard/user/UserView";
import { getUsers } from "@/lib/action/userAction";
import { TypeUser } from "@/types/user";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const roleFilter = resolvedParams.role;

  const response = await getUsers(roleFilter);

  const dataUsers = (response.success ? response.data : []) as TypeUser[];

  return <UserView dataUsers={dataUsers} />;
}
