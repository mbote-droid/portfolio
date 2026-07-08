/**
 * Single source of truth for site content. Grounded in the CV; swap any
 * remaining TODO placeholders and the whole site updates.
 */

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  flagship?: boolean;
};

export const site = {
  name: "Dr Samuel Mbote",
  shortName: "Samuel Mbote",
  role: "Physician-Scientist · Computational Biochemistry & AI",
  location: "Nairobi, Kenya",
  email: "mbotesamuel9@gmail.com",

  // Primary tagline (review/adjust freely).
  tagline:
    "Physician-scientist building and auditing AI that reasons over biochemistry.",

  bio: [
    "I'm a physician-scientist (MBChB, COSECSA surgical training) and IBM-certified AI developer based in Nairobi. Through 2026 I've built and audited AI systems that reason over biochemistry — protein folding and structure, variant effect, and drug–target interaction — including a 26-agent structural-genomics platform with a built-in AI-reasoning evaluation layer.",
    "My focus is making AI's scientific reasoning trustworthy: hallucination guardrails, ground-truth benchmarks against ClinVar/IARC, and rigorously tested, offline-first systems (480+ automated tests across projects). I pair deep molecular and structural-biology knowledge with the engineering discipline to ship systems that are honest and genuinely useful.",
  ],

  links: {
    github: "https://github.com/mbote-droid",
    email: "mailto:mbotesamuel9@gmail.com",
    linkedin: "https://www.linkedin.com/in/samuel-mbote-238b13230",
    orcid: "https://orcid.org/0009-0003-2319-8873",
    cv: "/cv.pdf",
  },
};

export const projects: Project[] = [
  {
    slug: "precision-onco-africa",
    title: "Precision Onco Africa",
    tagline:
      "A 26-agent structural & molecular-genetics AI platform with a built-in reasoning-audit layer",
    description:
      "A clinical-grade platform that reasons over cancer biochemistry — protein structure and folding, variant effect, and drug–target interaction — with an AI-audit layer that scores every agent's output for accuracy, hallucination and citation quality before release. Built for African oncology contexts; runs fully offline on 8GB RAM.",
    highlights: [
      "Structural biology: AlphaFold p53 structures (per-residue pLDDT), ESM-2 variant-effect scoring, ΔΔG stability, cavity/druggability",
      "Drug–target modelling: AutoDock Vina docking, MDM2 / APR-246 inhibitor scoring, PARP synthetic-lethality mapping",
      "AI-reasoning audit: dual guardrail + per-agent harness scoring accuracy, hallucination rate and citation quality",
      "Ground-truth benchmarks vs ClinVar/IARC (100% pathogenic-variant F1); 419 tests; HIPAA-aligned, HL7 FHIR R4",
    ],
    tech: ["Python", "AlphaFold", "ESM-2", "AutoDock Vina", "Docker", "AMD Instinct GPU"],
    links: [
      { label: "GitHub", href: "https://github.com/mbote-droid/precision-onco-africa" },
      {
        label: "Live app",
        href: "https://tp53analysis-g8iqzkuhoqmjcjtkvjcgbb.streamlit.app/",
      },
    ],
    flagship: true,
  },
  {
    slug: "tp53-bioinformatics",
    title: "TP53 Bioinformatics Pipeline",
    tagline: "Nucleic-acid & protein workflows for TP53, from sequence to phylogenetics",
    description:
      "A live bioinformatics pipeline for TP53: NCBI sequence retrieval, DNA translation and 6-frame ORF discovery, pairwise alignment, multi-species phylogenetics, and InterPro domain annotation — plus a cancer-mutation biochemistry heatmap across hotspot residues and cancer types.",
    highlights: [
      "NCBI Entrez retrieval, DNA translation, 6-frame ORF discovery, pairwise alignment",
      "Multi-species phylogenetics (Neighbor-Joining: human, mouse, rat, chimp, zebrafish)",
      "EMBL-EBI InterPro domain annotation (25 confirmed TP53 domain hits)",
      "Mutation heatmap: 12 hotspot residues × 11 cancer types; 63 tests + CI/CD",
    ],
    tech: ["Python", "BioPython", "NCBI Entrez", "InterPro", "Streamlit"],
    links: [
      {
        label: "Live app",
        href: "https://tp53analysis-zebgtmrcfjuvkfkcedgsyw.streamlit.app/",
      },
      { label: "GitHub", href: "https://github.com/mbote-droid/tp53_analysis" },
    ],
  },
  {
    slug: "healthcare-ai-radar",
    title: "Healthcare AI Radar",
    tagline: "Scientific-literature intelligence + a research-publication scout",
    description:
      "A resilient pipeline that tracks healthcare-AI literature across arXiv, PubMed, Nature Medicine and the press, ranks it with a transparent Scoop Score, and produces newsletter-ready digests. Its Publication Scout mines the same literature for concrete, venue-matched opportunities to publish.",
    highlights: [
      "Multi-source ingestion with resilient fetching (browser-TLS fallback for bot-blocked feeds)",
      "Five-layer anti-hallucination LLM guardrail — live-verified to produce zero fabricated content",
      "Transparent 0–100 Scoop Score; rule-based classification and de-duplication",
      "Publication Scout: clusters literature into ranked, venue-matched publishing briefs; 90 tests",
    ],
    tech: ["Python", "feedparser", "curl_cffi", "Gemini", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/mbote-droid/healthcare-ai-radar" },
      { label: "Live Radar", href: "/radar" },
    ],
  },
];
