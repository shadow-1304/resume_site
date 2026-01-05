
import React from 'react';
import { PERSONAL_INFO, EDUCATION, LANGUAGES } from '../constants';
import { GraduationCap, MapPin, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Profile Summary</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
                <div className="bg-blue-600/10 p-3 rounded-lg text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-slate-200 font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
                <div className="bg-teal-600/10 p-3 rounded-lg text-teal-500">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Languages</p>
                  <p className="text-slate-200 font-medium">
                    {LANGUAGES.map(l => l.name).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 id="education" className="text-2xl font-bold text-slate-100 mb-6 scroll-mt-28">Education</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mb-8"></div>
              
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative group p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all">
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-2.5 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <p className="text-blue-500 font-bold mb-1 text-sm">{edu.period}</p>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{edu.institution}</h3>
                    <p className="text-slate-400 mb-4">{edu.degree}</p>
                    <div className="inline-flex items-center px-4 py-1.5 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-slate-100 mb-6 uppercase tracking-widest text-xs opacity-50">Language Proficiency</h3>
              <div className="space-y-5">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300 font-medium">{lang.name}</span>
                      <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full w-full opacity-80"></div>
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
