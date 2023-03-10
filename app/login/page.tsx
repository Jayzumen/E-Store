"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  const handleLogin = (name: string) => {
    signIn(name);
  };

  return (
    <div className="flex text-2xl flex-col items-center justify-center min-h-[80vh] gap-8">
      <button
        className="flex items-center gap-2 px-4 py-2 transition-colors duration-200 border-2 rounded-lg fonts-semibold border-slate-700 hover:bg-slate-700"
        onClick={() => handleLogin("github")}
      >
        <FaGithub /> Login with Github
      </button>

      <p className="">or</p>

      <button
        className="flex items-center gap-2 px-4 py-2 transition-colors duration-200 border-2 rounded-lg fonts-semibold border-slate-700 hover:bg-slate-700"
        onClick={() => handleLogin("google")}
      >
        <FcGoogle /> Login with Google
      </button>
    </div>
  );
}
