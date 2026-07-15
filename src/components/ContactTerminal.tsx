'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Copy, Check, Send, ShieldAlert, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactTerminal() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedText, setCopiedText] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const logEndRef = useRef<HTMLDivElement | null>(null);

  const emailAddress = 'parthprajapati1304@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const appendLogs = async (logs: string[]) => {
    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setTerminalLogs((prev) => [...prev, logs[i]]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setTerminalLogs((prev) => [...prev, 'ERROR: All fields (name, email, message) are required to execute transmission.']);
      return;
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xlgdzyrb';
    if (!formId) {
      setTerminalLogs((prev) => [
        ...prev,
        'ERROR: Formspree ID is not configured. Please add your Formspree Form ID to NEXT_PUBLIC_FORMSPREE_FORM_ID in .env.local.'
      ]);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setTerminalLogs([
      `Initializing outbound secure payload via Formspree...`,
      `[PACKET_INIT] Formatting message fields...`,
    ]);

    await appendLogs([
      `[ENCRYPT] Applying AES-256 node key encryption... OK`,
      `[SMTP] Establishing connection to SMTP relay portal... OK`,
      `[SECURE_TUNNEL] Resolving routing address...`,
      `[DISPATCH] Broadcasting packets to Formspree node...`,
      `[SYNC] Dispatching payload packets...`,
    ]);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setTerminalLogs((prev) => [
          ...prev,
          `[SUCCESS] Message dispatched successfully! Protocol return code: 200 (OK).`,
          `Secure connection closed. Thank you, ${formData.name}.`
        ]);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || (errorData.errors ? errorData.errors.map((err: any) => err.message).join(', ') : 'Unknown error');
        setTerminalLogs((prev) => [
          ...prev,
          `ERROR: Dispatch failed with status ${response.status}.`,
          errorMessage
        ]);
        setSubmitStatus('error');
      }
    } catch (error: any) {
      setTerminalLogs((prev) => [
        ...prev,
        `ERROR: Network failure during payload route sync.`,
        error.message || 'Check connection/network settings.'
      ]);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (terminalLogs.length > 0) {
      logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  return (
    <section
      id="contact-terminal"
      className="relative w-full border-t border-white/5 bg-[#050505] px-6 py-24 md:px-12 lg:px-24"
    >
      {/* Section Header */}
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
            TERMINAL // LOG-07
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight uppercase text-text-primary mt-2">
            CONTACT TERMINAL
          </h2>
        </div>
        <span className="text-[10px] text-text-muted mt-2 md:mt-0 tracking-wider">
          PORT_SCAN: RESPONSIVE // ADDRESS: REMOTE_SHADOW
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        {/* Left: Terminal Console GUI (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 border border-white/5 bg-[#0d0d0d] font-mono text-xs flex flex-col"
        >
          {/* Header Bar */}
          <div className="border-b border-white/5 bg-[#050505] px-4 py-3 flex items-center justify-between text-text-muted text-[10px] font-bold">
            <div className="flex items-center space-x-2">
              <Terminal className="h-4 w-4 text-accent-brightRed" />
              <span>guest@shadow-soc:~</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5 text-accent-brightRed">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-brightRed animate-pulse" />
                <span>SECURE_LINK</span>
              </div>
            </div>
          </div>

          {/* Terminal Logs & Output */}
          <div className="p-6 h-64 overflow-y-auto bg-black/60 space-y-2 text-text-secondary custom-border border-white/5 border-t-0 scrollbar-thin">
            <div>&gt; Type your parameters below and dispatch to submit secure transmissions.</div>
            
            {terminalLogs.map((log, index) => {
              const isError = log.includes('ERROR:');
              const isSuccess = log.includes('[SUCCESS]');
              return (
                <div
                  key={index}
                  className={`leading-relaxed ${
                    isError ? 'text-accent-brightRed' : isSuccess ? 'text-text-primary font-bold' : ''
                  }`}
                >
                  &gt; {log}
                </div>
              );
            })}
            <div ref={logEndRef} />
          </div>

          {/* Interactive Form Controls */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-white/5 bg-[#0d0d0d] space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-text-muted uppercase font-bold tracking-widest block">
                  $ PARAM_NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  disabled={isSubmitting}
                  required
                  className="w-full bg-[#050505] border border-white/5 px-4 py-3 text-text-primary text-xs focus:outline-none focus:border-accent-brightRed focus:bg-black transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-text-muted uppercase font-bold tracking-widest block">
                  $ PARAM_EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. client@agency.com"
                  disabled={isSubmitting}
                  required
                  className="w-full bg-[#050505] border border-white/5 px-4 py-3 text-text-primary text-xs focus:outline-none focus:border-accent-brightRed focus:bg-black transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] text-text-muted uppercase font-bold tracking-widest block">
                $ PARAM_MESSAGE_PAYLOAD:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter message details here..."
                rows={4}
                disabled={isSubmitting}
                required
                className="w-full bg-[#050505] border border-white/5 px-4 py-3 text-text-primary text-xs focus:outline-none focus:border-accent-brightRed focus:bg-black transition-all resize-none"
              />
            </div>

            {/* Dispatch Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center space-x-2 bg-accent-red hover:bg-accent-brightRed text-text-primary font-bold px-6 py-3 text-[10px] uppercase tracking-widest transition-all duration-200 disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{isSubmitting ? 'DISPATCHING PAYLOAD...' : 'DISPATCH MESSAGE'}</span>
            </button>
          </form>
        </motion.div>

        {/* Right: Coordinates & Info (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Coordinates Card */}
          <div className="border border-white/5 bg-[#0d0d0d] p-6 space-y-6">
            <span className="font-mono text-[9px] font-bold text-accent-brightRed uppercase tracking-widest block">
              // RECIPIENT COORDINATES
            </span>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-text-muted">LOCATION:</span>
                <span className="text-text-primary uppercase">AHMEDABAD, INDIA</span>
              </div>

              {/* GitHub */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-text-muted">GITHUB:</span>
                <a
                  href="https://github.com/shadow-1304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent-brightRed transition-colors flex items-center space-x-1"
                >
                  <GitBranch className="h-3.5 w-3.5 text-accent-brightRed" />
                  <span>github.com/shadow-1304</span>
                </a>
              </div>

              {/* Email Address with Copy Functionality */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-text-muted">SECURE_EMAIL:</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-text-primary hover:text-accent-brightRed transition-colors flex items-center space-x-1.5 focus:outline-none"
                >
                  {copiedText ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent-brightRed" />
                      <span className="text-accent-brightRed">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{emailAddress}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Resume download */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-text-muted">CURRICULUM:</span>
                <a
                  href="/resume.pdf"
                  download="Parth_Prajapati_Resume.pdf"
                  className="text-text-primary hover:text-accent-brightRed transition-colors"
                >
                  DOWNLOAD_RESUME.pdf
                </a>
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="border border-accent-mutedRed/30 bg-accent-mutedRed/5 p-6 flex items-start space-x-3.5">
            <ShieldAlert className="h-5 w-5 text-accent-brightRed mt-0.5 shrink-0" />
            <div className="text-xs text-text-secondary leading-normal">
              <span className="font-mono font-bold text-accent-brightRed block tracking-wider uppercase mb-1">
                SECURE ENVIRONMENT ENFORCED
              </span>
              This channel runs TLS packet encapsulation. Message payloads are recorded in standard audit logs. LinkedIn references are intentionally excluded from the directory rules.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
