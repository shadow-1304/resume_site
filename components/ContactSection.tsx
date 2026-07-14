
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const formspreeUrl = "https://formspree.io/f/xlgdzyrb";
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl font-bold text-slate-100 mb-6 uppercase tracking-wider">Let's Connect</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-10"></div>
            <p className="text-slate-400 mb-12 text-base md:text-lg font-light leading-relaxed max-w-lg">
              I'm always open to discussing new opportunities, creative ideas or projects to be part of your visions.
              Reach out through any of these secure channels.
            </p>

            <div className="space-y-5 max-w-md">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center space-x-6 p-6 tile-glass border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="bg-blue-600/10 p-4 rounded-xl text-blue-500 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Primary Email</p>
                  <p className="text-slate-200 text-sm font-semibold">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex items-center space-x-6 p-6 tile-glass border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="bg-teal-600/10 p-4 rounded-xl text-teal-500 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Direct Line</p>
                  <p className="text-slate-200 text-sm font-semibold">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-3 pt-6">
                <a href="#" className="p-4 bg-slate-900/50 hover:bg-slate-800 text-slate-400 rounded-xl transition-all hover:text-white border border-slate-800/50"><Github className="w-5 h-5" /></a>
                <a href="#" className="p-4 bg-slate-900/50 hover:bg-slate-800 text-slate-400 rounded-xl transition-all hover:text-white border border-slate-800/50"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="p-4 bg-slate-900/50 hover:bg-slate-800 text-slate-400 rounded-xl transition-all hover:text-white border border-slate-800/50"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div className="tile-glass border border-slate-800/50 p-8 md:p-12 xl:p-14 rounded-[2.5rem] relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-32 bg-blue-600/5 blur-[120px] rounded-full"></div>

            {status === 'success' ? (
              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="bg-green-500/10 p-6 rounded-full text-green-500 mb-4">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Message Received!</h3>
                <p className="text-slate-400 max-w-xs mx-auto">
                  Thank you for your inquiry. I've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-blue-500 text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors pt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-950/50 border border-slate-800/50 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-950/50 border border-slate-800/50 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Inquiry about your services"
                    className="w-full bg-slate-950/50 border border-slate-800/50 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="How can I help you?"
                    className="w-full bg-slate-950/50 border border-slate-800/50 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full ${status === 'submitting' ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'} text-white font-black py-5 rounded-xl shadow-lg shadow-blue-600/10 transition-all flex items-center justify-center space-x-2 group active:scale-[0.98] text-xs uppercase tracking-[0.2em]`}
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  <Send className={`w-4 h-4 ${status === 'submitting' ? '' : 'group-hover:translate-x-1'} transition-transform`} />
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

