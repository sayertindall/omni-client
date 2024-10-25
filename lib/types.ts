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
    [key: string]: RequirementGroup;
  };
}

// Props for the sidebar component
export interface RequirementsSidebarProps {
  groups: RequirementsIndex["groups"];
}

// Props for the requirement component
export interface RequirementProps {
  requirement: Requirement;
}
