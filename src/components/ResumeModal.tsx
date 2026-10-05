'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, Bot, Shield, ArrowRight } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl border border-accent-mutedRed/40 bg-[#0a0a0a] p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.15)] z-10 font-mono"
          >
            {/* Header Tag */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-bold text-accent-brightRed uppercase tracking-widest block">
                  // CREDENTIALS DISPATCH
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-text-primary tracking-tight uppercase mt-1">
                  SELECT RESUME TYPE
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="flex items-center space-x-1 border border-white/10 px-2.5 py-1.5 text-[11px] text-text-muted hover:border-accent-brightRed hover:text-accent-brightRed transition-colors"
              >
                <span>ESC</span>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <p className="font-sans text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
              Choose the specialization dossier tailored to your review requirements:
            </p>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option 1: AI Resume */}
              <div className="group relative flex flex-col justify-between border border-white/10 bg-[#0f0f0f] p-5 hover:border-accent-brightRed/60 hover:bg-[#141414] hover:shadow-[0_0_25px_rgba(239,68,68,0.12)] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-accent-brightRed/30 bg-accent-brightRed/10 text-accent-brightRed group-hover:scale-105 transition-transform">
                      <Bot className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-bold tracking-wider text-accent-brightRed uppercase bg-accent-brightRed/10 border border-accent-brightRed/20 px-2 py-0.5">
                      SPECIALIZATION
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-text-primary uppercase tracking-tight mb-2">
                    AI & Automation Resume
                  </h4>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
                    Targeted for AI Engineering, Agentic Workflows, Python Automations, and RAG Pipeline deployments.
                  </p>
                </div>

                <a
                  href="/Parth_Prajapati_AI_Resume.pdf"
                  download="Parth_Prajapati_AI_Resume.pdf"
                  onClick={onClose}
                  className="mt-2 flex items-center justify-center space-x-2 border border-accent-brightRed bg-accent-red px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-text-primary hover:bg-accent-brightRed transition-all active:scale-95"
                >
                  <FileDown className="h-4 w-4" />
                  <span>DOWNLOAD AI RESUME</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              {/* Option 2: Cyber Security Resume */}
              <div className="group relative flex flex-col justify-between border border-white/10 bg-[#0f0f0f] p-5 hover:border-accent-brightRed/60 hover:bg-[#141414] hover:shadow-[0_0_25px_rgba(239,68,68,0.12)] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-accent-brightRed/30 bg-accent-brightRed/10 text-accent-brightRed group-hover:scale-105 transition-transform">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-bold tracking-wider text-accent-brightRed uppercase bg-accent-brightRed/10 border border-accent-brightRed/20 px-2 py-0.5">
                      SPECIALIZATION
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-text-primary uppercase tracking-tight mb-2">
                    Cyber Security Resume
                  </h4>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
                    Targeted for Information Security, Network Defense, Linux Administration, and Cryptographic systems.
                  </p>
                </div>

                <a
                  href="/Parth_Prajapati_CyberSecurity_Resume.pdf"
                  download="Parth_Prajapati_CyberSecurity_Resume.pdf"
                  onClick={onClose}
                  className="mt-2 flex items-center justify-center space-x-2 border border-accent-brightRed bg-accent-red px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-text-primary hover:bg-accent-brightRed transition-all active:scale-95"
                >
                  <FileDown className="h-4 w-4" />
                  <span>DOWNLOAD CYBER RESUME</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Terminal status bar footer */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] text-text-muted">
              <span>STATUS: READY_FOR_DISPATCH</span>
              <span>SHA-256 VERIFIED CHECKSUM</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
