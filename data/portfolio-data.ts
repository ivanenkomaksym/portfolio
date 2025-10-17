import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  basicInfo: {
    name: "Maksym Ivanenko",
    title: "Software Architect",
    summary: "Experienced Software Architect with over 12 years in the industry, specializing in Cloud Computing, Microservices, Event-Driven, and Service-Oriented Architectures. Adept at building scalable, cloud-native, AI-powered distributed systems, leveraging deep expertise in the Azure cloud platform and the .NET ecosystem, alongside containerization (Docker, Kubernetes, Helm) and Infrastructure as Code (Terraform). Proficient in optimizing and maintaining automated CI/CD pipelines (Git, Azure DevOps) to ensure smooth development workflows. Proven track record of providing technical leadership and mentorship, guiding teams to deliver innovative solutions that drive efficiency and reduce operational costs. Skilled in collaborating with clients and business stakeholders to inform technical decision-making and successfully execute projects. Passionate about staying at the forefront of emerging technologies, AI advancements and development copilots, to consistently integrate diverse frameworks and craft cohesive, high-performance solutions.",
    photo: "/images/profile.jpg",
    location: "Remote",
    email: "ivanenkomak@gmail.com"
  },
  skills: [
    {
      category: "Architectures & Systems",
      color: "#2563eb",
      icon: "🏗️",
      skills: [
        { name: "Microservices", color: "#3b82f6" },
        { name: "Event-Driven", color: "#1d4ed8" },
        { name: "Cloud-Native", color: "#60a5fa" },
        { name: "SOA", color: "#1e40af" },
        { name: "Serverless", color: "#3730a3" }
      ]
    },
    {
      category: "Languages & Frameworks",
      color: "#dc2626",
      icon: "💻",
      skills: [
        { name: "C#", color: "#239120" },
        { name: ".NET", color: "#512bd4" },
        { name: "Rust", color: "#ce422b" },
        { name: "Go", color: "#00add8" },
        { name: "C++", color: "#00599c" },
        { name: "JavaScript", color: "#f7df1e" },
        { name: "Python", color: "#3776ab" }
      ]
    },
    {
      category: "Cloud & DevOps",
      color: "#059669",
      icon: "☁️",
      skills: [
        { name: "Azure", color: "#0078d4" },
        { name: "AWS", color: "#ff9900" },
        { name: "GCP", color: "#4285f4" },
        { name: "Terraform", color: "#623ce4" },
        { name: "Docker", color: "#2496ed" },
        { name: "Kubernetes", color: "#326ce5" },
        { name: "Helm", color: "#0f1689" },
        { name: "ArgoCD", color: "#ef7b4d" },
        { name: "Aspire", color: "#512bd4" }
      ]
    },
    {
      category: "Data & Messaging",
      color: "#7c3aed",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", color: "#47a248" },
        { name: "Redis", color: "#dc382d" },
        { name: "MySQL", color: "#4479a1" },
        { name: "Firestore", color: "#ffca28" },
        { name: "RabbitMQ", color: "#ff6600" },
        { name: "OData", color: "#326ce5" },
        { name: "Swagger", color: "#85ea2d" }
      ]
    },
    {
      category: "AI & Automation",
      color: "#db2777",
      icon: "🤖",
      skills: [
        { name: "OpenAI", color: "#412991" },
        { name: "Azure AI", color: "#0078d4" },
        { name: "NLP", color: "#ff6b35" },
        { name: "MCP", color: "#6366f1" },
        { name: "AI Copilots", color: "#24292e" }
      ]
    },
    {
      category: "Tools",
      color: "#ea580c",
      icon: "🛠️",
      skills: [
        { name: "Git", color: "#f05032" },
        { name: "Azure DevOps", color: "#0078d4" },
        { name: "OpenTelemetry", color: "#f5a623" },
        { name: "OAuth 2.0", color: "#3c4043" },
        { name: "Postman", color: "#ff6c37" },
        { name: "PowerShell", color: "#012456" }
      ]
    }
  ],
  projects: [
    {
      title: "eShop on Containers",
      description: "A production-ready e-commerce platform demonstrating scalable event-driven microservices architecture and AI-enhanced product discovery.",
      technologies: [".NET", "Event-Driven", "Microservices", "AI Search", "DevOps"],
      githubUrl: "https://github.com/ivanenkomaksym/dotnet-messagebroker-demo"
    },
    {
      title: "Rust URL Shortener",
      description: "High-performance, cloud-ready URL shortening service with distributed coordination, real-time analytics, and multiple storage backends.",
      technologies: ["Rust", "Redis", "MongoDB", "Firestore"],
      githubUrl: "https://github.com/ivanenkomaksym/rust-short-url"
    },
    {
      title: "RemindMe Bot",
      description: "AI-powered Telegram bot for intelligent reminders with recurring scheduling, timezone detection, and natural-language date parsing.",
      technologies: ["Go", "Telegram API", "MongoDB", "GCP", "AWS"],
      githubUrl: "https://github.com/ivanenkomaksym/remindme_bot"
    },
    {
      title: "Generative Consultant",
      description: "AI-driven productivity toolkit for workflow automation, content generation, and market research — demonstrating applied use of LLM APIs in real-world scenarios.",
      technologies: ["OpenAI", "Next.js", "Clerk", "Vercel"],
      githubUrl: "https://github.com/ivanenkomaksym/genconsultant"
    }
  ],
  education: [
    {
      institution: "Ivan Franko National University of Lviv",
      degree: "Master's degree",
      field: "Information Technologies",
      period: "2008 - 2013",
      description: ""
    }
  ],
  achievements: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "",
      description: ""
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "",
      description: ""
    },
    {
      title: "Certified Qt Developer",
      issuer: "The Qt Company",
      date: "",
      description: ""
    }
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/ivanenkomaksym", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ivanenkomaksym/", icon: "linkedin" },
    { platform: "Telegram", url: "https://t.me/m8double", icon: "telegram" },
    { platform: "Email", url: "mailto:ivanenkomak@gmail.com", icon: "email" }
  ]
};