import { useRef, useEffect } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import './background.css';

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { settings } = useSettings();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!settings.backgroundAnimation) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;
    // ...animation logic here (copy from old file)...
    // For brevity, you can copy your animation logic here.

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function animate() {
      if (!running) return;
      // ...animation drawing code...
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
