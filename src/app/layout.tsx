import type { ReactNode } from "react";

import { Rubik } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/Layout/NavBar";

const rubik = Rubik({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body id="__qr" className={rubik.className}>
        <header>
          <NavBar />
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
