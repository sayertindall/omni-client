/* -------------------------------------
 * 1. Data Structure Interfaces
 * ------------------------------------- */

import { uniqBy } from "lodash";

/**
 * export interface representing a single requirement evaluation.
 */
export interface RequirementEvaluation {
  requirement_id: string;
  requirement_category: string;
  classification: string;
  applicable: boolean;
  applicability_reasoning: string;
  score: number;
  confidence: number;
  evidence: string;
  reasoning: string;
  overlap_notes?: string;
}

/**
 * export interface representing the evaluation of a single sentence.
 */
export interface SentenceEvaluation {
  index: number;
  sentence: string;
  requirement_evaluations: RequirementEvaluation[];
  meta_notes?: string | null;
}

/**
 * export interface representing evaluation details of an entire section, including its sentences.
 */
export interface SectionEvaluation {
  index: number;
  title: string;
  sentence_evaluations: SentenceEvaluation[];
  requirement_evaluations: RequirementEvaluation[];
  meta_notes?: string | null;
}

/**
 * export interface representing the overall article evaluation.
 */
export interface ArticleEvaluation {
  requirement_evaluations: RequirementEvaluation[];
  meta_notes?: string | null;
}

/**
 * The main export interface representing the entire evaluation data structure.
 */
export interface EvaluationData {
  sections: SectionEvaluation[];
  article_evaluation: ArticleEvaluation;
}

export interface Requirement {
  id: string;
  description: string;
  reference: string;
  category: string;
  classification: string;
  where: string;
  when: string;
}

export interface RequirementsData {
  groups: {
    [key: string]: Requirement[];
  };
}

/* -------------------------------------
 * 2. Data Retrieval Utility Functions
 * ------------------------------------- */

/**
 * Retrieves a section by its index from the evaluation data.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section to retrieve.
 * @returns The `SectionEvaluation` object if found, or `undefined` if not found.
 */
export function getSectionByIndex(
  data: EvaluationData,
  sectionIndex: number
): SectionEvaluation | undefined {
  // Adjust for 1-based indexing in the data
  return data.sections.find((section) => section.index === sectionIndex);
}

/**
 * Retrieves a sentence by its index from a specific section in the evaluation data.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section containing the sentence.
 * @param sentenceIndex - The index of the sentence to retrieve.
 * @returns The `SentenceEvaluation` object if found, or `undefined` if not found.
 */
export function getSentenceByIndex(
  data: EvaluationData,
  sectionIndex: number,
  sentenceIndex: number
): SentenceEvaluation | undefined {
  const section = getSectionByIndex(data, sectionIndex);
  if (!section) return undefined;

  // Find sentence by index
  return section.sentence_evaluations.find(
    (sentence) => sentence.index === sentenceIndex
  );
}

/**
 * Retrieves the requirement evaluation for a specific requirement from a given sentence.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section containing the sentence.
 * @param sentenceIndex - The index of the sentence containing the requirement.
 * @param requirementId - The ID of the requirement to retrieve.
 * @returns The requirement evaluation if found, or undefined otherwise.
 */
export function getRequirementEvaluationForSentence(
  data: EvaluationData,
  sectionIndex: number,
  sentenceIndex: number,
  requirementId: string
): RequirementEvaluation | undefined {
  const sentence = getSentenceByIndex(data, sectionIndex, sentenceIndex);
  return sentence?.requirement_evaluations.find(
    (re) => re.requirement_id === requirementId
  );
}

/**
 * Retrieves all requirement evaluations for a given requirement ID across all sentences in a section.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section to search within.
 * @param requirementId - The ID of the requirement to retrieve evaluations for.
 * @returns An array of requirement evaluations for the specified requirement, which may be empty if none are found.
 */
export function getRequirementEvaluationsForSection(
  data: EvaluationData,
  sectionIndex: number,
  requirementId: string
): RequirementEvaluation[] {
  const section = getSectionByIndex(data, sectionIndex);
  if (!section) return [];

  const evaluations: RequirementEvaluation[] = [];

  // Check section-level requirement evaluations
  section.requirement_evaluations.forEach((re) => {
    if (re.requirement_id === requirementId) {
      evaluations.push(re);
    }
  });

  // Check each sentence's requirement evaluations
  section.sentence_evaluations.forEach((sentence) => {
    sentence.requirement_evaluations.forEach((re) => {
      if (re.requirement_id === requirementId) {
        evaluations.push(re);
      }
    });
  });

  return evaluations;
}

