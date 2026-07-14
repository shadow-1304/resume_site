
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#020617]"></div>


      {/* Large Ambient Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-900/10 blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>

      {/* Moving Beam - Cyber Vibe */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-scan shadow-[0_0_15px_rgba(59,130,246,0.1)]"></div>

      {/* Static Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] brightness-100 contrast-150 pointer-events-none"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(200vh); }
        }
        .animate-scan {
          animation: scan 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Background;
