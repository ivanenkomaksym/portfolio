export interface BasicInfo {
  name: string;
  title: string;
  summary: string;
  photo: string;
  location?: string;
  email?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  badge?: string;
  color?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  basicInfo: BasicInfo;
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  socialLinks: SocialLink[];
}
