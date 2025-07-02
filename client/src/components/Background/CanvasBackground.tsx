import { useRef, useEffect } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import './background.css';

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { settings } = useSettings();
  const animationRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    if (!settings.backgroundAnimation) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    // Set canvas size
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = 2;
      }
      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = 100;
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(canvas.width, canvas.height));
    }

    // Animation loop
    function animate() {
      if (!running) return;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      // Update and draw particles
      particlesRef.current.forEach((particle: any) => {
        particle.update(canvas!.width, canvas!.height);
        particle.draw(ctx!);
      });
      // Draw lines between close particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx!.beginPath();
            ctx!.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx!.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx!.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [settings.backgroundAnimation, settings.theme]);

  if (!settings.backgroundAnimation) return null;
  return (
    <canvas
      ref={canvasRef}
      id="background-canvas"
      className="background-canvas"
      aria-hidden="true"
    />
  );
};

export default CanvasBackground;
