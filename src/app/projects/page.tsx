import styles from './projects.module.css';
import { ProjectTimeline } from '@/components/ProjectTimeline/ProjectTimeline';
import type { TimelineProject } from '@/app/types/index';
import { GenerateStars } from '@/components/Stars/Stars';
import { Footer } from '@/components/Footer/Footer';

const PROJECTS: TimelineProject[] = [
  {
    id: 1,
    title: "IT Technical Education (SCI)",
    role: "IT Technician Student",
    description: "Completed a comprehensive 5-year bilingual IT technician program at SCI in Szczecin. Built strong fundamentals in Linux systems, computer networks, algorithms, and practical software engineering, graduating with all professional qualifications.",
    url: "https://share.google/IwHZbo51JbUfmPzto"
  },
  {
    id: 2,
    title: "DevOps Internship @ SCI",
    role: "DevOps Intern",
    description: "Deployed and managed on-premise GitLab and Jira instances using Docker and Linux. Configured LDAP directory authentication, automated CI/CD pipeline triggers, and established routine backup and disaster-recovery strategies.",
    url: ""
  },
  {
    id: 3,
    title: "B.Sc. in Computer Science (ZUT)",
    role: "Computer Science Undergraduate",
    description: "Pursuing a B.Sc. in Computer Science at West Pomeranian University of Technology (ZUT) with a specialization in Cloud Engineering. Deepening theoretical and applied knowledge across distributed systems, systems programming, and modern software architectures.",
    url: "https://share.google/Uq9mYYqFiCoQP77Mj"
  },
  {
    id: 4,
    title: "Cryptono & argon2-extension-mv3",
    role: "Systems & Security Engineer",
    description: "Built an open-source, zero-knowledge browser password manager powered by Rust and WebAssembly. Authored and published 'argon2-extension-mv3' on npm to solve Manifest V3 CSP constraints without unsafe-eval, integrating Brotli data compression compiled from Rust to WASM.",
    url: "https://github.com/ArturCharylo/Cryptono"
  },
  {
    id: 5,
    title: "quote-cli (Open Source)",
    role: "Open Source Contributor",
    description: "Contributed an extensible, multi-provider AI engine architecture using OOP design patterns in TypeScript. Integrated OpenAI, Anthropic, and GitHub Copilot APIs into a unified developer CLI tool.",
    url: "https://github.com/ArturCharylo/quote-cli"
  },
  {
    id: 6,
    title: "CarCanSim — Cloud-Native Telemetry",
    role: "Cloud & Systems Engineer",
    description: "Developed a high-performance CAN/OBD-II vehicle telemetry engine in Rust. Configured an automated Azure DevOps YAML pipeline deploying serverless workloads to Azure Container Apps (ACA) via Terraform IaC, backed by local Kind Kubernetes, ArgoCD GitOps, and Prometheus/Grafana metrics scraping.",
    url: "https://github.com/ArturCharylo/CarCanSim"
  },
  {
    id: 7,
    title: "DevOps Intern @ Kongsberg Maritime",
    role: "DevOps Engineer Intern",
    description: "Designed enterprise-grade Azure DevOps CI/CD pipelines enforcing EU Cyber Resilience Act compliance with automated Trivy DevSecOps gates (CRITICAL = 0), CycloneDX SBOM generation, and cryptographic Cosign signing via Azure Key Vault. Orchestrated local Kubernetes (Kind, Helm) clusters with HPA and streamed security metrics to Grafana.",
    url: "https://github.com/ArturCharylo/kongsberg"
  },
  {
    id: 8,
    title: "Student Leadership: AppCraft & Enactus",
    role: "President & Team Leader",
    description: "Serving as President of the AppCraft student tech organization, coordinating collaborative software projects. Founded and led the first-ever student team from West Pomerania to compete in the Enactus Poland National Competition, managing multidisciplinary engineering initiatives.",
    url: "https://www.wi.zut.edu.pl/pl/dla-studenta/sprawy-studenckie/kola-naukowe/appcraft"
  }
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <GenerateStars />
      <div className={styles.header}>
        <h1>My Experience & Timeline</h1>
        <p>A curated journey from core systems and IT fundamentals to cloud engineering, enterprise DevSecOps, and student leadership.</p>
      </div>

      <ProjectTimeline projects={PROJECTS} />
      <p className={styles.bottomText}>The timeline is never finished...</p>
      <Footer />
    </div>
  );
}