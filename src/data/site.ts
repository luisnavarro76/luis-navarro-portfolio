import type { SiteConfig } from "@/types";
import { projects } from "@/data/projects";

export const siteConfig: SiteConfig = {
  name: "Luis Navarro",
  title: "Luis Navarro | Senior AI, Backend & Full-Stack Engineer",
  description: "Luis Navarro is a Massachusetts-based Senior AI, Backend, and Full-Stack Engineer with 10+ years of experience building SaaS platforms, backend systems, AI applications, integrations, and cloud infrastructure.",
  tagline: "Senior AI, Backend & Full-Stack Engineer",
  role: "Senior AI, Backend & Full-Stack Engineer",
  profileImage: "/images/luis-navarro.png",
  education: "Associate's degree, Computer Science",
  email: "upwork.luis.navarro@gmail.com",
  phone: "+1 6179535174",
  url: "https://luis-navarro.vercel.app",
  resumeUrl: "/resume.pdf",
  intro: "I’m Luis, a Senior Software Engineer based in Massachusetts with 10+ years of experience building SaaS platforms, backend systems, and AI-powered applications. I work across Python, FastAPI, Node.js, TypeScript, React, Next.js, PostgreSQL, AWS, and GCP, with a focus on reliable production systems.",
  about: [ "I’m Luis, a Senior AI, Backend, and Full-Stack Engineer based in Massachusetts with 10+ years of experience building SaaS platforms, enterprise systems, and AI-powered applications.",
    "My work spans Python, FastAPI, Node.js, TypeScript, React, Next.js, PostgreSQL, RAG, AI agents, API integrations, and cloud infrastructure across AWS and GCP.",
    "I focus on the engineering behind reliable production software: clean APIs, data pipelines, integrations, validation, background processing, security, observability, and maintainable architecture.",
  ],
  skills: [
    {
      name: "OpenAI & Anthropic",
      description: "LLM APIs, structured outputs, tool use, and production AI workflows.",
      category: "AI & LLM",
    },
    {
      name: "RAG",
      description: "Retrieval pipelines, grounding, citations, and knowledge-based AI systems.",
      category: "AI & LLM",
    },
    {
      name: "LangGraph",
      description: "Stateful AI workflows, agents, routing, retries, and human review.",
      category: "AI & LLM",
    },
    {
      name: "LangChain & LlamaIndex",
      description: "Retrieval, document processing, orchestration, and LLM integrations.",
      category: "AI & LLM",
    },
    {
      name: "AI Agents",
      description: "Tool calling, workflow automation, guardrails, and controlled autonomy.",
      category: "AI & LLM",
    },
    {
      name: "Vector Search",
      description: "Embeddings, pgvector, semantic retrieval, and document search.",
      category: "AI & LLM",
    },

    // Backend
    {
      name: "Python & FastAPI",
      description: "Production APIs, AI services, data pipelines, and backend systems.",
      category: "Backend & APIs",
    },
    {
      name: "Node.js & TypeScript",
      description: "Backend services, SaaS APIs, integrations, and application workflows.",
      category: "Backend & APIs",
    },
    {
      name: "C# & ASP.NET Core",
      description: "Enterprise backend applications and healthcare integrations.",
      category: "Backend & APIs",
    },
    {
      name: "REST APIs & Webhooks",
      description: "Third-party integrations, authentication, events, and data synchronization.",
      category: "Backend & APIs",
    },
    {
      name: "Background Processing",
      description: "Async jobs, queues, retries, scheduled workflows, and failure recovery.",
      category: "Backend & APIs",
    },
    {
      name: "Authentication & RBAC",
      description: "JWT, sessions, permissions, role-based access, and secure APIs.",
      category: "Backend & APIs",
    },

    // Frontend
    {
      name: "React",
      description: "Production interfaces, SaaS dashboards, and complex application workflows.",
      category: "Frontend",
    },
    {
      name: "Next.js",
      description: "Full-stack applications, routing, server rendering, and product development.",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      description: "Type-safe frontend and backend application development.",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      description: "Responsive product interfaces and reusable design systems.",
      category: "Frontend",
    },
    {
      name: "TanStack Query",
      description: "Server-state management, caching, mutations, and API synchronization.",
      category: "Frontend",
    },
    {
      name: "SaaS Dashboards",
      description: "Admin portals, data-heavy interfaces, and operational workflows.",
      category: "Frontend",
    },

    // Data & Cloud
    {
      name: "PostgreSQL",
      description: "Relational modeling, SQL, migrations, performance, and pgvector.",
      category: "Data & Cloud",
    },
    {
      name: "Redis",
      description: "Caching, queues, background jobs, and distributed application workflows.",
      category: "Data & Cloud",
    },
    {
      name: "AWS",
      description: "Cloud deployment, application infrastructure, storage, and production systems.",
      category: "Data & Cloud",
    },
    {
      name: "Google Cloud",
      description: "Cloud Run, Cloud Storage, BigQuery, and cloud application deployment.",
      category: "Data & Cloud",
    },
    {
      name: "Docker",
      description: "Containerized applications and repeatable development environments.",
      category: "Data & Cloud",
    },
    {
      name: "Terraform",
      description: "Repeatable infrastructure provisioning and cloud environment management.",
      category: "Data & Cloud",
    },
    {
      name: "GitHub Actions",
      description: "Automated testing, CI/CD pipelines, and deployment workflows.",
      category: "Data & Cloud",
    },
  ],

  projects,

  workflow: [
    {
      step: 1,
      title: "Understand the Product",
      description:
        "Clarify the business goals, existing architecture, data flow, constraints, and production requirements before changing the system.",
    },
    {
      step: 2,
      title: "Design the Architecture",
      description:
        "Define clear boundaries between APIs, data, AI workflows, integrations, and infrastructure based on the actual problem.",
    },
    {
      step: 3,
      title: "Build & Integrate",
      description:
        "Implement backend, frontend, AI, and integration work incrementally while preserving the parts of the system that already work.",
    },
    {
      step: 4,
      title: "Test the Real Failure Paths",
      description:
        "Validate business logic, integrations, AI outputs, retries, edge cases, and production-critical workflows before release.",
    },
    {
      step: 5,
      title: "Deploy & Observe",
      description:
        "Ship through CI/CD with useful logging, monitoring, error handling, and safe deployment practices.",
    },
    {
      step: 6,
      title: "Improve from Production",
      description:
        "Use real usage, failures, and customer feedback to improve reliability, performance, and maintainability over time.",
    },
  ],

  features: [
    {
      title: "Production AI",
      description:
        "AI workflows built with validation, retrieval, guardrails, and reliable failure handling.",
      icon: "Bot",
    },
    {
      title: "Backend Architecture",
      description:
        "Maintainable APIs, services, data models, and application boundaries.",
      icon: "ServerCog",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end SaaS development across frontend, backend, and data.",
      icon: "PanelsTopLeft",
    },
    {
      title: "API Integrations",
      description:
        "Reliable integrations using REST APIs, webhooks, authentication, and structured data.",
      icon: "Plug",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Production workloads across AWS, GCP, Docker, Terraform, and CI/CD.",
      icon: "CloudCog",
    },
    {
      title: "Data Engineering",
      description:
        "Reliable ingestion, transformation, validation, storage, and analytics workflows.",
      icon: "Database",
    },
    {
      title: "Reliable Delivery",
      description:
        "Testing, observability, retries, debugging, and maintainable production systems.",
      icon: "ShieldCheck",
    },
    {
      title: "Direct Collaboration",
      description:
        "Clear communication, technical ownership, and practical engineering decisions.",
      icon: "MessageCircle",
    },
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/luisnavarro76",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/luis-navarro-979607434/",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:upwork.luis.navarro@gmail.com",
      icon: "Mail",
    },
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];