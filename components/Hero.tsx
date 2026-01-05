
import React from 'react';
import { Mail, Shield, Zap, Terminal, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-20 overflow-hidden px-6">
      {/* Background blobs with ultra-low opacity for depth */}
      <div className="absolute top-0 -left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob"></div>
      <div className="absolute top-1/2 -right-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 bg-slate-900 border border-slate-800 rounded-full pl-2 pr-4 py-1.5 mb-10 mx-auto lg:mx-0">
              <div className="bg-blue-600 px-2 py-0.5 rounded-full text-[10px] font-black text-white uppercase tracking-tighter">New</div>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Open for 2025 Collaborations</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-blue-700">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
              Crafting <span className="text-slate-100 font-medium italic underline decoration-blue-500/50 decoration-2 underline-offset-4">impermeable security</span> layers through <span className="text-blue-500 font-bold">AI-driven</span> automation and advanced system architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="#contact" 
                className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black transition-all hover:bg-blue-600 hover:text-white active:scale-95 shadow-2xl shadow-white/5"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#experience" 
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-300 px-10 py-5 rounded-2xl font-bold transition-all border border-slate-800 active:scale-95"
              >
                <span>EXPLORE WORK</span>
              </a>
            </div>

            <div className="mt-20 flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 opacity-40">
              <div className="flex flex-col items-center lg:items-start group">
                <Shield className="w-6 h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Network</span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <Zap className="w-6 h-6 text-indigo-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Auto-AI</span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <Terminal className="w-6 h-6 text-teal-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">DevOps</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
             {/* Decorative Tech frame for desktop, but subtle enough to not look cluttered on mobile if it were visible */}
             <div className="relative w-full aspect-square max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-2xl opacity-30"></div>
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-3xl border border-slate-800 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                   <div className="p-10 font-mono text-left w-full h-full flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-4">
                          <p className="text-blue-500 font-bold">$ <span className="text-slate-200">initialize_identity</span></p>
                          <p className="text-slate-400 pl-4 border-l-2 border-slate-800">
                            User: {PERSONAL_INFO.name}<br/>
                            Role: {PERSONAL_INFO.title}<br/>
                            Location: {PERSONAL_INFO.location}
                          </p>
                          <p className="text-blue-500 font-bold">$ <span className="text-slate-200">run_automation --mode security</span></p>
                          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                             <div className="flex justify-between items-center text-[10px] text-slate-500 mb-2">
                                <span>Scanning Protocols...</span>
                                <span className="text-blue-400 animate-pulse">LIVE</span>
                             </div>
                             <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 w-3/4 animate-progress"></div>
                             </div>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
                
                {/* Floating Tech Badge */}
                <div className="absolute -bottom-6 -right-6 md:-right-12 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl backdrop-blur-xl animate-bounce duration-[3000ms]">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                   <p className="text-green-500 font-bold flex items-center">
                     <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                     OPERATIONAL
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* CSS for custom animation */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 75%; }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
