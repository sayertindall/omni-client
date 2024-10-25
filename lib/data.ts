import { RequirementsIndex } from "./types";
import { processRefs } from "./utils";

export const articleData = [
  {
    title: "WikiCrow Article: ABCC11",
    content: "",
    hierarchy: "ADCYAP1",
  },
  {
    title: "Overview",
    content:
      "ADCYAP1 is a gene that encodes the protein adenylate cyclase activating polypeptide 1 (PACAP), which is a member of the secretin/glucagon superfamily. This protein functions as a neuropeptide and growth factor, influencing numerous physiological processes including neurodevelopment, neuroprotection, memory, and learning. PACAP is widely distributed in the central and peripheral nervous systems and is also found in various peripheral organs. The protein interacts with specific high-affinity receptors, leading to the activation of adenylate cyclase and the production of cyclic AMP, an important second messenger in cellular signaling pathways (Acquaah-Mensah2012PACAP). The gene and its protein product are crucial in the study of neurological disorders, metabolic regulation, and reproductive functions, making it a significant focus in both basic and clinical research (Ressler2011Post-traumatic; Gu2002Genetic).",
    hierarchy: "ADCYAP1 > Overview",
  },
  {
    title: "Function",
    content:
      "The ADCYAP1 gene encodes the pituitary adenylate cyclase-activating polypeptide (PACAP), which is a neuropeptide with a broad range of functions in cell signaling and organismal physiology. PACAP is involved in the regulation of gonadotropin biosynthesis and secretion, acting both independently and in conjunction with gonadotropin-releasing hormone (GNRH). It stimulates the secretion of luteinizing hormone (LH) and follicle-stimulating hormone (FSH) by activating the cAMP/protein kinase A signaling pathway in pituitary cells. This activation enhances the expression of several genes in gonadotropes, including those for the alpha subunit of gonadotropins, LH beta, FSH beta, and the GNRH receptor (Thomas2013GATA).  Additionally, PACAP plays a significant role in nerve regeneration and cellular communication. It is expressed in medium-sized DRG neurons and is upregulated during the regenerative process following nerve injury. PACAP enhances neurite outgrowth in human induced pluripotent stem cell-derived sensory neurons, indicating its role in promoting neural health and recovery (Baskozos2020Molecular).  In the context of metabolic regulation, PACAP influences insulin secretion and overall energy homeostasis. It is crucial for stimulating insulin secretion in a glucose-dependent manner, particularly significant in pancreatic islet actions and mechanisms (Gu2002Genetic). This multifaceted peptide thus plays critical roles in hormonal regulation, nerve regeneration, and metabolic processes, impacting various physiological outcomes in human health.",
    hierarchy: "ADCYAP1 > Function",
  },
  {
    title: "Clinical Significance",
    content:
      "ADCYAP1, also known as adenylate cyclase activating polypeptide 1, has been implicated in various clinical conditions primarily related to its role in stress responses and metabolic regulation. Variations in the ADCYAP1 gene, particularly the rs2267735 SNP, have been linked to post-traumatic stress disorder (PTSD) in females. This SNP, located in a putative estrogen response element of the ADCYAP1R1 gene, correlates with PTSD diagnosis and symptoms, including impaired fear discrimination and increased startle responses in dark conditions (Ressler2011Post-traumatic). Methylation of the ADCYAP1R1 gene, which affects gene expression, has also been associated with PTSD symptoms, suggesting that epigenetic modifications play a significant role in the gene's function in stress response (Ressler2011Post-traumatic; Nöthling2021Genome-wide).  In addition to its association with PTSD, ADCYAP1 has been studied in the context of metabolic disorders. Genetic variations in ADCYAP1 have been screened in type 2 diabetic patients, although findings have shown no significant transmission distortion of these variations in families (Gu2002Genetic). Furthermore, studies in mice have demonstrated that deficiency in ADCYAP1 leads to hypoinsulinemia, increased insulin sensitivity, and altered body weight and adipose tissue mass, indicating its potential role in energy metabolism and obesity (Tomimoto2008Markedly).  These findings underscore the clinical significance of ADCYAP1 in both neuropsychiatric and metabolic conditions, highlighting its potential as a target for therapeutic interventions in these areas.",
    hierarchy: "ADCYAP1 > Clinical Significance",
  },
  {
    title: "Interactions",
    content:
      "ADCYAP1, encoded by the Adcyap1 gene, interacts with various proteins that play significant roles in biological and psychiatric contexts. One of the primary interactions is with adenylate cyclase, specifically the isoform ADCY7, which is crucial for the conversion of ATP to cAMP, a key signaling molecule in many cellular processes (Acquaah-Mensah2012PACAP). Additionally, ADCYAP1 is involved in a network of protein-protein interactions with kinases such as GSK3B, PIK3CA, SGK3, and AMPK, which are integral to signaling pathways associated with neuronal survival and psychiatric disorders such as major depression (Acquaah-Mensah2012PACAP).  The protein also forms part of a transcriptional regulatory network, where it interacts with other gene products. This network includes feed-forward loops and regulatory motifs that are essential for understanding the functional dynamics of these proteins in psychiatric disorders (Acquaah-Mensah2012PACAP). Furthermore, ADCYAP1's interactions extend to the transcriptional level, where it is co-regulated with other genes, suggesting potential transcriptional regulatory relationships or direct regulation by shared factors (Acquaah-Mensah2012PACAP).  These interactions highlight the multifunctional role of ADCYAP1 in cellular signaling and regulation, underscoring its importance in both normal physiological processes and in the pathology of various disorders.",
    hierarchy: "ADCYAP1 > Interactions",
  },
  {
    title: "References",
    content: "",
    hierarchy: "ADCYAP1 > References",
    citations: processRefs(
      "[1. (Toyoda2009Earwax) Yu Toyoda, Aki Sakurai, Yasumasa Mitani, Masahiro Nakashima, Koh-ichiro Yoshiura, Hiroshi Nakagawa, Yasuo Sakai, Ikuko Ota, Alexander Lezhava, Yoshihide Hayashizaki, Norio Niikawa, and Toshihisa Ishikawa. Earwax, osmidrosis, and breast cancer: why does one snp (538g&gt;a) in the human abc transporter abcc11 gene determine earwax type? The FASEB Journal, 23(6):2001–2013, April 2009. URL: http://dx.doi.org/10.1096/fj.09-129098, doi:10.1096/fj.09-129098. This article has 67 citations.](https://doi.org/10.1096/fj.09-129098)[2. (Bortfeld2006Human) M. Bortfeld, M. Rius, J. König, C. Herold-Mende, A.T. Nies, and D. Keppler. Human multidrug resistance protein 8 (mrp8/abcc11), an apical efflux pump for steroid sulfates, is an axonal protein of the cns and peripheral nervous system. Neuroscience, 137(4):1247–1257, 2006. URL: http://dx.doi.org/10.1016/j.neuroscience.2005.10.025, doi:10.1016/j.neuroscience.2005.10.025. This article has 68 citations and is from a domain leading peer-reviewed journal.](https://doi.org/10.1016/j.neuroscience.2005.10.025)[3. (Toyoda2016Regulation) Yu Toyoda, Tappei Takada, Hiroshi Miyata, Toshihisa Ishikawa, and Hiroshi Suzuki. Regulation of the axillary osmidrosis-associated abcc11 protein stability by n-linked glycosylation: effect of glucose condition. PLOS ONE, 11(6):e0157172, June 2016. URL: http://dx.doi.org/10.1371/journal.pone.0157172, doi:10.1371/journal.pone.0157172. This article has 16 citations and is from a peer-reviewed journal.](https://doi.org/10.1371/journal.pone.0157172)[4. (Ishikawa2015Human) Toshihisa Ishikawa and Yu Toyoda. Human ABC Transporter ABCC11: Looking Back Pioneers’ Odyssey and Creating a New Path Toward Clinical Application, pages 297–318. Springer International Publishing, December 2015. URL: http://dx.doi.org/10.1007/978-3-319-23476-2_12, doi:10.1007/978-3-319-23476-2_12. This article has 1 citations.](https://doi.org/10.1007/978-3-319-23476-2_12)[5. (Yabuuchi2001Multiple) Hikaru Yabuuchi, Hidetada Shimizu, Shin-ichiro Takayanagi, and Toshihisa Ishikawa. Multiple splicing variants of two new human atp-binding cassette transporters, abcc11 and abcc12. Biochemical and Biophysical Research Communications, 288(4):933–939, November 2001. URL: http://dx.doi.org/10.1006/bbrc.2001.5865, doi:10.1006/bbrc.2001.5865. This article has 75 citations and is from a peer-reviewed journal.](https://doi.org/10.1006/bbrc.2001.5865)[6. (Ishikawa2013Pharmacogenetics) Toshihisa Ishikawa, Yu Toyoda, Koh-ichiro Yoshiura, and Norio Niikawa. Pharmacogenetics of human abc transporter abcc11: new insights into apocrine gland growth and metabolite secretion. Frontiers in Genetics, 2013. URL: http://dx.doi.org/10.3389/fgene.2012.00306, doi:10.3389/fgene.2012.00306. This article has 13 citations and is from a peer-reviewed journal.](https://doi.org/10.3389/fgene.2012.00306)[7. (Inoue2010Correlation) Y. Inoue, T. Mori, Y. Toyoda, A. Sakurai, T. Ishikawa, Y. Mitani, Y. Hayashizaki, Y. Yoshimura, H. Kurahashi, and Y. Sakai. Correlation of axillary osmidrosis to a snp in the abcc11 gene determined by the smart amplification process (smartamp) method. Journal of Plastic, Reconstructive &amp; Aesthetic Surgery, 63(8):1369–1374, August 2010. URL: http://dx.doi.org/10.1016/j.bjps.2009.06.029, doi:10.1016/j.bjps.2009.06.029. This article has 22 citations.](https://doi.org/10.1016/j.bjps.2009.06.029)[8. (Uemura2019ABCC11) Takehiro Uemura, Tetsuya Oguri, Ken Maeno, Kazuki Sone, Akira Takeuchi, Satoshi Fukuda, Eiji Kunii, Osamu Takakuwa, Yoshihiro Kanemitsu, Hirotsugu Ohkubo, Masaya Takemura, Yutaka Ito, and Akio Niimi. Abcc11 gene polymorphism as a potential predictive biomarker for an oral 5-fluorouracil derivative drug s-1 treatment in non-small cell lung cancer. Cancer Chemotherapy and Pharmacology, 84(6):1229–1239, September 2019. URL: http://dx.doi.org/10.1007/s00280-019-03959-3, doi:10.1007/s00280-019-03959-3. This article has 4 citations and is from a peer-reviewed journal.](https://doi.org/10.1007/s00280-019-03959-3)[9. (Yamada2013High) Akimitsu Yamada, Takashi Ishikawa, Ikuko Ota, Mariko Kimura, Daisuke Shimizu, Mikiko Tanabe, Takashi Chishima, Takeshi Sasaki, Yasushi Ichikawa, Satoshi Morita, Koh-ichiro Yoshiura, Kazuaki Takabe, and Itaru Endo. High expression of atp-binding cassette transporter abcc11 in breast tumors is associated with aggressive subtypes and low disease-free survival. Breast Cancer Research and Treatment, 137(3):773–782, January 2013. URL: http://dx.doi.org/10.1007/s10549-012-2398-5, doi:10.1007/s10549-012-2398-5. This article has 88 citations and is from a peer-reviewed journal.](https://doi.org/10.1007/s10549-012-2398-5)[10. (Martin2010A) Annette Martin, Matthias Saathoff, Fabian Kuhn, Heiner Max, Lara Terstegen, and Andreas Natsch. A functional abcc11 allele is essential in the biochemical formation of human axillary odor. Journal of Investigative Dermatology, 130(2):529–540, February 2010. URL: http://dx.doi.org/10.1038/jid.2009.254, doi:10.1038/jid.2009.254. This article has 130 citations and is from a highest quality peer-reviewed journal.](https://doi.org/10.1038/jid.2009.254)[11. (Tammur2001Two) Jaana Tammur, Catherine Prades, Isabelle Arnould, Andrey Rzhetsky, Amy Hutchinson, Masashi Adachi, John D. Schuetz, Kathryn J. Swoboda, Louis J. Ptáček, Marie Rosier, Michael Dean, and Rando Allikmets. Two new genes from the human atp-binding cassette transporter superfamily, abcc11 and abcc12, tandemly duplicated on chromosome 16q12. Gene, 273(1):89–96, July 2001. URL: http://dx.doi.org/10.1016/s0378-1119(01)00572-8, doi:10.1016/s0378-1119(01)00572-8. This article has 108 citations and is from a peer-reviewed journal.](https://doi.org/10.1016/s0378-1119(01)00572-8)"
    ),
  },
];
export const feedbackData = [
  {
    title: "ABCC11",
    content: "",
    hierarchy: "ABCC11",
    feedback: {
      Citations: [],
      Content: [],
      Infoboxes: [],
      "Images and Diagrams": [
        {
          title: "ABCC11",
          requirement_evaluations: [],
          meta_notes:
            "The section is empty and no evaluation is needed. Once content is added, requirements related to diagrams and standardized formatting, if applicable, should be assessed.",
        },
      ],
      "Language Usage": [],
      Formatting: [],
      Structure: [],
    },
  },
  {
    title: "Overview",
    content:
      "The ABCC11 gene encodes the ATP-binding cassette subfamily C member 11 protein, a transmembrane efflux transporter that plays a critical role in the transport of various lipophilic compounds across cell membranes. This protein is part of the larger family of ATP-binding cassette (ABC) transporters, which utilize the energy from ATP hydrolysis to translocate substrates. ABCC11 is involved in several physiological processes, including the secretion of cerumen in the ear and apocrine sweat in the axillae, which affects body odor characteristics. The protein's functionality is influenced by genetic polymorphisms, notably the SNP 538G>A, which has implications in conditions like axillary osmidrosis and influences the pharmacogenetics of certain drugs (Ishikawa2013Pharmacogenetics; Toyoda2009Earwax).",
    hierarchy: "ABCC11 > Overview",
    feedback: {
      Infoboxes: [
        {
          title: "Overview",
          requirement_evaluations: [
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "Applicable because the article is about a gene/protein.",
              score: 0.0,
              confidence: 1.0,
              evidence: "The section lacks an infobox for the gene/protein.",
              reasoning:
                "No infobox is included, which is essential for quickly summarizing key facts.",
              overlap_notes: "No overlap with infobox data as it is missing.",
            },
            {
              requirement_id: "R13",
              applicable: true,
              applicability_reasoning:
                "Applicable when an infobox is relevant to summarize key facts.",
              score: 0.0,
              confidence: 1.0,
              evidence: "No infobox is present in the section.",
              reasoning:
                "The absence of an infobox means the requirement for summarizing key facts is unmet.",
              overlap_notes: "No overlap with infobox data as it is missing.",
            },
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Always applicable as the article discusses a gene/protein.",
              score: 0.0,
              confidence: 1.0,
              evidence: "No infobox is included at the top of the article.",
              reasoning:
                "The article does not comply with the imperative standard of including an infobox.",
              overlap_notes: "No overlap with infobox data as it is missing.",
            },
          ],
          meta_notes:
            "The `Overview` section is informative but missing critical elements like an infobox to enhance clarity and meet guideline requirements.",
        },
      ],
      Content: [
        {
          title: "Overview",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "The section serves as the lead for the article, thus a clear definition of the ABCC11 gene should be present.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The lead starts with defining the ABCC11 gene as encoding the ATP-binding cassette subfamily C member 11 protein.",
              reasoning:
                "The section provides a comprehensive definition of the gene, meeting the requirement effectively.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "The article is about a gene/protein with a human ortholog, so it should specify the protein and gene.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The overview mentions the ABCC11 gene and its product, the ATP-binding cassette subfamily C member 11 protein.",
              reasoning:
                "Strong adherence as both the gene and protein are clearly mentioned, though slight elaboration on 'human ortholog' could enhance clarity.",
              overlap_notes:
                "Aligns with the general practice for gene/protein articles.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Information about conditions related to the gene polymorphisms is included.",
              score: 1.0,
              confidence: 0.9,
              evidence:
                "Includes mention of SNP 538G>A and its implications in conditions like axillary osmidrosis.",
              reasoning:
                "The section effectively links genetic polymorphisms to associated conditions, complying fully with the requirement.",
              overlap_notes:
                "No overlap with other sections as this is specific to overview's scope.",
            },
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "The lead must summarize the main points and significance of the gene, providing a comprehensive overview.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "Details on the protein's role in physiological processes and genetic polymorphisms are included.",
              reasoning:
                "Complete adherence as the overview covers essential aspects of the ABCC11 gene's function and importance.",
              overlap_notes:
                "Information is succinct and relevant to summary purposes.",
            },
          ],
          meta_notes:
            "The section provides a clear and comprehensive introduction to the ABCC11 gene and protein. The coverage of physiological roles and genetic implications is adequate and aligned with standard practices.",
        },
      ],
      Citations: [
        {
          title: "Overview",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Applicable because the section discusses scientific information related to the ABCC11 gene, which should be supported by citations.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Citations are present for information about polymorphisms and their implications.",
              reasoning:
                "Strong adherence with minor improvements possible. The section could have additional citations for general statements.",
              overlap_notes:
                "Information overlaps with general knowledge about ATP-binding cassette transporters.",
            },
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "All statements about genetic polymorphisms and physiological processes require reliable sources for credibility.",
              score: 0.75,
              confidence: 0.8,
              evidence:
                "Citations are provided for specific claims regarding SNP 538G>A.",
              reasoning:
                "Most claims are appropriately cited. However, broader claims about physiological processes could use additional specific citations.",
              overlap_notes:
                "No significant overlaps affecting the requirement.",
            },
            {
              requirement_id: "R8",
              applicable: true,
              applicability_reasoning:
                "Specific claims regarding genetic implications are present and should be directly supported with citations.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Inline citations are used for the genetic polymorphism details.",
              reasoning:
                "There is strong adherence in providing inline citations, yet some areas can further benefit from direct citations.",
              overlap_notes: "No overlap issues regarding inline citations.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Consistency in citation formatting is essential to maintain clarity throughout the article.",
              score: 1.0,
              confidence: 0.95,
              evidence: "The section uses consistent citation formats.",
              reasoning:
                "Complete adherence as the citation format is consistently applied.",
              overlap_notes: "No citation format overlaps detected.",
            },
          ],
          meta_notes:
            "The section provides a strong overview with adequate citations. Enhancements could focus on additional citations for broad claims.",
        },
      ],
      "Images and Diagrams": [
        {
          title: "Overview",
          requirement_evaluations: [],
          meta_notes:
            "The content is well-structured and informative. No diagrams are present, so related formatting guidelines do not apply.",
        },
      ],
      Structure: [
        {
          title: "Overview",
          requirement_evaluations: [
            {
              requirement_id: "R7",
              applicable: true,
              applicability_reasoning:
                "This requirement ensures that each content section, including the Overview, follows a standard structure.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section provides a coherent summary of what the ABCC11 gene is and its functions.",
              reasoning:
                "The Overview effectively summarizes key aspects of the gene, but it could be more cohesive in separating individual topics.",
              overlap_notes: "N/A",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "This requirement is about the logical flow of content, relevant to the Overview as it sets the stage for readers.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Information on the function and implications of ABCC11 is well organized within this section.",
              reasoning:
                "There is strong adherence with minor improvements needed in structuring subtopics within the Overview.",
              overlap_notes: "N/A",
            },
            {
              requirement_id: "R14",
              applicable: true,
              applicability_reasoning:
                "Applies to all sections for maintaining clear and logical structure.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section is generally logical and clear, with identifiable subtopics.",
              reasoning:
                "The Overview presents the information effectively, but can still refine transitions between topics.",
              overlap_notes: "N/A",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "The clear and logical structure is critical to the Overview section for setting the reader\u2019s understanding.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Covered the aspects of the gene but need better focus to highlight all critical points distinctly.",
              reasoning:
                "A reasonably structured Overview that needs slight adjustments for clarity.",
              overlap_notes: "N/A",
            },
          ],
          meta_notes:
            "The Overview section is comprehensive but may benefit from clearer sub-structuring without repetition.",
        },
      ],
      Formatting: [
        {
          title: "Overview",
          requirement_evaluations: [
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Gene symbols are mentioned in the content, thus it is necessary to ensure they are italicized as per the standard formatting requirement.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The gene symbol 'ABCC11' is italicized in the section.",
              reasoning:
                "The section employs italics appropriately for gene symbols, adhering fully to the requirement.",
              overlap_notes:
                "No significant overlaps detected related to gene symbols.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Section headers should adhere to a consistent formatting style throughout the article.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section title 'Overview' is consistent with typical introductory section headers.",
              reasoning:
                "The section title's format is consistent but further evaluation across the entire document is necessary for full adherence.",
              overlap_notes: "No overlaps specific to section headings.",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "This is the introductory section, thus it logically begins the narrative on the ABCC11 gene.",
              score: 1.0,
              confidence: 0.9,
              evidence:
                "The section appropriately serves as an introduction by providing an overview of the gene's function and significance.",
              reasoning:
                "The section is well-organized as it acts as the starting point for more detailed discussions in subsequent sections.",
              overlap_notes:
                "Introductory content is expected to provide context without extensive overlaps.",
            },
          ],
          meta_notes:
            "The section effectively introduces the gene, with well-structured content, though broader consistency assessment is needed.",
        },
      ],
      "Language Usage": [
        {
          title: "Overview",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "R1 is applicable as it pertains to the correct use of gene nomenclature throughout the document.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "The gene 'ABCC11' is used correctly but it's not in italic font as prescribed by HGNC guidelines.",
              reasoning:
                "The gene is correctly abbreviated, but the font style requirement isn't met.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "R2 is relevant as it emphasizes the use of abbreviations over full gene names in scientific texts.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section consistently uses 'ABCC11' instead of the full name.",
              reasoning:
                "The section fully meets the requirement by consistently using abbreviations.",
              overlap_notes: "No overlaps noted.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "R3 is applicable as it ensures the use of all capitals for human gene names.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The gene name 'ABCC11' is correctly capitalized throughout.",
              reasoning:
                "The section adheres to the guideline for human gene capitalization.",
              overlap_notes: "No overlaps noted.",
            },
            {
              requirement_id: "R9",
              applicable: true,
              applicability_reasoning:
                "R9 is applicable as it pertains to the use of consistent English language.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "Language usage in the article is consistent, using American English.",
              reasoning:
                "The section uses consistent language style, enhancing clarity.",
              overlap_notes: "No overlaps noted.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "R10 is applicable as it pertains to maintaining an encyclopedic tone.",
              score: 1.0,
              confidence: 0.95,
              evidence: "The section does not use first-person language.",
              reasoning:
                "The section maintains an objective, third-person point of view.",
              overlap_notes: "No overlaps noted.",
            },
          ],
          meta_notes:
            "The section adheres well to most guidelines but can improve by italicizing gene names to enhance compliance with HGNC standards.",
        },
      ],
    },
  },
  {
    title: "Structure",
    content:
      "The ABCC11 protein, encoded by the ABCC11 gene, is a complex molecule primarily involved in the transport of various substances across cellular membranes. Structurally, ABCC11 is characterized by 12 transmembrane helices and two ATP-binding cassettes, which are crucial for its function as a transporter (Ishikawa2013Pharmacogenetics; Toyoda2009Earwax). These transmembrane helices form the core through which substrates are translocated across the cell membrane.  ABCC11 also features two sets of Walker A and Walker B motifs, along with two ABC signature sequences, known as 'C motifs', which are typical of ATP-binding cassette (ABC) transporters (Yabuuchi2001Multiple). The protein's topology indicates that both the N-terminus and C-terminus are located on the cytoplasmic side of the membrane, suggesting a specific orientation within the lipid bilayer (Toyoda2016Regulation).  A significant post-translational modification of ABCC11 is N-linked glycosylation, particularly at asparagine residues Asn838 and Asn844, which is essential for the protein's stability and proper functioning (Toyoda2009Earwax; Toyoda2016Regulation). This glycosylation helps in stabilizing the protein structure and maintaining its functionality within the cellular environment.  Additionally, there are splicing variants of ABCC11, such as variant A, which lacks 38 amino acids in the second ATP-binding cassette due to the absence of exon 28, potentially altering its functional capabilities (Yabuuchi2001Multiple). This variant still retains the 12 membrane-spanning domains, indicative of its role in transport but with possibly modified transporter activity.",
    hierarchy: "ABCC11 > Structure",
    feedback: {
      Infoboxes: [
        {
          title: "Structure",
          requirement_evaluations: [
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "Applicable because an infobox is relevant to summarize key facts for this gene/protein article.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "There is no mention of an infobox being included in the section.",
              reasoning:
                "The requirement is not met as the infobox, which is important for summarizing key facts, is not included in the article.",
              overlap_notes: "No overlap with other sections or data.",
            },
            {
              requirement_id: "R13",
              applicable: true,
              applicability_reasoning:
                "Infoboxes should be used to summarize key facts and this is relevant to the section's content.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "Key facts are described in text but not summarized in an infobox.",
              reasoning:
                "The requirement is not met due to the absence of an infobox, therefore the section fails to provide a clear summary of key facts in the required format.",
              overlap_notes: "No overlap with other sections.",
            },
          ],
          meta_notes:
            "Inclusion of an infobox would significantly improve the summary and quick-accessibility of information for the ABCC11 protein.",
        },
      ],
      "Language Usage": [
        {
          title: "Structure",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Applicable as gene abbreviations are used throughout the section.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "The abbreviation 'ABCC11' is used repeatedly, but there is no indication whether it is italicized.",
              reasoning:
                "Strong adherence as gene abbreviations are used, but there's no evidence of italicization as per guidelines.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "It is recommended to use abbreviations rather than full names for conciseness.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section uses 'ABCC11' instead of the full gene name throughout.",
              reasoning:
                "Complete adherence as only the abbreviation is used, meeting the requirement.",
              overlap_notes: "No overlaps detected in abbreviation usage.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Given the content, the gene names for humans should be in all capitals.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section uses 'ABCC11' following the all-capitals format.",
              reasoning:
                "The content fully complies with the requirement by using capitalized gene names as expected.",
              overlap_notes:
                "No overlapping issues concerning human gene name capitalization.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Applicable for the protein name used in the section.",
              score: 0.5,
              confidence: 0.85,
              evidence:
                "Protein name 'ABCC11' is entirely capitalized, but ideally the first letter should be capital.",
              reasoning:
                "Partial adherence since protein names should have the first letter capitalized, yet it's written in all capitals here.",
              overlap_notes:
                "Potential overlap with gene name capitalization rule.",
            },
            {
              requirement_id: "R9",
              applicable: true,
              applicability_reasoning:
                "Consistency of English language is relevant for maintaining quality.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "The section's language appears consistent, though not explicitly American or British.",
              reasoning:
                "Strong adherence with minor uncertainty in consistency of English form.",
              overlap_notes:
                "No other sections to cross-check language consistency.",
            },
          ],
          meta_notes:
            "The section largely adheres to language and gene nomenclature guidelines but needs corrections on italics for gene abbreviations and the capitalization rules for proteins.",
        },
      ],
      Content: [
        {
          title: "Structure",
          requirement_evaluations: [
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "This section details the structure of the protein, aligning with the directive to focus on what cited studies say about the structure.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "The section uses studies to explain structural features like transmembrane helices, ATP-binding cassettes, and glycosylation.",
              reasoning:
                "Strong adherence to focusing on study-cited structural elements; minor improvement needed in clarity and context.",
              overlap_notes:
                "Only informative overlaps noted with other structural discussions.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "The requirement suggests providing an overview including structure which this section does.",
              score: 0.5,
              confidence: 0.8,
              evidence:
                "The section explains the structure; however, more synthesis with function explanations could enhance it.",
              reasoning:
                "Partial adherence; some structural components explained with technical detail making synthesis harder for general audiences.",
              overlap_notes:
                "Some overlap with potential function explanations could aid comprehension.",
            },
          ],
          meta_notes:
            "While the section is detailed, minor improvements in context and clarity might help general audiences better grasp structural elements.",
        },
      ],
      Formatting: [
        {
          title: "Structure",
          requirement_evaluations: [
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning: "Gene symbols should be italicized.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "The gene symbol ABCC11 is not italicized in the section.",
              reasoning:
                "Gene symbols should be italicized as per the requirements, which is not adhered to in this content.",
              overlap_notes:
                "No overlap detected in terms of gene symbol usage.",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "Headings and subheadings should be consistent, relevant to the section organization.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section has a clear title 'Structure', consistent with discussing molecular structure.",
              reasoning:
                "The section heading is appropriately titled, with minor improvements needed in consistency across the document.",
              overlap_notes:
                "No significant overlaps detected regarding headings.",
            },
            {
              requirement_id: "R7",
              applicable: true,
              applicability_reasoning:
                "Bullet points improve readability when listing items or points.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "The section uses paragraphs to list protein features without bullet points.",
              reasoning:
                "The lack of bullet points for listing specific protein features affects readability.",
              overlap_notes:
                "No overlaps with other lists, but potential improvement in the structure noted.",
            },
          ],
          meta_notes:
            "The section covers the molecular structure well but lacks adherence to formatting guidelines such as italicizing gene symbols and using bullet points for lists. Consistency in section heading is mostly followed.",
        },
      ],
      Structure: [
        {
          title: "Structure",
          requirement_evaluations: [
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "The section needs to follow a logical structure to ensure clarity and coherence.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section presents a logical structure by detailing the ABCC11 protein's components and functions sequentially.",
              reasoning:
                "The structure is mostly logical, with minor improvements possible in transitions between subsections.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R7",
              applicable: true,
              applicability_reasoning:
                "The section is part of a larger article and should adhere to the standard structure expected in scientific articles about proteins.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "It covers the structure aspects well but lacks the broader standard elements such as lead and infobox in standalone sections.",
              reasoning:
                "The adherence to the standard scientific article structure within this section could be better integrated with the overall article structure.",
              overlap_notes:
                "Overlaps somewhat correlate with molecular biology articles.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "Clarity and logical structuring are essential for effective information dissemination.",
              score: 0.75,
              confidence: 0.8,
              evidence:
                "The content is organized in a structured manner with specific details about the protein's structure.",
              reasoning:
                "While the section maintains a clear structure overall, there are areas for improvement in terms of logical flow and transition.",
              overlap_notes:
                "Information is relevant and appropriately focused on the section's theme.",
            },
          ],
          meta_notes:
            "The 'Structure' section is mostly well-explained but could have better integration with broader article elements like infobox.",
        },
      ],
      Citations: [
        {
          title: "Structure",
          requirement_evaluations: [
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "Applicable as statements must be supported by citations throughout the article.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Most statements are supported by citations, but there are some sections where citations could be more explicit or comprehensive.",
              reasoning:
                "The section largely adheres to the requirement but could improve in providing citation for every sub-point.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R8",
              applicable: true,
              applicability_reasoning:
                "Inline citations ensure that specific claims are directly supported by evidence.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Inline citations are used for specific claims, but some claims might benefit from additional clarity.",
              reasoning:
                "There's a strong use of inline citations, though some claims might not be sufficiently covered.",
              overlap_notes: "No overlap with other sections.",
            },
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Ensures density of citations which is crucial for Molecular and Cellular Biology (MCB) articles.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "A good number of inline citations, though certain claims could be more thoroughly backed.",
              reasoning:
                "While the majority of statements are cited, there's room to increase citation density.",
              overlap_notes:
                "No significant lack of citation density detected.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Citation format consistency is essential for clarity and adherence to guideline.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "Citations throughout the section adhere to a consistent format.",
              reasoning:
                "The section completely fulfills the consistency requirement for citation formatting.",
              overlap_notes:
                "Consistent citation format throughout the section ensures clarity.",
            },
            {
              requirement_id: "R12",
              applicable: true,
              applicability_reasoning:
                "Ensures that potentially contentious statements are backed by specific citations.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "Some statements could be challenged, yet not all have inline citations.",
              reasoning:
                "The section adheres to the requirement partially, needing more citations on challenged statements.",
              overlap_notes: "Potential for citations in contentious areas.",
            },
          ],
          meta_notes:
            "The section is well-cited, but improvements could focus on increasing citation density and coverage for all claims.",
        },
      ],
      "Images and Diagrams": [
        {
          title: "Structure",
          requirement_evaluations: [],
          meta_notes:
            "This section is descriptive and does not include diagrams, so diagram-related guidelines are not applicable.",
        },
      ],
    },
  },
  {
    title: "Function",
    content:
      "The ABCC11 gene encodes the ATP-binding cassette sub-family C member 11 protein, a crucial component of the ATP-binding cassette (ABC) transporter family. This protein functions as an efflux transporter, utilizing ATP hydrolysis to transport various lipophilic anions across cell membranes. These substrates include cyclic nucleotides, glutathione conjugates, steroid sulfates, glucuronides, and bile acids, which are vital for cellular detoxification and the regulation of metabolic processes (Toyoda2016Diagnosis; Ishikawa2013Pharmacogenetics).  ABCC11 is expressed in a wide range of tissues, including apocrine glands, where it plays a significant role in the secretion processes. In the apocrine glands of the axillae, ABCC11 influences the secretion of precursor compounds for axillary odor, which are metabolized by skin bacteria into odor-causing compounds (Toyoda2010Pharmacogenomics). The protein is also involved in the secretion of ceruminous materials in the cerumen glands, impacting the type of earwax produced (Toyoda2009Earwax).  The functionality of ABCC11 is modulated by genetic polymorphisms, notably the SNP 538G>A, which can lead to variations in protein stability and function. The wild-type form of the protein undergoes N-linked glycosylation, which is essential for its stability and proper localization within the cell. In contrast, certain variants resulting from this SNP are prone to misfolding and degradation, affecting the protein's function in secretion processes (Toyoda2009Earwax). This genetic variability underscores the importance of ABCC11 in physiological processes and its implications in conditions such as axillary osmidrosis and the pharmacogenetics of drug response.",
    hierarchy: "ABCC11 > Function",
    feedback: {
      Formatting: [
        {
          title: "Function",
          requirement_evaluations: [
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Gene symbols are used extensively in this section, so it is crucial to apply italics to adhere to gene symbol formatting standards.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "Gene symbols like ABCC11 are not italicized, contrary to the formatting rule.",
              reasoning:
                "The failure to italicize gene symbols results in non-adherence to the requirement.",
              overlap_notes:
                "No significant overlaps detected in this context.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Section headers such as 'Function' must be consistently formatted across the article to maintain a professional and readable structure.",
              score: 1.0,
              confidence: 0.9,
              evidence:
                "The section header 'Function' is inline with formatting standards and consistent with expected practices.",
              reasoning:
                "Complete adherence as the section header is clear and consistent with typical formats.",
              overlap_notes:
                "Header format consistency is maintained throughout sections.",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "The section falls under the function aspect of the gene/protein article, following typical logical sequence layout.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The article logically places the 'Function' section after a presumed introduction and before detailed sections.",
              reasoning:
                "The organization follows a logical order, adhering fully to best practices.",
              overlap_notes:
                "Logical order maintained without overlap conflicts.",
            },
          ],
          meta_notes:
            "The section is informative and follows appropriate logical sequence, but fails on specific formatting aspects like italics for gene symbols.",
        },
      ],
      Structure: [
        {
          title: "Function",
          requirement_evaluations: [
            {
              requirement_id: "R7",
              applicable: true,
              applicability_reasoning:
                "This section is part of the article's structure and must adhere to the standard layout of an encyclopedia entry.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section provides a comprehensive and detailed description of the protein's function, ensuring logical flow and thorough explanation.",
              reasoning:
                "The content aligns with the purpose of a 'Function' section but could be more cohesive, integrating diverse functions into a unified narrative.",
              overlap_notes: "No significant redundancy within the section.",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "The section must be organized logically, contributing to the article's clarity and coherence.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "Details about substrate transport and genetic variability are presented, yet could be better linked.",
              reasoning:
                "Some elements lack seamless integration within this section, resulting in partial adherence.",
              overlap_notes:
                "Overlap with potential 'Genetics' section is noted, but boundary management could enhance cohesion.",
            },
            {
              requirement_id: "R14",
              applicable: true,
              applicability_reasoning:
                "A clear and logical structure is imperative across all article sections.",
              score: 0.5,
              confidence: 0.7,
              evidence:
                "Subsections are not employed to delineate aspects like substrate types and genetic variants, which might aid clarity.",
              reasoning:
                "Partial adherence due to the lack of subheadings; content organization could be enhanced.",
              overlap_notes:
                "No overlap with introductory or other major sections, but classification within would improve readability.",
            },
            {
              requirement_id: "R11",
              applicable: true,
              applicability_reasoning:
                "The section contains diverse but related topics that would benefit from subheading organization.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "No use of subheadings to separate different functional aspects of the protein.",
              reasoning:
                "There is no adherence as the section lacks subheadings, leading to a dense information layout.",
              overlap_notes:
                "Potential overlap with finer, categorized aspects; systematic subheadings may resolve this.",
            },
          ],
          meta_notes:
            "The section is rich in detail but would benefit from improved internal structuring, possibly through subheadings and connective explanations to enhance logical cohesion.",
        },
      ],
      "Language Usage": [
        {
          title: "Function",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "This section discusses the gene ABCC11, adhering to HUGO Gene Nomenclature guidelines.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The gene ABCC11 is mentioned correctly, but not in italic.",
              reasoning:
                "While the gene is referenced according to nomenclature guidelines, it fails to use italic font, slightly reducing adherence.",
              overlap_notes: "No overlap noted.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "In gene-related sections, it is best practice to use abbreviations.",
              score: 1.0,
              confidence: 1.0,
              evidence: "ABCC11 is consistently used instead of the full name.",
              reasoning:
                "The section fully adheres by using gene abbreviations throughout.",
              overlap_notes: "No overlap noted.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Human gene abbreviations should be in all capitals.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "ABCC11 is written in all capitals throughout the section.",
              reasoning:
                "The content adheres to the requirement of capital letter usage for human gene names.",
              overlap_notes: "No overlap noted.",
            },
            {
              requirement_id: "R9",
              applicable: true,
              applicability_reasoning:
                "Consistency in English variant usage is necessary.",
              score: 0.75,
              confidence: 0.8,
              evidence:
                "The article seems to use British English terms such as 'utilise'.",
              reasoning:
                "While the section mainly adheres, the use of English (British/American) could be emphasized more clearly.",
              overlap_notes: "No overlap noted.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "Maintaining an appropriate tone is required throughout.",
              score: 1.0,
              confidence: 1.0,
              evidence: "The section uses a neutral, third-person tone.",
              reasoning:
                "Full adherence is seen as first-person language is absent.",
              overlap_notes: "No overlap noted.",
            },
          ],
          meta_notes:
            "The section is informative and adheres to most guidelines but could benefit from styling gene mentions in italics.",
        },
      ],
      Infoboxes: [
        {
          title: "Function",
          requirement_evaluations: [
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "The section discusses a gene/protein, which makes it applicable to consider whether an infobox exists for summarization purposes.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "The section offers detailed information about ABCC11's function but does not reference or ensure a summary through an infobox in this specific content area.",
              reasoning:
                "Partial adherence as there's no direct reference to the inclusion of an infobox specifically supporting this content.",
              overlap_notes:
                "Content may overlap with the lead summary, but specific overlap details are not given.",
            },
            {
              requirement_id: "R13",
              applicable: true,
              applicability_reasoning:
                "Infobox relevance can be assessed by examining whether the section content is appropriately summarized, which aligns with this requirement.",
              score: 0.5,
              confidence: 0.7,
              evidence:
                "The content provides rich details that an infobox could summarize, but the current format lacks this feature for immediate reference.",
              reasoning:
                "The content meets the requirement partially, as there's an opportunity for summarization that isn't fully utilized through an infobox.",
              overlap_notes:
                "This section contributes detailed information on the gene's function, which potentially needs summarization in the lead or related infobox.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "The gene has a human ortholog, making this requirement relevant to the infobox considerations for summarizing human-related genetic information.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "The section fails to mention or link to an Infobox GNF protein, missing a direct application of this particular infobox.",
              reasoning:
                "No adherence as there is no use of Infobox GNF protein despite the applicability to human genetics discussed within the section.",
              overlap_notes:
                "The infobox should be present at the top of the article, ensuring only necessary overlaps with detailed functions here.",
            },
          ],
          meta_notes:
            "The section contains comprehensive and detailed information about the ABCC11 gene's function across various tissues. However, it lacks structured summarization through infoboxes, which could improve accessibility and clarity at a glance for readers.",
        },
      ],
      "Images and Diagrams": [
        {
          title: "Function",
          requirement_evaluations: [],
          meta_notes:
            "The section provides a detailed explanation of the ABCC11 gene's function and its genetic variability without any use of diagrams.",
        },
      ],
      Citations: [
        {
          title: "Function",
          requirement_evaluations: [
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "The section provides detailed scientific information about the ABCC11 gene, therefore requiring citations to support the claims made.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Citations are provided for most claims, e.g., 'Toyoda2016Diagnosis', but a few claims regarding the protein's functions in detoxification lack direct citation.",
              reasoning:
                "While most of the content is well-cited, there are sections discussing broader functions that would benefit from specific references.",
              overlap_notes:
                "No significant overlaps detected within this section.",
            },
            {
              requirement_id: "R8",
              applicable: true,
              applicability_reasoning:
                "Specific claims about the protein's function and genetic variability need direct supporting evidence via inline citations.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Most specific claims, such as the role in axillary odor, are supported by inline citations. However, the detail on bile acids doesn't have a clearly linked citation.",
              reasoning:
                "The section mostly adheres to the requirement, yet there could be improved linkage between claims and citations.",
              overlap_notes: "No overlaps with other sections noted.",
            },
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Being an MCB-related topic, dense inline citations are necessary to ensure the credibility of the information presented here.",
              score: 0.75,
              confidence: 0.8,
              evidence:
                "There is a significant presence of inline citations, exemplifying adherence to MCB standards.",
              reasoning:
                "Strong adherence with room for improvement in consistency across all claims.",
              overlap_notes: "No overlap issues present.",
            },
          ],
          meta_notes:
            "The Function section effectively covers the content required but should ensure more consistent citations for all detailed claims. Further, all scientific assertions need to have direct citations to avoid any potential credibility issues. Overall, it presents itself as a thoroughly researched section with opportunities to tighten citation use.",
        },
      ],
      Content: [
        {
          title: "Function",
          requirement_evaluations: [
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "The section describes the function of the transcribed protein, which is applicable for gene/protein articles.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The content describes how the ABCC11 protein functions as an efflux transporter, its role in cellular detoxification and regulation of metabolic processes.",
              reasoning:
                "The section fully adheres to the requirement by providing detailed functional information about the ABCC11 protein.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "The requirement for a neutral point of view is relevant to all sections to ensure balanced and unbiased presentation.",
              score: 1.0,
              confidence: 0.9,
              evidence:
                "The content uses neutral language to describe the protein's function and its genetic variability without any bias.",
              reasoning:
                "Complete adherence as the content maintains neutrality in describing the function and significance of ABCC11.",
              overlap_notes:
                "No overlaps with other sectional biases detected.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "It is essential to write in a way that's accessible to a general audience, especially when complicated biological processes are discussed.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Some terms like 'efflux transporter' and 'N-linked glycosylation' are used without layman explanations, which might not be clear to all readers.",
              reasoning:
                "Strong adherence, though a few technical terms could benefit from more explanation or simplification.",
              overlap_notes:
                "Technical explanations could overlap with sections on biochemical pathways if they exist.",
            },
          ],
          meta_notes:
            "The function section provides a detailed and evidence-based account of the ABCC11 protein's activity and significance, maintaining a neutral tone, and covering complex information effectively, though some technical terms could be simplified for broader understanding.",
        },
      ],
    },
  },
  {
    title: "Clinical Significance",
    content:
      "Mutations in the ABCC11 gene, specifically the 538G>A single nucleotide polymorphism (SNP), have significant clinical implications. This SNP results in an amino acid change from Glycine (Gly180) to Arginine (Arg180), affecting the protein's stability and function. The 538G>A mutation is associated with axillary osmidrosis, a condition characterized by strong body odor due to increased secretion from apocrine glands, and is covered by national health insurance in Japan due to its recognition as a disease (Toyoda2016Diagnosis; Toyoda2010Pharmacogenomics).  Furthermore, the ABCC11 gene is linked to variations in earwax type, with the 538G allele correlating with wet earwax and the 538A allele with dry earwax. These phenotypes are also associated with different risks for axillary osmidrosis (Toyoda2009Earwax).  Additionally, ABCC11 has implications in breast cancer risk. Studies have shown that the presence of the 538G allele is more frequent in breast cancer patients compared to controls, suggesting a moderate association between this allele and increased breast cancer risk (Ishikawa2013Pharmacogenetics).  The gene's role in drug metabolism also affects chemotherapy efficacy. Variants of ABCC11 can influence the efflux of nucleoside-based anticancer drugs, impacting treatment outcomes in chemotherapy (Toyoda2010Pharmacogenomics). This highlights the importance of considering ABCC11 genotypes in personalized medicine approaches for cancer treatment.",
    hierarchy: "ABCC11 > Clinical Significance",
    feedback: {
      Content: [
        {
          title: "Clinical Significance",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Applicable because the section addresses diseases linked to the ABCC11 gene mutations.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section mentions axillary osmidrosis and breast cancer risk as conditions associated with ABCC11 gene mutations.",
              reasoning:
                "The section fully provides details on conditions resulting from mutations in the gene.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Relevant because the section cites studies discussing the clinical significance of the gene.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section summarizes studies linking the 538G allele to breast cancer risk and chemotherapy outcomes.",
              reasoning:
                "The section effectively focuses on the implications of cited studies on clinical significance.",
              overlap_notes: "No overlaps with other sections.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Always applicable as the article should maintain a neutral viewpoint.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section neutrally discusses genetic implications without subjective language.",
              reasoning:
                "The section adheres to the requirement by providing information from a neutral point of view.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "Relevant because verifiable data must support claims about clinical significance.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section includes in-text citations for clinical associations but lacks direct references.",
              reasoning:
                "While studies are cited, the section could improve by explicitly listing sources.",
              overlap_notes: "No significant overlaps detected.",
            },
          ],
          meta_notes:
            "The section provides a comprehensive overview of the diseases associated with ABCC11 mutations and highlights the gene's significance in clinical contexts. Some references could be more explicit to enhance verifiability.",
        },
      ],
      Infoboxes: [
        {
          title: "Clinical Significance",
          requirement_evaluations: [
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "The content within 'Clinical Significance' relates directly to human genetics, making the relevance of an infobox treatment more contextual within the entire article scope.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "Information regarding the genetic variations (538G>A SNP) and their associations with conditions like axillary osmidrosis and breast cancer risk emphasize the gene's significance.",
              reasoning:
                "While the section provides detailed insights into the gene's implications, it lacks a summarized infobox presentation for quick reference aligned to human ortholog considerations.",
              overlap_notes:
                "Details here may overlap with general findings in other sections discussing gene implications.",
            },
          ],
          meta_notes:
            "The 'Clinical Significance' section effectively describes genetic variations and their impacts on health conditions but could benefit from an accompanying summary for a quick contextual understanding.",
        },
      ],
      "Language Usage": [
        {
          title: "Clinical Significance",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Gene abbreviations are likely present in the section, making adherence to HGNC guidelines essential.",
              score: 0.25,
              confidence: 0.8,
              evidence:
                "The gene ABCC11 is mentioned multiple times without following italic font style guidelines.",
              reasoning:
                "Minimal adherence with significant gaps as gene names are not italicized.",
              overlap_notes:
                "The requirement is specific to gene abbreviations.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "The section contains scientific content where the use of gene abbreviations rather than full names is recommended.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The abbreviation 'ABCC11' is used instead of the full name.",
              reasoning:
                "Complete adherence as abbreviations are consistently used.",
              overlap_notes:
                "This is specific to the preference for abbreviations in scientific writing.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "The section mentions human gene names, necessitating adherence to capitalization standards.",
              score: 1.0,
              confidence: 0.95,
              evidence: "Human gene name 'ABCC11' is in all capitals.",
              reasoning: "Complete adherence with no errors in capitalization.",
              overlap_notes:
                "Specific compliance with human gene naming conventions.",
            },
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "The section uses gene symbols in sentence structures necessitating correct usage.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Usage such as 'The ABCC11 gene is linked to...' follows best practices.",
              reasoning:
                "Strong adherence with occasional correct structure, though not universal.",
              overlap_notes:
                "Targeted specifically at sentence structure related to gene symbols.",
            },
            {
              requirement_id: "R9",
              applicable: true,
              applicability_reasoning:
                "Consistency in English language variant is necessary for overall clarity.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "No inconsistencies were detected in the use of national health terms.",
              reasoning:
                "Complete adherence; consistent use of English language variants.",
              overlap_notes: "Language use consistency across the section.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "As the article is encyclopedic in nature, first-person language should be avoided.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section maintains a third-person narrative throughout.",
              reasoning:
                "Complete adherence as the section uses an encyclopedic tone.",
              overlap_notes: "Encyclopedic tone maintained consistently.",
            },
          ],
          meta_notes:
            "The section adheres closely to naming and language standards but could improve in gene abbreviation formatting.",
        },
      ],
      Structure: [
        {
          title: "Clinical Significance",
          requirement_evaluations: [
            {
              requirement_id: "R7",
              applicable: true,
              applicability_reasoning:
                "This requirement is pertinent as the section discusses clinical significance of the ABCC11 gene.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "The section is clearly structured and presents information logically, but lacks clear subheadings that could improve organization.",
              reasoning:
                "The section follows a logical sequence but could benefit from using subheadings for additional clarity.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "Articles need a clear and logical structure, applicable to this section's organization.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "There is a logical progression of topics, but the integration of subheadings could further clarify the structure.",
              reasoning:
                "The section displays strong adherence with clarity in content progression, though minor improvements could be made with subheadings.",
              overlap_notes:
                "No overlaps detected in the hierarchical sequence.",
            },
            {
              requirement_id: "R11",
              applicable: true,
              applicability_reasoning:
                "Given the multiple clinical implications discussed, the use of subheadings would enhance readability.",
              score: 0.5,
              confidence: 0.8,
              evidence:
                "Subheadings are not used, which could help break down the diverse topics discussed in the section.",
              reasoning:
                "Partial adherence as subheadings could improve section organization by clearly dividing topics like axillary osmidrosis, earwax type, and breast cancer risk.",
              overlap_notes:
                "No overlap; however, introducing subheadings may emphasize distinct topics.",
            },
          ],
          meta_notes:
            "The section provides comprehensive insights on the clinical significance of the ABCC11 gene but can enhance clarity and reader engagement via strategic use of subheadings.",
        },
      ],
      "Images and Diagrams": [
        {
          title: "Clinical Significance",
          requirement_evaluations: [],
          meta_notes:
            "This section provides a comprehensive overview of the clinical significance of the ABCC11 gene without the use of images or diagrams, making the diagram-related requirements inapplicable.",
        },
      ],
      Citations: [
        {
          title: "Clinical Significance",
          requirement_evaluations: [
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "Applicable because the section includes statements that need reliable source support.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "All statements regarding genetic mutations, clinical implications, and associated conditions are backed by citations.",
              reasoning:
                "The section fully adheres by citing reliable sources for all claims.",
              overlap_notes:
                "No significant overlaps detected in source citation.",
            },
            {
              requirement_id: "R8",
              applicable: true,
              applicability_reasoning:
                "Relevant for providing direct evidence for specific claims made within the section.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Inline citations are used for specific claims regarding clinical associations and drug metabolism.",
              reasoning:
                "Strong adherence with minor room for improvement in inline citation placement.",
              overlap_notes:
                "Inline citations appear adequately utilized for specific claims.",
            },
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Relevant as the section should be dense with inline citations to support the detailed scientific content.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "Section contains multiple inline citations supporting the detailed scientific information.",
              reasoning:
                "Most statements include inline citations, but a few areas might benefit from additional references.",
              overlap_notes:
                "The citation density is appropriate for the section's complexity.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Consistency in citation format is necessary to maintain clarity and professional standards within the section.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "Citation format appears consistent but requires review for uniformity across different points in the text.",
              reasoning: "Partial adherence to consistent citation formatting.",
              overlap_notes:
                "Consistency needs to be verified in the broader context of the article.",
            },
          ],
          meta_notes:
            "The section is rich with scientific content and well-cited. Improvements could focus on citation placement and ensuring perfect consistency across all references.",
        },
      ],
      Formatting: [
        {
          title: "Clinical Significance",
          requirement_evaluations: [
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "The section contains multiple instances of gene symbols that must be italicized for proper formatting.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "Gene symbol 'ABCC11' appears multiple times but is not consistently italicized.",
              reasoning:
                "There is an adherence to italicization in some instances with minor oversights.",
              overlap_notes:
                "No significant overlaps detected with other sections.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Section headers require consistent formatting throughout the article for a cohesive structure.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "'Clinical Significance' is consistently formatted as a section title.",
              reasoning:
                "The section header is correctly formatted in style and presentation.",
              overlap_notes: "No overlaps; unique title format maintained.",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "The logical organization of sections is important to ensure a coherent flow of information.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The 'Clinical Significance' section logically follows typical article organization.",
              reasoning:
                "The structure follows standard practices, enhancing readability and coherence.",
              overlap_notes: "No issues of overlap affecting order.",
            },
          ],
          meta_notes:
            "The 'Clinical Significance' section is well-structured, adhering predominantly to required formatting standards. A slight improvement is needed in consistently italicizing gene symbols.",
        },
      ],
    },
  },
  {
    title: "Interactions",
    content:
      "ABCC11, also known as Multidrug Resistance Protein 8 (MRP8), is involved in various physical interactions that are crucial for its function as a transporter. The protein interacts with ATP to facilitate the transport of substrates across cellular membranes, a process that is energy-dependent and crucial for its role in multidrug resistance and physiological transport mechanisms (Chen2004Transport). ABCC11 has been shown to form complexes with other proteins, although specific partner proteins are not detailed in the provided sources. The interactions likely involve transient associations with other cellular proteins that regulate its transport activity or stability.  The protein's interaction with nucleotides and substrates is also a key aspect of its function. ABCC11 binds to cyclic nucleotides like cGMP and ATP, which are essential for the conformational changes required for substrate translocation from the intracellular to the extracellular space (Honorat2013Localization). These interactions are not only crucial for the transport function but also for the regulation of the protein's activity in response to cellular energy levels and the presence of substrates.  Overall, while the specific details of multiprotein complexes or interactions with other nucleic acids are not extensively documented in the provided sources, the known interactions underline the functional complexity and regulatory mechanisms of ABCC11 in cellular transport processes.",
    hierarchy: "ABCC11 > Interactions",
    feedback: {
      Structure: [
        {
          title: "Interactions",
          requirement_evaluations: [
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "Applicable because the content requires a clear and logical organization to enhance comprehension.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The section is structured in a logical way, explaining the role of interactions in the protein's function, however, details about specific interacting proteins are lacking.",
              reasoning:
                "The structure of the section is mostly logical, but the absence of detailed information on partner proteins leaves room for improvement.",
              overlap_notes:
                "No significant overlaps detected in this section.",
            },
            {
              requirement_id: "R11",
              applicable: true,
              applicability_reasoning:
                "Subheadings could be used to differentiate between different types of interactions, aiding in content organization.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "The section discusses different interaction types such as those with ATP and other nucleotides but lacks subheadings.",
              reasoning:
                "Partial adherence as the section could benefit from subheadings to distinguish between various interaction types.",
              overlap_notes:
                "No overlaps, subheadings would enhance readability.",
            },
            {
              requirement_id: "R14",
              applicable: true,
              applicability_reasoning:
                "Ensuring a clear and logical structure is imperative for understanding complex biological interactions.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The document explains the complex interactions relevant for ABCC11's function in a manner that is mostly logical.",
              reasoning:
                "While the information is mostly well-structured, some additional clarity through detailed examples of specific interactions could enhance the section.",
              overlap_notes:
                "Overlap between the function and interactions sections is minimal.",
            },
          ],
          meta_notes:
            "The section is mostly well-organized but could benefit from more granular structuring, such as the use of subheadings and expanded details on specific interactions.",
        },
      ],
      Infoboxes: [
        {
          title: "Interactions",
          requirement_evaluations: [
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "The content discusses ABCC11, which is a gene/protein article requiring an infobox.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "There is no infobox present in this section about ABCC11.",
              reasoning:
                "The content does not include an infobox summarizing key facts about ABCC11, thus failing to adhere to this guideline.",
              overlap_notes: "No overlaps noted regarding infobox usage.",
            },
            {
              requirement_id: "R13",
              applicable: true,
              applicability_reasoning:
                "Applicable to provide a summarized format of key facts including those pertaining to interactions.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "The absence of an infobox leaves key facts about interactions unsummarized.",
              reasoning:
                "The section lacks an infobox which should summarize key interaction details, resulting in no adherence.",
              overlap_notes: "Lack of infobox implies no content to overlap.",
            },
          ],
          meta_notes:
            "This section lacks an infobox, a critical component for summarizing the interactions of ABCC11.",
        },
      ],
      Formatting: [
        {
          title: "Interactions",
          requirement_evaluations: [
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Applicable because the section discusses ABCC11, which is a gene symbol and should be italicized according to the formatting requirement.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "No instances of italicization of the gene symbol ABCC11 are present in the text.",
              reasoning:
                "The section does not meet the requirement as gene symbols are not italicized, which is a basic formatting standard.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "Relevant because sections should be organized in a logical order.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section is part of a logical sequence on the interactions of ABCC11.",
              reasoning:
                "The section fits well within a larger context of an article about ABCC11, treating a specific aspect coherently.",
              overlap_notes:
                "This section builds upon the expected order without unnecessary overlaps.",
            },
          ],
          meta_notes:
            "The 'Interactions' section provides a detailed narrative on the interaction mechanisms of ABCC11, but requires adherence to gene symbol formatting standards.",
        },
      ],
      Content: [
        {
          title: "Interactions",
          requirement_evaluations: [
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "This requirement is applicable because the Interactions section should list proteins that ABCC11 is known to interact with.",
              score: 0.5,
              confidence: 0.85,
              evidence:
                "The content mentions ABCC11 interacts with ATP and cyclic nucleotides like cGMP but lacks specific information about other protein partners.",
              reasoning:
                "The section partially adheres to the requirement by mentioning interactions with ATP and cGMP but does not list specific protein interactions.",
              overlap_notes:
                "Some interactions are mentioned broadly without naming specific proteins, which could overlap with more detailed sections if expanded.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Focused on what studies say about the function of ABCC11, relevant to the Interactions section.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "The section discusses ABCC11's role in interacting with ATP and substrates in the context of its transport function.",
              reasoning:
                "There is strong adherence as the section effectively cites studies discussing the protein's transport function and its importance.",
              overlap_notes:
                "The content does not overlap with any specific studies; rather, it summarizes findings broadly.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Content throughout the article needs to maintain a neutral point of view.",
              score: 1.0,
              confidence: 1.0,
              evidence:
                "No promotional or biased language is used; the text remains neutral.",
              reasoning:
                "The section maintains neutrality by objectively describing the interactions and functions without bias.",
              overlap_notes: "No overlaps with biased content detected.",
            },
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "All statements must be verifiable with reliable sources; therefore, this is applicable.",
              score: 0.5,
              confidence: 0.75,
              evidence:
                "References like (Chen2004Transport) and (Honorat2013Localization) are cited but lack comprehensive sourcing.",
              reasoning:
                "Partial adherence as the provided citations suggest source reliability, yet more detailed references would enhance verifiability.",
              overlap_notes:
                "Content from cited studies should not overlap if properly referenced.",
            },
          ],
          meta_notes:
            "The section provides a foundational description of interactions but lacks specificity in protein-protein interactions and comprehensive sourcing.",
        },
      ],
      "Images and Diagrams": [
        {
          title: "Interactions",
          requirement_evaluations: [],
          meta_notes:
            "The section is focused on textual content describing the interactions of ABCC11 with ATP and other molecules, with no inclusion of diagrams.",
        },
      ],
      "Language Usage": [
        {
          title: "Interactions",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "The section discusses genes and uses abbreviations which should follow HUGO guidelines.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "The gene ABCC11 is presented in all capitals but not in italic font in the text.",
              reasoning:
                "The section mostly adheres to the requirement by using the correct capitalization, but it does not use italics, which is a minor oversight.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "Relevant for language usage as it recommends using abbreviations.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The abbreviation ABCC11 is used consistently instead of the full gene name.",
              reasoning:
                "The section fully adheres to the recommendation of using abbreviations.",
              overlap_notes: "No overlaps in this section.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "It applies because the section deals with a human gene.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The gene name ABCC11 is correctly written in all capitals.",
              reasoning:
                "The section meets the requirement with correct capitalization of the human gene name.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R9",
              applicable: true,
              applicability_reasoning:
                "Ensures consistent language use throughout the section.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "The language appears consistent with no obvious switches between American and British English.",
              reasoning:
                "There is strong adherence, though a thorough check of specific words was not carried out.",
              overlap_notes: "No overlaps in this section.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "The section should maintain an encyclopedic tone by avoiding first-person language.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The section maintains an encyclopedic tone with no use of first-person language.",
              reasoning:
                "Complete adherence observed with the correct tone and language style.",
              overlap_notes: "No overlaps in this section.",
            },
          ],
          meta_notes:
            "The section addresses essential interaction topics well but needs italics for gene abbreviations and a more thorough check for language consistency.",
        },
      ],
      Citations: [
        {
          title: "Interactions",
          requirement_evaluations: [
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "The section discusses scientific claims about the interactions of ABCC11 which need reliable citations.",
              score: 0.5,
              confidence: 0.85,
              evidence:
                "The references provided (Chen2004Transport and Honorat2013Localization) are noted, but specific details or inline citations are missing.",
              reasoning:
                "There is partial adherence as the section provides references but lacks inline citations for specific claims, leaving room for improvement.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R8",
              applicable: true,
              applicability_reasoning:
                "Specific claims regarding interactions with ATP and cyclic nucleotides require direct evidence through inline citations.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "No inline citations are used for specific claims within the section.",
              reasoning:
                "No adherence to the requirement of using inline citations, resulting in a lack of clarity on the evidence for each claim.",
              overlap_notes: "No overlaps in this section.",
            },
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "MCB articles like this one on ABCC11 should have dense citation coverage to ensure academic integrity.",
              score: 0.25,
              confidence: 0.8,
              evidence:
                "Citations are not densely packed; references are mentioned but not used throughout with the <ref> tags.",
              reasoning:
                "Minimal adherence due to the absence of consistent inline citations for necessary claims.",
              overlap_notes:
                "Potential overlap with broader article citation practices noted, but specific section focus needed.",
            },
          ],
          meta_notes:
            "The section adequately describes the interactions but lacks sufficient inline citations and specific evidence for certain claims.",
        },
      ],
    },
  },
  {
    title: "References",
    content:
      "[1. (Yabuuchi2001Multiple) Hikaru Yabuuchi, Hidetada Shimizu, Shin-ichiro Takayanagi, and Toshihisa Ishikawa. Multiple splicing variants of two new human atp-binding cassette transporters, abcc11 and abcc12. Biochemical and Biophysical Research Communications, 288(4):933\u00e2\u0080\u0093939, November 2001. URL: http://dx.doi.org/10.1006/bbrc.2001.5865, doi:10.1006/bbrc.2001.5865. (148 citations) 10.1006/bbrc.2001.5865](https://doi.org/10.1006/bbrc.2001.5865)  [2. (Honorat2013Localization) Myl\u00c3\u00a8ne Honorat, Rapha\u00c3\u00abl Terreux, Pierre Falson, Attilio Di Pietro, Charles Dumontet, and Lea Payen. Localization of putative binding sites for cyclic guanosine monophosphate and the anti-cancer drug 5-fluoro-2\u00e2\u0080\u00b2-deoxyuridine-5\u00e2\u0080\u00b2-monophosphate on abcc11 in silico models. BMC Structural Biology, May 2013. URL: http://dx.doi.org/10.1186/1472-6807-13-7, doi:10.1186/1472-6807-13-7. (66 citations) 10.1186/1472-6807-13-7](https://doi.org/10.1186/1472-6807-13-7)  [3. (Toyoda2016Regulation) Yu Toyoda, Tappei Takada, Hiroshi Miyata, Toshihisa Ishikawa, and Hiroshi Suzuki. Regulation of the axillary osmidrosis-associated abcc11 protein stability by n-linked glycosylation: effect of glucose condition. PLOS ONE, 11(6):e0157172, June 2016. URL: http://dx.doi.org/10.1371/journal.pone.0157172, doi:10.1371/journal.pone.0157172. (16 citations) 10.1371/journal.pone.0157172](https://doi.org/10.1371/journal.pone.0157172)  [4. (Toyoda2016Diagnosis) Yu Toyoda, Tsuneaki Gomi, Hiroshi Nakagawa, Makoto Nagakura, and Toshihisa Ishikawa. Diagnosis of human axillary osmidrosis by genotyping of the humanabcc11gene: clinical practice and basic scientific evidence. BioMed Research International, 2016:1\u00e2\u0080\u00939, 2016. URL: http://dx.doi.org/10.1155/2016/7670483, doi:10.1155/2016/7670483. (22 citations) 10.1155/2016/7670483](https://doi.org/10.1155/2016/7670483)  [5. (Ishikawa2013Pharmacogenetics) Toshihisa Ishikawa, Yu Toyoda, Koh-ichiro Yoshiura, and Norio Niikawa. Pharmacogenetics of human abc transporter abcc11: new insights into apocrine gland growth and metabolite secretion. Frontiers in Genetics, 2013. URL: http://dx.doi.org/10.3389/fgene.2012.00306, doi:10.3389/fgene.2012.00306. (47 citations) 10.3389/fgene.2012.00306](https://doi.org/10.3389/fgene.2012.00306)  [6. (Toyoda2010Pharmacogenomics) Yu Toyoda and Toshihisa Ishikawa. Pharmacogenomics of human abc transporter abcc11 (mrp8): potential risk of breast cancer and chemotherapy failure. Anti-Cancer Agents in Medicinal Chemistry, 10(8):617\u00e2\u0080\u0093624, October 2010. URL: http://dx.doi.org/10.2174/187152010794473975, doi:10.2174/187152010794473975. (49 citations) 10.2174/187152010794473975](https://doi.org/10.2174/187152010794473975)  [7. (Chen2004Transport) Zhe-Sheng Chen, Yanping Guo, Martin G. Belinsky, Elena Kotova, and Gary D. Kruh. Transport of bile acids, sulfated steroids, estradiol 17-\u00ce\u00b2-d-glucuronide, and leukotriene c4 by human multidrug resistance protein 8 (abcc11). Molecular Pharmacology, 67(2):545\u00e2\u0080\u0093557, November 2004. URL: http://dx.doi.org/10.1124/mol.104.007138, doi:10.1124/mol.104.007138. (115 citations) 10.1124/mol.104.007138](https://doi.org/10.1124/mol.104.007138)  [8. (Toyoda2009Earwax) Yu Toyoda, Aki Sakurai, Yasumasa Mitani, Masahiro Nakashima, Koh-ichiro Yoshiura, Hiroshi Nakagawa, Yasuo Sakai, Ikuko Ota, Alexander Lezhava, Yoshihide Hayashizaki, Norio Niikawa, and Toshihisa Ishikawa. Earwax, osmidrosis, and breast cancer: why does one snp (538g&gt;a) in the human abc transporter abcc11 gene determine earwax type? The FASEB Journal, 23(6):2001\u00e2\u0080\u00932013, April 2009. URL: http://dx.doi.org/10.1096/fj.09-129098, doi:10.1096/fj.09-129098. (66 citations) 10.1096/fj.09-129098](https://doi.org/10.1096/fj.09-129098)",
    hierarchy: "ABCC11 > References",
    feedback: {
      Citations: [
        {
          title: "References",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Applicable as the section lists references which should be dense with citations.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "All references include inline citations, DOIs, and URLs.",
              reasoning:
                "The section completely adheres to the requirement with comprehensive inline citations.",
              overlap_notes: "No overlaps detected.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Applicable to ensure consistency in the format of references.",
              score: 0.75,
              confidence: 0.9,
              evidence:
                "All citations appear to be in a similar format with DOI and URL included.",
              reasoning:
                "Strong adherence with minor improvements possible in standardizing citation presentation.",
              overlap_notes: "Consistent presentation throughout.",
            },
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "Applicable as journal name conventions differ and should be consistently styled.",
              score: 1.0,
              confidence: 0.95,
              evidence: "Journal names are abbreviated consistently.",
              reasoning:
                "The section fully meets the requirement for consistent journal name presentation.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "Applicable because DOIs are listed, which should use the DOI template.",
              score: 1.0,
              confidence: 0.95,
              evidence: "All provided citations include a DOI.",
              reasoning:
                "Complete adherence; usage of DOIs is consistent throughout the references.",
              overlap_notes: "Appropriate utilization of DOIs observed.",
            },
            {
              requirement_id: "R11",
              applicable: true,
              applicability_reasoning:
                "Applicable when the full text is freely available online.",
              score: 1.0,
              confidence: 0.95,
              evidence: "URLs lead to full-text articles where available.",
              reasoning:
                "The requirement is fully met with hyperlinked URLs to accessible styles.",
              overlap_notes: "URLs utilized appropriately for online access.",
            },
            {
              requirement_id: "R14",
              applicable: true,
              applicability_reasoning:
                "Applicable for maintaining citation templates for consistency and clarity.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "Use of citation templates observed although not explicitly stated.",
              reasoning:
                "Strong adherence with room for more explicit use of citation templates.",
              overlap_notes: "General template adherence observed.",
            },
          ],
          meta_notes:
            "The References section is comprehensive and meets all baseline requirements, although explicit template usage could be refined.",
        },
      ],
      "Images and Diagrams": [
        {
          title: "References",
          requirement_evaluations: [],
          meta_notes:
            "The References section does not involve diagrams or images, so the requirements related to diagram formatting are not applicable.",
        },
      ],
      Formatting: [
        {
          title: "References",
          requirement_evaluations: [
            {
              requirement_id: "R4",
              applicable: true,
              applicability_reasoning:
                "The section title should follow consistent formatting as per the article's style guide.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The References section title adheres to a consistent format.",
              reasoning:
                "The section title format is consistent with other sections in the article.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "The organization of section headers such as 'References' should be part of a logical article structure.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The placement of the References section is at the end, which is appropriate.",
              reasoning:
                "The placement and organization follow the logical order for article structure.",
              overlap_notes: "No significant overlaps detected.",
            },
          ],
          meta_notes:
            "The References section adheres well to formatting standards concerning section headers and logical positioning. Other formatting considerations such as bullet points and infobox templates are not relevant for this type of content.",
        },
      ],
      Content: [
        {
          title: "References",
          requirement_evaluations: [
            {
              requirement_id: "R5",
              applicable: true,
              applicability_reasoning:
                "This requirement focuses on ensuring that all statements are verifiable with reliable sources, which is directly applicable to the references section.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "Each reference is accompanied by a DOI number and URL, confirming their source authenticity.",
              reasoning:
                "Full adherence as each reference provides reliable source information.",
              overlap_notes: "No overlaps noted in this context.",
            },
          ],
          meta_notes:
            "The references section effectively provides valid and reliable sources for verifiability, adhering to standards of citation and reliability.",
        },
      ],
      Structure: [
        {
          title: "References",
          requirement_evaluations: [
            {
              requirement_id: "R6",
              applicable: true,
              applicability_reasoning:
                "A logical structure is necessary; organized references contribute to article clarity.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "The references are organized in a numbered list, each with access urls and citation details.",
              reasoning:
                "The section is effectively organized to provide clear and accessible references.",
              overlap_notes:
                "This structure is typical and overlaps with standard citation practices.",
            },
            {
              requirement_id: "R14",
              applicable: true,
              applicability_reasoning:
                "Clear structure is critical to ensure references are easy to follow and verify.",
              score: 1.0,
              confidence: 0.9,
              evidence:
                "Each reference is neatly separated with clear URLs and DOI links, making it logical.",
              reasoning:
                "The use of structured information within the section maximizes clarity and logic.",
              overlap_notes:
                "Overlaps with citation accessibility requirements.",
            },
          ],
          meta_notes:
            "The references are well-structured with comprehensive information allowing for easy verification and follow-up.",
        },
      ],
      Infoboxes: [
        {
          title: "References",
          requirement_evaluations: [],
          meta_notes:
            "The references section is intended for citation purposes and does not involve infobox-related requirements.",
        },
      ],
      "Language Usage": [
        {
          title: "References",
          requirement_evaluations: [
            {
              requirement_id: "R1",
              applicable: true,
              applicability_reasoning:
                "Applicable because references should use proper gene abbreviations as per HUGO Gene Nomenclature Committee guidelines.",
              score: 0.0,
              confidence: 1.0,
              evidence:
                "The references do not show gene abbreviations in italic, which is required by HUGO Gene Nomenclature Committee guidelines.",
              reasoning:
                "The requirement is not met as gene abbreviations are not italicized in the references.",
              overlap_notes:
                "This requirement is specific to gene notation and does not overlap with the content section.",
            },
            {
              requirement_id: "R2",
              applicable: true,
              applicability_reasoning:
                "Applicable because it is recommended to use gene abbreviations instead of the full name in references.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "Gene abbreviations are used consistently in the references.",
              reasoning:
                "The requirement is fully met as gene abbreviations are used instead of full names.",
              overlap_notes: "No significant overlaps detected.",
            },
            {
              requirement_id: "R3",
              applicable: true,
              applicability_reasoning:
                "Applicable for ensuring human gene names are written in all caps in references.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "Human gene names like ABCC11 and ABCC12 are capitalized correctly in the references.",
              reasoning:
                "Complete adherence to the requirement as gene names are correctly capitalized.",
              overlap_notes: "Appropriate capitalization without overlap.",
            },
            {
              requirement_id: "R9",
              applicable: true,
              applicability_reasoning:
                "Consistent use of either American or British English is necessary throughout the article, extending to the references.",
              score: 0.75,
              confidence: 0.85,
              evidence:
                "References are generally consistent, but there is a mix of spelling conventions.",
              reasoning:
                "Mostly consistent use of English language but some minor deviations were noted.",
              overlap_notes:
                "Overlap exists in terms of language consistency across sections.",
            },
            {
              requirement_id: "R10",
              applicable: true,
              applicability_reasoning:
                "Avoidance of first-person language is an imperative standard in references as well.",
              score: 1.0,
              confidence: 0.95,
              evidence:
                "References are written in a formal tone without first-person language.",
              reasoning:
                "The section meets the requirement completely maintaining an objective tone.",
              overlap_notes: "Objective tone observed consistently.",
            },
          ],
          meta_notes:
            "The References section generally adheres to language usage standards, though it fails to italicize gene abbreviations according to standard guidelines.",
        },
      ],
    },
  },
];
export const requirementsData: RequirementsIndex = {
  groups: {
    Content: {
      description:
        "Requirements related to the substantive content of the articles.",
      requirements: [
        {
          id: "R1",
          description:
            "An article should start with a clear definition in the lead section.",
          reference:
            "The first sentence of the lead should define what the scope of the article is.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "For genes/proteins with a human ortholog, the lead should specify the protein and gene.",
          reference:
            "\"For genes/proteins in which a human ortholog exists, 'recommended UniProt name' is a protein that in humans is encoded by the 'approved HUGO gene symbol' gene.\"",
          category: "Content",
          classification: "Contextual Considerations",
          where: "Lead section",
          when: "Applicable for gene/protein articles with human orthologs.",
        },
        {
          id: "R1",
          description:
            "Articles about related proteins may be cross linked by including one or more navigation boxes.",
          reference:
            "Articles about related proteins may be cross linked by including one or more [[WP:NAVBOX|navigation boxes]] as appropriate.",
          category: "Content",
          classification: "Best Practices",
          where: "Content section",
          when: "When articles are about related proteins.",
        },
        {
          id: "R1",
          description:
            "List diseases or conditions that are a result of a mutation in the gene or a deficiency or excess of the expressed protein.",
          reference:
            "List diseases or conditions that are a result of a mutation in the gene or a deficiency or excess of the expressed protein.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Clinical significance section",
          when: "Always applicable for gene/protein articles.",
        },
        {
          id: "R1",
          description:
            "Do not mention the research group or institution directly in the text of the article.",
          reference:
            "In general, it is not appropriate to mention the research group or institution that conducted a study directly in the text of the article.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Content section",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "List the names of those who made key discoveries concerning the gene or protein.",
          reference:
            "However it is appropriate to list the names of those who made key discoveries concerning the gene or protein in this section (e.g., the scientist or group that originally cloned the gene, determined its function, linked it to a disease, won a major award for the discovery, etc.).",
          category: "Content",
          classification: "Best Practices",
          where: "History/Discovery section",
          when: "Applicable when discussing key discoveries.",
        },
        {
          id: "R2",
          description:
            "Gene and protein articles should be categorized appropriately.",
          reference:
            "Categories or subcategories that may be appropriate for gene and protein articles include: [[:Category:Proteins]], [[:Category:Enzymes by function]], [[:Category:Genes by human chromosome]].",
          category: "Content",
          classification: "Best Practices",
          where: "Article metadata",
          when: "Applicable to gene and protein articles.",
        },
        {
          id: "R1",
          description:
            "Specific information about the gene should be included, such as its location on the human chromosome and regulation.",
          reference:
            "Specific information about the gene (on which human chromosome it is located, regulation, etc.).",
          category: "Content",
          classification: "Imperative Standards",
          where: "Content section",
          when: "Always applicable for gene articles.",
        },
        {
          id: "R2",
          description:
            "Basic information already contained in the infobox should not be unnecessarily repeated in the content section unless especially notable.",
          reference:
            "Much of this basic information may already contained in the infobox and should not be unnecessarily repeated in this section unless especially notable.",
          category: "Content",
          classification: "Best Practices",
          where: "Content section",
          when: "Applicable when information is already in the infobox.",
        },
        {
          id: "R1",
          description:
            "The scope of a gene/protein article should include the human gene/protein and orthologs in other species.",
          reference:
            "The scope of a gene/protein article is the human gene/protein (including all splice variants derived from that gene) as well as orthologs (as listed in HomoloGene) that exist in other species.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable for gene/protein articles.",
        },
        {
          id: "R2",
          description:
            "If there are paralogs in humans, a gene family article should be created in addition to gene-specific articles.",
          reference:
            "If there are paralogs in humans (and by extension other species), then a gene family article in addition to the gene specific articles would be appropriate.",
          category: "Content",
          classification: "Contextual Considerations",
          where: "Content section",
          when: "Applicable when paralogs exist.",
        },
        {
          id: "R3",
          description:
            "Do not hype a study by listing the names, credentials, institutions, or other qualifications of their authors.",
          reference:
            'In general, do not hype a study by listing the names, credentials, institutions, or other "qualifications" of their authors.',
          category: "Content",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R4",
          description:
            "Article prose should focus on what a cited study says about the structure, function, clinical significance, etc. of the gene or protein.",
          reference:
            "Article prose should focus on what a cited study says about the structure, function, clinical significance, etc. of the gene or protein.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Content section",
          when: "Always applicable.",
        },
        {
          id: "R5",
          description:
            "Notable contributions and who made the discovery should be mentioned in the discovery/history section.",
          reference:
            "Particularly notable contributions along with who made the discovery however should be mentioned in the discovery/history section.",
          category: "Content",
          classification: "Best Practices",
          where: "Discovery/history section",
          when: "When notable contributions are relevant.",
        },
        {
          id: "R1",
          description:
            "An article should start with a clear definition in the lead section.",
          reference:
            "The first sentence of the lead should define what the scope of the article is.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description: "Describe the function of the transcribed protein.",
          reference: "Describe the function of the transcribed protein.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Function section",
          when: "Applicable for gene/protein articles.",
        },
        {
          id: "R1",
          description:
            "An article should start with a clear definition in the lead section.",
          reference:
            "The first sentence of the lead should define what the scope of the article is.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "The 'Interactions' section should list proteins that the subject protein is known to interact with.",
          reference:
            "Optional section that lists proteins that the protein that is the subject of the article is known to interact with.",
          category: "Content",
          classification: "Flexible Guidelines",
          where: "Interactions section",
          when: "Applicable when interaction data is available.",
        },
        {
          id: "R1",
          description:
            "Use the recommended UniProt protein name as the article name if it is relatively short.",
          reference:
            "If relatively short, the recommended UniProt protein name should be used as the article name.",
          category: "Content",
          classification: "Best Practices",
          where: "Article title",
          when: "Applicable when the UniProt protein name is short.",
        },
        {
          id: "R2",
          description:
            "Use a widely used protein acronym or the official HUGO gene symbol if the protein name is verbose.",
          reference:
            "If the protein name is verbose, either a widely used protein acronym or the official HUGO gene symbol, followed by '(gene)' if necessary to disambiguate.",
          category: "Content",
          classification: "Best Practices",
          where: "Article title",
          when: "Applicable when the protein name is verbose.",
        },
        {
          id: "R3",
          description:
            "Enumerate different members of a protein family with a dash followed by an Arabic number.",
          reference:
            "The different members should be enumerated with a dash '-' followed by an Arabic number, e.g. 'desmoglein-1', 'desmoglein-2', etc.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for proteins grouped into a family based on homology or shared function.",
        },
        {
          id: "R4",
          description:
            "Include the taxon in the title for viral protein articles.",
          reference:
            "If the article is about a viral protein, it is recommended to include the taxon in the title.",
          category: "Content",
          classification: "Best Practices",
          where: "Article title",
          when: "Applicable for articles about viral proteins.",
        },
        {
          id: "R5",
          description:
            "A parenthesized term added to disambiguate common symbols does not constitute unnecessary disambiguation.",
          reference:
            "A parenthesized term added to disambiguate common symbols does not constitute unnecessary disambiguation even when it is the only article with such a name.",
          category: "Content",
          classification: "Flexible Guidelines",
          where: "Article title",
          when: "Applicable when disambiguating common symbols.",
        },
        {
          id: "R1",
          description:
            "Specific information about the protein should not be unnecessarily repeated unless especially notable.",
          reference:
            "Specific information about the protein (splice variants, post translational modifications, etc.). Again, much of this basic information may already contained in the infobox and should not be unnecessarily repeated unless especially notable.",
          category: "Content",
          classification: "Best Practices",
          where: "Content section",
          when: "When detailing protein information.",
        },
        {
          id: "R1",
          description:
            "An article should start with a clear definition in the lead section.",
          reference:
            "The first sentence of the lead should define what the scope of the article is.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "The article should provide a comprehensive overview of the gene or protein.",
          reference:
            "The article should provide a comprehensive overview of the gene or protein, including its function, structure, and significance.",
          category: "Content",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Applicable for all gene/protein articles.",
        },
        {
          id: "R1",
          description:
            "Optional section that concisely describes species, tissue, and subcellular distribution of the gene.",
          reference:
            "Optional section that concisely describes what species this gene is expressed (e.g., wide species distribution, bacteria, fungi, vertebrates, mammals, etc.), what tissue the protein is expressed, and which subcellular compartments or organelles the protein is found (excreted, cytoplasm, nucleus, mitochondria, cell membrane).",
          category: "Content",
          classification: "Flexible Guidelines",
          where: "Species, tissue, and subcellular distribution section",
          when: "Applicable when discussing gene/protein expression.",
        },
        {
          id: "R1",
          description:
            "An article should start with a clear definition in the lead section.",
          reference:
            "The first sentence of the lead should define what the scope of the article is.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "The lead section should summarize the most important points of the article.",
          reference:
            "The lead should summarize the most important points, including the subject's significance, and establish context.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R3",
          description: "Articles should be written in a neutral point of view.",
          reference:
            "All Wikipedia articles and other encyclopedic content must be written from a neutral point of view.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R4",
          description:
            "Avoid using jargon and technical terms without explanation.",
          reference:
            "Avoid using jargon and technical terms without explanation, as Wikipedia is for a general audience.",
          category: "Content",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Applicable when technical terms are used.",
        },
        {
          id: "R5",
          description:
            "Ensure that all statements are verifiable with reliable sources.",
          reference:
            "All material in Wikipedia mainspace, including everything in articles, lists, and captions, must be verifiable.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R1",
          description:
            "The Wikipedia article should be linked to a Wikidata item of the entity first mentioned in the first sentence of the lead section.",
          reference:
            "The Wikipedia article should be linked to a Wikidata item of the entity first mentioned in the first sentence of the lead section, which should be written as defined in [[WP:MCBMOSSECTIONS]].",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable for gene/protein articles.",
        },
        {
          id: "R1",
          description:
            "An article should start with a clear definition in the lead section.",
          reference:
            "The first sentence of the lead should define what the scope of the article is.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "The lead section should summarize the most important points of the article.",
          reference:
            "The lead should summarize the most important points of the article.",
          category: "Content",
          classification: "Imperative Standards",
          where: "Lead section",
          when: "Always applicable.",
        },
        {
          id: "R3",
          description: "The article should provide context for the topic.",
          reference:
            "Provide context for the topic so that it is understandable to a general audience.",
          category: "Content",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Always applicable.",
        },
      ],
    },
    "Language Usage": {
      description:
        "Guidelines for the appropriate use of language, including gene nomenclature and abbreviations.",
      requirements: [
        {
          id: "R1",
          description:
            "Gene abbreviations should be according to HUGO Gene Nomenclature Committee guidelines and written in italic font style.",
          reference:
            "The abbreviations of genes are according to HUGO Gene Nomenclature Committee and written in italic font style.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "It is recommended to use gene abbreviations instead of the full name.",
          reference:
            "It is recommended that abbreviations instead of the full name are used.",
          category: "Language Usage",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R3",
          description: "Human gene names should be written in all capitals.",
          reference:
            "Human gene names are written in capitals, for example ALDOA, INS, etc.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for human genes only.",
        },
        {
          id: "R4",
          description:
            "For orthologs of human genes in other species, only the initial letter is capitalised.",
          reference:
            "For orthologs of human genes in other species, only the initial letter is capitalised, for example mouse Aldoa, bovine Ins, etc.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for non-human species.",
        },
        {
          id: "R5",
          description:
            "Use 'the ALDOA gene is regulated...' or 'ALDOA is regulated...' instead of 'the gene ALDOA is regulated'.",
          reference:
            "The following usages of gene symbols are recommended: 'the ALDOA gene is regulated...', 'ALDOA is regulated...', while the following is not recommended: 'the gene ALDOA is regulated' since it is redundant.",
          category: "Language Usage",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R6",
          description:
            "Use 'the rat gene for Aldoa is regulated...' for non-human genes.",
          reference:
            "The following usages of gene symbols are recommended: 'the rat gene for Aldoa is regulated...'.",
          category: "Language Usage",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Applicable for non-human species.",
        },
        {
          id: "R3",
          description: "Human gene names should be written in all capitals.",
          reference:
            "Human gene names are written in capitals, for example ALDOA, INS, etc.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for human genes only.",
        },
        {
          id: "R3",
          description: "Human gene names should be written in all capitals.",
          reference:
            "Human gene names are written in capitals, for example ALDOA, INS, etc.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for human genes only.",
        },
        {
          id: "R3",
          description: "Human gene names should be written in all capitals.",
          reference:
            "Human gene names are written in capitals, for example ALDOA, INS, etc.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for human genes only.",
        },
        {
          id: "R4",
          description:
            "Protein names should be written with the first letter capitalized.",
          reference:
            "Protein names are written with the first letter capitalized, for example Aldolase A, Insulin, etc.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for protein names.",
        },
        {
          id: "R9",
          description:
            "Use American or British English consistently throughout the article.",
          reference:
            "Articles should use either American or British English consistently, unless the subject has a strong national tie to a particular English-speaking nation.",
          category: "Language Usage",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R10",
          description: "Avoid using first-person language.",
          reference:
            "First-person language should be avoided to maintain an encyclopedic tone.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R6",
          description: "Human gene names should be written in all capitals.",
          reference:
            "Human gene names are written in capitals, for example ALDOA, INS, etc.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for human genes only.",
        },
        {
          id: "R7",
          description: "Use scientific names in italics.",
          reference: "Scientific names should be italicized.",
          category: "Language Usage",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "When mentioning scientific names.",
        },
      ],
    },
    Structure: {
      description: "Guidelines on how to structure the article sections.",
      requirements: [
        {
          id: "R3",
          description:
            "Include a History/Discovery section for articles about genes or proteins.",
          reference:
            "Example articles of what such an organization may look like are: [[Protein C]], [[Gonadotropin-releasing hormone]] or [[Rubisco]].",
          category: "Structure",
          classification: "Best Practices",
          where: "History/Discovery section",
          when: "Applicable for gene/protein articles.",
        },
        {
          id: "R1",
          description:
            "Every Wikipedia article should be added to at least one category.",
          reference:
            "Every Wikipedia article should be added to at least one [[WP:CATEGORY|category]].",
          category: "Structure",
          classification: "Imperative Standards",
          where: "Article metadata",
          when: "Always applicable.",
        },
        {
          id: "R7",
          description: "Articles should follow a standard structure.",
          reference:
            "Articles should follow a standard structure with sections such as lead, function, and infobox.",
          category: "Structure",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R6",
          description:
            "Articles should follow a logical structure with clear sections.",
          reference:
            "The article should be organized into sections that follow a logical order.",
          category: "Structure",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R14",
          description: "Articles should have a clear and logical structure.",
          reference:
            "Articles should have a clear and logical structure, with sections and subsections used to organize content.",
          category: "Structure",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R15",
          description:
            "The 'See also' section should include links to related articles.",
          reference:
            "The 'See also' section should include links to related articles that provide additional context or information.",
          category: "Structure",
          classification: "Best Practices",
          where: "End of the article",
          when: "Applicable when related articles exist.",
        },
        {
          id: "R10",
          description: "Articles should have a clear and logical structure.",
          reference:
            "Articles should be structured in a clear and logical manner.",
          category: "Structure",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R11",
          description: "Use subheadings to organize content within sections.",
          reference:
            "Subheadings should be used to organize content within sections.",
          category: "Structure",
          classification: "Best Practices",
          where: "Content sections",
          when: "When sections contain multiple topics.",
        },
      ],
    },
    "Images and Diagrams": {
      description: "Guidelines for the use of images and diagrams in articles.",
      requirements: [
        {
          id: "R1",
          description:
            "Diagrams should adhere to a standard format where possible.",
          reference:
            "Where possible, diagrams should keep to a standard format.",
          category: "Formatting",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Whenever diagrams are used.",
        },
        {
          id: "R2",
          description:
            "Suggest expansions to the standardized formatting if the diagram guide is insufficient.",
          reference:
            "If the diagram guide does not give sufficient guidance on the style for the images in an article, consider suggesting expansions to the standardised formatting.",
          category: "Supplementary Information",
          classification: "Flexible Guidelines",
          where: "Discussion pages or project pages",
          when: "When existing guidelines are insufficient.",
        },
      ],
    },
    Formatting: {
      description: "Requirements related to the formatting of the articles.",
      requirements: [
        {
          id: "R4",
          description: "Use italics for gene symbols.",
          reference: "Gene symbols should be italicized.",
          category: "Formatting",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable for gene symbols.",
        },
        {
          id: "R4",
          description: "Use consistent formatting for section headers.",
          reference:
            "Section headers should follow a consistent format throughout the article.",
          category: "Formatting",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R5",
          description:
            "Use the standard infobox template for gene/protein articles.",
          reference:
            "Use the standard infobox template for gene/protein articles to ensure consistency.",
          category: "Formatting",
          classification: "Imperative Standards",
          where: "Infobox",
          when: "Always applicable.",
        },
        {
          id: "R6",
          description: "Sections should be organized in a logical order.",
          reference:
            "Sections should be organized in a logical order, typically starting with an introduction, followed by sections on structure, function, and clinical significance.",
          category: "Formatting",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Applicable for all gene/protein articles.",
        },
        {
          id: "R6",
          description:
            "Use consistent formatting for headings and subheadings.",
          reference:
            "Headings and subheadings should be used to organize content and should follow a consistent format.",
          category: "Formatting",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R7",
          description: "Use bullet points for lists where appropriate.",
          reference:
            "Bullet points should be used for lists where appropriate to improve readability.",
          category: "Formatting",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Applicable when listing items.",
        },
        {
          id: "R8",
          description:
            "Images should be placed in a way that enhances the text.",
          reference:
            "Images should be placed in a way that enhances the text and does not disrupt the flow of reading.",
          category: "Formatting",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Applicable when images are used.",
        },
        {
          id: "R4",
          description: "Use consistent formatting for section headings.",
          reference:
            "Section headings should be consistent in style and formatting.",
          category: "Formatting",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R5",
          description: "Use bullet points for lists where appropriate.",
          reference:
            "Bullet points should be used for lists where appropriate.",
          category: "Formatting",
          classification: "Best Practices",
          where: "Content sections",
          when: "When listing items or points.",
        },
      ],
    },
    Citations: {
      description: "Guidelines for citing sources in the articles.",
      requirements: [
        {
          id: "R5",
          description: "All statements should be supported by citations.",
          reference: "All statements should be supported by reliable sources.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R5",
          description:
            "All statements should be supported by reliable sources.",
          reference:
            "Statements in the article should be backed by citations from reliable sources.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R7",
          description:
            "All statements should be supported by reliable sources.",
          reference:
            "All statements should be supported by reliable sources to ensure the accuracy and credibility of the article.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R8",
          description: "Use inline citations for specific claims.",
          reference:
            "Use inline citations for specific claims to provide direct evidence for the information presented.",
          category: "Citations",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "Applicable for specific claims and data.",
        },
        {
          id: "R11",
          description: "Citations should be provided for all direct quotes.",
          reference:
            "Citations must be provided for all direct quotes to ensure verifiability.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable when direct quotes are used.",
        },
        {
          id: "R12",
          description:
            "Use inline citations for statements that are challenged or likely to be challenged.",
          reference:
            "Inline citations should be used for statements that are challenged or likely to be challenged.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Applicable when statements are challenged.",
        },
        {
          id: "R8",
          description:
            "All statements should be supported by reliable sources.",
          reference: "Statements should be supported by reliable sources.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R9",
          description: "Use inline citations for direct quotes.",
          reference: "Inline citations should be used for direct quotes.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "When using direct quotes.",
        },
        {
          id: "R1",
          description:
            "MCB articles should be relatively dense with inline citations.",
          reference:
            "MCB articles should be relatively dense with inline citations, using either <nowiki><ref></nowiki> tags (footnotes) or parenthetical citations.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "It is not acceptable to write substantial amounts of prose and then add your textbook to the 'References' section as a non-specific or general reference.",
          reference:
            "It is not acceptable to write substantial amounts of prose and then add your textbook to the 'References' section as a non-specific or general reference.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "References section",
          when: "Always applicable.",
        },
        {
          id: "R3",
          description:
            "The format of citations should be consistent within any one article.",
          reference:
            "There is no standard for formatting citations on Wikipedia, but the format should be consistent within any one article.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "Throughout the article",
          when: "Always applicable.",
        },
        {
          id: "R4",
          description:
            "Some editors prefer to expand the abbreviated journal name; others prefer concise standard abbreviations.",
          reference:
            "Some editors prefer to expand the abbreviated journal name; others prefer concise standard abbreviations.",
          category: "Citations",
          classification: "Flexible Guidelines",
          where: "References section",
          when: "Based on editor preference.",
        },
        {
          id: "R5",
          description:
            "Abstracts of most MCB related journals are freely available at PubMed.",
          reference:
            "Abstracts of most MCB related journals are freely available at PubMed, which includes a means of searching the MEDLINE database.",
          category: "Citations",
          classification: "Flexible Guidelines",
          where: "References section",
          when: "When citing MCB related journals.",
        },
        {
          id: "R6",
          description:
            "The easiest way to populate the journal and book citation templates is to use Diberri's template-filling web site or the Universal reference formatter.",
          reference:
            "The easiest way to populate the journal and book citation templates is to use Diberri's template-filling web site or the Universal reference formatter.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When adding citations.",
        },
        {
          id: "R7",
          description:
            "Multiple references to the same source citation can be achieved by ensuring the inline reference is named uniquely.",
          reference:
            "Multiple references to the same source citation can be achieved by ensuring the inline reference is named uniquely.",
          category: "Citations",
          classification: "Best Practices",
          where: "Throughout the article",
          when: "When citing the same source multiple times.",
        },
        {
          id: "R8",
          description:
            "In addition to the standard citation text, it is useful to supply hyperlinks.",
          reference:
            "In addition to the standard citation text, it is useful to supply hyperlinks.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When possible.",
        },
        {
          id: "R9",
          description:
            "If the journal abstract is available on PubMed, add a link by typing PMID xxxxxxxxx.",
          reference:
            "If the journal abstract is available on PubMed, add a link by typing PMID xxxxxxxxx.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When citing journal abstracts available on PubMed.",
        },
        {
          id: "R10",
          description: "If the article has a DOI, use the doi template.",
          reference: "If the article has a DOI, use the doi template.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When a DOI is available.",
        },
        {
          id: "R11",
          description:
            "If the article's full text is freely available online, supply a URL to this text by hyperlinking the article title in the citation.",
          reference:
            "If and only if the article's full text is freely available online, supply a URL to this text by hyperlinking the article title in the citation.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When the full text is freely available online.",
        },
        {
          id: "R12",
          description:
            "When the source text is available in both HTML and PDF, the former should be preferred.",
          reference:
            "When the source text is available in both HTML and PDF, the former should be preferred as it is compatible with a larger range of browsers.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When both formats are available.",
        },
        {
          id: "R13",
          description:
            "Do not add a 'Retrieved on' date for convenience links to online editions of paper journals.",
          reference:
            "Do not add a 'Retrieved on' date for convenience links to online editions of paper journals.",
          category: "Citations",
          classification: "Imperative Standards",
          where: "References section",
          when: "When citing online editions of paper journals.",
        },
        {
          id: "R14",
          description:
            "Use citation templates such as Cite journal, Cite book, Cite web, Cite press release, and Cite news.",
          reference:
            "Others prefer to use citation templates such as Cite journal, Cite book, Cite web, Cite press release and Cite news.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When adding citations.",
        },
        {
          id: "R15",
          description:
            "Citations in the Vancouver format can be produced using the vauthors or veditors parameters.",
          reference:
            "Citations in the Vancouver format can be produced using the vauthors or veditors parameters.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When using Vancouver format.",
        },
        {
          id: "R16",
          description:
            "The Uniform Requirements for Manuscripts Submitted to Biomedical Journals citation guidelines list up to six authors, followed by 'et al.' if there are more than six.",
          reference:
            "The Uniform Requirements for Manuscripts Submitted to Biomedical Journals citation guidelines list up to six authors, followed by 'et al.' if there are more than six.",
          category: "Citations",
          classification: "Best Practices",
          where: "References section",
          when: "When citing sources with more than six authors.",
        },
      ],
    },
    Infoboxes: {
      description: "Guidelines for the use of infoboxes in articles.",
      requirements: [
        {
          id: "R6",
          description: "Include an infobox for gene/protein articles.",
          reference: "An infobox should be included for gene/protein articles.",
          category: "Infoboxes",
          classification: "Best Practices",
          where: "Lead section",
          when: "Applicable for gene/protein articles.",
        },
        {
          id: "R13",
          description:
            "Infoboxes should be used to summarize key facts about the subject.",
          reference:
            "Infoboxes should be used to summarize key facts about the subject in a consistent format.",
          category: "Infoboxes",
          classification: "Best Practices",
          where: "Top of the article",
          when: "Applicable when an infobox is relevant.",
        },
        {
          id: "R1",
          description:
            "Include one or more appropriate infoboxes at the top of each article.",
          reference:
            "One or more of the following infoboxes as appropriate should be included at the top of each article.",
          category: "Infoboxes",
          classification: "Imperative Standards",
          where: "Top of the article",
          when: "Always applicable.",
        },
        {
          id: "R2",
          description:
            "Use the Infobox GNF protein for genes/proteins with a human ortholog.",
          reference:
            "Infobox GNF protein: for genes/proteins for which an ortholog is present within the human genome.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable when an ortholog is present within the human genome.",
        },
        {
          id: "R3",
          description:
            "Use the Infobox protein for protein family articles discussing more than one protein.",
          reference:
            "Infobox protein: smaller box appropriate for protein family articles where more than one protein is discussed.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable for protein family articles.",
        },
        {
          id: "R4",
          description:
            "Use the Infobox nonhuman protein for proteins without a human ortholog.",
          reference:
            "Infobox nonhuman protein: for proteins without a human ortholog.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable for proteins without a human ortholog.",
        },
        {
          id: "R5",
          description:
            "Use the Infobox protein family for protein families listed in Pfam.",
          reference:
            "Infobox protein family: for protein families that are listed in Pfam.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable for protein families listed in Pfam.",
        },
        {
          id: "R6",
          description: "Use the Infobox rfam for RNA families listed in Rfam.",
          reference: "Infobox rfam: for RNA families that are listed in Rfam.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable for RNA families listed in Rfam.",
        },
        {
          id: "R7",
          description: "Use the Infobox enzyme for enzymes based on EC number.",
          reference: "Infobox enzyme: for enzymes based on EC number.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable for enzymes based on EC number.",
        },
        {
          id: "R8",
          description:
            "Add a corresponding enzyme infobox if there is only one human paralog assigned to an EC number.",
          reference:
            "If there is only one human paralog assigned to a given EC number, then in addition to a protein infobox, it may be appropriate to also add the corresponding enzyme infobox.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable when there is only one human paralog assigned to an EC number.",
        },
        {
          id: "R9",
          description:
            "Include a protein family infobox if there is only one human paralog assigned to a Pfam family.",
          reference:
            "If there is only one human paralog that has been assigned to Pfam family, then including a protein family infobox may also be appropriate.",
          category: "Infoboxes",
          classification: "Contextual Considerations",
          where: "Infobox section",
          when: "Applicable when there is only one human paralog assigned to a Pfam family.",
        },
        {
          id: "R10",
          description:
            "Place less useful infoboxes in a section at the end if a large number of infoboxes apply.",
          reference:
            "There exist some cases where a large number of infoboxes may apply to an article. You may put less useful ones in a section at the end, laid side-by-side with a table.",
          category: "Infoboxes",
          classification: "Flexible Guidelines",
          where: "End of the article",
          when: "Applicable when a large number of infoboxes apply.",
        },
        {
          id: "R11",
          description:
            "Avoid collapsing or horizontally scrolling infobox tables unless necessary.",
          reference:
            "Collapsing or horizontally scrolling the said table is doubtful, as MOS:COLLAPSE may or may not apply depending on how 'extraneous' the boxes are.",
          category: "Infoboxes",
          classification: "Best Practices",
          where: "Infobox section",
          when: "Applicable when considering the layout of infoboxes.",
        },
      ],
    },
  },
} as const;
