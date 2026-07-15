'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Shield, Activity, Award, Calendar, Plus, Minus, ShieldCheck, Briefcase } from 'lucide-react';

const stats = [
  { label: 'PROJECTS COMPLETED', value: '3', icon: Shield },
  { label: 'WORK EXPERIENCES', value: '3', icon: Eye },
  { label: 'VERIFIED LANGUAGES', value: '3', icon: Activity },
  { label: 'ACADEMIC GPA', value: '7.8', icon: Calendar },
];

interface Milestone {
  id: string;
  period: string;
  title: string;
  location: string;
  details: string;
  responsibilities: string[];
  achievements: string[];
  impact?: string;
  skillsGained?: string[];
  techStack?: string[];
}

const milestones: Milestone[] = [
  {
    id: 'ai-automation-developer',
    period: 'JAN 2026 – MAY 2026',
    title: 'AI Automation Developer',
    location: 'Hexylon Analytics',
    details: 'Led the technical development and scaling of production AI automation workloads and structural model deployments.',
    responsibilities: [
      'Led the technical development and scaling of production AI automation workloads and structural model deployments.',
      'Mentored and trained teams of incoming software engineering interns on Python automation scripting and Retrieval-Augmented Generation (RAG) concepts.',
      'Monitored, documented, and tested internal automated software agents to optimize overall system uptime.',
    ],
    achievements: [
      'Scaled production AI automation workloads and managed structural model deployments.',
      'Mentored incoming interns on Python automation scripting and RAG concepts.',
      'Optimized system uptime by testing automated software agents.',
    ],
    impact: 'Established high uptime and automated workflow scaling processes for software agent tasks.',
    skillsGained: ['AI Workloads Scaling', 'Python Automation Scripting', 'RAG Concepts', 'System Testing', 'Technical Mentorship'],
    techStack: ['Python', 'RAG System Architectures', 'AI Agent Engineering', 'Git', 'GitHub'],
  },
  {
    id: 'network-ai-intern',
    period: 'JAN 2025 – JUN 2025',
    title: 'Network & AI Automation Intern',
    location: 'Hexylon Analytics',
    details: 'Built core components for Retrieval-Augmented Generation (RAG) platforms and automated data synchronization workflows using Python.',
    responsibilities: [
      'Built core components for Retrieval-Augmented Generation (RAG) platforms and automated data synchronization workflows using Python.',
      'Integrated external system API endpoints and deployed secure, functional assistant flows.',
      'Utilized Git and GitHub repositories for structured team code reviews and configuration tracking.',
    ],
    achievements: [
      'Engineered core RAG platform elements and automated data synchronization scripts.',
      'Deployed secure and functional assistant flows with integrated external API endpoints.',
      'Supported structured team code reviews and tracking via Git repositories.',
    ],
    impact: 'Automated key data sync routines and enabled secure flow integrations via backend APIs.',
    skillsGained: ['RAG Platforms', 'API Integration', 'Data Synchronization', 'Git & GitHub Tracking'],
    techStack: ['Python', 'API Integration', 'Git', 'GitHub'],
  },
  {
    id: 'receptionist-admin-assistant',
    period: 'SUMMER 2024 (2 MONTHS)',
    title: 'Receptionist & Administrative Assistant',
    location: 'Flex Knee Hospital',
    details: 'Managed multi-line front-desk telecommunication routing, client reception, and scheduling workflows.',
    responsibilities: [
      'Managed multi-line front-desk telecommunication routing, client reception, and scheduling workflows.',
      'Maintained digital intake records and coordinated standard operational admin logs.',
    ],
    achievements: [
      'Coordinated administrative logs and maintained digital intake registries.',
      'Routed telecommunication lines and handled receptionist schedules.',
    ],
    impact: 'Improved front-desk communications and registry management.',
    skillsGained: ['Telecommunication Routing', 'Administrative Coordination', 'Digital Records Keeping'],
    techStack: ['Admin Logs', 'Digital Intake Systems', 'Scheduling Tools'],
  },
  {
    id: 'education-degree',
    period: '2023 – 2025',
    title: 'B.Sc. in Information Technology (Network Security)',
    location: 'Gujarat University',
    details: 'Graduated with First Class Distinction | Cumulative GPA: 7.8/10.',
    responsibilities: [
      'Graduated with First Class Distinction.',
      'Cumulative GPA: 7.8 / 10.00.',
      'Specialized in network architectures, cryptography, ethical hacking, and Linux environments.',
    ],
    achievements: [
      'Maintained First Class academic honors throughout all semesters.',
      'Averaged a cumulative GPA score of 7.8 out of 10.',
    ],
    skillsGained: ['Network Architectures', 'Cryptography', 'Ethical Hacking', 'Linux Environments'],
    techStack: ['Gujarat University', 'B.Sc. IT', 'Network Security'],
  },
];

