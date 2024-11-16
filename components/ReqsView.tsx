/**
 * @title RequirementViewer
 * @fileoverview Component that displays the requirements data
 * @path /components/RequirementViewer.tsx
 */

import React, { useState, useMemo, useCallback } from "react";
import { ChevronRight, ChevronDown, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import requirementsData from "@/lib/data/requirements.json";

export interface Requirement {
  id: string;
  description: string;
  reference: string;
  category: string;
  classification: string;
  where: string;
  when: string;
}

interface RequirementViewerProps {
  focusedId?: string;
  onRequirementClick?: (id: string) => void;
  isLoading?: boolean;
  error?: string;
}

interface CategoryProps {
  category: string;
  classifications: {
    [classification: string]: Requirement[];
  };
  expandedCategories: { [key: string]: boolean };
  toggleCategory: (category: string) => void;
  expandedClassifications: { [key: string]: boolean };
  toggleClassification: (category: string, classification: string) => void;
  expandedRequirements: { [key: string]: boolean };
  toggleRequirement: (id: string) => void;
  focusedId?: string;
  searchTerm: string;
}

const getClassificationColor = (classification: string): string => {
  const colors = {
    "Imperative Standards": "bg-red-100 text-red-800",
    "Best Practices": "bg-blue-100 text-blue-800",
    "Flexible Guidelines": "bg-green-100 text-green-800",
  };
  return (
    colors[classification as keyof typeof colors] || "bg-gray-100 text-gray-800"
  );
};

const RequirementCard: React.FC<{
  requirement: Requirement;
  isExpanded: boolean;
  onToggle: () => void;
  isFocused: boolean;
}> = ({ requirement, isExpanded, onToggle, isFocused }) => (
  <Card
    className={cn(
      "border-l-4 transition-all",
      isFocused ? "border-l-blue-500 shadow-md" : "border-l-transparent"
    )}
  >
    <CollapsibleTrigger className="w-full" onClick={onToggle}>
      <CardHeader className="py-3 hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-2">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
          <Badge variant="outline" className="w-12">
            #{requirement.id}
          </Badge>
          <span className="text-sm font-medium">{requirement.description}</span>
        </div>
      </CardHeader>
    </CollapsibleTrigger>

    <CollapsibleContent>
      <CardContent className="space-y-3">
        <CardDescription>{requirement.reference}</CardDescription>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
            Where: {requirement.where}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            When: {requirement.when}
          </Badge>
        </div>
      </CardContent>
    </CollapsibleContent>
  </Card>
);

const CategorySection: React.FC<CategoryProps> = ({
  category,
  classifications,
  expandedCategories,
  toggleCategory,
  expandedClassifications,
  toggleClassification,
  expandedRequirements,
  toggleRequirement,
  focusedId,
  searchTerm,
}) => {
  const filteredClassifications = useMemo(() => {
    if (!searchTerm) return classifications;

    const filtered: typeof classifications = {};
    Object.entries(classifications).forEach(
      ([classification, requirements]) => {
        const matchingReqs = requirements.filter(
          (req) =>
            req.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.reference.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (matchingReqs.length > 0) {
          filtered[classification] = matchingReqs;
        }
      }
    );
    return filtered;
  }, [classifications, searchTerm]);

  if (Object.keys(filteredClassifications).length === 0) return null;

  return (
    <Card className="w-full">
      <Collapsible
        open={expandedCategories[category]}
        onOpenChange={() => toggleCategory(category)}
      >
        <CollapsibleTrigger className="w-full">
          <CardHeader className="hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2">
              {expandedCategories[category] ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              <CardTitle>{category}</CardTitle>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-4">
            {Object.entries(filteredClassifications).map(
              ([classification, requirements]) => (
                <Collapsible
                  key={classification}
                  open={
                    expandedClassifications[`${category}-${classification}`]
                  }
                  onOpenChange={() =>
                    toggleClassification(category, classification)
                  }
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded transition-colors">
                      {expandedClassifications[
                        `${category}-${classification}`
                      ] ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <Badge className={getClassificationColor(classification)}>
                        {classification}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        ({requirements.length} requirements)
                      </span>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="pl-6 space-y-3">
                      {requirements.map((req) => (
                        <Collapsible
                          key={req.id}
                          open={expandedRequirements[req.id]}
                        >
                          <RequirementCard
                            requirement={req}
                            isExpanded={expandedRequirements[req.id]}
                            onToggle={() => toggleRequirement(req.id)}
                            isFocused={focusedId === req.id}
                          />
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )
            )}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export const RequirementViewer: React.FC<RequirementViewerProps> = ({
  focusedId,
  onRequirementClick,
  isLoading,
  error,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [expandedClassifications, setExpandedClassifications] = useState<{
    [key: string]: boolean;
  }>({});
  const [expandedRequirements, setExpandedRequirements] = useState<{
    [key: string]: boolean;
  }>({});

  const groupedRequirements = useMemo(() => {
    const requirements = requirementsData as {
      groups: {
        [category: string]: Requirement[];
      };
    };

    const grouped: {
      [category: string]: {
        [classification: string]: Requirement[];
      };
    } = {};

    Object.entries(requirements.groups).forEach(([category, reqs]) => {
      grouped[category] = {};
      reqs.forEach((req: Requirement) => {
        if (!grouped[category][req.classification]) {
          grouped[category][req.classification] = [];
        }
        grouped[category][req.classification].push(req);
      });
    });

    return grouped;
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  }, []);

  const toggleClassification = useCallback(
    (category: string, classification: string) => {
      const key = `${category}-${classification}`;
      setExpandedClassifications((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    },
    []
  );

  const toggleRequirement = useCallback(
    (id: string) => {
      setExpandedRequirements((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
      onRequirementClick?.(id);
    },
    [onRequirementClick]
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-screen">
      <div className="p-4 space-y-4">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search requirements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        {Object.entries(groupedRequirements).map(
          ([category, classifications]) => (
            <CategorySection
              key={category}
              category={category}
              classifications={classifications}
              expandedCategories={expandedCategories}
              toggleCategory={toggleCategory}
              expandedClassifications={expandedClassifications}
              toggleClassification={toggleClassification}
              expandedRequirements={expandedRequirements}
              toggleRequirement={toggleRequirement}
              focusedId={focusedId}
              searchTerm={searchTerm}
            />
          )
        )}
      </div>
    </ScrollArea>
  );
};
