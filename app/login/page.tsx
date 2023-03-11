import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import LoginButtons from "./LoginButtons";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex text-2xl flex-col items-center justify-center min-h-[80vh] gap-8">
      <LoginForm />
      <div className="w-full md:w-[50%] px-10 border-2 border-slate-800"></div>
      <LoginButtons />
    </div>
  );
}
