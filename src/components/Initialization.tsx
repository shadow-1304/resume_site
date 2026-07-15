'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Initialization({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const messages = [
    'Initializing Secure Environment...',
    'Loading Threat Intelligence...',
    'Authenticating Identity Key...',
    'Access Granted. Decrypting Operations...',
  ];

  useEffect(() => {
    if (step < messages.length) {
      const delay = step === messages.length - 1 ? 600 : 350;
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(exitTimer);
    }
  }, [step, onComplete, messages.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background px-4 font-mono select-none"
    >
      <div className="w-full max-w-md border border-accent-mutedRed bg-surface-secondary p-6">
        <div className="mb-4 flex items-center justify-between border-b border-accent-mutedRed/40 pb-2">
          <span className="text-[10px] text-accent-red tracking-widest uppercase font-bold">
            SECURE TERMINAL BOOT
          </span>
          <span className="h-2 w-2 rounded-full bg-accent-brightRed animate-ping" />
        </div>

        <div className="space-y-2 text-xs">
          {messages.slice(0, step + 1).map((msg, index) => {
            const isLast = index === messages.length - 1;
            const isCurrent = index === step;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${isLast ? 'text-accent-brightRed font-bold mt-4' : 'text-text-secondary'}`}
              >
                <span>&gt; {msg}</span>
                {isCurrent && <span className="caret-blink" />}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 h-1 w-full bg-surface-panel overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="h-full bg-accent-red"
          />
        </div>
      </div>
    </motion.div>
  );
}
