
import React from 'react';
import { PERSONAL_INFO, EDUCATION, LANGUAGES } from '../constants';
import { GraduationCap, MapPin, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 uppercase tracking-wider">Profile Summary</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-8"></div>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-light">
              {PERSONAL_INFO.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-center space-x-4 p-5 bg-slate-900/30 rounded-2xl border border-slate-800/50">
                <div className="bg-blue-600/10 p-3 rounded-xl text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-slate-200 font-medium text-sm">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-5 bg-slate-900/30 rounded-2xl border border-slate-800/50">
                <div className="bg-teal-600/10 p-3 rounded-xl text-teal-500">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-0.5">Languages</p>
                  <p className="text-slate-200 font-medium text-sm">
                    {LANGUAGES.map(l => l.name).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 id="education" className="text-2xl font-bold text-slate-100 mb-6 uppercase tracking-wider scroll-mt-28">Education</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-8"></div>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative group p-6 md:p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all">
                    <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2.5 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <p className="text-blue-500 font-bold mb-1 text-[11px] uppercase tracking-[0.2em]">{edu.period}</p>
                    <h3 className="text-lg font-bold text-slate-100 mb-1">{edu.institution}</h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{edu.degree}</p>
                    <div className="inline-flex items-center px-4 py-1 bg-green-500/10 text-green-400 text-[10px] font-black rounded-full border border-green-500/20 uppercase tracking-widest">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Language Proficiency</h3>
              <div className="space-y-5">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-bold tracking-tight">{lang.name}</span>
                      <span className="text-blue-400 font-black uppercase tracking-[0.2em]">{lang.level}</span>
                    </div>
                    <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full w-full opacity-60"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
