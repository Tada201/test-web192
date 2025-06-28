import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function LoadingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();
  const [isCompleted, setIsCompleted] = useState(false);
  const particlesRef = useRef<Particle[]>([]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Reinitialize particles with new canvas dimensions
    particlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    }));
  }, []);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }
      
      // Draw particle
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = '#00f7ff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00f7ff';
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }, []);

  const completeAnimation = useCallback(() => {
    setIsCompleted(true);
    
    // Final fade out
    setTimeout(() => {
      const container = document.getElementById('loadingContainer');
      const skipButton = document.getElementById('skipButton');
      
      if (container) {
        container.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        container.style.transform = 'scale(1.1)';
        container.style.opacity = '0';
      }
      if (skipButton) {
        skipButton.style.opacity = '0';
      }
      
      // TODO: Transition to main application content
      setTimeout(() => {
        console.log('Loading complete - transition to main content');
      }, 800);
    }, 1000);
  }, []);

  const updateAnimation = useCallback(() => {
    if (isCompleted) return;
    
    updateParticles();
    animationIdRef.current = requestAnimationFrame(updateAnimation);
  }, [isCompleted, updateParticles]);

  const skipAnimation = useCallback(() => {
    if (isCompleted) return;
    
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    completeAnimation();
  }, [isCompleted, completeAnimation]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [resizeCanvas]);

  useEffect(() => {
    // Start animation
    updateAnimation();
    
    // Auto-complete after 6 seconds (matching the CSS animation duration)
    const timer = setTimeout(() => {
      completeAnimation();
    }, 6000);
    
    return () => {
      clearTimeout(timer);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [updateAnimation, completeAnimation]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const skipBtn = document.getElementById('skipButton');
      if (e.target !== skipBtn) {
        skipAnimation();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        skipAnimation();
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [skipAnimation]);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-[#0a0a0a] to-[#0f2a2e]">
      {/* Hexagonal Grid Background */}
      <div className="hex-grid absolute inset-0 w-full h-full"></div>
      
      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef}
        className="particle-canvas absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      />
      
      {/* Main Loading Container */}
      <div id="loadingContainer" className="relative flex flex-col items-center justify-center z-10">        
        {/* PRO192 Text with Reveal Animation */}
        <div className="pro192-loader select-none font-montserrat">PRO192</div>
      </div>
      
      {/* Skip Button */}
      <button 
        id="skipButton"
        onClick={skipAnimation}
        className="skip-button absolute top-8 right-8 px-4 py-2 rounded-lg text-sm font-semibold z-30 hover:scale-105 transition-transform font-montserrat"
      >
        Skip Animation
      </button>
    </div>
  );
}
