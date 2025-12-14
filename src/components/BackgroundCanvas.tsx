import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number; y: number; speed: number; size: number }[] = [];
        let animationFrameId: number;

        const resizeSettings = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initParticles = () => {
            const particleCount = Math.min(window.innerWidth * 0.1, 100); // Responsive count
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: 0.2 + Math.random() * 0.5,
                    size: Math.random() * 1.5,
                });
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(56, 189, 248, 0.4)'; // Primary color with opacity

            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Move particles
                p.y += p.speed;

                // Reset if out of view
                if (p.y > canvas.height) {
                    p.y = -5;
                    p.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', () => {
            resizeSettings();
            initParticles();
        });

        resizeSettings();
        initParticles();
        render();

        return () => {
            window.removeEventListener('resize', resizeSettings);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};
