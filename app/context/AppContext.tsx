/**
 * @title App Context
 * @fileoverview Context for the app
 * @path /app/context/AppContext.tsx
 */
"use client";

import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  selectedArticle: string;
  setSelectedArticle: (value: string) => void;
  selectedSource: "wikipedia" | "wikicrow";
  setSelectedSource: (value: "wikipedia" | "wikicrow") => void;
  showRequirements: boolean;
  setShowRequirements: (show: boolean) => void;
  isSidePanelOpen: boolean;
  setSidePanelOpen: (open: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [showRequirements, setShowRequirements] = useState(false);
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState("ABCC11");
  const [selectedSource, setSelectedSource] = useState<"wikipedia" | "wikicrow">("wikipedia");
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    showRequirements,
    setShowRequirements,
    isSidePanelOpen,
    setSidePanelOpen,
    selectedArticle,
    setSelectedArticle,
    selectedSource,
    setSelectedSource,
    isLoading,
    setIsLoading,
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