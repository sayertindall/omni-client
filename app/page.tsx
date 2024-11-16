/**
 * @title Page
 * @fileoverview Main page component that handles article viewing, requirements, and evaluation data
 * @path /app/page.tsx
 */

"use client";

import { useState } from "react";
import { MainContent } from "@/components/MainContent";
import { SidePanel } from "@/components/SidePanel";
import { RequirementViewer } from "@/components/ReqsView";
import useSWR from "swr";
import { EvaluationData } from "@/lib/eval";
import { Header } from "@/components/Header";

export default function Page() {
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<
    "section" | "sentence" | "article" | null
  >(null);
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [highlightEnabled, setHighlightEnabled] = useState(true);
  const [showRequirements, setShowRequirements] = useState(false);
  const [focusedRequirement, setFocusedRequirement] = useState<string>();
  const [selectedEvaluation, setSelectedEvaluation] = useState<{
    type: "section" | "sentence" | "article" | null;
    data: EvaluationData | null;
    sectionIndex?: number;
    sentenceIndex?: number;
  }>({ type: null, data: null });

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/data", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const handleElementClick = (
    text: string,
    type: "section" | "sentence",
    sectionIdx: number,
    sentenceIdx?: number
  ) => {
    if (!data || !data.evaluation) return;

    const sectionDataIndex = sectionIdx + 1;
    const sentenceDataIndex = sentenceIdx !== undefined ? sentenceIdx + 1 : undefined;

    setSelectedText(text);
    setSelectedType(type);
    setSidePanelOpen(true);

    setSelectedEvaluation({
      type,
      data: data.evaluation,
      sectionIndex: sectionDataIndex,
      sentenceIndex: sentenceDataIndex,
    });
  };

  const handleShowRequirements = () => {
    setShowRequirements(true);
    setSidePanelOpen(false);
  };

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  if (showRequirements) {
    return (
      <>
        <Header 
          onShowRequirements={handleShowRequirements}
          showRequirements={showRequirements}
          onBackToArticle={() => setShowRequirements(false)}
          setSidePanelOpen={setSidePanelOpen}
        />
        <div className="min-h-screen">
          <RequirementViewer
            focusedId={focusedRequirement}
            onRequirementClick={(id) => setFocusedRequirement(id)}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Header 
        onShowRequirements={handleShowRequirements}
        showRequirements={showRequirements}
        onBackToArticle={() => setShowRequirements(false)}
        setSidePanelOpen={setSidePanelOpen}
      />
      <MainContent
        data={data}
        highlightEnabled={highlightEnabled}
        setHighlightEnabled={setHighlightEnabled}
        onElementClick={handleElementClick}
      />
      <SidePanel
        isOpen={isSidePanelOpen}
        onClose={() => setSidePanelOpen(false)}
        selectedText={selectedText}
        selectedType={selectedType}
        evaluationData={selectedEvaluation.data}
        sectionIndex={selectedEvaluation.sectionIndex}
        sentenceIndex={selectedEvaluation.sentenceIndex}
      />
    </>
  );
}
