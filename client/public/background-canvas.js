// Canvas Background Animation for Particle Network Effect
// This script creates a dynamic particle network that follows the viewport as the user scrolls.
// It is designed for integration into a React/Vite project, using a fixed canvas behind all content.

// Wait for DOM to load if needed
window.addEventListener('DOMContentLoaded', () => {
  // Get or create the canvas element
  let canvas = document.getElementById('background-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'background-canvas';
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');

  // Set canvas to full window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1.5 - 0.75;
      this.speedY = Math.random() * 1.5 - 0.75;
      this.baseY = this.y; // Store initial y for scroll effect
    }

    // Update particle position based on scroll
    update(scrollY) {
      this.x += this.speedX;
      this.y = this.baseY + scrollY * 0.08; // Adjust y with scroll
      // Bounce off edges
      if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    }

    // Draw particle
    draw() {
      ctx.fillStyle = 'rgba(80, 180, 255, 0.8)'; // Blue-cyan
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Create particle array
  const particlesArray = [];
  const particleCount = 80;
  for (let i = 0; i < particleCount; i++) {
    particlesArray.push(new Particle());
  }

  // Animation function
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scrollY = window.scrollY;
    // Connect particles with lines based on proximity
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a + 1; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 110) {
          ctx.strokeStyle = 'rgba(140, 100, 255, 0.18)'; // Purple-blue
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
      particlesArray[a].update(scrollY);
      particlesArray[a].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();

  // On scroll, update baseY for all particles
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    particlesArray.forEach(p => p.update(scrollY));
  });

  // On resize, reset baseY for all particles
  window.addEventListener('resize', () => {
    particlesArray.forEach(p => {
      p.baseY = Math.random() * canvas.height;
    });
  });
});
