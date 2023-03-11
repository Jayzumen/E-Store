"use client";

import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });

      await response.json();

      login();
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password, login]);

  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-4xl font-semibold text-center">
        {variant === "login" ? "Sign in" : "Create Account"}
      </h1>
      <div className="flex flex-col gap-2 my-4 md:min-w-[400px] max-w-[450px] mx-auto min-w-[70%]">
        {variant === "register" && (
          <>
            <label className="text-lg text-slate-400" htmlFor="name">
              Username
            </label>
            <input
              className="p-2 text-lg rounded-md outline-none text-slate-900"
              type="text"
              id="name"
              placeholder="Username..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}
        <label className="text-lg text-slate-400" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 text-lg rounded-md outline-none text-slate-900"
          type="email"
          id="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-lg text-slate-400" htmlFor="password">
          Password
        </label>
        <input
          className="p-2 text-lg rounded-md outline-none text-slate-900"
          type="password"
          id="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={variant === "login" ? login : register}
          className="px-4 w-[80%] md:w-[60%] mx-auto py-2 mt-4 transition-colors duration-200 rounded-md bg-slate-700 hover:bg-slate-600"
        >
          {variant === "login" ? "Login" : "Sign up"}
        </button>
      </div>

      <div className="flex gap-2 mx-auto">
        <p>{variant === "login" ? "New here?" : "Already have an account?"}</p>
        <button
          className="underline transition-colors text-sky-500 hover:text-sky-400"
          onClick={toggleVariant}
        >
          {variant === "login" ? "Create an account" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
