import fs from "fs/promises";
import { Section } from "./types";
import { processRefs } from "./utils";

export async function getData(path: string): Promise<{ data: any | null }> {
  try {
    const jsonData = await fs.readFile(
      "lib/data/results/" + path + ".json",
      "utf8"
    );

    return { data: JSON.parse(jsonData) };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return { data: null };
    }
    throw error;
  }
}

export async function parseWikicrow(
  path: string
): Promise<{ data: Section[] }> {
  const markdownText = await fs.readFile(
    "lib/data/articles/" + path + ".md",
    "utf-8"
  );
  const lines = markdownText.split("\n");

  const rootTitle = lines[0].replace(/^#+\s*/, "").trim();
  const sectionPattern = /^(#+)\s*(.*?)\s*$/;

  const structuredData: Section[] = [];
  let currentHierarchy = [rootTitle];
  let currentTitle = rootTitle;
  let currentContent = "";

  // Start with the root section
  structuredData.push({
    title: currentTitle,
    content: "",
    hierarchy: currentHierarchy.join(" > "),
  });

  for (const line of lines.slice(1)) {
    // Skip the first line as it's the root title
    const sectionMatch = line.match(sectionPattern);

    if (sectionMatch) {
      // If there's an ongoing section, save the current one
      if (currentContent || currentHierarchy.length > 1) {
        // Only append if there's content or it's not top-level
        structuredData.push({
          title: currentTitle,
          content: currentContent.trim(),
          hierarchy: currentHierarchy.join(" > "),
        });
      }

      // New section detected, update the current title, hierarchy, and content
      const level = sectionMatch[1].length; // Number of '#' indicates the level
      currentTitle = sectionMatch[2].trim();

      // Update hierarchy based on the level
      currentHierarchy = [
        ...currentHierarchy.slice(0, level - 1),
        currentTitle,
      ];
      currentContent = "";
    } else {
      currentContent += line.trim() + " ";
    }
  }

  // Append the last section if it has content or is not top-level
  if (currentContent || currentHierarchy.length > 1) {
    structuredData.push({
      title: currentTitle,
      content: currentContent.trim(),
      hierarchy: currentHierarchy.join(" > "),
    });
  }

  return {
    data: [
      structuredData[0],
      ...structuredData
        .slice(1)
        .filter((section) => section.content || section.hierarchy !== rootTitle)
        .map((section) => {
          if (section.title === "References" && section.content) {
            return {
              ...section,
              content: "",
              citations: processRefs(section.content),
            };
          }
          return section;
        }),
    ],
  };
}
