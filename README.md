# Luis Navarro — Engineering Portfolio

> Personal engineering portfolio for **Luis Navarro**, a Massachusetts-based **Senior AI, Backend & Full-Stack Engineer** with 10+ years of experience building SaaS platforms, enterprise applications, AI systems, APIs, integrations, and cloud infrastructure.

The portfolio highlights real production work across healthcare, fintech, B2B SaaS, AI automation, backend engineering, and full-stack product development.

**Live Site:** https://luis-navarro.vercel.app

---

## About

I’m Luis, a Senior Software Engineer based in Massachusetts.

My work focuses on building reliable production systems across:

- AI & LLM applications
- RAG and AI agents
- Python / FastAPI backends
- Node.js / TypeScript services
- React / Next.js applications
- PostgreSQL and data pipelines
- API and SaaS integrations
- AWS and Google Cloud infrastructure

I work independently and personally handle engineering from architecture and implementation through testing, deployment, and production support.

---

## Tech Stack

| Area | Technologies |
|---|---|
| AI & LLM | OpenAI, Anthropic, RAG, LangGraph, LangChain, LlamaIndex, pgvector |
| Backend | Python, FastAPI, Django, Node.js, TypeScript, C#, ASP.NET Core |
| Frontend | React, Next.js, TypeScript, Tailwind CSS, TanStack Query |
| Data | PostgreSQL, SQL Server, Redis, BigQuery |
| Cloud | AWS, Google Cloud, Cloud Run, Cloud Storage |
| Infrastructure | Docker, Terraform, GitHub Actions, CI/CD |
| Integrations | REST APIs, Webhooks, OAuth, FHIR, SaaS APIs |

---

## Selected Projects

### HealOS.ai

AI-powered healthcare automation platform supporting document processing, structured extraction, RAG, validation, background workflows, healthcare integrations, and human review.

**Focus:** Python, FastAPI, PostgreSQL, pgvector, OpenAI, AWS, healthcare AI.

### LedgerLens

Financial SaaS platform that processes uploaded PDF and CSV bank statements into normalized, categorized, and searchable transaction data.

**Focus:** document processing, financial data pipelines, FastAPI, PostgreSQL, SaaS workflows.

### GaugePro.io

Operational B2B SaaS platform for heavy-duty repair and maintenance businesses.

The product supports asset management, preventive maintenance, diagnostics, service orders, inventory, and reporting.

**Focus:** backend services, APIs, business logic, data modeling, and full-stack product development.

### AI Customer Support Automation

AI workflow for classifying support requests, retrieving internal knowledge, generating grounded responses, and escalating uncertain cases for human review.

**Focus:** OpenAI, LangGraph, RAG, vector search, workflow orchestration.

### Ribcat

Responsive single-page product experience for Ribcat’s fully electric dinghy.

**Focus:** React, TypeScript, responsive UI, reusable components.

---

## Portfolio Features

### Professional Sections

- Hero introduction
- About
- Technical expertise
- Selected projects
- Engineering approach
- Technical blog
- Contact
- Resume download
- GitHub and LinkedIn links

### Technical Features

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion animations
- Responsive layouts
- Reusable component architecture
- Centralized portfolio data
- Structured metadata
- JSON-LD
- Sitemap and robots configuration
- Open Graph metadata
- Static and server-rendered pages
- Accessible navigation and UI components

---

## Project Structure

```text
luis-portfolio/
├── public/
│   ├── resume.pdf
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── manifest.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── effects/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── site.ts
│   │   ├── projects.ts
│   │   └── blog.ts
│   │
│   ├── lib/
│   │   ├── seo.ts
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md