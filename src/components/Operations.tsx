'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldAlert, Cpu, Network, Database, MessageSquare } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  duration: string;
  stack: string[];
  image: string | string[];
  github?: string;
  demo?: string;
  overview: string;
  problem: string;
  objective: string;
  solution: string;
  architecture: {
    title: string;
    flow: string[];
  };
  features: string[];
  security: string[];
  challenges: string;
  lessons: string;
}

const projects: Project[] = [
  {
    id: 'intelair-group-redesign',
    title: 'Intelair Group Website Redesign',
    category: 'FULL-STACK WEBSITE REFACTOR',
    role: 'Full-Stack Refactor',
    duration: '2 MONTHS',
    stack: ['Asset Security', 'Responsive Layouts', 'Performance Optimization'],
    image: '/projects/intel_air.png',
    demo: 'https://intelairgroup.com/',
    overview: 'Re-architected web frontends to optimize layout, load speeds, responsive layouts across devices, and asset security.',
    problem: 'Legacy web layouts had slow page loading rates, poor mobile styling formats, and unprotected public static resources.',
    objective: 'Re-engineer frontend components to achieve sub-second page loads, responsive layout rules, and protect critical assets.',
    solution: 'Refactored CSS styles, structured media assets into optimized delivery routes, and implemented clean asset security configurations.',
    architecture: {
      title: 'REFACTORED ASSET ROUTING SCHEMA',
      flow: [
        'Asset Access Query',
        'Asset Routing Check',
        'Optimized Code Splitter',
        'Responsive Layout Renderer',
        'Secure Frontend Delivery',
      ],
    },
    features: [
      'Refactored responsive grids replacing legacy nested matrices.',
      'Code split logic minimizing initial load sizes.',
      'Asset cache boundaries for faster page reload rates.',
      'Secure asset routes preventing direct index sweeps.',
    ],
    security: [
      'Restricted asset paths blocking unauthorized directory viewing.',
      'Validation checks securing inquiry forms entries.',
      'XSS header configurations preventing cross-site scripting attempts.',
    ],
    challenges: 'Refactoring convoluted legacy design scripts without losing original styling details or brand alignment.',
    lessons: 'Modular component architecture simplifies layout restructuring and improves general system maintenance.',
  },
  {
    id: 'custom-ai-assistant',
    title: 'Custom AI Assistant Platform',
    category: 'PRODUCTIVITY AI APPLICATION',
    role: 'Developer',
    duration: '3 MONTHS',
    stack: ['Python Programming', 'API Integration', 'Prompt Optimization', 'AI Agent Engineering'],
    image: '/projects/shadow.png',
    demo: 'https://assitant-omega.vercel.app/',
    overview: 'Developed an end-to-end application designed to ingest prompt contexts, integrate APIs, and accelerate personal productivity.',
    problem: 'Standard productivity tools lack dedicated local API adapters and prompt template pipelines to safely process developer commands.',
    objective: 'Build an AI assistant platform that integrates API triggers, handles context window optimizations, and runs productivity operations.',
    solution: 'Programmed a Python-based endpoint router that takes system contexts, applies template optimizations, and securely triggers external APIs.',
    architecture: {
      title: 'AI PROMPT PROCESSING PIPELINE',
      flow: [
        'Ingest User Context',
        'Prompt Template Optimizer',
        'API Adapter Dispatch',
        'External Service Callback',
        'Sanitized Response Output',
      ],
    },
    features: [
      'Context-aware prompt template optimizations.',
      'Flexible API adapters linking local commands to external services.',
      'Structured response rendering matching system logs.',
      'Interactive chat interfaces designed to boost developer workflows.',
    ],
    security: [
      'Filtering context inputs to block injection attempts.',
      'Encrypted API credentials storage within environment variables.',
      'Authentication mechanisms validation on external routes.',
    ],
    challenges: 'Optimizing context windows and parsing inconsistent payload definitions from different external APIs.',
    lessons: 'Strict data validation rules on input queries are crucial for preventing backend service exceptions.',
  },
  {
    id: 'ha-soundboard',
    title: 'HA · Meme Soundboard',
    category: 'FLUTTER MOBILE APPLICATIONS',
    role: 'Mobile Developer',
    duration: '3 MONTHS',
    stack: ['Flutter', 'Mobile', 'Android', 'Widgets', 'Audio', 'Dart'],
    github: 'https://github.com/shadow-1304/meme_app',
    image: ['/projects/meme_library.svg', '/projects/meme_widgets.svg'],
    overview: 'A Flutter mobile app that lets you import custom meme MP3 files, create home-screen widgets for each meme, and play them instantly with a single tap — no app-open required.',
    problem: 'Opening a mobile app to trigger short audio logs introduces delay, missing the instant opportunity to interact.',
    objective: 'Build an offline-first Android package linking background audio controllers directly to widgets pinned on the device launcher.',
    solution: 'Developed a Flutter app incorporating native Android widget broadcasts, enabling instant playback paths that trigger local media players directly.',
    architecture: {
      title: 'WIDGET PLAYBACK PIPELINE',
      flow: [
        'Local MP3 Ingestion',
        'Asset Directory Sync',
        'Broadcast Receiver Pin',
        'Background Audio Loop',
        'One-Tap Widget Play',
      ],
    },
    features: [
      'Import any MP3 as a named meme sound.',
      'Create home-screen widgets per meme.',
      'One-tap widget playback — no app launch needed.',
      'Offline-first: everything stored locally.',
    ],
    security: [
      'Isolated file storage directory limiting scope to user-selected media.',
      'Permissions configuration preventing network broadcasting of audio assets.',
      'Secure cryptographic signatures for Android system installation packaging.',
    ],
    challenges: 'Synchronizing native Android widget states and widget ID logs with Flutter state stores.',
    lessons: 'Native platform channels must be strictly monitored to prevent thread blocking when executing high-volume background tasks.',
  },
];

