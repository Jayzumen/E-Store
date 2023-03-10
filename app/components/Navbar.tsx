import { Session } from "next-auth";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Navbar = ({ session }: { session: Session | null }) => {
  return (
    <nav className="sticky top-0 flex items-center justify-between h-20 px-10 text-xl bg-black">
      <Link
        className="transition duration-200 hover:underline hover:text-slate-300"
        href="/"
      >
        E-Store
      </Link>
      <NavMenu session={session} />
    </nav>
  );
};

export default Navbar;
