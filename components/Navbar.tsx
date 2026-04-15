
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-slate-950/40 backdrop-blur-md transition-opacity duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 glass-morphism py-3">
        <div className="max-w-[96%] 2xl:max-w-[1800px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="text-xl font-black tracking-tighter flex items-center group">
            <span className="text-blue-500 group-hover:text-blue-400 transition-colors uppercase">PARTH</span>
            <span className="text-slate-500 font-mono group-hover:text-slate-300 transition-colors">_ROOT</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-bold text-slate-400 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white text-slate-950 px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-lg shadow-white/5"
            >
              Contact
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl text-slate-200 hover:text-blue-500 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`fixed top-0 right-0 h-screen w-[85%] max-w-[400px] bg-slate-950 border-l border-slate-800/50 z-[105] transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-28 px-10 pb-12">
            <div className="space-y-8 flex-1">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-4xl font-black text-slate-100 hover:text-blue-500 transition-all transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <span className="text-blue-600 font-mono text-xs block mb-1">0{idx + 1}</span>
                  {item.name}
                </a>
              ))}
            </div>

            <div className={`mt-auto space-y-6 transition-all duration-700 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="h-px bg-slate-800 w-full" />
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-3xl font-black text-lg shadow-2xl shadow-blue-600/30 active:scale-[0.98] transition-transform"
              >
                LET'S TALK
              </a>
              <div className="flex justify-center">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-600">Secure Environment</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
