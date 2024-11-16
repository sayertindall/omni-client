/**
 * @title App Providers
 * @fileoverview Context providers for the application
 * @path /app/providers.tsx
 */

"use client";

import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  showRequirements: boolean;
  setShowRequirements: (show: boolean) => void;
  setSidePanelOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [showRequirements, setShowRequirements] = useState(false);
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const value = {
    showRequirements,
    setShowRequirements,
    setSidePanelOpen,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 