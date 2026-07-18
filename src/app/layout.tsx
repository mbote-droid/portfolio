import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/content";
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
    default: `${site.name} — Physician-Scientist & AI / Software Engineer`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.fullName, url: site.links.url }],
  creator: site.fullName,
  keywords: [
    "Samuel Mbote",
    "physician-scientist",
    "bioinformatics engineer",
    "computational biology",
    "genomics",
    "variant interpretation",
    "clinical genomics",
    "health-tech",
    "healthcare AI",
    "applied AI engineer",
    "machine learning engineer",
    "LLM engineer",
    "RAG",
    "multi-agent systems",
    "AI guardrails",
    "AlphaFold",
    "ESM-2",
    "drug discovery",
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
    title: `${site.name} — Physician-Scientist & AI / Software Engineer`,
    description: site.metaDescription,
    firstName: "Samuel",
    lastName: "Mbote",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Physician-Scientist & AI / Software Engineer`,
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
    alternateName: site.name,
    url: site.links.url,
    email: site.email,
    jobTitle: "Physician-Scientist · AI / Software Engineer",
    description: site.metaDescription,
    knowsAbout: [
      "Bioinformatics",
      "Computational biology",
      "Genomics",
      "Variant interpretation",
      "Structural biology",
      "Healthcare AI",
      "Large language models",
      "Retrieval-augmented generation",
      "Multi-agent systems",
      "Drug–target modelling",
    ],
    sameAs: [site.links.github, site.links.linkedin, site.links.orcid],
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe: no user input, all first-party constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
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
