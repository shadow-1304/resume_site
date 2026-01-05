
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
