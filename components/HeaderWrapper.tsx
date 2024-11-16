"use client";

import { Header } from "./Header";
import { useApp } from "@/app/context/AppContext";

export function HeaderWrapper() {
  const { showRequirements, setShowRequirements, setSidePanelOpen } = useApp();

  const handleRequirementsClick = () => {
    setShowRequirements(!showRequirements);
    setSidePanelOpen(false);
  };

  const handleHomeClick = () => {
    setShowRequirements(false);
    setSidePanelOpen(false);
  };

  return (
    <Header 
      onShowRequirements={handleRequirementsClick}
      showRequirements={showRequirements}
      onBackToArticle={handleRequirementsClick}
      setSidePanelOpen={setSidePanelOpen}
      onHomeClick={handleHomeClick}
    />
  );
} 