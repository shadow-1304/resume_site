'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Threat Intelligence', href: '#threat-intelligence' },
  { name: 'Operations', href: '#operations' },
  { name: 'Academy', href: '#academy' },
  { name: 'Arsenal', href: '#arsenal' },
  { name: 'Contact Terminal', href: '#contact-terminal' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Hide/show navbar on scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer to highlight active sections
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger near screen center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating glass navigation */}
      <nav
        className={`fixed left-1/2 top-6 z-[990] w-[92%] max-w-7xl -translate-x-1/2 rounded-full border border-white/5 bg-[#0d0d0d]/80 px-6 py-3.5 backdrop-blur-md transition-all duration-300 md:px-8 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Console key */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 font-mono text-sm font-bold tracking-widest text-text-primary group"
          >
            <Shield className="h-4.5 w-4.5 text-accent-brightRed transition-transform duration-300 group-hover:scale-110" />
            <span className="text-text-primary">
              PARTH<span className="text-accent-brightRed">_ROOT</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 font-mono text-[10px] xl:text-[11px] font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-accent-brightRed' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-brightRed" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action button */}
          <div className="hidden lg:block">
            <a
              href="#contact-terminal"
              onClick={(e) => handleNavClick(e, '#contact-terminal')}
              className="flex items-center space-x-1.5 border border-accent-mutedRed/50 bg-[#141414] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-text-primary transition-all duration-200 hover:border-accent-brightRed hover:bg-accent-brightRed/10 active:scale-95"
            >
              <Terminal className="h-3.5 w-3.5 text-accent-brightRed" />
              <span>TERMINAL</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="rounded p-1 text-text-secondary hover:text-accent-brightRed lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Strict Red & Black / No gradients) */}
      <div
        className={`fixed inset-0 z-[980] bg-black/90 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col justify-between p-8 pt-32 font-mono">
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center space-x-4 border-b border-white/5 pb-4 text-sm font-bold uppercase tracking-widest"
                >
                  <span className="text-accent-brightRed">0{index + 1}</span>
                  <span className={isActive ? 'text-accent-brightRed' : 'text-text-secondary'}>
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="border-t border-accent-mutedRed/30 pt-6">
            <a
              href="#contact-terminal"
              onClick={(e) => handleNavClick(e, '#contact-terminal')}
              className="flex w-full items-center justify-center space-x-2 border border-accent-brightRed bg-accent-brightRed/10 py-4 text-center text-xs font-bold uppercase tracking-widest text-text-primary"
            >
              <Terminal className="h-4 w-4 text-accent-brightRed" />
              <span>ACCESS CONTACT TERMINAL</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
