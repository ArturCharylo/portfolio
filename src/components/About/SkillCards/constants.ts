export interface SkillCardData {
  id: "visual" | "structural" | "motion" | "neural";
  title: string;
  body: string;
  detail: string;
}

export const CARDS: SkillCardData[] = [
  {
    id: "motion",
    title: "Cloud & DevSecOps",
    body: "Orchestrating resilient delivery workflows and production environments through enterprise automation. I treat DevOps not as an afterthought, but as an active discipline combining multi-stage CI/CD pipelines, container orchestration, and strict supply-chain security gates.",
    detail:
      "Experienced in designing Azure DevOps and GitLab CI/CD pipelines with automated Trivy CVE gates, CycloneDX SBOM generation, and cryptographic signing with Cosign. From Kubernetes clusters (Helm, Kind) with HPA to Prometheus and Grafana observability pipelines, I build self-healing, auditable delivery ecosystems.",
  },
  {
    id: "structural",
    title: "High-Performance Core & Systems",
    body: "The architectural backbone of my work lies in low-level systems programming and high-efficiency compute. Leveraging Rust, C++, and WebAssembly, I design high-performance modules and microservices handling intensive tasks—from CAN/OBD-II telemetry simulation to client-side cryptography.",
    detail:
      "Author of production-ready packages like argon2-extension-mv3, resolving Manifest V3 CSP constraints without unsafe-eval. Whether compiling Brotli compression in Rust/WASM or engineering containerized Rust telemetry engines, I prioritize memory safety, clean architecture, and near-native runtime performance.",
  },
  {
    id: "visual",
    title: "Cloud Infrastructure & GitOps",
    body: "Translating architectural intent into scalable, reproducible infrastructure. I focus on Infrastructure as Code (IaC), GitOps workflows, and hybrid cloud setups (Azure, AWS) designed for high availability, minimal baseline cost, and rapid disaster recovery.",
    detail:
      "Automating serverless and container deployments to Azure Container Apps (ACA) using Terraform with zero-trust Service Principal authentication. Proficient in GitOps workflows using ArgoCD, NGINX Ingress routing, and cloud-native scaling strategies tailored to modern microservice footprints.",
  },
  {
    id: "neural",
    title: "Intelligent Systems & Integrations",
    body: "Designing scalable backend logic and extensible architectures for AI-driven tooling. I build modular systems and developer CLI utilities that seamlessly orchestrate multi-provider LLM integrations while maintaining robust error boundaries.",
    detail:
      "Active contributor to open-source developer tooling (such as quote-cli), implementing OOP-driven architectures that support OpenAI, Anthropic, and GitHub Copilot APIs. I focus on building maintainable abstractions, CLI tools, and deterministic pipelines around dynamic AI capabilities.",
  },
];