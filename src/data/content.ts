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
  status?: "live" | "open-source" | "coming-soon";
};

export type Stat = { value: string; label: string };

export type SkillGroup = { label: string; items: string[]; learning?: boolean };

export type Focus = { title: string; blurb: string; tags: string[] };

export type Credential = { name: string; issuer: string; note?: string; href?: string };

export const site = {
  name: "Samuel Mbote",
  fullName: "Dr. Samuel Mbote",
  alternateNames: ["Samuel Ngigi Mbote", "Samuel N. Mbote", "Dr. Samuel Mbote"],
  shortName: "Samuel Mbote",
  role: "Physician (MBChB, MCS) · AI & Software Engineer · Bioinformatics",

  // Concise title-tag / social positioning.
  title: "Physician · IBM-Certified AI Engineer · Full-Stack SWE · Bioinformatics",

  // Search-friendly headline used for SEO + the hero value proposition.
  headline:
    "Physician and AI engineer turning biomedical data into decisions you can trust.",

  tagline:
    "I unite frontline clinical medicine, biomedical research and production engineering — building data-driven, rigorously tested AI across genomics, healthcare and the full stack, with the rigour to make its reasoning verifiable.",

  // Short, keyword-dense summary for meta description + social cards.
  metaDescription:
    "Dr. Samuel Mbote: physician (MBChB, MCS COSECSA), IBM-certified AI engineer and full-stack software engineer. Bioinformatics and NGS pipelines (Nextflow, Snakemake), clinical genomics and variant interpretation, LLM and AI-agent evaluation, data science and multi-domain data annotation (audio, image, clinical text), biomedical research and scientific writing.",

  email: "mbotesamuel9@gmail.com",
  availability:
    "Open to roles in bioinformatics, AI evaluation, data science & annotation, biomedical research, scientific writing, health-tech & applied AI",

  bio: [
    "I'm a physician and general surgery registrar (MBChB; MCS, COSECSA), an IBM-certified AI engineer and an IBM-certified full-stack software engineer — a rare combination of frontline clinical judgement, biomedical research training and the engineering depth to ship production systems end to end. I work fluently across the whole pipeline: framing the research question, designing the study, wrangling and annotating the data, modelling it, and delivering it as a tested, deployable product.",
    "That range is my edge. I bring native command of clinical and molecular biology to data problems most engineers can't read, and I bring rigorous software engineering to research that most clinicians can't build. My work makes AI's scientific reasoning verifiable — hallucination guardrails, ground-truth benchmarks against ClinVar and IARC, and rigorously tested, offline-first pipelines (1,000+ automated tests across five open-source projects) — so the results hold up to clinical and scientific scrutiny.",
  ],

  links: {
    github: "https://github.com/mbote-droid",
    linkedin: "https://www.linkedin.com/in/samuel-mbote-238b13230",
    orcid: "https://orcid.org/0009-0003-2319-8873",
    email: "mailto:mbotesamuel9@gmail.com",
    cv: "/cv.pdf",
    credly: "https://www.credly.com/users/samuel-m.1cfdf6c1",
    scholar: "https://scholar.google.com/citations?user=3iiXDTYAAAAJ",
    kolabtree: "",
    url: "https://portfolio-sam-mbote.vercel.app",
  },
};

/** Headline impact metrics — shown above the fold so strengths are visible immediately. */
export const stats: Stat[] = [
  { value: "3-in-1", label: "Clinician · Researcher · Engineer" },
  { value: "5", label: "Tested open-source projects" },
  { value: "1,000+", label: "Automated tests written" },
  { value: "7/7", label: "TP53 pathogenic hotspots correct vs ClinVar/IARC" },
];

/**
 * Core capability areas — the "Data & Research" section. Makes the data-science,
 * data-annotation and biomedical-research strengths impossible to miss for
 * recruiters scanning for those specific roles.
 */
