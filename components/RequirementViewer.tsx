/**
 * @title RequirementViewer
 * @fileoverview Component that displays the requirements data
 * @path /components/RequirementViewer.tsx
 */

import React, { useMemo } from "react";
import requirementsData from "@/lib/data/requirements.json";
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
import { RequirementsData, RequirementGroup, Requirement } from "@/lib/eval";

interface RequirementViewerProps {
  focusedId?: string;
  onRequirementClick?: (id: string) => void;
}

// Add the RequirementCard component that was missing
interface RequirementCardProps {
  requirement: Requirement;
  isFocused?: boolean;
  onRequirementClick?: (id: string) => void;
}

const RequirementCard: React.FC<RequirementCardProps> = ({
  requirement,
  isFocused,
  onRequirementClick,
}) => (
  <Card
    className={cn(
      "cursor-pointer transition-colors hover:bg-muted/50",
      isFocused && "border-primary"
    )}
    onClick={() => onRequirementClick?.(requirement.id)}
  >
    <CardHeader>
      <CardTitle className="text-lg">
        {requirement.id}
        <Badge className="ml-2" variant="outline">
          {requirement.classification}
        </Badge>
      </CardTitle>
      <CardDescription>{requirement.category}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{requirement.description}</p>
      <div className="mt-4 space-y-2">
        <p className="text-xs">
          <strong>Where:</strong> {requirement.where}
        </p>
        <p className="text-xs">
          <strong>When:</strong> {requirement.when}
        </p>
        <p className="text-xs">
          <strong>Reference:</strong> {requirement.reference}
        </p>
      </div>
    </CardContent>
  </Card>
);

export const RequirementViewer: React.FC<RequirementViewerProps> = ({
  focusedId,
  onRequirementClick,
}) => {
  const groups = useMemo(() => 
    (requirementsData as RequirementsData).groups, 
    []
  );

  return (
    <ScrollArea className="h-screen">
      <div className="p-4 space-y-6">
        {groups.map((group: RequirementGroup) => (
          <div key={group.category} className="space-y-4">
            <h2 className="text-2xl font-bold">{group.category}</h2>
            <p className="text-gray-600">{group.description}</p>
            <div className="grid gap-4">
              {group.requirements.map((req: Requirement) => (
                <RequirementCard
                  key={req.id}
                  requirement={req}
                  isFocused={focusedId === req.id}
                  onRequirementClick={onRequirementClick}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
