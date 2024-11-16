/**
 * @title Layout
 * @fileoverview Root layout component that sets up fonts and provides the base HTML structure
 * @path app/layout.tsx
 */

import { AppProvider } from "./context/AppContext";
import { HeaderWrapper } from "@/components/HeaderWrapper";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>
            <HeaderWrapper />
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
