import React, { useMemo } from "react";
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
import requirementsData from "@/lib/data/requirements.json";

interface RequirementViewerProps {
  focusedId?: string;
  onRequirementClick?: (id: string) => void;
}

interface Requirement {
  id: string;
  description: string;
  reference: string;
  category: string;
  classification: string;
  where: string;
  when: string;
}

export const RequirementViewer = ({
  focusedId,
  onRequirementClick,
}: RequirementViewerProps) => {
  // Memoize the flattened requirements array
  const requirements = useMemo(() => {
    const allRequirements: Requirement[] = [];
    Object.entries(requirementsData.groups).forEach(([category, reqs]) => {
      allRequirements.push(...reqs);
    });
    return allRequirements;
  }, []);

  // Group requirements by category
  const groupedRequirements = useMemo(() => {
    return Object.entries(requirementsData.groups).map(([category, reqs]) => ({
      category,
      requirements: reqs as Requirement[],
    }));
  }, []);

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "Imperative Standards":
        return "bg-red-100 text-red-800";
      case "Best Practices":
        return "bg-blue-100 text-blue-800";
      case "Flexible Guidelines":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <ScrollArea className="h-screen">
      <div className="p-4 space-y-6">
        {groupedRequirements.map(({ category, requirements }) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-bold">{category}</h2>
            <div className="grid gap-4">
              {requirements.map((req) => (
                <Card
                  key={req.id}
                  className={cn(
                    "transition-all hover:shadow-md cursor-pointer",
                    focusedId === req.id
                      ? "ring-2 ring-blue-500 shadow-lg"
                      : "hover:ring-1 hover:ring-gray-200"
                  )}
                  onClick={() => onRequirementClick?.(req.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">#{req.id}</Badge>
                        <Badge
                          className={getClassificationColor(req.classification)}
                        >
                          {req.classification}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{req.description}</CardTitle>
                    <CardDescription>{req.reference}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Where: {req.where}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        When: {req.when}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
