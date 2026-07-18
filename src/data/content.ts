/**
 * Single source of truth for site content. Grounded in real, verifiable facts;
 * swap any value here and the whole site updates. No location is stored by design
 * (kept private). Links with an empty href are hidden site-wide, so partial data
 * never renders a dead link.
 */

export type ProjectLink = { label: string; href: string; kind?: "primary" | "secondary" };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  flagship?: boolean;
  status?: "live" | "coming-soon";
};

export type Stat = { value: string; label: string };

export type SkillGroup = { label: string; items: string[]; learning?: boolean };

export const site = {
  name: "Samuel Mbote",
  fullName: "Dr Samuel Ngigi Mbote",
  shortName: "Samuel Mbote",
  role: "Physician-Scientist · AI / Software Engineer",

  // Search-friendly headline used for SEO + the hero value proposition.
  headline: "Physician-scientist engineering trustworthy AI for genomics and healthcare.",

  tagline:
    "I build and audit clinical-grade AI systems — genomics, variant interpretation, and drug–target modelling — with hallucination guardrails and rigorous, offline-first engineering.",

  // Short, keyword-dense summary for meta description + social cards.
  metaDescription:
    "Samuel Mbote — physician-scientist and AI/software engineer building trustworthy, clinical-grade AI for bioinformatics, genomics and healthcare. Multi-agent LLM systems, variant interpretation, structural biology, and anti-hallucination guardrails, rigorously tested and offline-first.",

  email: "mbotesamuel9@gmail.com",
  availability: "Open to bioinformatics, health-tech & applied-AI roles",

  bio: [
    "I'm a physician-scientist (MBChB, COSECSA surgical training) and IBM-certified AI developer. I sit at the intersection of clinical medicine and machine learning, building systems that reason over biochemistry — protein structure and folding, variant effect, and drug–target interaction — and that can be trusted in a clinical context.",
    "My focus is making AI's scientific reasoning verifiable: hallucination guardrails, ground-truth benchmarks against ClinVar and IARC, and rigorously tested, offline-first pipelines (480+ automated tests across projects). I pair native molecular- and clinical-biology knowledge with the engineering discipline to ship software that is honest, reproducible, and genuinely useful.",
  ],

  links: {
    github: "https://github.com/mbote-droid",
    linkedin: "https://www.linkedin.com/in/samuel-mbote-238b13230",
    orcid: "https://orcid.org/0009-0003-2319-8873",
    email: "mailto:mbotesamuel9@gmail.com",
    cv: "/cv.pdf",
    url: "https://portfolio-sam-mbote.vercel.app",
  },
};

/** Headline impact metrics — shown above the fold so strengths are visible immediately. */
export const stats: Stat[] = [
  { value: "6", label: "Shipped projects" },
  { value: "480+", label: "Automated tests" },
  { value: "26", label: "Agent flagship platform" },
  { value: "100%", label: "Pathogenic-variant F1" },
];

/**
 * Honest skills model. `learning` groups are explicitly framed as "currently
 * building & learning" so nothing unproven is presented as established expertise.
 */
export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript / JavaScript", "SQL", "Bash"],
  },
  {
    label: "AI / ML engineering",
    items: [
      "LLM application design",
      "Retrieval-augmented generation (RAG)",
      "Multi-agent orchestration",
      "Anti-hallucination guardrails",
      "Model evaluation & benchmarking",
      "Prompt engineering",
      "Gemini & OpenAI APIs",
    ],
  },
  {
    label: "Bioinformatics & genomics",
    items: [
      "Variant effect analysis",
      "BioPython",
      "NCBI Entrez",
      "InterPro / domain annotation",
      "Phylogenetics",
      "ClinVar / IARC benchmarking",
      "AlphaFold & ESM-2",
      "AutoDock Vina",
      "HL7 FHIR R4",
    ],
  },
  {
    label: "Backend & data",
    items: ["FastAPI", "Streamlit", "REST APIs", "pandas / NumPy", "Docker", "pytest / TDD"],
  },
  {
    label: "Frontend & delivery",
    items: ["React", "Next.js", "Tailwind CSS", "Git", "GitHub Actions (CI/CD)"],
  },
  {
    label: "Currently building & learning",
    learning: true,
    items: ["Rust", "Nextflow", "Snakemake", "Cloud (AWS / GCP)"],
  },
];

