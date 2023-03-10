import { getServerSession } from "next-auth";
import LoginButtons from "./LoginButtons";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex text-2xl flex-col items-center justify-center min-h-[80vh] gap-8">
      <LoginButtons />
    </div>
  );
}