/* -------------------------------------
 * 3. Score Calculation Utility Functions
 * ------------------------------------- */

/**
 * Computes the aggregate score of a section by averaging all requirement evaluation scores.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section to compute the score for.
 * @returns The average score for the section, or 0 if there are no scores.
 */
export function getSectionAggregateScore(
  data: EvaluationData,
  sectionIndex: number
): number {
  const section = getSectionByIndex(data, sectionIndex);
  if (!section) return 0;

  const allScores: number[] = [];

  // Add section-level requirement evaluation scores
  section.requirement_evaluations.forEach((re) => {
    allScores.push(re.score);
  });

  // Add scores from each sentence's requirement evaluations
  section.sentence_evaluations.forEach((sentence) => {
    sentence.requirement_evaluations.forEach((re) => {
      allScores.push(re.score);
    });
  });

  if (allScores.length === 0) return 0;

  const sum = allScores.reduce((a, b) => a + b, 0);
  return sum / allScores.length;
}

/**
 * Computes the aggregate score of a sentence by averaging all requirement evaluation scores.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section containing the sentence.
 * @param sentenceIndex - The index of the sentence to compute the score for.
 * @returns The average score for the sentence, or 0 if there are no scores.
 */
export function getSentenceAggregateScore(
  data: EvaluationData,
  sectionIndex: number,
  sentenceIndex: number
): number {
  const sentence = getSentenceByIndex(data, sectionIndex, sentenceIndex);
  if (!sentence) return 0;

  const scores: number[] = sentence.requirement_evaluations.map(
    (re) => re.score
  );

  if (scores.length === 0) return 0;

  const sum = scores.reduce((a, b) => a + b, 0);
  return sum / scores.length;
}

/**
 * Computes the overall article score by averaging the aggregate scores of all sections.
 * @param data - The entire evaluation data structure.
 * @returns The average score for the entire article, or 0 if there are no sections.
 */
export function getOverallArticleScore(data: EvaluationData): number {
  if (data.sections.length === 0) return 0;

  const sectionScores = data.sections.map((section) =>
    getSectionAggregateScore(data, section.index)
  );

  if (sectionScores.length === 0) return 0;

  const sum = sectionScores.reduce((a, b) => a + b, 0);
  return sum / sectionScores.length;
}

/**
 * Computes the average score for a specific requirement across all sentences in a section.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section to evaluate.
 * @param requirementId - The ID of the requirement to calculate the average score for.
 * @returns The average score for the specified requirement in the given section, or 0 if not applicable.
 */
export function getAverageScoreForRequirementInSection(
  data: EvaluationData,
  sectionIndex: number,
  requirementId: string
): number {
  const evaluations = getRequirementEvaluationsForSection(
    data,
    sectionIndex,
    requirementId
  );

  if (evaluations.length === 0) return 0;

  const sum = evaluations.reduce((a, b) => a + b.score, 0);
  return sum / evaluations.length;
}

/**
 * Computes the average score for a specific requirement across the entire article.
 * @param data - The entire evaluation data structure.
 * @param requirementId - The ID of the requirement to calculate the average score for.
 * @returns The average score for the specified requirement across the article, or 0 if not applicable.
 */
export function getAverageScoreForRequirementInArticle(
  data: EvaluationData,
  requirementId: string
): number {
  const allEvaluations: RequirementEvaluation[] = [];

  data.sections.forEach((section) => {
    section.requirement_evaluations.forEach((re) => {
      if (re.requirement_id === requirementId) {
        allEvaluations.push(re);
      }
    });
    section.sentence_evaluations.forEach((sentence) => {
      sentence.requirement_evaluations.forEach((re) => {
        if (re.requirement_id === requirementId) {
          allEvaluations.push(re);
        }
      });
    });
  });

  if (allEvaluations.length === 0) return 0;

  const sum = allEvaluations.reduce((a, b) => a + b.score, 0);
  return sum / allEvaluations.length;
}

/* -------------------------------------
 * 4. Additional Utility Functions
 * ------------------------------------- */

/**
 * Retrieves all requirements evaluated for a specific sentence.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section containing the sentence.
 * @param sentenceIndex - The index of the sentence to retrieve requirements from.
 * @returns An array of `RequirementEvaluation` objects for the specified sentence.
 */
export function getAllRequirementsForSentence(
  data: EvaluationData,
  sectionIndex: number,
  sentenceIndex: number
): RequirementEvaluation[] {
  const sentence = getSentenceByIndex(data, sectionIndex, sentenceIndex);
  return sentence ? sentence.requirement_evaluations : [];
}

