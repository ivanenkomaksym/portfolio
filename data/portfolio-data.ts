import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  basicInfo: {
    name: "Maksym Ivanenko",
    title: "Full Stack Developer",
    summary: "Passionate software engineer with expertise in building scalable web applications. I love solving complex problems and creating elegant solutions that make a difference.",
    photo: "/images/profile.jpg",
    location: "Remote",
    email: "contact@example.com"
  },
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React", color: "bg-blue-500" },
        { name: "Next.js", color: "bg-black" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
        { name: "HTML5", color: "bg-orange-500" },
        { name: "CSS3", color: "bg-blue-400" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", color: "bg-green-600" },
        { name: "Python", color: "bg-yellow-500" },
        { name: "C#/.NET", color: "bg-purple-600" },
        { name: "REST API", color: "bg-gray-600" },
        { name: "GraphQL", color: "bg-pink-500" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", color: "bg-blue-700" },
        { name: "MongoDB", color: "bg-green-500" },
        { name: "Redis", color: "bg-red-600" },
        { name: "SQL Server", color: "bg-red-700" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", color: "bg-blue-500" },
        { name: "Kubernetes", color: "bg-blue-600" },
        { name: "Git", color: "bg-orange-600" },
        { name: "CI/CD", color: "bg-green-700" },
        { name: "AWS", color: "bg-yellow-600" },
        { name: "Azure", color: "bg-blue-600" }
      ]
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      githubUrl: "https://github.com/username/project1",
      demoUrl: "https://demo.example.com"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, team chat, and project analytics.",
      technologies: ["React", "TypeScript", "MongoDB", "Socket.io", "Express"],
      githubUrl: "https://github.com/username/project2"
    },
    {
      title: "DevOps Automation Tool",
      description: "Automation tool for CI/CD pipelines with support for multiple cloud providers and custom deployment strategies.",
      technologies: ["Python", "Docker", "Kubernetes", "AWS", "Terraform"],
      githubUrl: "https://github.com/username/project3"
    }
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Master of Science",
      field: "Computer Science",
      period: "2018 - 2020",
      description: "Specialized in Distributed Systems and Machine Learning"
    },
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      period: "2014 - 2018",
      description: "Focus on Web Development and Database Systems"
    }
  ],
  achievements: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional level certification for architecting and deploying scalable systems on AWS",
      credentialUrl: "https://aws.amazon.com/certification/"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      description: "Expertise in Kubernetes cluster administration and management"
    },
    {
      title: "Best Innovation Award",
      issuer: "Tech Conference 2021",
      date: "2021",
      description: "Awarded for developing an innovative solution for microservices orchestration"
    }
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/ivanenkomaksym", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com/username", icon: "twitter" },
    { platform: "Email", url: "mailto:contact@example.com", icon: "email" }
  ]
};