export const projects: Project[] = [
  {
    slug: "precision-onco-africa",
    title: "Precision Onco Africa",
    tagline:
      "A 26-agent structural & molecular-genetics AI platform with a built-in reasoning-audit layer",
    description:
      "A clinical-grade platform that reasons over cancer biochemistry — protein structure and folding, variant effect, and drug–target interaction — with an AI-audit layer that scores every agent's output for accuracy, hallucination and citation quality before release. Runs fully offline on 8GB RAM.",
    highlights: [
      "Structural biology: AlphaFold p53 structures (per-residue pLDDT), ESM-2 variant-effect scoring, ΔΔG stability, cavity/druggability",
      "Drug–target modelling: AutoDock Vina docking, MDM2 / APR-246 inhibitor scoring, PARP synthetic-lethality mapping",
      "AI-reasoning audit: dual guardrail + per-agent harness scoring accuracy, hallucination rate and citation quality",
      "Ground-truth benchmarks vs ClinVar/IARC (100% pathogenic-variant F1); 419 tests; HIPAA-aligned, HL7 FHIR R4",
    ],
    tech: ["Python", "AlphaFold", "ESM-2", "AutoDock Vina", "Docker", "LLM agents"],
    links: [
      {
        label: "Live app",
        href: "https://tp53analysis-g8iqzkuhoqmjcjtkvjcgbb.streamlit.app/",
        kind: "primary",
      },
      { label: "GitHub", href: "https://github.com/mbote-droid/precision-onco-africa" },
    ],
    flagship: true,
    status: "live",
  },
  {
    slug: "ngs-variant-pipeline",
    title: "NGS Variant Pipeline",
    tagline:
      "Raw sequencing reads → AI-generated, evidence-cited clinical variant report — laptop to cloud",
    description:
      "A reproducible Nextflow pipeline that turns raw NGS reads into an AI-generated, evidence-cited clinical variant report for both germline and somatic workflows. Built for reproducibility and portability, so the same pipeline runs on a laptop or scales to the cloud.",
    highlights: [
      "End-to-end germline & somatic variant calling from raw reads",
      "AI-generated clinical report with cited, verifiable evidence",
      "Reproducible, containerised Nextflow workflow (laptop → cloud)",
      "Designed around ground-truth benchmarking and honest reporting",
    ],
    tech: ["Nextflow", "Python", "NGS", "Variant calling", "Docker", "LLM reporting"],
    links: [{ label: "GitHub", href: "https://github.com/mbote-droid/ngs-variant-pipeline" }],
    status: "coming-soon",
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
      { label: "Live Radar", href: "/radar", kind: "primary" },
      { label: "GitHub", href: "https://github.com/mbote-droid/healthcare-ai-radar" },
    ],
    status: "live",
  },
  {
    slug: "neurosonix",
    title: "NeuroSonix",
    tagline: "Locale-agnostic audio annotation + agentic evaluation platform",
    description:
      "An audio annotation and agentic-evaluation platform that scores voice-agent replies across five quality dimensions in four role-play domains, with Whisper/Gemini model comparison. Built FastAPI + React, it runs offline with graceful degradation when providers are unavailable.",
    highlights: [
      "Five-dimension scoring of voice-agent replies across four role-play domains",
      "Whisper / Gemini model comparison with physics-based audio quality metrics",
      "FastAPI + React architecture, fully tested end to end",
      "Offline-first with graceful degradation when cloud providers are unreachable",
    ],
    tech: ["FastAPI", "React", "Whisper", "Gemini", "Python", "pytest"],
    links: [{ label: "GitHub", href: "https://github.com/mbote-droid/Neurosonix" }],
    status: "coming-soon",
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
        kind: "primary",
      },
      { label: "GitHub", href: "https://github.com/mbote-droid/tp53_analysis" },
    ],
    status: "live",
  },
  {
    slug: "surgilogic-qa",
    title: "SurgiLogic-QA",
    tagline: "Clinical-reasoning support for post-operative surgical monitoring",
    description:
      "A clinical-reasoning tool for post-operative surgical monitoring, built in Python and Streamlit. It draws on real surgical domain expertise to structure post-op assessment and surface reasoning that supports safer monitoring decisions.",
    highlights: [
      "Structured clinical reasoning for post-operative monitoring",
      "Built from first-hand surgical domain knowledge",
      "Lightweight Python + Streamlit delivery",
    ],
    tech: ["Python", "Streamlit", "Clinical reasoning"],
    links: [{ label: "GitHub", href: "https://github.com/mbote-droid/SurgiLogic-QA" }],
    status: "coming-soon",
  },
];