export const focus: Focus[] = [
  {
    title: "Data Science & Machine Learning",
    blurb:
      "End-to-end data science: exploratory analysis, statistical and ML modelling, feature engineering, and honest evaluation. I turn messy, high-dimensional biomedical data into models whose performance I can defend — measured against ground truth, not vibes.",
    tags: [
      "EDA",
      "Statistical modelling",
      "ML / classification",
      "Feature engineering",
      "Model evaluation (F1 · ROC · calibration)",
      "pandas · NumPy · scikit-learn",
    ],
  },
  {
    title: "Data Analysis & Analytics",
    blurb:
      "I interrogate data to answer real questions: hypothesis testing, biostatistics, cohort and outcome analysis, and clear, decision-ready visualisation. Comfortable from raw SQL and spreadsheets to reproducible analytical pipelines.",
    tags: [
      "Biostatistics",
      "Hypothesis testing",
      "Cohort & outcome analysis",
      "Data visualisation",
      "SQL",
      "Reproducible pipelines",
    ],
  },
  {
    title: "Data Annotation & Labeling",
    blurb:
      "Multi-domain annotation with a clinician's eye for quality. I design labelling schemas and rubrics, run annotation across audio, image and clinical-text modalities, and enforce quality with inter-annotator agreement and model-in-the-loop review.",
    tags: [
      "Audio annotation & transcription QA",
      "Medical image annotation (radiology · pathology · surgical)",
      "Clinical & genomic text labeling",
      "Rubric & schema design",
      "Inter-annotator agreement",
      "Model-in-the-loop QA",
    ],
  },
  {
    title: "Healthcare & Biomedical Research",
    blurb:
      "Trained to do research properly. I scope questions, choose the right study design, and reason from evidence — grounding every AI system in verifiable biomedical fact rather than plausible-sounding output.",
    tags: [
      "Study design (RCT · cohort · case-control · cross-sectional)",
      "Systematic review & evidence synthesis",
      "Experimental design & hypothesis-driven research",
      "Clinical & molecular biology",
      "Ground-truth benchmarking (ClinVar · IARC)",
      "Scientific writing",
    ],
  },
];

/**
 * Honest skills model. `learning` groups are explicitly framed as "currently
 * building & learning" so nothing unproven is presented as established expertise.
 */
export const skills: SkillGroup[] = [
  {
    label: "Data science & analytics",
    items: [
      "Exploratory data analysis (EDA)",
      "Statistical modelling",
      "Biostatistics & hypothesis testing",
      "Machine learning / classification",
      "Feature engineering",
      "Model evaluation (F1 · ROC · calibration)",
      "Data visualisation",
      "pandas · NumPy · scikit-learn",
      "SQL",
    ],
  },
  {
    label: "Data annotation & labeling",
    items: [
      "Audio annotation & transcription QA",
      "Medical image annotation",
      "Clinical & genomic text labeling",
      "Rubric & schema design",
      "Inter-annotator agreement",
      "Model-in-the-loop QA",
      "Quality control",
    ],
  },
  {
    label: "Biomedical & clinical research",
    items: [
      "Study design (RCT · cohort · case-control)",
      "Systematic review & evidence synthesis",
      "Experimental design",
      "Clinical & molecular biology",
      "Ground-truth benchmarking",
      "Scientific writing",
    ],
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
      "LLM & AI-agent evaluation",
      "Deep learning (Keras)",
      "Generative AI applications",
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
      "NGS variant calling (germline · somatic · long-read)",
      "Nextflow · Snakemake",
      "Mutect2 · Clair3 · Sniffles2 · minimap2",
      "GIAB benchmarking · MultiQC",
      "AlphaFold & ESM-2",
      "AutoDock Vina",
      "HL7 FHIR R4",
    ],
  },
  {
    label: "Full-stack engineering",
    items: [
      "Python",
      "TypeScript / JavaScript",
      "React",
      "Next.js",
      "FastAPI",
      "Django",
      "Node.js · Express",
      "Streamlit",
      "REST APIs",
      "Tailwind CSS",
      "Docker · Kubernetes",
      "Microservices & serverless",
      "Git · GitHub Actions (CI/CD)",
      "Google Cloud · IBM Cloud",
      "GPU compute (CUDA · AMD ROCm)",
      "MATLAB · Octave",
      "pytest / TDD",
    ],
  },
  {
    label: "Currently building & learning",
    learning: true,
    items: ["Rust", "AWS", "Azure"],
  },
];

