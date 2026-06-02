export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  iconType: "code" | "laptop" | "terminal" | "university" | "microchip" | "certificate";
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  iconType: "cloud" | "timeline" | "chart" | "shield";
}

export const personalInfo = {
  name: "Akhil Kumar Madineni",
  label: "AI Engineer · workflow architect",
  headline: "Building production LLM agents & robust backends.",
  tagline: "AI Engineer & Backend Developer",
  description: "AI Engineer with over 1.5 years of experience building production large language model (LLM) applications, retrieval-augmented generation (RAG) pipelines, and agent-based AI workflows using LangGraph and Temporal. Accelerated enterprise automation by 35% through multi-agent system design.",
  email: "akhilkumarmadineni@gmail.com",
  location: "Hyderabad, Telangana · remote",
  socials: {
    github: "https://github.com/Akhilmak",
    linkedin: "https://linkedin.com/in/akhil-kumar-madineni",
    email: "mailto:akhilkumarmadineni@gmail.com",
  }
};

export const workExperience: TimelineItem[] = [
  {
    id: "w1",
    date: "July 2025 — Present",
    title: "AI Engineer & Backend Engineer",
    subtitle: "Aunix AI",
    location: "Hyderabad, Telangana",
    description: "Architecting multi-agent AI systems using LangGraph (agent orchestration framework), reducing workflow completion time by 35% across 3 enterprise deployments. Developing production retrieval-augmented generation (RAG) pipelines with LangChain, OpenAI, and Qdrant vector database, improving knowledge retrieval accuracy by 40%. Engineering Pentaho ETL plugins for MariaDB, Redshift, NetSuite, and SharePoint, integrating 20+ enterprise data sources. Deploying Prometheus & Grafana monitoring dashboards, cutting client-reported incidents by 30%. Strengthening SOC 2 compliance through RBAC, audit logging, and data access policies. Publishing custom Docker images for Temporal via Jenkins and GitHub Actions.",
    iconType: "code"
  },
  {
    id: "w2",
    date: "January 2025 — July 2025",
    title: "Software Engineer Trainee",
    subtitle: "Silicon Techlab Private Limited",
    location: "Bhubaneswar, Odisha",
    description: "Implemented full-stack user management with JWT authentication, supporting 100+ internal users with zero reported failures. Modeled database schemas and optimized SQL queries for student records, reducing average query latency by 25%. Administered production databases, maintaining data integrity and validating backup and recovery procedures for 3 critical systems.",
    iconType: "terminal"
  }
];

export const educationHistory: TimelineItem[] = [
  {
    id: "e1",
    date: "2021 — 2025",
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Centurion University of Technology and Management",
    location: "Vizianagaram, AP",
    description: "Specialized in Computer Networking. Graduated with a GPA of 9.0 / 10.0.",
    iconType: "university"
  },
  {
    id: "e2",
    date: "Certified",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    subtitle: "Microsoft",
    description: "Core cloud concepts, Azure architecture and services, and Azure management and governance frameworks.",
    iconType: "certificate"
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: "p1",
    title: "Structly – System Design Workspace",
    description: "Cloud-first workspace for documenting and visualizing distributed system architectures, used by 200+ engineers. Integrated Excalidraw Canvas API and developed a diagram parser converting Mermaid to Excalidraw, reducing setup time by 70%. Configured NextAuth v5 with Prisma for complete per-user isolation.",
    tech: ["Next.js", "React 19", "Java", "Spring Boot", "TypeScript", "Excalidraw", "Prisma ORM", "NextAuth v5"],
    github: "https://github.com/Akhilmak",
    demo: "https://systemdesignforge.org",
    iconType: "timeline"
  },
  {
    id: "p2",
    title: "Chords Music Player",
    description: "Developed a full-stack, ad-free music streaming application with playlist management and real-time audio streaming for 500+ tracks. Received 50+ open-source community contributions and positive feedback within 3 months of launch.",
    tech: ["Java", "Spring Boot", "React", "JavaScript", "REST APIs"],
    github: "https://github.com/Akhilmak",
    demo: "https://human-music.vercel.app",
    iconType: "cloud"
  }
];
