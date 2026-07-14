
import React, { useState, useCallback, useEffect } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url?: string;
  accentColor: string;
  glowColor: string;
  tags: string[];
  logo: string;
  screenshots: string[];
  usps: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 'intel-air-group',
    name: 'Intel Air Group',
    tagline: 'Engineered Comfort · HVAC Solutions at Scale',
    description:
      'A professional corporate website developed for an established HVAC solutions provider. Features customized service showcases, calculation-driven layouts, and a modern aesthetic reflecting thermal comfort and system reliability.',
    url: 'https://intelairgroup.com/',
    accentColor: '#f8fafc',
    glowColor: 'rgba(248, 250, 252, 0.12)',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design', 'Web Development'],
    logo: '/projects/intel_air_logo.svg',
    screenshots: [],
    usps: [
      'Tailored industrial design showcasing end-to-end HVAC services',
      'Engineered for maximum reliability and structural design showcase',
      'Fully responsive, performance-optimized single-page layout',
      'Integration of professional inquiry flows and service catalogs',
    ],
  },
  {
    id: 'shadow',
    name: 'SHADOW',
    tagline: 'Own Intelligence · Curating the Digital Self',
    description:
      'A personal AI assistant website with a sleek dark-mode interface. Shadow adapts to your identity — choose an AI persona, set objectives on a calendar, maintain an archive, and communicate naturally.',
    url: 'https://assitant-omega.vercel.app/',
    accentColor: '#f8fafc',
    glowColor: 'rgba(248, 250, 252, 0.12)',
    tags: ['AI', 'Personal Assistant', 'Web App', 'React'],
    logo: '/projects/shadow_logo.svg',
    screenshots: [],
    usps: [
      'Choose AI persona: Editorial, Analytical, Minimalist, Creative',
      'Calendar-based objectives & task planning',
      'Encrypted local identity persistence',
      'Elegant dark-mode UI with typographic excellence',
    ],
  },
  {
    id: 'meme-app',
    name: 'HA · Meme Soundboard',
    tagline: 'Your Memes, Your Widgets, Your Home Screen',
    description:
      'A Flutter mobile app that lets you import custom meme MP3 files, create home-screen widgets for each meme, and play them instantly with a single tap — no app-open required.',
    url: undefined,
    accentColor: '#e2e8f0',
    glowColor: 'rgba(226, 232, 240, 0.12)',
    tags: ['Flutter', 'Mobile', 'Android', 'Widgets', 'Audio'],
    logo: '/projects/meme_logo.svg',
    screenshots: [
      '/projects/meme_library.svg',
      '/projects/meme_widgets.svg',
    ],
    usps: [
      'Import any MP3 as a named meme sound',
      'Create home-screen widgets per meme',
      'One-tap widget playback — no app launch needed',
      'Offline-first: everything stored locally',
    ],
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: string[];
  startIndex: number;
  projectName: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, projectName, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(2,6,23,0.96)', backdropFilter: 'blur(14px)' }}
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-5 right-6 text-slate-400 hover:text-white transition-colors z-10" aria-label="Close">
        <X className="w-8 h-8" />
      </button>
      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-slate-500 text-xs font-mono uppercase tracking-widest">
        {projectName} — {current + 1} / {images.length}
      </span>
      {images.length > 1 && (
        <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-10 text-slate-400 hover:text-white z-10 p-2">
          <ChevronLeft className="w-10 h-10" />
        </button>
      )}
      <div className="max-w-[85vw] max-h-[85vh] relative" onClick={e => e.stopPropagation()}>
        <img
          src={images[current]}
          alt={`${projectName} screenshot ${current + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-2xl"
          style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.7)' }}
        />
      </div>
      {images.length > 1 && (
        <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-10 text-slate-400 hover:text-white z-10 p-2">
          <ChevronRight className="w-10 h-10" />
        </button>
      )}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i); }}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === current ? '#fff' : 'rgba(255,255,255,0.25)' }} />
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onScreenshotClick: (project: Project, index: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onScreenshotClick }) => {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const hasScreenshots = project.screenshots.length > 0;

  const handleVisit = () => {
    if (project.url) window.open(project.url, '_blank', 'noopener noreferrer');
  };

  const SERIF = "'Cormorant Garamond', Georgia, serif";

  return (
    <div
      className="group relative rounded-3xl border transition-all duration-500"
      style={{
        background: 'rgba(23, 37, 84, 0.7)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderColor: hovered ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        boxShadow: hovered
          ? `0 0 70px -10px ${project.glowColor}, 0 4px 30px rgba(0, 0, 0, 0.3)`
          : '0 4px 30px rgba(0, 0, 0, 0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── No-screenshot layout (Shadow): horizontal logo | info ── */}
      {!hasScreenshots && (
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 p-8 md:p-14 items-start">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="w-44 h-44 object-cover rounded-2xl"
              style={{
                filter: `drop-shadow(0 10px 20px ${project.glowColor})`,
                transition: 'transform 0.4s ease',
                transform: hovered ? 'scale(1.02)' : 'scale(1)',
              }}
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[60%] h-4 blur-xl rounded-full pointer-events-none"
              style={{ background: project.glowColor, opacity: hovered ? 0.6 : 0.2, transition: 'opacity 0.4s ease' }}
            />
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1">
            <h3 className="font-bold tracking-tight mb-1" style={{ color: project.accentColor, fontFamily: SERIF, fontSize: 'clamp(2.5rem,5vw,3.8rem)' }}>
              {project.name}
            </h3>
            <p className="text-slate-500 text-sm italic tracking-[0.15em] mb-5" style={{ fontFamily: SERIF }}>
              {project.tagline}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border"
                  style={{ color: project.accentColor, borderColor: project.accentColor + '30', background: project.accentColor + '10' }}>
                  {tag}
                </span>
              ))}
            </div>
            <ul className="space-y-2.5 mb-8">
              {project.usps.map((usp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                  {usp}
                </li>
              ))}
            </ul>
            {project.url && (
              <button
                onClick={handleVisit}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                className="self-start flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                  background: btnHovered ? project.accentColor + '25' : project.accentColor + '10',
                  border: `1px solid ${project.accentColor}${btnHovered ? '80' : '30'}`,
                  color: project.accentColor,
                  transform: btnHovered ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)',
                  boxShadow: btnHovered ? `0 10px 25px -10px ${project.glowColor}` : 'none'
                }}
              >
                <ExternalLink className="w-4 h-4" /> Visit Project
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Screenshot layout (Meme app): left info, right phone screenshots ── */}
      {hasScreenshots && (
        <div className="flex flex-col lg:flex-row gap-10 p-8 md:p-12 items-start">
          {/* Left: logo + info */}
          <div className="flex flex-col justify-between lg:w-[44%]">
            {/* Logo */}
            <div className="relative mb-7 cursor-pointer self-start" onClick={() => onScreenshotClick(project, 0)}>
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="w-36 h-36 object-cover rounded-2xl"
                style={{
                  filter: `drop-shadow(0 16px 32px ${project.glowColor})`,
                  transition: 'transform 0.4s ease',
                  transform: hovered ? 'scale(1.04) translateY(-5px)' : 'scale(1) translateY(0)',
                }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-[65%] h-4 blur-xl rounded-full pointer-events-none"
                style={{ background: project.glowColor, opacity: hovered ? 0.8 : 0.4, transition: 'opacity 0.4s ease' }}
              />
            </div>

            <h3 className="font-bold tracking-tight mb-1" style={{ color: project.accentColor, fontFamily: SERIF, fontSize: 'clamp(2rem,4vw,3rem)' }}>
              {project.name}
            </h3>
            <p className="text-slate-500 text-sm italic tracking-[0.12em] mb-5" style={{ fontFamily: SERIF }}>
              {project.tagline}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border"
                  style={{ color: project.accentColor, borderColor: project.accentColor + '30', background: project.accentColor + '10' }}>
                  {tag}
                </span>
              ))}
            </div>
            <ul className="space-y-2.5 mb-8">
              {project.usps.map((usp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                  {usp}
                </li>
              ))}
            </ul>
            {project.url ? (
              <button
                onClick={handleVisit}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                className="self-start flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                  background: btnHovered ? project.accentColor + '25' : project.accentColor + '10',
                  border: `1px solid ${project.accentColor}${btnHovered ? '80' : '30'}`,
                  color: project.accentColor,
                  transform: btnHovered ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)',
                  boxShadow: btnHovered ? `0 10px 25px -10px ${project.glowColor}` : 'none'
                }}
              >
                <ExternalLink className="w-4 h-4" /> Visit Project
              </button>
            ) : (
              <div className="self-start flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-[0.15em]"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)' }}>
                <Play className="w-4 h-4" /> App Store — Coming Soon
              </div>
            )}
          </div>

          {/* Right: portrait phone screenshot grid */}
          <div className="lg:w-[56%] grid grid-cols-2 gap-5 content-start">
            {project.screenshots.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden cursor-pointer group/img"
                style={{
                  aspectRatio: '9/16',
                  borderRadius: '22px',
                  border: `1px solid ${project.accentColor}20`,
                  boxShadow: `0 8px 40px -8px ${project.glowColor}`,
                }}
                onClick={() => onScreenshotClick(project, i)}
              >
                <img
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.04]"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(2,6,23,0.58)', borderRadius: 'inherit' }}
                >
                  <span className="text-white text-xs font-black uppercase tracking-[0.25em]"
                    style={{ fontFamily: SERIF, fontSize: '15px', letterSpacing: '0.3em' }}>
                    View
                  </span>
                </div>
                {/* Bottom accent glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{ background: `linear-gradient(to top, ${project.glowColor}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const ProjectsSection: React.FC = () => {
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  return (
    <section id="projects" className="py-24 bg-transparent scroll-mt-24">
      <div className="max-w-[96%] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] mb-3">Portfolio</p>
          <h2 className="text-3xl font-bold text-slate-100 mb-4 uppercase tracking-wider">Projects</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onScreenshotClick={(p, i) => setLightbox({ project: p, index: i })}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && lightbox.project.screenshots.length > 0 && (
        <Lightbox
          images={lightbox.project.screenshots}
          startIndex={lightbox.index}
          projectName={lightbox.project.name}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
