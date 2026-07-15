'use client';

import { BookOpen, GraduationCap, Server, Code, FileText, Globe } from 'lucide-react';

const languages = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Gujarati', proficiency: 'Fluent' },
  { name: 'Hindi', proficiency: 'Fluent' },
];

export default function Academy() {
  return (
    <section
      id="academy"
      className="relative w-full border-t border-white/5 bg-[#050505] px-6 py-24 md:px-12 lg:px-24"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 font-mono">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-accent-brightRed uppercase">
            EDUCATION // LOG-05
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight uppercase text-text-primary mt-2">
            THE ACADEMY
          </h2>
        </div>
        <span className="text-[10px] text-text-muted mt-2 md:mt-0 tracking-wider">
          ACADEMIC_CREDENTIALS: BSC IT & NETSEC CORE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        {/* Left: Degree Card (5 cols) */}
        <div className="lg:col-span-5 border border-white/5 bg-[#0d0d0d] p-6 md:p-8 space-y-6">
          <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-background text-accent-brightRed">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div>
            <span className="font-mono text-[9px] font-bold text-accent-brightRed uppercase tracking-widest block">
              GRADUATED: CLASS OF 2025
            </span>
            <h3 className="text-xl font-bold uppercase text-text-primary tracking-tight mt-1">
              BSc IT in Network Security
            </h3>
            <p className="font-mono text-xs text-text-secondary mt-1">
              Gujarat University &mdash; Ahmedabad, India
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 space-y-3 font-sans text-xs text-text-secondary">
            <div className="flex items-center justify-between">
              <span>FINAL SCORE:</span>
              <strong className="text-accent-brightRed font-mono">FIRST CLASS DISTINCTION</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>CUMULATIVE GPA:</span>
              <strong className="text-text-primary font-mono">7.8 / 10.00</strong>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 font-mono text-[10px] text-text-muted">
            <p>&gt; Practical focus: Server architectures, cryptographic hashes, network topologies, port defense strategies, and script automations.</p>
          </div>
        </div>

        {/* Right: Coursework & Philosophy (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Practical Journey Bio */}
          <div className="border border-white/5 bg-[#0d0d0d] p-6">
            <span className="font-mono text-[9px] font-bold text-accent-brightRed uppercase tracking-widest block mb-3">
              // METHODOLOGY: BEYOND THE CLASSROOM
            </span>
            <p className="font-sans text-xs md:text-sm leading-relaxed text-text-secondary">
              While university provided the foundational logic of networking models and security concepts, my practical capabilities were forged through hands-on development. Building real-world LLM orchestration loops during internships and configuring defensive IPTables on personal Linux server nodes allowed me to bridge academic theory with production-grade engineering principles.
            </p>
          </div>

          {/* Verified Languages */}
          <div className="border border-white/5 bg-[#0d0d0d] p-6 space-y-4">
            <span className="font-mono text-[9px] font-bold text-accent-brightRed uppercase tracking-widest block border-b border-white/5 pb-2">
              VERIFIED LANGUAGES
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="border border-white/5 bg-background p-3 flex flex-col justify-between hover:border-accent-brightRed/25 transition-colors duration-200"
                >
                  <span className="font-mono text-[8px] text-text-muted uppercase tracking-wider flex items-center space-x-1">
                    <Globe className="h-3 w-3 text-accent-brightRed mr-1" />
                    <span>PROFICIENCY</span>
                  </span>
                  <span className="font-sans text-xs font-bold text-text-secondary uppercase mt-2 leading-tight">
                    {lang.name} ({lang.proficiency})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
