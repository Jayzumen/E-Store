"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { signOut } from "next-auth/react";
import Cart from "./Cart";
import { Session } from "next-auth";

const NavMenu = ({ session }: { session: Session | null }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(768);
  const userName = session?.user?.name;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (windowWidth > 768 && isNavOpen) {
      setIsNavOpen(false);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowWidth, isNavOpen]);

  return (
    <div className={`flex gap-4`}>
      {windowWidth < 768 && <Cart session={session} />}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="text-3xl z-[11] md:hidden"
      >
        {isNavOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`${
          isNavOpen
            ? "md:hidden fixed top-0 left-0 text-3xl z-10 flex pb-10 flex-col gap-4 bg-black h-full w-full justify-center items-center"
            : "md:flex md:gap-4 hidden text-xl"
        } `}
      >
        <Link
          className="transition duration-200 hover:underline hover:text-slate-300"
          href="/products"
          onClick={() => setIsNavOpen(false)}
        >
          Products
        </Link>

        <Link
          className="transition duration-200 hover:underline hover:text-slate-300"
          href="/about"
          onClick={() => setIsNavOpen(false)}
        >
          About
        </Link>
        {session ? (
          <div className="flex flex-col gap-4 md:flex-row">
            <span>{userName?.split(" ")[0]}</span>
            <button
              className="transition duration-200 hover:underline hover:text-slate-300"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            className="transition duration-200 hover:underline hover:text-slate-300"
            href="/login"
            onClick={() => setIsNavOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
      {windowWidth >= 768 && <Cart session={session} />}
    </div>
  );
};

export default NavMenu;
