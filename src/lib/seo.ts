import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import type { Project, BlogPost, BreadcrumbItem, FAQItem } from "@/types";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name} - Pakistani Ethical Hacker & Full Stack Developer`,
  },
  description: siteConfig.description,
  keywords: [
    "Luis Navarro",
    "cybersakki",
    "Cyber Sakki",
    "Ethical hacker in Pakistan",
    "Pakistani Ethical Hacker",
    "Ethical Hacking Pakistan",
    "Top Ethical Hacker in Pakistan",
    "Cybersecurity Expert in Pakistan",
    "Penetration Tester Pakistan",
    "Web Security Specialist in Pakistan",
    "Next.js Developer in Pakistan",
    "Pakistani Next.js Developer",
    "Full Stack Developer in Pakistan",
    "Pakistani Full Stack Developer",
    "React Developer Pakistan",
    "Full Stack Web Developer",
    "Web Security Specialist",
    "Next.js Developer",
    "React Developer",
    "TypeScript Specialist",
    "Custom Website Development",
    "Vulnerability Assessment Pakistan",
    "Technical SEO Pakistan",
    "Web Security Assessment",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@cybersakki",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "BanXlEMAdcE-T2tPmfcLf2LVPx6Ry3mhrySLmayz4J0",
  },
};


export function constructMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    keywords: [
      ...keywords,
      "Luis Navarro",
      "cybersakki",
      "Ethical hacker in Pakistan",
      "Pakistani Ethical Hacker",
      "Next.js Developer in Pakistan",
      "Full Stack Developer in Pakistan",
      "Full Stack Web Developer",
      "Next.js",
      "React",
      "Web Security",
      "Penetration Testing",
    ],
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@cybersakki",
    },
    alternates: {
      canonical: url,
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: ["cybersakki", "Cyber Sakki", "Luis Navarro (@cybersakki)"],
    jobTitle: [
      "Ethical Hacker",
      "Full Stack Next.js Developer",
      "Web Security Specialist",
      "Cybersecurity Content Creator",
    ],
    description:
      "Luis Navarro (@cybersakki) is an Ethical Hacker and Full Stack Next.js Developer based in Pakistan, specializing in penetration testing, web security reviews, high-performance Next.js web applications, and technical SEO.",
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    nationality: {
      "@type": "Country",
      name: "Pakistan",
    },
    homeLocation: {
      "@type": "Country",
      name: "Pakistan",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.education,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Ethical Hacker & Full Stack Web Developer",
      occupationalCategory: "15-1254.00",
      skills: "Ethical Hacking, Penetration Testing, Next.js, React, TypeScript, Web Security Auditing, Technical SEO",
    },
    knowsAbout: [
      "Ethical Hacking",
      "Cybersecurity",
      "Penetration Testing",
      "Vulnerability Assessment",
      "OWASP Top 10",
      "Kali Linux",
      "Web Application Security",
      "Next.js",
      "React",
      "TypeScript",
      "Full Stack Web Development",
      "Technical SEO",
      "Core Web Vitals",
    ],
    sameAs: siteConfig.socials
      .filter((s) => s.url.startsWith("http"))
      .map((s) => s.url),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
  };
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function getCaseStudySchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/projects/${project.slug}`,
    keywords: project.tags.join(", "),
  };
}

export function getBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.url,
    },
    datePublished: post.publishedAt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: "Luis Navarro (@cybersakki) - Pakistani Ethical Hacker & Full Stack Next.js Developer",
    description: siteConfig.description,
    mainEntity: {
      "@id": `${siteConfig.url}/#person`,
    },
  };
}

export function getStructuredData() {
  return [getPersonSchema(), getWebSiteSchema(), getProfilePageSchema()];
}


