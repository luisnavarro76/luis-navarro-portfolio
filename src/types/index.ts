export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  description: string;
  category: "AI & LLM" | "Backend & APIs" | "Frontend" | "Data & Cloud";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Project {
  slug: string;
  name: string;
  url: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  featured?: boolean;
  challenge?: string;
  solution?: string;
  keyHighlights?: string[];
  results?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  publishedAt: string;
  readTime: string;
  author: string;
  category: string;
  tags: string[];
  content: string[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  tagline: string;
  role: string;
  education: string;
  email: string;
  phone: string;
  url: string;
  resumeUrl: string;
  intro: string;
  about: string[];
  skills: Skill[];
  projects: Project[];
  workflow: WorkflowStep[];
  features: Feature[];
  socials: SocialLink[];
}

