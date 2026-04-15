
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-blue-500/30">
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="py-16 border-t border-slate-900 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-[96%] 2xl:max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-slate-100 font-black text-xl mb-2 tracking-tighter uppercase">
              PARTH<span className="text-blue-600">_ROOT</span>
            </p>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-10 text-xs font-black uppercase tracking-[0.2em]">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms</a>
            <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Hire Me</a>
          </div>

          <div className="text-right">
            <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]">
              Security Protocol: <span className="text-green-500">ENCRYPTED</span>
            </p>
            <p className="text-slate-700 text-[9px] font-mono mt-1">
              Built with React, Vite & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
