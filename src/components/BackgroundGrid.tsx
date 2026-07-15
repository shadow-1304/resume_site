'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points: Point[] = [];
    const maxPoints = Math.min(60, Math.floor((width * height) / 25000)); // Responsive density
    const connectionDist = 120;

    // Initialize random nodes
    for (let i = 0; i < maxPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw interactive connections
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];

        // Update positions
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw node points
        ctx.fillStyle = 'rgba(211, 47, 47, 0.4)'; // Solid red color with opacity
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDist) {
            // No gradients - draw a thin solid lines with varying opacity
            const opacity = (1 - dist / connectionDist) * 0.12;
            ctx.strokeStyle = `rgba(211, 47, 47, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Background Solid Color */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Custom Solid Grid overlays instead of gradients */}
      <div className="absolute inset-0 hud-grid opacity-30" />
      <div className="absolute inset-0 hud-grid-fine opacity-20" />
      
      {/* Interactive Network Node Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full opacity-60" />

      {/* Solid Matte Vignette Layers for Depth (No gradients, using overlay transparency) */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-black/40 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-black/40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-black/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black/40 pointer-events-none" />

      {/* HUD Coordinate Overlays */}
      <div className="hud-coordinate absolute top-8 left-8 hidden lg:block">
        SYS_STATUS: ACTIVE // TARGET_GEO: IN_AMD_IND
      </div>
      <div className="hud-coordinate absolute top-8 right-8 hidden lg:block">
        SECURE_LINK: ONLINE // PORT: 443
      </div>
      <div className="hud-coordinate absolute bottom-8 left-8 hidden lg:block">
        ENCRYPTION_AES_256 // HASH: 0x8F2C
      </div>
      <div className="hud-coordinate absolute bottom-8 right-8 hidden lg:block">
        NODE_VAL: 7741.0X // SHADOW_SHELL
      </div>
    </div>
  );
}
