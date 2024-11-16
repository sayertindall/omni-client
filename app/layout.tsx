/**
 * @title Layout
 * @fileoverview Root layout component that sets up fonts and provides the base HTML structure
 * @path app/layout.tsx
 */

import { HeaderWrapper } from "@/components/HeaderWrapper";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Omnipedia",
  description: "Document analysis and compliance evaluation tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderWrapper />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
