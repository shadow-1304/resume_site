
import { Experience, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "PARTH PRAJAPATI",
  title: "Cyber Security Graduate",
  location: "Ahmedabad, India",
  email: "parthprajapati1304@gmail.com",
  phone: "+91 9016067192",
  summary: "Recent Cyber Security graduate with First Class Distinction, equipped with strong foundations in system administration, network security, and Linux environments. Completed a 6-month internship in AI automation, gaining hands-on experience in building AI models, RAG-based systems, and intelligent automation agents. Skilled in Python programming with AI-assisted development, network surveillance using Wireshark, and managing Red Hat, Ubuntu, and Kali Linux systems. Highly motivated with a strong interest in cyber & network security and a growing passion for AI-driven automation solutions."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Cyber & Network Security",
    items: ["Network Surveillance", "Wireshark", "Protocol Analysis", "Vulnerability Assessment", "Firewall Configuration"]
  },
  {
    category: "System Administration",
    items: ["Red Hat Linux", "Ubuntu", "Kali Linux", "Package Management", "User & Permission Management"]
  },
  {
    category: "AI & Automation",
    items: ["AI Automation Tools", "RAG Systems", "AI Agents Integration", "Prompt Engineering", "Python Programming", "API Integration"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Hexylon Analytics",
    role: "Network and AI Automation Developer",
    period: "JAN 2025 - JUN 2025 (Internship) | JAN 2026 - PRESENT",
    description: [
      "Building AI models, RAG systems, and automation workflows through continuous professional development.",
      "Developed AI agents and integrated them into practical use cases to streamline industrial operations.",
      "Using Python to create and optimize AI-driven automation solutions for network security and analysis."
    ],
    skills: ["AI Automation", "RAG", "Python", "API Integration", "Git/GitHub"]
  },
  {
    company: "Flex Knee Hospital",
    role: "Receptionist (Summer Job)",
    period: "2024 (2 Months)",
    description: [
      "Managed front-desk operations, handling calls and assisting visitors.",
      "Maintained records and supported administrative tasks for smooth office communication."
    ],
    skills: ["Communication", "Administrative Support", "Records Management"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Gujarat University",
    degree: "BSc IT in Network Security",
    period: "2023 - 2025",
    gpa: "7.8 / 10"
  }
];

export const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Gujarati", level: "Fluent" },
  { name: "Hindi", level: "Fluent" }
];
