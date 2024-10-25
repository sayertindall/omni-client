"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { articleData, feedbackData } from "@/lib/data";
import { SectionFeedback } from "@/components/SectionFeedback";
import { RequirementsSidebar } from "@/components/RequirementsSidebar";
import { requirementsData } from "@/lib/data";
import { GenerateCitations } from "./GenerateCitations";

const MainContent = () => {
  const [sections, _setSections] = useState(articleData);
  const [feedback, setFeedback] = useState<Record<string, any>>();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  function getFeedback(title: string): Record<string, any> | null {
    const section = feedbackData.find((item) => item.title === title);
    return section ? section.feedback : null;
  }

  useEffect(() => {
    if (selectedSection) {
      const feedbackData = getFeedback(selectedSection);
      if (feedbackData !== null) {
        setFeedback(feedbackData);
      }
    }
  }, [selectedSection]);

  const handleSectionClick = (title: string) => {
    setSelectedSection((prevSection) => (prevSection === title ? null : title));
  };

  return (
    <ScrollArea className="h-auto w-full max-w-6xl mx-auto p-4 overflow-hidden">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{sections[0].title}</CardTitle>
        </CardHeader>
      </Card>
      {sections.map(
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
                    <div className="mb-4 text-gray-700">{section.content}</div>
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
      <main className="flex-1 overflow-auto">
        <MainContent />
      </main>
    </div>
  );
};
