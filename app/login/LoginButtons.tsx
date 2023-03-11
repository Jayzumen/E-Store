"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginButtons = () => {
  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 transition-colors duration-200 border-2 rounded-lg fonts-semibold border-slate-700 hover:bg-slate-700"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        <FaGithub /> Login with Github
      </button>

      <button
        className="flex items-center gap-2 px-4 py-2 transition-colors duration-200 border-2 rounded-lg fonts-semibold border-slate-700 hover:bg-slate-700"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <FcGoogle /> Login with Google
      </button>
    </>
  );
};

export default LoginButtons;
