import { RequirementsIndex } from "./types";

export const requirementsData: RequirementsIndex = {
  groups: {
    Content: [
      {
        id: "R1",
        description: "Do not hype a study by listing authors' qualifications.",
        reference:
          "In general, do not hype a study by listing the names, credentials, institutions, or other 'qualifications' of their authors.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Article sections discussing studies",
        when: "Always",
      },
      {
        id: "R2",
        description:
          "Focus article prose on what a cited study says about the gene or protein.",
        reference:
          "Article prose should focus on what a cited study says about the structure, function, clinical significance, etc. of the gene or protein, not what the gene or protein says about a particular study or the research group who conducted that study.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Main content sections",
        when: "Always",
      },
      {
        id: "R3",
        description:
          "Mention notable contributions and discoveries in the history section.",
        reference:
          "Particularly notable contributions along with who made the discovery however should be mentioned in the discovery/history section.",
        category: "Content",
        classification: "Best Practices",
        where: "History/Discovery section",
        when: "When notable contributions exist",
      },
      {
        id: "R4",
        description:
          "Use the recommended UniProt protein name as the article name if it is relatively short.",
        reference:
          "If relatively short, the recommended UniProt protein name should be used as the article name.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Article title",
        when: "When the UniProt name is relatively short",
      },
      {
        id: "R5",
        description:
          "Use a protein acronym or official HUGO gene symbol with '(gene)' if the protein name is verbose.",
        reference:
          "If the protein name is verbose, either a widely used protein acronym or the official HUGO gene symbol, followed by '(gene)' if necessary to disambiguate.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Article title",
        when: "When the UniProt name is verbose",
      },
      {
        id: "R6",
        description:
          "Include the taxon in the title for viral protein articles.",
        reference:
          "If the article is about a viral protein, it is recommended to include the taxon in the title.",
        category: "Content",
        classification: "Best Practices",
        where: "Article title",
        when: "For viral protein articles",
      },
      {
        id: "R7",
        description:
          "Do not consider parenthesized disambiguation as unnecessary.",
        reference:
          "A parenthesized term added to disambiguate common symbols does not constitute unnecessary disambiguation even when it is the only article with such a name.",
        category: "Content",
        classification: "Best Practices",
        where: "Article title",
        when: "When disambiguating common symbols",
      },
      {
        id: "R8",
        description:
          "Use HUGO Gene Nomenclature Committee abbreviations in italic font.",
        reference:
          "The abbreviations of genes are according to HUGO Gene Nomenclature Committee and written in ''italic'' font style.",
        category: "Language Usage",
        classification: "Imperative Standards",
        where: "Gene nomenclature in text",
        when: "Always when mentioning gene abbreviations",
      },
      {
        id: "R9",
        description: "Prefer abbreviations over full gene names.",
        reference:
          "It is recommended that abbreviations instead of the full name are used.",
        category: "Language Usage",
        classification: "Best Practices",
        where: "Throughout the article",
        when: "When referring to genes",
      },
      {
        id: "R10",
        description: "Write human gene names in all capitals.",
        reference:
          "Human gene names are written in capitals, for example 'ALDOA', 'INS', etc.",
        category: "Language Usage",
        classification: "Imperative Standards",
        where: "Gene names in text",
        when: "Always for human genes",
      },
      {
        id: "R11",
        description:
          "Capitalize only the initial letter for orthologs in other species.",
        reference:
          "For orthologs of human genes in other species, only the initial letter is capitalised, for example mouse 'Aldoa', bovine 'Ins', etc.",
        category: "Language Usage",
        classification: "Imperative Standards",
        where: "Gene names in text",
        when: "When referring to orthologs in other species",
      },
      {
        id: "R12",
        description: "Use recommended usages for gene symbols.",
        reference:
          "The following usages of gene symbols are recommended: the ALDOA gene is regulated..., the rat gene for Aldoa is regulated... or ''ALDOA'' is regulated...",
        category: "Language Usage",
        classification: "Best Practices",
        where: "Narrative text",
        when: "When referring to gene regulation",
      },
      {
        id: "R13",
        description: "Avoid using redundant phrasing for gene symbols.",
        reference: "the gene ''ALDOA'' is regulated since it is redundant.",
        category: "Language Usage",
        classification: "Best Practices",
        where: "Narrative text",
        when: "When referring to gene regulation",
      },
      {
        id: "R14",
        description: "Maintain standard format for diagrams where possible.",
        reference: "Where possible, diagrams should keep to a standard format.",
        category: "Formatting",
        classification: "Imperative Standards",
        where: "Images and diagrams",
        when: "Always when including diagrams",
      },
      {
        id: "R15",
        description:
          "Suggest expansions to standardized formatting if diagram guide is insufficient.",
        reference:
          "If the diagram guide does not give sufficient guidance on the style for the images in an article, consider suggesting expansions to the standardised formatting.",
        category: "Formatting",
        classification: "Best Practices",
        where: "Images and diagrams",
        when: "When existing guidelines are insufficient",
      },
      {
        id: "R16",
        description:
          "Include one or more appropriate infoboxes at the top of each article.",
        reference:
          "One or more of the following infoboxes as appropriate should be included at the top of each article:",
        category: "Infoboxes",
        classification: "Imperative Standards",
        where: "Top of the article",
        when: "Always when applicable",
      },
      {
        id: "R17",
        description:
          "Add enzyme infobox if only one human paralog is assigned to an EC number.",
        reference:
          "If there is only one human paralog assigned to a given EC number..., then in addition to a protein infobox, it may be appropriate to also add the corresponding enzyme infobox.",
        category: "Infoboxes",
        classification: "Best Practices",
        where: "Top of the article",
        when: "When one human paralog is assigned to an EC number",
      },
      {
        id: "R18",
        description:
          "Include a protein family infobox if only one human paralog is assigned to a Pfam family.",
        reference:
          "Likewise, if there is only one human paralog that has been assigned to Pfam family, then including a protein family infobox may also be appropriate.",
        category: "Infoboxes",
        classification: "Best Practices",
        where: "Top of the article",
        when: "When one human paralog is assigned to a Pfam family",
      },
      {
        id: "R19",
        description:
          "Limit the number of infoboxes and place less useful ones in a table section at the end.",
        reference:
          "There exist some cases where a large number of infoboxes may apply to an article. You may put less useful ones in a section at the end, laid side-by-side with a table.",
        category: "Infoboxes",
        classification: "Best Practices",
        where: "End of the article",
        when: "When multiple infoboxes are applicable",
      },
      {
        id: "R20",
        description: "Include the lead section before the first headline.",
        reference:
          "The lead section is defined as 'the section before the first headline. The table of contents, if displayed, appears between the lead section and the first headline.'",
        category: "Structure",
        classification: "Imperative Standards",
        where: "Top of the article",
        when: "Always",
      },
      {
        id: "R21",
        description:
          "Define the scope of the article in the first sentence of the lead.",
        reference:
          "The first sentence of the lead should define what the scope of the article is.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "First sentence of the lead",
        when: "Always",
      },
      {
        id: "R22",
        description:
          "Provide specific gene information without unnecessary repetition from the infobox.",
        reference:
          "Specific information about the gene... should not be unnecessarily repeated in this section unless especially notable.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Gene section",
        when: "When information is already in the infobox",
      },
      {
        id: "R23",
        description:
          "Provide specific protein information without unnecessary repetition from the infobox.",
        reference:
          "Specific information about the protein... should not be unnecessarily repeated unless especially notable.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Protein section",
        when: "When information is already in the infobox",
      },
      {
        id: "R24",
        description:
          "Include 'Species, tissue, and subcellular distribution' as an optional section.",
        reference:
          "Optional section that concisely describes what species this gene is expressed..., what tissue the protein is expressed, and which subcellular compartments or organelles the protein is found...",
        category: "Structure",
        classification: "Flexible Guidelines",
        where: "Content section",
        when: "When relevant information is available",
      },
      {
        id: "R25",
        description:
          "Include a 'Function' section to describe the protein's function.",
        reference: "Describe the function of the transcribed protein.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Content section",
        when: "Always",
      },
      {
        id: "R26",
        description:
          "Include 'Interactions' as an optional section listing protein interactions.",
        reference:
          "Optional section that lists proteins that the protein that is the subject of the article is known to interact with.",
        category: "Structure",
        classification: "Flexible Guidelines",
        where: "Content section",
        when: "When interaction information is available",
      },
      {
        id: "R27",
        description:
          "Include 'Clinical significance' section listing related diseases or conditions.",
        reference:
          "List diseases or conditions that are a result of a mutation in the gene or a deficiency or excess of the expressed protein.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Clinical significance section",
        when: "When applicable",
      },
      {
        id: "R28",
        description:
          "Do not mention research groups or institutions directly in the article text.",
        reference:
          "In general, it is not appropriate to mention the research group or institution that conducted a study directly in the text of the article.",
        category: "Content",
        classification: "Imperative Standards",
        where: "Narrative text",
        when: "Always",
      },
      {
        id: "R29",
        description: "List names of key discoverers in the history section.",
        reference:
          "However it is appropriate to list the names of those who made key discoveries concerning the gene or protein in this section.",
        category: "Content",
        classification: "Imperative Standards",
        where: "History/Discovery section",
        when: "When key discoveries exist",
      },
      {
        id: "R30",
        description:
          "Link the article to the appropriate Wikidata item based on the first sentence of the lead.",
        reference:
          "The Wikipedia article should be linked to a Wikidata item of the entity first mentioned in the first sentence of the lead section...",
        category: "Citations",
        classification: "Imperative Standards",
        where: "Wikidata linkage",
        when: "Always",
      },
      {
        id: "R31",
        description:
          "Use inline citations densely with <ref> tags or parenthetical citations.",
        reference:
          "MCB articles should be relatively dense with inline citations, using either <ref> tags (footnotes) or parenthetical citations.",
        category: "Citations",
        classification: "Imperative Standards",
        where: "Throughout the article",
        when: "Always",
      },
      {
        id: "R32",
        description:
          "Do not use non-specific general references in the References section.",
        reference:
          "It is not acceptable to write substantial amounts of prose and then add your textbook to the References section as a non-specific or general reference.",
        category: "Citations",
        classification: "Imperative Standards",
        where: "References section",
        when: "Always",
      },
      {
        id: "R33",
        description:
          "Maintain consistent citation formatting within an article.",
        reference:
          "There is no standard for formatting citations on Wikipedia, but the format should be consistent within any one article.",
        category: "Citations",
        classification: "Imperative Standards",
        where: "Throughout the article",
        when: "Always",
      },
      {
        id: "R34",
        description:
          "Prefer using citation templates for better control over presentation.",
        reference:
          "Some editors prefer to use citation templates such as {{Cite journal}}, {{Cite book}}, etc.",
        category: "Citations",
        classification: "Best Practices",
        where: "Throughout the article",
        when: "When formatting citations",
      },
      {
        id: "R35",
        description: "Supply hyperlinks in citations when available.",
        reference:
          "In addition to the standard citation text, it is useful to supply hyperlinks...",
        category: "Citations",
        classification: "Best Practices",
        where: "In citation templates",
        when: "When hyperlinks are available",
      },
      {
        id: "R36",
        description:
          "Avoid adding 'Retrieved on' dates for convenience links to online journals.",
        reference:
          "Do not add a 'Retrieved on' date for convenience links to online editions of paper journals...",
        category: "Citations",
        classification: "Imperative Standards",
        where: "In citation templates",
        when: "When linking to online editions of paper journals",
      },
      {
        id: "R37",
        description:
          "Link articles about related proteins using navigation boxes.",
        reference:
          "Articles about related proteins may be cross linked by including one or more navigation boxes as appropriate.",
        category: "Structure",
        classification: "Best Practices",
        where: "End of the article",
        when: "When articles are related",
      },
      {
        id: "R38",
        description: "Add each article to at least one appropriate category.",
        reference:
          "Every Wikipedia article should be added to at least one category.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "Article metadata",
        when: "Always",
      },
    ],
    Formatting: [
      {
        id: "R14",
        description: "Maintain standard format for diagrams where possible.",
        reference: "Where possible, diagrams should keep to a standard format.",
        category: "Formatting",
        classification: "Imperative Standards",
        where: "Images and diagrams",
        when: "Always when including diagrams",
      },
      {
        id: "R15",
        description:
          "Suggest expansions to standardized formatting if diagram guide is insufficient.",
        reference:
          "If the diagram guide does not give sufficient guidance on the style for the images in an article, consider suggesting expansions to the standardised formatting.",
        category: "Formatting",
        classification: "Best Practices",
        where: "Images and diagrams",
        when: "When existing guidelines are insufficient",
      },
    ],
    Infoboxes: [
      {
        id: "R16",
        description:
          "Include one or more appropriate infoboxes at the top of each article.",
        reference:
          "One or more of the following infoboxes as appropriate should be included at the top of each article:",
        category: "Infoboxes",
        classification: "Imperative Standards",
        where: "Top of the article",
        when: "Always when applicable",
      },
      {
        id: "R17",
        description:
          "Add enzyme infobox if only one human paralog is assigned to an EC number.",
        reference:
          "If there is only one human paralog assigned to a given EC number..., then in addition to a protein infobox, it may be appropriate to also add the corresponding enzyme infobox.",
        category: "Infoboxes",
        classification: "Best Practices",
        where: "Top of the article",
        when: "When one human paralog is assigned to an EC number",
      },
      {
        id: "R18",
        description:
          "Include a protein family infobox if only one human paralog is assigned to a Pfam family.",
        reference:
          "Likewise, if there is only one human paralog that has been assigned to Pfam family, then including a protein family infobox may also be appropriate.",
        category: "Infoboxes",
        classification: "Best Practices",
        where: "Top of the article",
        when: "When one human paralog is assigned to a Pfam family",
      },
      {
        id: "R19",
        description:
          "Limit the number of infoboxes and place less useful ones in a table section at the end.",
        reference:
          "There exist some cases where a large number of infoboxes may apply to an article. You may put less useful ones in a section at the end, laid side-by-side with a table.",
        category: "Infoboxes",
        classification: "Best Practices",
        where: "End of the article",
        when: "When multiple infoboxes are applicable",
      },
    ],
    "Language Usage": [
      {
        id: "R8",
        description:
          "Use HUGO Gene Nomenclature Committee abbreviations in italic font.",
        reference:
          "The abbreviations of genes are according to HUGO Gene Nomenclature Committee and written in ''italic'' font style.",
        category: "Language Usage",
        classification: "Imperative Standards",
        where: "Gene nomenclature in text",
        when: "Always when mentioning gene abbreviations",
      },
      {
        id: "R9",
        description: "Prefer abbreviations over full gene names.",
        reference:
          "It is recommended that abbreviations instead of the full name are used.",
        category: "Language Usage",
        classification: "Best Practices",
        where: "Throughout the article",
        when: "When referring to genes",
      },
      {
        id: "R10",
        description: "Write human gene names in all capitals.",
        reference:
          "Human gene names are written in capitals, for example 'ALDOA', 'INS', etc.",
        category: "Language Usage",
        classification: "Imperative Standards",
        where: "Gene names in text",
        when: "Always for human genes",
      },
      {
        id: "R11",
        description:
          "Capitalize only the initial letter for orthologs in other species.",
        reference:
          "For orthologs of human genes in other species, only the initial letter is capitalised, for example mouse 'Aldoa', bovine 'Ins', etc.",
        category: "Language Usage",
        classification: "Imperative Standards",
        where: "Gene names in text",
        when: "When referring to orthologs in other species",
      },
      {
        id: "R12",
        description: "Use recommended usages for gene symbols.",
        reference:
          "The following usages of gene symbols are recommended: the ALDOA gene is regulated..., the rat gene for Aldoa is regulated... or ''ALDOA'' is regulated...",
        category: "Language Usage",
        classification: "Best Practices",
        where: "Narrative text",
        when: "When referring to gene regulation",
      },
      {
        id: "R13",
        description: "Avoid using redundant phrasing for gene symbols.",
        reference: "the gene ''ALDOA'' is regulated since it is redundant.",
        category: "Language Usage",
        classification: "Best Practices",
        where: "Narrative text",
        when: "When referring to gene regulation",
      },
    ],
    Citations: [
      {
        id: "R30",
        description:
          "Link the article to the appropriate Wikidata item based on the first sentence of the lead.",
        reference:
          "The Wikipedia article should be linked to a Wikidata item of the entity first mentioned in the first sentence of the lead section...",
        category: "Citations",
        classification: "Imperative Standards",
        where: "Wikidata linkage",
        when: "Always",
      },
      {
        id: "R31",
        description:
          "Use inline citations densely with <ref> tags or parenthetical citations.",
        reference:
          "MCB articles should be relatively dense with inline citations, using either <ref> tags (footnotes) or parenthetical citations.",
        category: "Citations",
        classification: "Imperative Standards",
        where: "Throughout the article",
        when: "Always",
      },
      {
        id: "R32",
        description:
          "Do not use non-specific general references in the References section.",
        reference:
          "It is not acceptable to write substantial amounts of prose and then add your textbook to the References section as a non-specific or general reference.",
        category: "Citations",
        classification: "Imperative Standards",
        where: "References section",
        when: "Always",
      },
      {
        id: "R33",
        description:
          "Maintain consistent citation formatting within an article.",
        reference:
          "There is no standard for formatting citations on Wikipedia, but the format should be consistent within any one article.",
        category: "Citations",
        classification: "Imperative Standards",
        where: "Throughout the article",
        when: "Always",
      },
      {
        id: "R34",
        description:
          "Prefer using citation templates for better control over presentation.",
        reference:
          "Some editors prefer to use citation templates such as {{Cite journal}}, {{Cite book}}, etc.",
        category: "Citations",
        classification: "Best Practices",
        where: "Throughout the article",
        when: "When formatting citations",
      },
      {
        id: "R35",
        description: "Supply hyperlinks in citations when available.",
        reference:
          "In addition to the standard citation text, it is useful to supply hyperlinks...",
        category: "Citations",
        classification: "Best Practices",
        where: "In citation templates",
        when: "When hyperlinks are available",
      },
      {
        id: "R36",
        description:
          "Avoid adding 'Retrieved on' dates for convenience links to online journals.",
        reference:
          "Do not add a 'Retrieved on' date for convenience links to online editions of paper journals...",
        category: "Citations",
        classification: "Imperative Standards",
        where: "In citation templates",
        when: "When linking to online editions of paper journals",
      },
    ],
    Structure: [
      {
        id: "R20",
        description: "Include the lead section before the first headline.",
        reference:
          "The lead section is defined as 'the section before the first headline. The table of contents, if displayed, appears between the lead section and the first headline.'",
        category: "Structure",
        classification: "Imperative Standards",
        where: "Top of the article",
        when: "Always",
      },
      {
        id: "R21",
        description:
          "Define the scope of the article in the first sentence of the lead.",
        reference:
          "The first sentence of the lead should define what the scope of the article is.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "First sentence of the lead",
        when: "Always",
      },
      {
        id: "R24",
        description:
          "Include 'Species, tissue, and subcellular distribution' as an optional section.",
        reference:
          "Optional section that concisely describes what species this gene is expressed..., what tissue the protein is expressed, and which subcellular compartments or organelles the protein is found...",
        category: "Structure",
        classification: "Flexible Guidelines",
        where: "Content section",
        when: "When relevant information is available",
      },
      {
        id: "R25",
        description:
          "Include a 'Function' section to describe the protein's function.",
        reference: "Describe the function of the transcribed protein.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "Content section",
        when: "Always",
      },
      {
        id: "R26",
        description:
          "Include 'Interactions' as an optional section listing protein interactions.",
        reference:
          "Optional section that lists proteins that the protein that is the subject of the article is known to interact with.",
        category: "Structure",
        classification: "Flexible Guidelines",
        where: "Content section",
        when: "When interaction information is available",
      },
      {
        id: "R27",
        description:
          "Include 'Clinical significance' section listing related diseases or conditions.",
        reference:
          "List diseases or conditions that are a result of a mutation in the gene or a deficiency or excess of the expressed protein.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "Clinical significance section",
        when: "When applicable",
      },
      {
        id: "R28",
        description:
          "Do not mention research groups or institutions directly in the article text.",
        reference:
          "In general, it is not appropriate to mention the research group or institution that conducted a study directly in the text of the article.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "Narrative text",
        when: "Always",
      },
      {
        id: "R29",
        description: "List names of key discoverers in the history section.",
        reference:
          "However it is appropriate to list the names of those who made key discoveries concerning the gene or protein in this section.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "History/Discovery section",
        when: "When key discoveries exist",
      },
      {
        id: "R37",
        description:
          "Link articles about related proteins using navigation boxes.",
        reference:
          "Articles about related proteins may be cross linked by including one or more navigation boxes as appropriate.",
        category: "Structure",
        classification: "Best Practices",
        where: "End of the article",
        when: "When articles are related",
      },
      {
        id: "R38",
        description: "Add each article to at least one appropriate category.",
        reference:
          "Every Wikipedia article should be added to at least one category.",
        category: "Structure",
        classification: "Imperative Standards",
        where: "Article metadata",
        when: "Always",
      },
    ],
  },
} as const;
