
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 uppercase tracking-tight">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-10 md:pl-20">
              <div className="absolute -left-[11px] md:-left-[13px] top-0 w-5 h-5 md:w-6 md:h-6 bg-slate-950 border-4 border-blue-600 rounded-full z-10"></div>

              <div className="bg-slate-900/50 border border-slate-800/50 p-8 md:p-12 rounded-3xl hover:border-blue-500/30 transition-all group shadow-2xl shadow-black/20">
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-3 mt-2">
                      <span className="text-blue-500 font-bold text-lg">{exp.company}</span>
                      <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                      <div className="flex items-center space-x-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 text-slate-400 text-lg mb-10 max-w-5xl">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-4 mt-2 text-xl leading-none">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-widest rounded-xl border border-slate-700"
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
