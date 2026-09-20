import type { Project } from "@/types";

const gradients = [
  "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
  "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  "from-purple-500/20 via-violet-500/10 to-blue-500/20",
  "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
];

export const projectCategories = [
  "All",
  "AI & LLM",
  "Healthcare",
  "Fintech",
  "B2B SaaS",
  "Frontend",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    slug: "healos-ai",
    name: "HealOS.ai",
    url: "https://healos.ai",
    category: "Healthcare",
    description:
      "AI-powered healthcare automation platform supporting document processing, clinical workflows, structured extraction, validation, and human review.",
    tags: [
      "Python",
      "FastAPI",
      "OpenAI",
      "RAG",
      "PostgreSQL",
      "pgvector",
      "AWS",
      "Healthcare AI",
    ],
    gradient: gradients[0],
    featured: true,
    challenge:
      "AI-generated results were part of real healthcare workflows, where incomplete documents, weak retrieval context, or incorrect structured output could not safely move downstream.",
    solution:
      "Built backend workflows that separated ingestion, extraction, retrieval, model execution, validation, and business logic. Structured outputs were validated before downstream use, with explicit failure states and human-review paths for uncertain cases.",
    keyHighlights: [
      "Production AI workflows with validation and human review",
      "Document processing, structured extraction, and RAG",
      "FastAPI services with PostgreSQL and pgvector",
      "Healthcare integrations and traceable workflow states",
    ],
  },

  {
    slug: "ledgerlens",
    name: "LedgerLens",
    url: "https://ledgerlens.com",
    category: "Fintech",
    description:
      "Financial SaaS platform that converts uploaded PDF and CSV bank statements into normalized, categorized, and searchable transaction data.",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "Document Processing",
      "Financial Data",
      "AI Workflows",
    ],
    gradient: gradients[1],
    featured: true,
    challenge:
      "Bank statements use different formats for dates, descriptions, transaction types, and amounts, making it difficult to produce one consistent financial data model.",
    solution:
      "Separated source-specific extraction from the shared transaction model, then added normalization and validation before records entered the ledger. Uncertain transactions could be reviewed rather than silently accepted.",
    keyHighlights: [
      "PDF and CSV financial document ingestion",
      "Transaction extraction, normalization, and categorization",
      "Searchable structured financial data",
      "Validation pipeline for inconsistent source formats",
    ],
  },

  {
    slug: "gaugepro",
    name: "GaugePro.io",
    url: "https://gaugepro.io",
    category: "B2B SaaS",
    description:
      "Operational B2B SaaS platform for heavy-duty repair and maintenance businesses, covering assets, service orders, diagnostics, inventory, preventive maintenance, and reporting.",
    tags: [
      "B2B SaaS",
      "Backend APIs",
      "Data Modeling",
      "Business Logic",
      "Operational Workflows",
      "Full Stack",
    ],
    gradient: gradients[2],
    featured: true,
    challenge:
      "Service operations, inventory, maintenance, assets, and reporting shared business rules, making duplicated logic across screens and services difficult to maintain safely.",
    solution:
      "Helped keep operational rules in maintainable backend services with predictable APIs and clear domain models, allowing new workflows to be added without spreading duplicate logic throughout the application.",
    keyHighlights: [
      "Complex B2B operational workflows",
      "Backend services and API development",
      "Business logic and relational data modeling",
      "Production SaaS feature development",
    ],
  },

  {
    slug: "ai-support-automation",
    name: "AI Customer Support Automation",
    url: "/projects/ai-support-automation",
    category: "AI & LLM",
    description:
      "AI support platform that classifies incoming tickets, retrieves company knowledge, generates grounded responses, and escalates uncertain cases for human review.",
    tags: [
      "OpenAI",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Vector Search",
      "Workflow Automation",
    ],
    gradient: gradients[3],
    featured: true,
    challenge:
      "Automating support responses without allowing unsupported answers or low-confidence AI decisions to reach customers.",
    solution:
      "Built a controlled workflow around classification, retrieval, source-grounded generation, validation, workflow state tracking, retries, and human escalation.",
    keyHighlights: [
      "LangGraph-based AI workflow orchestration",
      "RAG with source-grounded responses",
      "Human escalation for uncertain cases",
      "Workflow state, retry, and failure tracking",
    ],
  },

  {
    slug: "ribcat",
    name: "Ribcat",
    url: "https://ribcat.de",
    category: "Frontend",
    description:
      "Responsive single-page product experience for Ribcat's compact fully electric dinghy, built around a polished and focused customer-facing interface.",
    tags: [
      "React",
      "TypeScript",
      "SPA",
      "Responsive UI",
      "Frontend",
    ],
    gradient: gradients[4],
    featured: false,
    challenge:
      "Presenting a premium physical product through a focused single-page experience that remains clear and responsive across desktop and mobile devices.",
    solution:
      "Built reusable React and TypeScript UI components, responsive layouts, and interactions designed around a streamlined product presentation.",
    keyHighlights: [
      "Responsive React and TypeScript frontend",
      "Single-page application experience",
      "Reusable component architecture",
      "Desktop and mobile product presentation",
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const projectCount = projects.length;