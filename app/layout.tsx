import { Navbar } from "@/components";
import "./globals.css";
export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="flex flex-col items-center p-24">{children}</main>
      </body>
    </html>
  );
}