export default function ThreatIntelligence() {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);

  const toggleMilestone = (id: string) => {
    setExpandedMilestone((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="threat-intelligence"
      className="relative w-full border-t border-white/5 bg-[#050505] px-6 py-24 md:px-12 lg:px-24"
    >
      {/* Top Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 font-mono"
      >
        <div>
          <span className="text-[10px] font-bold tracking-widest text-accent-brightRed uppercase">
            SECURE_REPORT // SEC-01
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight uppercase text-text-primary mt-2">
            THREAT INTELLIGENCE
          </h2>
        </div>
        <span className="text-[10px] text-text-muted mt-2 md:mt-0 tracking-wider">
          CLASSIFICATION: CONFIDENTIAL // SUBJECT: PROFILE OVERVIEW
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Editorial Profile (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, x: -70 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <span className="inline-block border border-accent-mutedRed/30 bg-surface-secondary px-3 py-1 font-mono text-[9px] font-bold text-accent-brightRed uppercase">
              AGENT IN-SIGHTS
            </span>
            <p className="font-sans text-sm leading-relaxed text-text-secondary">
              Cyber Security graduate with a foundational background in network infrastructure security, systems administration, and Linux ecosystems. Hands-on professional experience delivering production-ready automation architectures, transitioning from a core technical internship into an automation development role. Highly capable in implementing custom large language model pipelines, refining data retrieval systems, and engineering network defence strategies.
            </p>
            <div className="border-l-2 border-accent-red pl-4 font-mono text-xs text-text-muted space-y-1">
              <div>&gt; SPECIALTIES: NETWORKING, SECURITY & SYSTEM ADMINISTRATION</div>
              <div>&gt; PHILOSOPHY: AUTOMATION & ARTIFICIAL INTELLIGENCE</div>
              <div>&gt; STACK CORE: PYTHON / RAG / KALI LINUX / WIRESHARK / GIT</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border border-white/5 bg-[#0d0d0d] p-4 flex flex-col justify-between custom-border-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between text-text-muted">
                  <stat.icon className="h-4.5 w-4.5 text-accent-brightRed/60" />
                  <span className="font-mono text-[8px] tracking-widest">UNIT_{i}</span>
                </div>
                <div className="mt-4">
                  <div className="font-display text-2xl font-black text-text-primary">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[8px] text-text-muted mt-1 leading-tight tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Operational Progression Timeline (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, x: 70 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="border border-white/5 bg-[#0d0d0d] p-6 md:p-8">
            <span className="mb-8 inline-block font-mono text-[9px] font-bold text-accent-brightRed tracking-widest uppercase">
              // CHRONOLOGICAL PROGRESSION LOG
            </span>

            <div className="relative border-l border-white/10 pl-6 space-y-6 ml-2">
              {milestones.map((milestone, i) => {
                const isExpanded = expandedMilestone === milestone.id;
                return (
                  <div
                    key={milestone.id}
                    onClick={() => toggleMilestone(milestone.id)}
                    className={`relative p-5 border transition-all duration-300 cursor-pointer select-none rounded-sm ${
                      isExpanded 
                        ? 'border-accent-brightRed/50 bg-[#0d0d0d] shadow-[0_0_25px_rgba(239,68,68,0.12)]' 
                        : 'border-white/5 bg-[#0d0d0d]/30 hover:border-accent-brightRed/30 hover:bg-[#141414] hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                    }`}
                  >
                    {/* Bullet Node (solid red, no gradients) */}
                    <span className={`absolute -left-[29.5px] top-[26px] flex h-2 w-2 rounded-full border-2 border-background bg-accent-brightRed transition-transform duration-300 ${isExpanded ? 'scale-125' : ''}`} />

                    <div className="flex items-start justify-between font-mono text-[10px] text-accent-brightRed font-bold">
                      <div className="flex items-center space-x-1.5">
                        <span>{milestone.period}</span>
                        <span className="text-text-muted">//</span>
                        <span className="text-text-muted uppercase">{milestone.location}</span>
                      </div>
                      <div className="text-text-muted hover:text-accent-brightRed transition-colors">
                        {isExpanded ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </div>
                    </div>

                    <h3 className="mt-1 text-sm font-bold uppercase tracking-tight text-text-primary">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 font-sans text-xs leading-relaxed text-text-secondary">
                      {milestone.details}
                    </p>

                    {/* Expandable details panel */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-white/5 space-y-4 font-sans text-xs text-text-secondary" onClick={(e) => e.stopPropagation()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Responsibilities */}
                              <div>
                                <h4 className="font-mono text-[9px] font-bold text-accent-brightRed uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                                  <ShieldCheck className="h-3.5 w-3.5 text-accent-brightRed" />
                                  <span>OPERATIONAL DUTIES</span>
                                </h4>
                                <ul className="list-inside list-disc space-y-1.5 pl-0.5 leading-relaxed text-[11px]">
                                  {milestone.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Achievements */}
                              <div>
                                <h4 className="font-mono text-[9px] font-bold text-accent-brightRed uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                                  <Award className="h-3.5 w-3.5 text-accent-brightRed" />
                                  <span>KEY ACCOMPLISHMENTS</span>
                                </h4>
                                <ul className="list-inside list-disc space-y-1.5 pl-0.5 leading-relaxed text-[11px]">
                                  {milestone.achievements.map((ach, idx) => (
                                    <li key={idx}>{ach}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Impact Metrics & Skills gained */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-4">
                              {milestone.impact && (
                                <div>
                                  <h4 className="font-mono text-[8px] font-bold text-text-primary uppercase tracking-widest mb-1.5">
                                    [METRIC] INDUSTRIAL IMPACT
                                  </h4>
                                  <p className="leading-relaxed bg-accent-mutedRed/10 border border-accent-mutedRed/30 p-2.5 text-text-primary text-[11px]">
                                    {milestone.impact}
                                  </p>
                                </div>
                              )}

                              {milestone.skillsGained && (
                                <div>
                                  <h4 className="font-mono text-[8px] font-bold text-text-primary uppercase tracking-widest mb-1.5">
                                    [VERIFIED] SKILLS GAINED
                                  </h4>
                                  <div className="flex flex-wrap gap-1">
                                    {milestone.skillsGained.map((skill) => (
                                      <span
                                        key={skill}
                                        className="border border-white/5 bg-background px-2.5 py-0.5 text-[9px] text-text-secondary"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Tech stack row */}
                            {milestone.techStack && (
                              <div className="border-t border-white/5 pt-3 flex flex-wrap items-center gap-1.5 font-mono text-[8px]">
                                <span className="text-text-muted">TOOLS UTILIZED:</span>
                                {milestone.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="bg-background px-1.5 py-0.5 border border-white/5 text-text-secondary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
