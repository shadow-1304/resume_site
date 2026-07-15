'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Initialization from '@/components/Initialization';
import BackgroundGrid from '@/components/BackgroundGrid';
import Hero from '@/components/Hero';
import ThreatIntelligence from '@/components/ThreatIntelligence';
import Arsenal from '@/components/Arsenal';
import Operations from '@/components/Operations';
import Academy from '@/components/Academy';
import ContactTerminal from '@/components/ContactTerminal';

export default function Home() {
  const [isInitialized, setIsInitialized] = useState(false);

  return (
    <>
      {/* Initialization Loading Sequence (No Artificial Delay) */}
      <AnimatePresence mode="wait">
        {!isInitialized && (
          <Initialization onComplete={() => setIsInitialized(true)} />
        )}
      </AnimatePresence>

      {/* Main Experience Layout */}
      <div className="relative min-h-screen w-full bg-background select-text">
        {/* Particle/Grid Canvas Background */}
        <BackgroundGrid />

        {/* Delayed reveal of the core page content after initialization */}
        {isInitialized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Core Section Elements */}
            <main className="relative z-10 w-full">
              <Hero />
              <ThreatIntelligence />
              <Arsenal />
              <Operations />
              <Academy />
              <ContactTerminal />
            </main>

            {/* Tactical Footer */}
            <footer className="relative z-10 py-16 border-t border-white/5 bg-[#050505] font-mono text-[9px] text-text-muted">
              <div className="max-w-[92%] 2xl:max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col items-center md:items-start space-y-1">
                  <p className="text-text-primary font-bold text-xs uppercase tracking-widest">
                    PARTH<span className="text-accent-brightRed">_ROOT</span>
                  </p>
                  <p className="text-text-muted">
                    © {new Date().getFullYear()} Parth Prajapati. All rights reserved.
                  </p>
                </div>

                <div className="flex items-center space-x-8 text-[9px] uppercase tracking-wider">
                  <a href="#home" className="hover:text-accent-brightRed transition-colors">TOP_FILE</a>
                  <a href="#threat-intelligence" className="hover:text-accent-brightRed transition-colors">DOSSIER</a>
                  <a href="#operations" className="hover:text-accent-brightRed transition-colors">OPERATIONS</a>
                </div>

                <div className="text-center md:text-right space-y-1">
                  <p className="uppercase tracking-widest text-text-muted">
                    SECURITY LEVEL: <span className="text-accent-brightRed font-bold">VERIFIED_SECURE</span>
                  </p>
                  <p className="text-[8px] text-text-muted">
                    Built with Next.js App Router, Tailwind & GSAP
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </div>
    </>
  );
}
