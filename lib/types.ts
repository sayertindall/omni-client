// Classification types
export type RequirementClassification =
  | "Imperative Standards"
  | "Best Practices"
  | "Flexible Guidelines"
  | "Contextual Considerations";

// Single requirement
export interface Requirement {
  id: string;
  description: string;
  reference?: string;
  classification: RequirementClassification;
  category: string;
  where: string;
  when: string;
}

// Group of requirements
export interface RequirementGroup {
  description: string;
  requirements: Requirement[];
}

// Full requirements index
export interface RequirementsIndex {
  groups: {
    [key: string]: Requirement[]; // Updated to reflect the new structure
  };
}

// Props for the sidebar component
export interface RequirementsSidebarProps {
  groups: RequirementsIndex["groups"];
}

// Rest of your types remain the same...
export interface RequirementProps {
  requirement: Requirement;
}

export interface Requirement {
  id: string;
  description: string;
  reference?: string;
  classification: RequirementClassification;
  category: string;
  where: string;
  when: string;
}

// Full requirements index - updated to match actual data structure
export interface RequirementsIndex {
  groups: {
    [key: string]: Requirement[]; // Changed from RequirementGroup to Requirement[]
  };
}

// Props for the sidebar component - updated to match actual usage
export interface RequirementsSidebarProps {
  groups: RequirementsIndex["groups"];
}

export interface Section {
  title: string;
  content: string;
  hierarchy: string;
  citations?: Citation[];
}

export interface Citation {
  citation: string;
  link: string;
}

export interface RequirementEvaluation {
  requirement_id: string;
  applicable: boolean;
  applicability_reasoning: string;
  score: number;
  confidence: number;
  evidence: string;
  reasoning: string;
  overlap_notes: string;
}

export interface FeedbackCategory {
  title: string;
  requirement_evaluations: RequirementEvaluation[];
  meta_notes: string;
}

export interface Feedback {
  [category: string]: FeedbackCategory[];
}

export interface ArticleSection {
  title: string;
  content: string;
  hierarchy: string;
  feedback: Feedback;
  citations?: { citation: string; link: string }[];
}

export interface CategoryScore {
  score: number;
  lastCalculated: Date;
  evaluations: RequirementEvaluation[];
}

export interface SectionState {
  isExpanded: boolean;
  lastViewed: Date;
  scores: Record<string, CategoryScore>;
}
