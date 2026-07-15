'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiFastapi, SiLinux, SiUbuntu, SiRedhat,
  SiGit, SiWireshark
} from 'react-icons/si';
import { Shield, Brain, Cpu, Terminal, Settings, Network, ShieldAlert } from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  level: string;
  description: string;
  metric: string;
}

interface SkillCategory {
  category: string;
  icon: any;
  items: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Networking & Security',
    icon: Shield,
    items: [
      { name: 'Network Surveillance', icon: Shield, level: 'Advanced', description: 'Network activity scans, security logs review, and firewall config analysis.', metric: 'Sec Ops' },
      { name: 'Packet Analysis (Wireshark)', icon: SiWireshark, level: 'Advanced', description: 'Inspecting protocols, parsing payloads, and logging traffic frames.', metric: 'Wireshark' },
      { name: 'Core Protocols', icon: Network, level: 'Advanced', description: 'Understanding TCP/IP routing rules, SSL/TLS handshakes, and DNS resolution.', metric: 'Protocols' },
      { name: 'Vulnerability Assessment Fundamentals', icon: ShieldAlert, level: 'Intermediate', description: 'Finding potential attack vectors, mapping open ports, and reporting vulnerabilities.', metric: 'Vulnerability' },
    ],
  },
  {
    category: 'System Administration',
    icon: Terminal,
    items: [
      { name: 'Red Hat', icon: SiRedhat, level: 'Intermediate', description: 'Enterprise Linux OS management, security policies, and standard configurations.', metric: 'RHEL OS' },
      { name: 'Ubuntu', icon: SiUbuntu, level: 'Advanced', description: 'Server administration, package installation, and script automation processes.', metric: 'Ubuntu Server' },
      { name: 'Kali Linux', icon: SiLinux, level: 'Advanced', description: 'Security diagnostics, vulnerability testing tools, and network analysis environment.', metric: 'Kali OS' },
      { name: 'Package Management', icon: Terminal, level: 'Advanced', description: 'Managing standard repositories, compilation processes, and dependencies secure configurations.', metric: 'Packages' },
      { name: 'Access Control', icon: Shield, level: 'Advanced', description: 'Configuring firewalls, defining route rules, and locking system endpoints.', metric: 'Access Rules' },
      { name: 'User Permission Administration', icon: Settings, level: 'Advanced', description: 'Managing user rights, system log file permissions, and directory visibility limits.', metric: 'Permissions' },
    ],
  },
  {
    category: 'Automation & AI',
    icon: Brain,
    items: [
      { name: 'Python Programming', icon: SiPython, level: 'Advanced', description: 'Developing core scripts, async tasks running, and pipeline automation tools.', metric: 'Python Engine' },
      { name: 'RAG System Architectures', icon: Brain, level: 'Advanced', description: 'Configuring document retrieval blocks and multi-source context indexing.', metric: 'RAG Architecture' },
      { name: 'AI Agent Engineering', icon: Cpu, level: 'Advanced', description: 'Orchestrating autonomous agents with custom tools integration.', metric: 'AI Agents' },
      { name: 'Prompt Optimization', icon: Settings, level: 'Advanced', description: 'Designing robust templates, parameter adjustments, and system logic grids.', metric: 'Prompts' },
      { name: 'API Integration', icon: SiFastapi, level: 'Advanced', description: 'Connecting microservices, parsing JSON payloads, and executing web triggers.', metric: 'API Sync' },
      { name: 'Git', icon: SiGit, level: 'Advanced', description: 'Configuring code version parameters, secure commits, and sync processes.', metric: 'Git Control' },
    ],
  },
];

export default function Arsenal() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="arsenal"
      className="relative w-full border-t border-white/5 bg-[#050505] px-6 py-24 md:px-12 lg:px-24"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 font-mono">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-accent-brightRed uppercase">
            WEAPONRY // LOG-02
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight uppercase text-text-primary mt-2">
            THE ARSENAL
          </h2>
        </div>
        <span className="text-[10px] text-text-muted mt-2 md:mt-0 tracking-wider">
          SYSTEM_UTILITIES: COMPREHENSIVE SECURITY & DEV STACK
        </span>
      </div>

      {/* Grid of Categories */}
      <div className="space-y-16">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
              <category.icon className="h-5 w-5 text-accent-brightRed" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-primary">
                {category.category}
              </h3>
            </div>

            {/* Category Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map((skill, skillIdx) => {
                const isHovered = hoveredSkill === skill.name;
                return (
                  <div
                    key={skillIdx}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative border border-white/5 bg-[#0d0d0d] p-5 transition-all duration-300 hover:border-accent-brightRed/30 hover:bg-[#141414]"
                  >
                    <div className="flex items-start justify-between">
                      {/* Icon */}
                      <skill.icon className="h-7 w-7 text-text-secondary transition-colors duration-300 group-hover:text-accent-brightRed" />
                      
                      {/* Diagnostic level */}
                      <span className="border border-white/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-muted group-hover:border-accent-brightRed/30 group-hover:text-accent-brightRed">
                        {skill.level}
                      </span>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                        {skill.name}
                      </h4>
                      <p className="mt-2 font-sans text-xs leading-relaxed text-text-secondary h-12 overflow-hidden">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-white/5 pt-3 flex items-center justify-between font-mono text-[8px] text-text-muted">
                      <span>INTEG_KEY: SI_{catIdx}{skillIdx}</span>
                      <span className="text-text-secondary uppercase">{skill.metric}</span>
                    </div>

                    {/* Accent Indicator light (solid red) */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent-brightRed transition-transform duration-300 ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
