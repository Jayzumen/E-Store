"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <>
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="transition duration-200 hover:underline hover:text-slate-300"
      >
        <AiOutlineShoppingCart size={25} />
      </button>

      {isCartOpen && (
        <div className="fixed top-0 left-0 z-[22] w-full h-full overflow-auto bg-black/40">
          <div className="fixed z-40 top-0 right-0 w-full md:w-[50%] xl:w-[40%] bg-slate-800 h-full">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute z-50 transition duration-200 top-5 right-8 hover:text-slate-200 hover:scale-105"
            >
              <AiOutlineClose size={25} />
            </button>
            <div className="flex flex-col items-center h-full gap-4 px-8 pt-16 pb-10">
              {status === "authenticated" ? (
                <p className="text-xl">
                  {session?.user?.name?.split(" ")[0]}&apos;s Cart
                </p>
              ) : (
                <p>
                  You need to login to access the cart.{" "}
                  <Link
                    className="underline text-sky-500 hover:text-sky-400"
                    href="/login"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Login
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
