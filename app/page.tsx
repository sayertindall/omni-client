"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Info,
  HelpCircle,
} from "lucide-react";
import { articleData, feedbackData, requirementsData } from "@/lib/data";

const GenerateCitations = ({
  citationsArray,
}: {
  citationsArray?: { citation: string; link: string }[];
}) => {
  return (
    citationsArray && (
      <ol className="list-decimal pl-4 space-y-2">
        {citationsArray.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item.citation}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.link}
            </a>
            .
          </li>
        ))}
      </ol>
    )
  );
};

const SectionFeedback = ({ feedback }) => {
  const getScoreBadgeVariant = (score) => {
    if (score >= 0.8) return "secondary";
    if (score >= 0.6) return "outline";
    return "destructive";
  };

  const calculateCategoryScore = (evaluations) => {
    if (!evaluations.length) return 0;
    const scores = evaluations.map((req) => req.score);
    return scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
  };

  const getRequirement = (
    category: string,
    requirementId: string
  ): string | undefined => {
    const group = requirementsData.groups[category];

    if (!group) {
      return undefined;
    }

    const req = group.requirements.find((req) => req.id === requirementId);

    return;
  };

  if (!feedback) {
    return;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Section Feedback
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-5 w-5 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Detailed feedback for each category and requirement</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        <CardDescription>
          Analysis of content requirements and guidelines
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="infoboxes" className="w-full">
          <TabsList className="w-full">
            {Object.keys(feedback).map((category) => (
              <TabsTrigger key={category} value={category.toLowerCase()}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(feedback).map(([category, categoryData]) => (
            <TabsContent key={category} value={category.toLowerCase()}>
              <ScrollArea className="h-[500px] pr-4">
                {(categoryData as any).map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-6">
                    {section.meta_notes && (
                      <Alert className="mb-4">
                        <Info className="h-4 w-4" />
                        <AlertTitle>Meta Notes</AlertTitle>
                        <AlertDescription>
                          {section.meta_notes}
                        </AlertDescription>
                      </Alert>
                    )}

                    {section.requirement_evaluations.length > 0 && (
                      <div className="mb-4">
                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Category Score</AlertTitle>
                          <AlertDescription className="mt-2">
                            <Progress
                              value={
                                calculateCategoryScore(
                                  section.requirement_evaluations
                                ) * 100
                              }
                              className="h-2"
                            />
                            <span className="text-sm text-gray-500 mt-1 block">
                              {(
                                calculateCategoryScore(
                                  section.requirement_evaluations
                                ) * 100
                              ).toFixed(1)}
                              % compliance
                            </span>
                          </AlertDescription>
                        </Alert>
                      </div>
                    )}

                    <Accordion type="single" collapsible className="w-full">
                      {section.requirement_evaluations.map((req, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-2">
                              {req.score === 1.0 ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : req.score === 0.0 ? (
                                <AlertCircle className="h-4 w-4 text-red-500" />
                              ) : (
                                <Info className="h-4 w-4 text-yellow-500" />
                              )}
                              <span>
                                Requirement{" "}
                                {getRequirement(category, req.requirement_id)}
                              </span>
                              <Badge variant={getScoreBadgeVariant(req.score)}>
                                {(req.score * 100).toFixed(0)}%
                              </Badge>
                              <Badge variant="outline">
                                Confidence: {(req.confidence * 100).toFixed(0)}%
                              </Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 p-4">
                              <div className="space-y-2">
                                <h4 className="font-medium">Applicability</h4>
                                <p className="text-sm text-gray-600">
                                  {req.applicability_reasoning}
                                </p>
                              </div>

                              <div className="space-y-2">
                                <h4 className="font-medium">Evidence</h4>
                                <p className="text-sm text-gray-600">
                                  {req.evidence}
                                </p>
                              </div>

                              <div className="space-y-2">
                                <h4 className="font-medium">Reasoning</h4>
                                <p className="text-sm text-gray-600">
                                  {req.reasoning}
                                </p>
                              </div>

                              {req.overlap_notes &&
                                req.overlap_notes !== "N/A" && (
                                  <div className="space-y-2">
                                    <h4 className="font-medium">
                                      Overlap Notes
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      {req.overlap_notes}
                                    </p>
                                  </div>
                                )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default function Component() {
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
              <CardContent>
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
}
