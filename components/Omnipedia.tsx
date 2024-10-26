"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionFeedback } from "@/components/SectionFeedback";
import { RequirementsSidebar } from "@/components/RequirementsSidebar";
import { requirementsData } from "@/lib/data";
import { GenerateCitations } from "./GenerateCitations";
import useSWR from "swr";
import { ArticleSelector } from "./ArticleSelector";

interface RequirementEvaluation {
  requirement_id: string;
  applicable: boolean;
  applicability_reasoning: string;
  score: number;
  confidence: number;
  evidence: string;
  reasoning: string;
  overlap_notes: string;
}

interface FeedbackCategory {
  title: string;
  requirement_evaluations: RequirementEvaluation[];
  meta_notes: string;
}

interface Feedback {
  [category: string]: FeedbackCategory[];
}

interface ArticleSection {
  title: string;
  content: string;
  hierarchy: string;
  feedback: Feedback;
}

const MainContent = () => {
  const [selectedPath, setSelectedPath] = useState("wikicrow/ABCC11");
  const [article, setArticle] = useState<any>([]);
  const [evaluation, setEvaluation] = useState<ArticleSection[]>([]);
  const [feedback, setFeedback] = useState<Record<string, any>>();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // Fetch evaluation data
  const { data: evaluationData, error: evaluationError } = useSWR(
    `/api/evaluation?path=${encodeURIComponent(selectedPath)}`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  // Fetch article data
  const { data: articleData, error: articleError } = useSWR(
    `/api/articles?path=${encodeURIComponent(selectedPath)}`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  // Update states when data changes
  useEffect(() => {
    if (evaluationData) {
      const { data } = evaluationData;
      console.log("EVAL: ", data);
      setEvaluation(data);
    }
  }, [evaluationData]);

  useEffect(() => {
    if (articleData) {
      const { data } = articleData;
      setArticle(data);
    }
  }, [articleData]);

  const getFeedback = (title: string): Record<string, any> | null => {
    const section = evaluation.find((item) => item && item.title === title);
    console.log("SECTION: ", section);
    return section ? section.feedback : null;
  };

  const handleArticleSelect = (source: string, acronym: string) => {
    const newPath = `${source}/${acronym}`;
    setSelectedPath(newPath);
    setSelectedSection(null);
    setFeedback(undefined);
  };

  useEffect(() => {
    console.log(evaluation);
    if (selectedSection && evaluation) {
      const feedbackData = getFeedback(selectedSection);
      console.log("feedbackData ", feedbackData);
      if (feedbackData !== null) {
        setFeedback(feedbackData);
      }
    }
  }, [selectedSection, evaluation]);

  const handleSectionClick = (title: string) => {
    setSelectedSection((prevSection) => (prevSection === title ? null : title));
  };

  // Loading state
  if (!articleData || !evaluationData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <span className="loading loading-spinner"></span>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (articleError || evaluationError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-red-500">
          <p>Error loading data</p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-auto w-full max-w-6xl mx-auto p-4 overflow-hidden">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl">
              {(article && article[0]?.title) || "Select an Article"}
            </CardTitle>
            <ArticleSelector onSelect={handleArticleSelect} />
          </div>
        </CardHeader>
      </Card>

      {article &&
        article.map(
          (section, index) =>
            (section.content !== "" ||
              (section.citations && section.citations.length > 0)) && (
              <Card key={index} className="mb-2">
                <CardHeader
                  className="flex flex-row items-center justify-between cursor-pointer"
                  onClick={() => handleSectionClick(section.title)}
                >
                  <CardTitle>{section.title}</CardTitle>
                  {selectedSection === section.title ? (
                    <ChevronUp className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </CardHeader>
                <CardContent className="pb-0">
                  <div>
                    {section.content && section.content.trim() !== "" && (
                      <div className="mb-4 text-gray-700">
                        {section.content}
                      </div>
                    )}
                    {section.citations && section.citations.length > 0 && (
                      <GenerateCitations citationsArray={section.citations} />
                    )}
                  </div>
                  {selectedSection === section.title && feedback && (
                    <SectionFeedback feedback={feedback} />
                  )}
                </CardContent>
              </Card>
            )
        )}
    </ScrollArea>
  );
};

export const Omnipedia = () => {
  return (
    <div className="flex h-screen">
      <RequirementsSidebar groups={requirementsData.groups} />
      <main className="flex-1 overflow-auto mt-8">
        <MainContent />
      </main>
    </div>
  );
};
