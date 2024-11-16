"use client";

import { useState } from "react";
import { SidePanel } from "@/components/SidePanel";
import { RequirementViewer } from "@/components/ReqsView";
import { EvaluationData, convertCacheToEvalData } from "@/lib/eval";
import { getData } from "@/lib/loader";
import { useApp } from "@/app/context/AppContext";
import { MainContent } from "@/components/MainContent";

export default function Page() {
  const { 
    showRequirements, 
    selectedArticle,
    selectedSource,
    isSidePanelOpen, 
    setSidePanelOpen 
  } = useApp();

  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<
    "section" | "sentence" | "article" | null
  >(null);
  const [highlightEnabled, setHighlightEnabled] = useState(true);
  const [focusedRequirement, setFocusedRequirement] = useState<string>();
  const [selectedEvaluation, setSelectedEvaluation] = useState<{
    type: "section" | "sentence" | "article" | null;
    data: EvaluationData | null;
    sectionIndex?: number;
    sentenceIndex?: number;
  }>({ type: null, data: null });

  // Get data using the loader
  const data = getData(selectedArticle);
  const error = !data;

  const handleElementClick = (
    text: string,
    type: "section" | "sentence",
    sectionIdx: number,
    sentenceIdx?: number
  ) => {
    if (!data || !data[selectedSource]?.evaluation) return;

    const sectionDataIndex = sectionIdx + 1;
    const sentenceDataIndex = sentenceIdx !== undefined ? sentenceIdx + 1 : undefined;

    setSelectedText(text);
    setSelectedType(type);
    setSidePanelOpen(true);

    setSelectedEvaluation({
      type,
      data: convertCacheToEvalData(data[selectedSource].evaluation),
      sectionIndex: sectionDataIndex,
      sentenceIndex: sentenceDataIndex,
    });
  };

  if (error) return <div>Error loading data</div>;

  if (showRequirements) {
    return (
      <div className="min-h-screen">
        <RequirementViewer
          focusedId={focusedRequirement}
          onRequirementClick={(id) => setFocusedRequirement(id)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <MainContent
        data={data}
        highlightEnabled={highlightEnabled}
        setHighlightEnabled={setHighlightEnabled}
        onElementClick={handleElementClick}
        selectedSource={selectedSource}
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
    </div>
  );
}