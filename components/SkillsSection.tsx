
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Specialized in securing networks and leveraging artificial intelligence for industrial-grade automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-950 text-slate-300 text-sm font-medium rounded-xl border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
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
