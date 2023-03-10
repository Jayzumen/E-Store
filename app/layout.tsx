import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "E-Store",
  description: "This is E-Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white bg-black">
        <Navbar />
        <main className="h-[calc(100vh-80px)] px-10">{children}</main>
      </body>
    </html>
  );
}