/**
 * Retrieves all requirements evaluated for a specific section, including sentence-level requirements.
 * @param data - The entire evaluation data structure.
 * @param sectionIndex - The index of the section to retrieve requirements from.
 * @returns An array of `RequirementEvaluation` objects for the specified section and its sentences.
 */
export function getAllRequirementsForSection(
  data: EvaluationData,
  sectionIndex: number
): RequirementEvaluation[] {
  const section = getSectionByIndex(data, sectionIndex);
  if (!section) return [];

  // Combine section-level and sentence-level evaluations
  const evaluations: RequirementEvaluation[] = [
    ...section.requirement_evaluations,
  ];

  section.sentence_evaluations.forEach((sentence) => {
    evaluations.push(...sentence.requirement_evaluations);
  });

  // Remove duplicates based on requirement_id
  return uniqBy(evaluations, "requirement_id");
}

/**
 * Retrieves all requirements evaluated for the entire article.
 * @param data - The entire evaluation data structure.
 * @returns An array of `RequirementEvaluation` objects for the entire article.
 */
export function getAllRequirementsForArticle(
  data: EvaluationData
): RequirementEvaluation[] {
  const evaluations: RequirementEvaluation[] = [
    ...data.article_evaluation.requirement_evaluations,
  ];

  data.sections.forEach((section) => {
    evaluations.push(...section.requirement_evaluations);
    section.sentence_evaluations.forEach((sentence) => {
      evaluations.push(...sentence.requirement_evaluations);
    });
  });

  // Remove duplicates based on requirement_id
  return uniqBy(evaluations, "requirement_id");
}

/**
 * Merges requirement details with evaluation data
 */
export function mergeRequirementWithEvaluation(
  evaluation: RequirementEvaluation,
  requirementsData: RequirementsData
): RequirementEvaluation & Partial<Requirement> {
  let requirement: Requirement | undefined;

  // Search through all groups for the matching requirement
  Object.values(requirementsData.groups).forEach((requirements) => {
    const found = requirements.find((r) => r.id === evaluation.requirement_id);
    if (found) {
      requirement = found;
    }
  });

  return {
    ...evaluation,
    description: requirement?.description || "",
    reference: requirement?.reference || "",
    where: requirement?.where || "",
    when: requirement?.when || "",
  };
}

/**
 * Enhanced version of getAllRequirementsForSection that includes full requirement details
 */
export function getEnhancedRequirementsForSection(
  data: EvaluationData,
  sectionIndex: number,
  requirementsData: RequirementsData
): (RequirementEvaluation & Partial<Requirement>)[] {
  const evaluations = getAllRequirementsForSection(data, sectionIndex);
  return evaluations.map((evaluation) =>
    mergeRequirementWithEvaluation(evaluation, requirementsData)
  );
}

/**
 * Enhanced version of getAllRequirementsForSentence that includes full requirement details
 */
export function getEnhancedRequirementsForSentence(
  data: EvaluationData,
  sectionIndex: number,
  sentenceIndex: number,
  requirementsData: RequirementsData
): (RequirementEvaluation & Partial<Requirement>)[] {
  const evaluations = getAllRequirementsForSentence(
    data,
    sectionIndex,
    sentenceIndex
  );
  return evaluations.map((evaluation) =>
    mergeRequirementWithEvaluation(evaluation, requirementsData)
  );
}

/**
 * Enhanced version of getAllRequirementsForArticle that includes full requirement details
 */
export function getEnhancedRequirementsForArticle(
  data: EvaluationData,
  requirementsData: RequirementsData
): (RequirementEvaluation & Partial<Requirement>)[] {
  const evaluations = getAllRequirementsForArticle(data);
  return evaluations.map((evaluation) =>
    mergeRequirementWithEvaluation(evaluation, requirementsData)
  );
}

/* -------------------------------------
 * 5. Example Usage of the Utility Functions
 * ------------------------------------- */

// Assume `evaluationData` is your JSON data parsed into the `EvaluationData` export interface
// For demonstration, let's create a minimal example (replace with your actual data):

