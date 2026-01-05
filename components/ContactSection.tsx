
import React from 'react';
import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  // NOTE: To make this work, replace 'YOUR_FORMSPREE_ID' with your actual ID from formspree.io
  const formspreeUrl = "https://formspree.io/f/YOUR_FORMSPREE_ID";

  return (
    <section id="contact" className="py-24 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
            <p className="text-slate-400 mb-12 text-lg">
              I'm always open to discussing new opportunities, creative ideas or projects to be part of your visions. 
              Feel free to reach out through any of the following channels.
            </p>

            <div className="space-y-8">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center space-x-6 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all">
                <div className="bg-blue-600/10 p-4 rounded-xl text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-slate-200 font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex items-center space-x-6 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all">
                <div className="bg-teal-600/10 p-4 rounded-xl text-teal-500 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-slate-200 font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 pt-8">
                <a href="#" className="p-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all"><Github className="w-6 h-6" /></a>
                <a href="#" className="p-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="p-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all"><Twitter className="w-6 h-6" /></a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 bg-blue-600/5 blur-3xl rounded-full"></div>
            
            <form action={formspreeUrl} method="POST" className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  placeholder="Inquiry about your services"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Hidden honeypot field to prevent spam */}
              <input type="text" name="_gotcha" style={{display: 'none'}} />

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center space-x-2 group active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
