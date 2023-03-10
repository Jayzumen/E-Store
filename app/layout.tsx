import Navbar from "./components/Navbar";
import Provider from "./components/Provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import "./globals.css";

export const metadata = {
  title: "E-Store",
  description: "This is E-Store an e-commerce website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="text-white bg-black">
        <Provider>
          <Navbar session={session} />
          <main className="h-[calc(100vh-80px)] px-10">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
