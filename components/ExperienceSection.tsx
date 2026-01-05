
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-10 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 md:w-8 md:h-8 bg-slate-950 border-2 border-blue-600 rounded-full flex items-center justify-center z-10">
                <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
              </div>

              <div className="bg-slate-900/50 border border-slate-800/50 p-6 md:p-8 rounded-2xl hover:border-blue-500/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500 text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-slate-400 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-medium rounded-lg border border-slate-700"
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