export default function Operations() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      id="operations"
      className="relative w-full border-t border-white/5 bg-[#050505] px-6 py-24 md:px-12 lg:px-24"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 font-mono">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-accent-brightRed uppercase">
            OPERATIONS // LOG-03
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight uppercase text-text-primary mt-2">
            MISSION OPERATIONS
          </h2>
        </div>
        <span className="text-[10px] text-text-muted mt-2 md:mt-0 tracking-wider">
          CLASSIFIED CASE STUDIES // EVIDENCE DATA LAYOUT
        </span>
      </div>

      {/* Projects Timeline Cases */}
      <div className="space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Visual Architectural Diagram / Screenshot (5 cols) */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                } border border-white/5 bg-[#0d0d0d] p-6`}
              >
                {/* Website Interface Image */}
                {(() => {
                  const linkUrl = project.demo || project.github;
                  const images = Array.isArray(project.image) ? project.image : [project.image];
                  const isMultiple = images.length > 1;

                  const ImageComponent = (
                    <div className={`${
                      isMultiple 
                        ? 'grid grid-cols-2 gap-4' 
                        : 'relative w-full h-auto aspect-video'
                    } group`}>
                      {images.map((imgSrc, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className={`relative bg-[#050505] flex items-center justify-center overflow-hidden border border-white/5 ${
                            isMultiple ? 'aspect-[9/16] w-full' : 'w-full h-full aspect-video'
                          }`}
                        >
                          <img
                            src={imgSrc}
                            alt={`${project.title} screenshot ${imgIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          {linkUrl && (
                            <div className="absolute inset-0 bg-accent-brightRed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          )}
                        </div>
                      ))}
                    </div>
                  );
                  
                  return linkUrl ? (
                    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                      {ImageComponent}
                    </a>
                  ) : (
                    ImageComponent
                  );
                })()}

                {/* Interface specs */}
                <div className="mt-6 border-t border-white/5 pt-4 font-mono text-[8px] text-text-muted grid grid-cols-2 gap-2">
                  <div>INTERFACE: V1_LIVE_CAPTURE</div>
                  <div className="text-right">HASH: 0x9A4F{index}</div>
                  <div>SURVEILLANCE: PASSING</div>
                  <div className="text-right">PORT: {project.demo ? 'REMOTE_URL' : 'GITHUB_REPO'}</div>
                </div>
              </div>

              {/* Right Column: Case Study Details (7 cols) */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                } space-y-6`}
              >
                <div>
                  <span className="font-mono text-[9px] font-bold text-accent-brightRed uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-text-primary tracking-tight mt-1">
                    {project.title}
                  </h3>
                  
                  {/* Meta stats */}
                  <div className="mt-3 flex flex-wrap gap-4 font-mono text-[9px] text-text-muted uppercase">
                    <div>ROLE: <span className="text-text-secondary">{project.role}</span></div>
                    <div>//</div>
                    <div>TIMELINE: <span className="text-text-secondary">{project.duration}</span></div>
                  </div>
                </div>

                <p className="font-sans text-sm leading-relaxed text-text-secondary">
                  {project.overview}
                </p>

                {/* Tech tag highlights */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/5 bg-surface-secondary px-2.5 py-1 font-mono text-[9px] text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Detailed breakdown blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6 text-xs">
                  <div>
                    <h4 className="font-mono font-bold text-accent-brightRed uppercase tracking-wider mb-2">
                      [01] PROBLEM & OBJECTIVE
                    </h4>
                    <p className="font-sans text-text-secondary leading-relaxed">
                      {project.problem} {project.objective}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-accent-brightRed uppercase tracking-wider mb-2">
                      [02] TECHNICAL SOLUTION
                    </h4>
                    <p className="font-sans text-text-secondary leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Expandable detailed logs tab */}
                <div className="border border-white/5 bg-[#0d0d0d]">
                  <button
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="w-full px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-text-primary hover:text-accent-brightRed flex items-center justify-between transition-colors duration-200"
                  >
                    <span>
                      {activeProject === project.id ? '[-] COLLAPSE DIAGNOSTIC LOGS' : '[+] VIEW DETAILED DIAGNOSTIC LOGS'}
                    </span>
                    <span>{activeProject === project.id ? 'CLOSE' : 'OPEN'}</span>
                  </button>

                  {activeProject === project.id && (
                    <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-6 text-xs font-sans text-text-secondary">
                      {/* Features */}
                      <div>
                        <h5 className="font-mono font-bold text-text-primary uppercase tracking-widest mb-2">
                          KEY IMPLEMENTED FEATURES
                        </h5>
                        <ul className="list-inside list-disc space-y-1.5 pl-1">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Security Considerations */}
                      <div>
                        <h5 className="font-mono font-bold text-text-primary uppercase tracking-widest mb-2 flex items-center space-x-1.5">
                          <ShieldAlert className="h-4 w-4 text-accent-brightRed" />
                          <span>SECURITY PROTOCOLS INCLUDED</span>
                        </h5>
                        <ul className="list-inside list-disc space-y-1.5 pl-1 text-accent-brightRed/90">
                          {project.security.map((sec, i) => (
                            <li key={i}>{sec}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges & Lessons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-4">
                        <div>
                          <h5 className="font-mono font-bold text-text-primary uppercase tracking-widest mb-1.5">
                            DEVELOPMENT CHALLENGES
                          </h5>
                          <p className="leading-relaxed">{project.challenges}</p>
                        </div>
                        <div>
                          <h5 className="font-mono font-bold text-text-primary uppercase tracking-widest mb-1.5">
                            LESSONS LEARNED
                          </h5>
                          <p className="leading-relaxed">{project.lessons}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Code action links */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 border border-white/10 bg-[#0d0d0d] px-5 py-3 text-text-secondary transition-all duration-200 hover:border-accent-brightRed hover:text-text-primary active:scale-95 text-[10px] tracking-widest font-mono font-bold uppercase"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GITHUB REPOSITORY</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 border border-accent-brightRed bg-accent-brightRed/10 px-6 py-3.5 text-accent-brightRed transition-all duration-200 hover:bg-accent-brightRed hover:text-text-primary active:scale-95 text-xs tracking-widest font-mono font-bold uppercase"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>VISIT LIVE WEBSITE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
