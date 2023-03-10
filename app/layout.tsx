import Navbar from "./components/Navbar";
import Provider from "./components/Provider";
import "./globals.css";

export const metadata = {
  title: "E-Store",
  description: "This is E-Store an e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white bg-black">
        <Provider>
          <Navbar />
          <main className="h-[calc(100vh-80px)] px-10">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
