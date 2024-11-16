import articleData from "./data/ABCC11/article.json";
import evaluationData from "./data/ABCC11/evaluation.json";
import requirementsData from "./data/requirements.json";

export const getData = () => {
  return {
    article: articleData,
    evaluation: evaluationData,
    requirements: requirementsData,
  };
};
