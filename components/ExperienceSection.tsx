
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-transparent scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4 uppercase tracking-wider">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="relative border-l border-slate-800/50 ml-4 md:ml-8 space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-10 md:pl-16">
              <div className="absolute -left-[6px] top-0 w-3 h-3 bg-blue-600 rounded-full z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

              <div className="bg-slate-900/20 border border-slate-800/40 p-8 md:p-10 rounded-3xl hover:border-blue-500/20 transition-all group">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-3 mt-1.5">
                      <span className="text-blue-500 font-black text-sm uppercase tracking-widest">{exp.company}</span>
                      <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
                      <div className="flex items-center space-x-1.5 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3.5 text-slate-400 text-sm md:text-base mb-8 max-w-4xl font-light leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-4 mt-1.5 text-xs font-black">/</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border border-slate-800/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
