'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight, Terminal, ArrowDown, Activity, Github } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center items-center px-6 overflow-hidden select-none bg-background text-center"
    >
      {/* Background horizontal accent line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-accent-red/20 z-0 pointer-events-none" />
      {/* Floating Left: Cam Rec */}
      <div className="absolute top-10 left-10 hidden xl:flex flex-col items-start font-mono text-[9px] text-text-muted space-y-1 z-10 text-left">
        <div>CAM_04 [REC]</div>
        <div className="flex items-center space-x-1.5 text-accent-brightRed font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-brightRed animate-ping" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-brightRed absolute" />
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      {/* Floating Right: Time & Language */}
      <div className="absolute top-10 right-10 hidden xl:flex flex-col items-end font-mono text-[9px] text-text-muted space-y-1.5 z-10">
        <div>UTC+05:30 // AMD_IND</div>
        <div className="border border-accent-brightRed bg-accent-brightRed/5 text-accent-brightRed font-bold px-1.5 py-0.5 text-[8px]">
          SYS_SECURE
        </div>
      </div>
      {/* Floating Middle Left: Coordinates */}
      <div className="absolute left-10 top-[40%] hidden xl:flex flex-col items-start font-mono text-[9px] text-text-muted space-y-1 text-left z-10">
        <div>LAT: 23.0225° N</div>
        <div>LON: 72.5714° E</div>
        <div>SECURE_GRID_SOC</div>
      </div>

      {/* Floating Middle Left (Vertical): Honors Ribbon */}
      <div className="absolute left-6 bottom-[30%] hidden xl:flex flex-col items-start z-10">
        <div className="origin-left -rotate-90 -translate-x-3 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted border-l border-accent-red pl-2.5">
          HONORS: 1ST_CLASS_DISTINCTION
        </div>
      </div>

      {/* Floating Right: Simulated Evidence File Block */}
      <div className="absolute right-12 top-[35%] hidden xl:flex flex-col items-start border border-white/5 bg-[#0d0d0d] p-3 text-left w-48 font-mono text-[8px] z-10">
        <div className="border-b border-white/5 pb-1 text-text-muted flex justify-between w-full">
          <span>EVIDENCE_LOG.bin</span>
          <span className="text-accent-brightRed font-bold">LOADED</span>
        </div>
        <div className="mt-2 text-text-secondary leading-normal font-sans">
          &gt; Scanning local networks...
          <br />
          &gt; Checking open ports...
          <br />
          &gt; Threat vectors clean.
        </div>
        <div className="mt-3 w-full h-8 bg-black/60 border border-white/5 flex items-center justify-center text-[7px] text-text-muted">
          [ DIAGNOSTICS CODE ]
        </div>
      </div>

      {/* Floating Right: Diagnostic Status Checklist */}
      <div className="absolute right-12 bottom-[30%] hidden xl:flex flex-col items-end font-mono text-[9px] text-text-muted space-y-1 z-10 text-right">
        <div className="flex items-center space-x-1.5">
          <span>&gt;&gt; analyzing logic...</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span>&gt;&gt; firewall validated...</span>
        </div>
        <div className="flex items-center space-x-1.5 text-accent-brightRed">
          <span>&gt;&gt; system optimized</span>
        </div>
      </div>

      {/* Hero Center Contents */}
      <div className="z-10 max-w-4xl flex flex-col items-center mt-12 md:mt-0">


        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.55 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.55 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-4"
        >
          <h1 className="font-serif font-bold text-text-primary uppercase select-none flex flex-col items-center justify-center leading-[0.85] tracking-tighter">
            <span className="text-[12.8vw] md:text-[11.6vw] leading-none block glitch-text" data-text="PARTH">PARTH</span>
            <span className="text-[7.4vw] md:text-[6.7vw] leading-none block tracking-[0.03em] mt-2 glitch-text" data-text="PRAJAPATI">PRAJAPATI</span>
          </h1>
        </motion.div>

        {/* Tagline Paragraph (Inspiration matching red text accentuation) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl font-mono text-xs md:text-[13px] leading-relaxed text-text-secondary uppercase tracking-widest"
        >
          <p>
            <span className="text-accent-brightRed">Cyber Security</span> Graduate.
          </p>
          <p className="mt-1">
            <span className="text-accent-brightRed">AI Automation</span> Developer.
          </p>
          <p className="mt-2 text-text-muted lowercase tracking-normal font-sans">
            Ahmedabad, Gujarat, India // Available for secure deployments.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-widest"
        >
          <button
            onClick={() => handleScrollTo('#operations')}
            className="flex items-center space-x-2 bg-accent-red px-5 py-3.5 text-text-primary transition-all duration-200 hover:bg-accent-brightRed active:scale-95"
          >
            <span>EXPLORE OPERATIONS</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

          <a
            href="/resume.pdf"
            download="Parth_Prajapati_Resume.pdf"
            className="flex items-center space-x-2 border border-white/10 bg-surface-secondary px-5 py-3.5 text-text-secondary transition-all duration-200 hover:border-accent-brightRed hover:text-text-primary active:scale-95"
          >
            <span>DOWNLOAD RESUME</span>
          </a>

          <a
            href="https://github.com/shadow-1304"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border border-white/10 bg-surface-secondary px-5 py-3.5 text-text-secondary transition-all duration-200 hover:border-accent-brightRed hover:text-text-primary active:scale-95"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GITHUB</span>
          </a>

          <button
            onClick={() => handleScrollTo('#contact-terminal')}
            className="flex items-center space-x-2 border border-accent-mutedRed/50 bg-[#0d0d0d] px-5 py-3.5 text-accent-brightRed transition-all duration-200 hover:border-accent-brightRed hover:bg-accent-brightRed/5 active:scale-95"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>CONTACT TERMINAL</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Bottom Left: Live Feed indicator */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center space-x-2 font-mono text-[8px] text-text-muted z-10">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-brightRed animate-pulse" />
        <span>LIVE FEED // SYS_OPERATOR_ONLINE</span>
      </div>

      {/* Floating Bottom Right: Immersive Mode Button */}
      <div className="absolute bottom-8 right-8 hidden md:block z-10">
        <div className="border border-accent-mutedRed bg-background p-4 text-left w-48 font-mono">
          <div className="text-[7px] text-text-muted tracking-widest uppercase">IMMERSIVE_MODE</div>
          <div className="text-xs font-bold text-accent-brightRed uppercase tracking-wider mt-1">
            SECURE PORTAL
          </div>
          <div className="text-[7px] text-text-secondary mt-1 flex items-center space-x-1">
            <Activity className="h-3 w-3 text-accent-brightRed animate-pulse" />
            <span>ACTIVE SECURITY STATUS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
