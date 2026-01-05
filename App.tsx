
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
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
        <ContactSection />
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-[90%] 2xl:max-w-[1536px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
          <p className="text-slate-500 text-xs font-mono">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
