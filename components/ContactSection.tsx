
import React from 'react';
import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const formspreeUrl = "https://formspree.io/f/xlgdzyrb";

  return (
    <section id="contact" className="py-24 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl font-bold text-slate-100 mb-6 uppercase tracking-tight">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mb-10"></div>
            <p className="text-slate-400 mb-12 text-xl leading-relaxed max-w-xl">
              I'm always open to discussing new opportunities, creative ideas or projects to be part of your visions. 
              Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6 max-w-lg">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center space-x-8 p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all">
                <div className="bg-blue-600/10 p-5 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Primary Email</p>
                  <p className="text-slate-200 text-lg font-semibold">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex items-center space-x-8 p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all">
                <div className="bg-teal-600/10 p-5 rounded-2xl text-teal-500 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Direct Line</p>
                  <p className="text-slate-200 text-lg font-semibold">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 pt-8">
                <a href="#" className="p-5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl transition-all hover:text-white"><Github className="w-7 h-7" /></a>
                <a href="#" className="p-5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl transition-all hover:text-white"><Linkedin className="w-7 h-7" /></a>
                <a href="#" className="p-5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl transition-all hover:text-white"><Twitter className="w-7 h-7" /></a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-10 md:p-16 rounded-[3rem] relative overflow-hidden shadow-3xl shadow-black/40">
            <div className="absolute top-0 right-0 p-32 bg-blue-600/5 blur-[120px] rounded-full"></div>
            
            <form action={formspreeUrl} method="POST" className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  placeholder="Inquiry about your services"
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all text-lg"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea 
                  name="message"
                  rows={5} 
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all resize-none text-lg"
                ></textarea>
              </div>

              <input type="text" name="_gotcha" style={{display: 'none'}} />

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-6 rounded-2xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center space-x-3 group active:scale-[0.98] text-xl"
              >
                <span>Send Secure Message</span>
                <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
