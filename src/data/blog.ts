import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-reliable-rag-systems",
    title: "Building Reliable RAG Systems Beyond the Demo",
    description:
      "How to design RAG systems with better retrieval, validation, traceability, and failure handling for real production use.",
    metaDescription:
      "A practical guide to building production RAG systems with document ingestion, retrieval, validation, source grounding, observability, and human review.",
    publishedAt: "2026-09-15",
    readTime: "7 min read",
    author: "Luis Navarro",
    category: "AI & LLM",
    tags: ["RAG", "OpenAI", "LangGraph", "pgvector"],
    content: [
      "A RAG demo is easy to build. A production RAG system is much harder because the quality of the final answer depends on every step before the model generates a response.",

      "The first concern is document ingestion. Files should be parsed, normalized, chunked, and indexed in a way that preserves useful context and metadata. If the source data is incomplete or poorly structured, better prompting will not solve the underlying problem.",

      "Retrieval also needs to be evaluated independently from generation. I want to know whether the correct material was actually retrieved before judging the model's final answer. This makes it easier to separate retrieval failures from reasoning or prompt failures.",

      "The model should not be treated as the final authority. Structured outputs should be validated before downstream use, and important responses should remain connected to the source material that supported them.",

      "For workflows where incorrect output has operational consequences, I also use explicit failure states and human-review paths. Low-confidence or incomplete results should stop safely instead of continuing through the workflow as if they were correct.",

      "A production RAG system therefore needs more than embeddings and a vector database. It needs ingestion controls, retrieval evaluation, validation, observability, source traceability, and predictable failure handling.",
    ],
  },

  {
    slug: "llm-business-logic-boundaries",
    title: "Why LLMs Should Not Control Critical Business Logic",
    description:
      "A practical approach to separating AI reasoning from permissions, financial calculations, state changes, and other deterministic application logic.",
    metaDescription:
      "Learn how to safely integrate LLMs into production applications by separating model reasoning from business rules, permissions, state changes, and validation.",
    publishedAt: "2026-09-10",
    readTime: "6 min read",
    author: "Luis Navarro",
    category: "AI Architecture",
    tags: ["AI Agents", "LLM", "FastAPI", "Architecture"],
    content: [
      "LLMs are useful for understanding unstructured information, classifying requests, extracting data, and suggesting actions. They are much less appropriate as the final authority over deterministic business rules.",

      "In production systems, I keep model reasoning separate from operations such as permissions, account state changes, financial calculations, database transitions, and external side effects.",

      "For example, an AI agent can determine that a customer appears to need a refund, but application code should still verify the user, order state, payment status, permissions, and refund amount before anything is changed.",

      "The same principle applies to structured extraction. A model may return syntactically valid JSON while still omitting required information or producing a value that violates the application's business rules.",

      "I prefer workflows where the model proposes structured output or an action, then deterministic code validates the result before the workflow continues.",

      "This separation makes AI systems easier to test, debug, audit, and improve. It also lets the model change over time without forcing critical business logic to change with it.",
    ],
  },

  {
    slug: "designing-fastapi-ai-workflows",
    title: "Designing FastAPI Services for AI Workflows",
    description:
      "How I structure FastAPI applications for document processing, AI orchestration, background jobs, validation, and production reliability.",
    metaDescription:
      "Practical FastAPI architecture for AI applications including background processing, validation, structured outputs, retries, and production workflow design.",
    publishedAt: "2026-09-05",
    readTime: "8 min read",
    author: "Luis Navarro",
    category: "Backend",
    tags: ["Python", "FastAPI", "AI", "Backend"],
    content: [
      "A FastAPI endpoint that calls an LLM directly can work for a prototype, but production AI applications usually need a more structured workflow.",

      "I prefer to keep API transport, business logic, AI orchestration, persistence, and external integrations separate. The HTTP endpoint should validate the request and hand work to the correct service instead of containing the entire workflow itself.",

      "Long-running work such as document parsing, embedding generation, extraction, or external API processing should usually run outside the request lifecycle. Background jobs make retries and failure recovery much easier to control.",

      "Each workflow stage should have a clear input and output contract. Structured LLM responses can be validated with schemas before they are stored or passed to another service.",

      "Failures should also be classified. Temporary provider errors may be safe to retry, while invalid input or failed validation should stop immediately and produce a useful error state.",

      "This architecture makes the system easier to test because document processing, model behavior, database operations, and integrations can be tested independently rather than through one large endpoint.",
    ],
  },

  {
    slug: "safe-webhooks-background-jobs",
    title: "Idempotency in Webhooks and Background Jobs",
    description:
      "How to prevent duplicate actions when webhooks, queues, workers, and external APIs retry the same operation.",
    metaDescription:
      "A practical guide to idempotency, webhook deduplication, retries, background jobs, and safe processing in distributed backend systems.",
    publishedAt: "2026-08-30",
    readTime: "6 min read",
    author: "Luis Navarro",
    category: "Backend",
    tags: ["Webhooks", "Queues", "Idempotency", "Backend"],
    content: [
      "Retries are normal in distributed systems. The important question is whether repeating the same operation produces the same safe result.",

      "Webhook providers may deliver the same event more than once, and background workers may retry a task after a timeout or process crash. Without idempotency, those retries can create duplicate records, duplicate emails, or repeated external actions.",

      "For incoming webhooks, I prefer to persist the provider event identifier and reject events that have already been processed.",

      "For background work, the database should usually hold the durable workflow state. A queue message tells the worker what needs attention, but it should not be the only record that the work exists.",

      "External API calls require additional care because the provider may successfully accept a request while the local worker times out before recording the response. Where possible, I use provider idempotency keys and persist outbound attempts before making the request.",

      "Good retry behavior is not simply retrying everything. Temporary network failures and rate limits are different from invalid credentials, malformed data, or failed business validation.",
    ],
  },

  {
    slug: "document-extraction-pipeline-design",
    title: "Designing Reliable Document Extraction Pipelines",
    description:
      "How to turn inconsistent PDFs and uploaded files into validated structured data without letting extraction errors contaminate downstream systems.",
    metaDescription:
      "Learn how to design document extraction pipelines with parsing, normalization, structured AI extraction, validation, review, and traceability.",
    publishedAt: "2026-08-25",
    readTime: "7 min read",
    author: "Luis Navarro",
    category: "Data Engineering",
    tags: ["Document AI", "Python", "Extraction", "Validation"],
    content: [
      "Document extraction becomes difficult when files that appear similar actually contain different layouts, missing fields, inconsistent terminology, or low-quality text.",

      "I prefer to separate document ingestion, source-specific parsing, structured extraction, normalization, validation, and storage into independent stages.",

      "The extraction layer should preserve where each value came from instead of immediately converting everything into the application's final data model.",

      "Normalization then converts source-specific values into a consistent internal representation. Validation can check required fields, formats, relationships, duplicates, and business-specific constraints before anything is accepted downstream.",

      "If a field cannot be established confidently, it should remain uncertain or move to review rather than being silently replaced with a plausible value.",

      "This approach makes new document formats easier to support because source-specific logic stays at the ingestion boundary instead of spreading throughout the rest of the application.",
    ],
  },

  {
    slug: "cloud-run-ai-api-deployment",
    title: "Deploying Containerized AI APIs on Google Cloud Run",
    description:
      "Practical considerations for running containerized FastAPI and AI services on Cloud Run with reliable deployment and configuration.",
    metaDescription:
      "A practical overview of deploying FastAPI and AI workloads to Google Cloud Run using Docker, environment configuration, CI/CD, and production monitoring.",
    publishedAt: "2026-08-20",
    readTime: "6 min read",
    author: "Luis Navarro",
    category: "Cloud",
    tags: ["Google Cloud", "Cloud Run", "Docker", "FastAPI"],
    content: [
      "Cloud Run works well for containerized APIs when you want managed deployment without operating a full Kubernetes environment.",

      "I typically start by keeping the application container stateless. Persistent data belongs in managed databases or object storage, while runtime configuration and secrets remain outside the image.",

      "The container should expose clear health behavior, handle termination correctly, and avoid depending on local disk for durable application state.",

      "For AI services, request duration and concurrency deserve particular attention because model calls and document processing often take longer than conventional API requests.",

      "Long-running processing can be moved into background workflows rather than keeping the HTTP request open indefinitely.",

      "Deployment should also be repeatable. Docker, Terraform, CI/CD, environment configuration, logging, and rollback behavior are part of the application architecture rather than an afterthought.",
    ],
  },
];

export function getBlogPostBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}