export const projects: Project[] = [
  {
    slug: "precision-onco-africa",
    title: "Precision Onco Africa",
    tagline:
      "26 specialist AI agents, including a 6-agent tumour board, with a built-in reasoning-audit layer",
    description:
      "A research platform that reasons over cancer biochemistry — protein structure and folding, variant effect, and drug–target interaction — with an AI-audit layer that scores every agent's output for accuracy, hallucination and citation quality before release. Runs fully offline on 8GB RAM.",
    highlights: [
      "Structural biology: AlphaFold p53 structures (per-residue pLDDT), ESM-2 variant-effect scoring, ΔΔG stability, cavity/druggability",
      "Drug–target modelling: AutoDock Vina docking, MDM2 / APR-246 inhibitor scoring, PARP synthetic-lethality mapping",
      "AI-reasoning audit: dual guardrail + per-agent harness scoring accuracy, hallucination rate and citation quality",
      "Benchmarked vs ClinVar/IARC: 7/7 known pathogenic TP53 hotspots correctly classified; 566 tests; PHI de-identification; HL7 FHIR R4 output",
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
      "Raw sequencing reads to an evidence-cited clinical variant report: germline, somatic and long-read, laptop to cloud",
    description:
      "A reproducible, containerised Nextflow pipeline: reads, QC, alignment, variant calling, annotation, prioritisation and an AI-assisted, evidence-cited report, with a single MultiQC across every stage. The same pipeline runs on a laptop or scales to cloud/HPC.",
    highlights: [
      "Short-read germline, somatic (Mutect2) and cohort joint genotyping; long-read via minimap2 + Clair3 + Sniffles2",
      "GIAB accuracy benchmarking (precision / recall / F1 split by SNP and INDEL)",
      "Evidence-cited clinical report plus HL7 FHIR output",
      "164 tests + CI; conda or Docker/Singularity, laptop to cloud",
    ],
    tech: ["Nextflow", "Python", "NGS", "Variant calling", "Docker", "LLM reporting"],
    links: [{ label: "GitHub", href: "https://github.com/mbote-droid/ngs-variant-pipeline" }],
    status: "open-source",
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
      "FastAPI + React architecture; 133 tests, CI/CD and Docker",
      "Offline-first with graceful degradation when cloud providers are unreachable",
    ],
    tech: ["FastAPI", "React", "Whisper", "Gemini", "Python", "pytest"],
    links: [{ label: "GitHub", href: "https://github.com/mbote-droid/Neurosonix" }],
    status: "open-source",
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

/** Degrees and certifications. Issuers are named so recruiters and AI search can verify them. */
export const education: Credential[] = [
  { name: "MBChB (Bachelor of Medicine and Bachelor of Surgery)", issuer: "Kampala International University" },
  { name: "MCS (Membership of the College of Surgeons), General Surgery", issuer: "College of Surgeons of East, Central and Southern Africa (COSECSA)" },
];

export const certifications: Credential[] = [
  { name: "AI Engineering Professional Certificate", issuer: "IBM", href: site.links.credly },
  { name: "Full Stack Software Developer Professional Certificate", issuer: "IBM", href: site.links.credly },
  { name: "Bioinformatics", issuer: "Technical University of Denmark (DTU), Coursera" },
  { name: "Bioinformatics", issuer: "UC San Diego, Coursera" },
  { name: "Computational Neuroscience", issuer: "University of Washington, Coursera" },
  { name: "Foundations of Healthcare Systems Engineering", issuer: "Johns Hopkins University, Coursera" },
  { name: "Biomedical Imaging Fundamentals", issuer: "EPFL, Coursera" },
  { name: "Annotate and Analyze Objects for Vision", issuer: "Coursera" },
  { name: "AI Agents", issuer: "Microsoft" },
  { name: "AI in Healthcare (Azure)", issuer: "Microsoft" },
];
