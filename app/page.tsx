/**
 * @title Page
 * @fileoverview Main page component that handles article viewing, requirements, and evaluation data
 * @path /app/page.tsx
 */

"use client";

import { useState } from "react";
import { ArticleRenderer } from "@/components/ArticleRenderer";
import { SidePanel } from "@/components/SidePanel";
import { HighlightToggle } from "@/components/HighlightToggle";
import { RequirementViewer } from "@/components/ReqsView";
// import { RequirementViewer } from "@/components/RequirementViewer";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { EvaluationData } from "@/lib/eval";
import { InfoBox } from "@/components/InfoBox";
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

    // Adjusting indices to match one-based indexing used in evaluation data
    const sectionDataIndex = sectionIdx + 1;
    const sentenceDataIndex =
      sentenceIdx !== undefined ? sentenceIdx + 1 : undefined;

    setSelectedText(text);
    setSelectedType(type);
    setSidePanelOpen(true);

    setSelectedEvaluation({
      type,
      data: data.evaluation, // Pass the full EvaluationData
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
      <div className="container ml-10 p-4">
        <div className="flex gap-8 mt-32">
          <div className="w-[400px] shrink-0">
            <InfoBox />
          </div>

          <div className="flex-1">
            <div className="space-y-4">
              <div className="flex justify-end mr-[8em]">
                <HighlightToggle
                  enabled={highlightEnabled}
                  onToggle={() => setHighlightEnabled(!highlightEnabled)}
                />
              </div>
              <ArticleRenderer
                articleData={data.article}
                evaluationData={data.evaluation}
                onElementClick={handleElementClick}
                highlightEnabled={highlightEnabled}
              />
            </div>
          </div>
        </div>

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
    </>
  );
}
