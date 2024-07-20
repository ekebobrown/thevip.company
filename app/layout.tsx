import type { Metadata } from "next";
import { Josefin_Sans, Ubuntu, Lexend, Poppins } from "next/font/google";
import "./globals.css";
import styles from '@/app/page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const default_font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
    title: "The Visual Identity Partners (VIP) Company",
    description: "Stand Out!"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${default_font.className}`}>
        {children}
      </body>
    </html>
  );
}
