
import React from 'react';
import { SKILLS } from '../constants';
import { Shield, Server, Cpu } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Cyber & Network Security': return <Shield className="w-6 h-6" />;
      case 'System Administration': return <Server className="w-6 h-6" />;
      case 'AI & Automation': return <Cpu className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/30 scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4 uppercase tracking-tight">Technical Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto"></div>
          <p className="mt-8 text-slate-400 max-w-3xl mx-auto text-lg">
            Specialized in securing complex network architectures and leveraging artificial intelligence for industrial-grade automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {SKILLS.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl hover:shadow-3xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-8">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-2.5 bg-slate-950 text-slate-300 text-sm font-medium rounded-xl border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