// const evaluationData: EvaluationData = {
//   sections: [
//     {
//       index: 1,
//       title: "Overview",
//       sentence_evaluations: [
//         {
//           index: 1,
//           sentence: "Sentence 1.",
//           requirement_evaluations: [
//             {
//               requirement_id: "R1",
//               requirement_category: "Content",
//               classification: "Imperative Standards",
//               applicable: true,
//               applicability_reasoning:
//                 "Applicable because this is just a demo requirement evaluation.",
//               score: 0.5,
//               confidence: 0.8,
//               evidence: "Sample evidence.",
//               reasoning: "Sample reasoning.",
//             },
//           ],
//         },
//       ],
//       requirement_evaluations: [
//         {
//           requirement_id: "R25",
//           requirement_category: "Structure",
//           classification: "Imperative Standards",
//           applicable: true,
//           applicability_reasoning: "Sample applicability reasoning.",
//           score: 1.0,
//           confidence: 0.95,
//           evidence: "Section-level evidence.",
//           reasoning: "Section-level reasoning.",
//         },
//       ],
//     },
//   ],
//   article_evaluation: {
//     requirement_evaluations: [
//       {
//         requirement_id: "R35",
//         requirement_category: "Citations",
//         classification: "Best Practices",
//         applicable: true,
//         applicability_reasoning:
//           "Sample applicability reasoning for the article.",
//         score: 0,
//         confidence: 0.95,
//         evidence: "No inline citations found.",
//         reasoning: "Article-level reasoning.",
//       },
//     ],
//   },
// };

// // Usage Examples:

// // 1. Get the aggregate score for a specific section by index
// const sectionIndex = 1;
// const sectionScore = getSectionAggregateScore(evaluationData, sectionIndex);
// console.log(`Section ${sectionIndex} aggregate score: ${sectionScore}`);

// // 2. Get the aggregate score for a specific sentence by section and sentence indexes
// const sentenceIndex = 1;
// const sentenceScore = getSentenceAggregateScore(
//   evaluationData,
//   sectionIndex,
//   sentenceIndex
// );
// console.log(
//   `Sentence ${sentenceIndex} in Section ${sectionIndex} aggregate score: ${sentenceScore}`
// );

// // 3. Retrieve a specific requirement evaluation from a sentence
// const requirementId = "R1";
// const specificRequirementEvaluation = getRequirementEvaluationForSentence(
//   evaluationData,
//   sectionIndex,
//   sentenceIndex,
//   requirementId
// );
// console.log(
//   `Specific requirement evaluation for requirement ${requirementId}:`,
//   specificRequirementEvaluation
// );

// // 4. Get overall article score
// const overallScore = getOverallArticleScore(evaluationData);
// console.log(`Overall article score: ${overallScore}`);

// // 5. Retrieve all evaluations of a specific requirement across a section
// const sectionRequirementEvaluations = getRequirementEvaluationsForSection(
//   evaluationData,
//   sectionIndex,
//   requirementId
// );
// console.log(
//   `All ${requirementId} requirement evaluations in Section ${sectionIndex}:`,
//   sectionRequirementEvaluations
// );

// // 6. Compute the average score for a specific requirement across all sentences in a section
// const averageScoreForRequirementInSection =
//   getAverageScoreForRequirementInSection(
//     evaluationData,
//     sectionIndex,
//     requirementId
//   );
// console.log(
//   `Average score for requirement ${requirementId} in Section ${sectionIndex}: ${averageScoreForRequirementInSection}`
// );

// // 7. Compute the average score for a specific requirement across the entire article
// const averageScoreForRequirementInArticle =
//   getAverageScoreForRequirementInArticle(evaluationData, requirementId);
// console.log(
//   `Average score for requirement ${requirementId} across the article: ${averageScoreForRequirementInArticle}`
// );

// // 8. Retrieve all requirements evaluated for a specific sentence
// const allRequirementsForSentence = getAllRequirementsForSentence(
//   evaluationData,
//   sectionIndex,
//   sentenceIndex
// );
// console.log(
//   `All requirements evaluated for Sentence ${sentenceIndex} in Section ${sectionIndex}:`,
//   allRequirementsForSentence
// );

// // 9. Retrieve all requirements evaluated for a specific section
// const allRequirementsForSectionData = getAllRequirementsForSection(
//   evaluationData,
//   sectionIndex
// );
// console.log(
//   `All requirements evaluated for Section ${sectionIndex}:`,
//   allRequirementsForSectionData
// );

// // 10. Retrieve all requirements evaluated for the entire article
// const allRequirementsForArticleData =
//   getAllRequirementsForArticle(evaluationData);
// console.log(
//   `All requirements evaluated for the entire article:`,
//   allRequirementsForArticleData
// );
