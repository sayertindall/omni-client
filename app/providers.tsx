/**
 * @title App Providers
 * @fileoverview Context providers for the application
 * @path /app/providers.tsx
 */

"use client";

import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
} 