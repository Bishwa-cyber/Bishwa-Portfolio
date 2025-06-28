
import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars array
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkle: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.01,
      });
    }

    // Falling stars array
    const fallingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    // Create falling stars
    for (let i = 0; i < 3; i++) {
      fallingStars.push({
        x: Math.random() * canvas.width,
        y: -10,
        length: Math.random() * 50 + 20,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      stars.forEach((star) => {
        star.opacity += (Math.random() - 0.5) * star.twinkle;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.5, `rgba(124, 58, 237, ${star.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw and animate falling stars
      fallingStars.forEach((star, index) => {
        star.y += star.speed;
        star.x += star.speed * 0.3;

        // Reset star if it goes off screen
        if (star.y > canvas.height + 50) {
          star.y = -50;
          star.x = Math.random() * canvas.width;
          star.opacity = Math.random() * 0.8 + 0.2;
        }

        // Draw falling star trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y - star.length,
          star.x, star.y
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, `rgba(0, 217, 255, ${star.opacity})`);

        ctx.beginPath();
        ctx.moveTo(star.x, star.y - star.length);
        ctx.lineTo(star.x + 2, star.y);
        ctx.lineTo(star.x - 2, star.y);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default SpaceBackground;
