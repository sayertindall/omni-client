"use client";

import { Header } from "./Header";
import { useApp } from "@/app/context/AppContext";

export function HeaderWrapper() {
  const { 
    showRequirements, 
    setShowRequirements, 
    setSidePanelOpen,
    selectedArticle,
    setSelectedArticle,
    selectedSource,
    setSelectedSource
  } = useApp();


  const handleRequirementsClick = () => {
    setShowRequirements(!showRequirements);
    setSidePanelOpen(false);
  };

  const handleHomeClick = () => {
    setShowRequirements(false);
    setSidePanelOpen(false);
  };
  /*  onShowRequirements: () => void;
  showRequirements: boolean;
  onBackToArticle: () => void;
  setSidePanelOpen: (open: boolean) => void;
  onHomeClick: () => void;
  selectedArticle: string;
  setSelectedArticle: (value: string) => void;
  selectedSource: "wikipedia" | "wikicrow";
  setSelectedSource: (value: "wikipedia" | "wikicrow") => void;*/

  return (
    <Header 
      selectedArticle={selectedArticle}
      setSelectedArticle={setSelectedArticle}
      selectedSource={selectedSource}
      setSelectedSource={setSelectedSource}
      onShowRequirements={handleRequirementsClick}
      showRequirements={showRequirements}
      onBackToArticle={handleRequirementsClick}
      setSidePanelOpen={setSidePanelOpen}
      onHomeClick={handleHomeClick}
    />
  );
} 