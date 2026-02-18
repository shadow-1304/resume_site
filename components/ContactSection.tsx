
import React from 'react';
import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const formspreeUrl = "https://formspree.io/f/xlgdzyrb";

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
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center space-x-6 p-6 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="bg-blue-600/10 p-4 rounded-xl text-blue-500 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Primary Email</p>
                  <p className="text-slate-200 text-sm font-semibold">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex items-center space-x-6 p-6 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all">
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

          <div className="bg-slate-900/30 border border-slate-800/50 p-8 md:p-12 xl:p-14 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-blue-600/5 blur-[120px] rounded-full"></div>

            <form action={formspreeUrl} method="POST" className="relative z-10 space-y-8">
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
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-xl shadow-lg shadow-blue-600/10 transition-all flex items-center justify-center space-x-2 group active:scale-[0.98] text-xs uppercase tracking-[0.2em]"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
