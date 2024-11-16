"use client";

import { Header } from "./Header";
import { useApp } from "@/app/providers";

export function HeaderWrapper() {
  const { showRequirements, setShowRequirements, setSidePanelOpen } = useApp();

  const handleRequirementsClick = () => {
    if (showRequirements) {
      // If we're showing requirements, go back to article
      setShowRequirements(false);
    } else {
      // If we're showing article, go to requirements
      setShowRequirements(true);
      setSidePanelOpen(false);
    }
  };

  return (
    <Header 
      onShowRequirements={handleRequirementsClick}
      showRequirements={showRequirements}
      onBackToArticle={handleRequirementsClick}
      setSidePanelOpen={setSidePanelOpen}
    />
  );
} 