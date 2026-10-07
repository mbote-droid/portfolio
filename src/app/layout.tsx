import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site, projects, education, certifications } from "@/data/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.links.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.fullName, url: site.links.url }],
  creator: site.fullName,
  keywords: [
    "Samuel Mbote",
    "Dr. Samuel Mbote",
    "physician",
    "general surgeon",
    "COSECSA",
    "Snakemake",
    "LLM evaluation",
    "AI agent evaluation",
    "precision oncology",
    "TP53",
    "data scientist",
    "data analyst",
    "data annotation",
    "audio annotation",
    "image annotation",
    "medical image annotation",
    "clinical data annotation",
    "data labeling",
    "biostatistics",
    "biomedical research",
    "clinical research",
    "study design",
    "research methods",
    "full-stack software engineer",
    "IBM AI engineer",
    "machine learning engineer",
    "bioinformatics engineer",
    "computational biology",
    "genomics",
    "variant interpretation",
    "clinical genomics",
    "health-tech",
    "healthcare AI",
    "applied AI engineer",
    "LLM engineer",
    "RAG",
    "multi-agent systems",
    "AI guardrails",
    "AlphaFold",
    "ESM-2",
    "Nextflow",
    "NGS variant pipeline",
    "Python",
    "TypeScript",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: site.links.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
    firstName: "Samuel",
    lastName: "Mbote",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/** Schema.org Person markup so recruiters' tools and search engines get structured facts. */
function PersonJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.alternateNames,
    honorificPrefix: "Dr.",
    honorificSuffix: "MBChB, MCS",
    worksFor: { "@type": "Organization", name: "Daktari Genomed Labs" },
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.issuer })),
    hasCredential: [...education, ...certifications]
      .filter((c) => !c.note)
      .map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.name,
        recognizedBy: { "@type": "Organization", name: c.issuer },
      })),
    url: site.links.url,
    email: site.email,
    jobTitle: [
      "Physician",
      "Bioinformatics Engineer",
      "Data Scientist",
      "IBM-Certified AI Engineer",
      "Certified Full-Stack Software Engineer",
    ],
    description: site.metaDescription,
    knowsAbout: [
      "Data science",
      "Data analysis",
      "Data annotation",
      "Audio annotation",
      "Medical image annotation",
      "Clinical data labeling",
      "Biostatistics",
      "Biomedical research",
      "Clinical research methods",
      "Study design",
      "Bioinformatics",
      "Computational biology",
      "Genomics",
      "Variant interpretation",
      "Healthcare AI",
      "Large language models",
      "Retrieval-augmented generation",
      "Multi-agent systems",
      "Full-stack software engineering",
      "Next-generation sequencing",
      "Variant calling",
      "Nextflow",
      "Snakemake",
      "Precision oncology",
      "LLM evaluation",
      "AI agent evaluation",
      "Scientific writing",
      "Surgery",
    ],
    sameAs: [
      site.links.github,
      site.links.linkedin,
      site.links.orcid,
      site.links.credly,
      site.links.scholar,
      site.links.kolabtree,
    ].filter(Boolean),
  };
  const code = projects.map((pr) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: pr.title,
    description: pr.description,
    codeRepository: pr.links.find((l) => l.href.includes("github.com"))?.href,
    programmingLanguage: pr.tech,
    license: "https://opensource.org/licenses/MIT",
    author: { "@type": "Person", name: site.fullName, url: site.links.url },
  }));
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe: no user input, all first-party constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify([json, ...code]) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
