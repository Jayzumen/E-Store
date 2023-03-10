"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginButtons = () => {
  const handleLogin = (name: string) => {
    signIn(name);
  };
  return (
    <>
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
    </>
  );
};

export default LoginButtons;
