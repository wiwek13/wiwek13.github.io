import React, { useEffect, useRef } from 'react';

export const NeonParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let shards: { x: number; y: number; vx: number; vy: number; size: number; color: string; rotation: number; vRot: number }[] = [];
        let animationFrameId: number;
        const colors = ['#00f3ff', '#ff00ff', '#ffe600']; // Cyan, Pink, Yellow

        const resizeSettings = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initShards = () => {
            const count = Math.min(window.innerWidth * 0.05, 40); // Balanced count
            shards = [];
            for (let i = 0; i < count; i++) {
                shards.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1, // Slow float
                    vy: (Math.random() - 0.5) * 1,
                    size: Math.random() * 20 + 5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    rotation: Math.random() * Math.PI * 2,
                    vRot: (Math.random() - 0.5) * 0.02,
                });
            }
        };

        const drawShard = (s: typeof shards[0]) => {
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(s.rotation);
            ctx.beginPath();
            // Draw a simple triangle/shard
            ctx.moveTo(0, -s.size);
            ctx.lineTo(s.size * 0.5, s.size * 0.5);
            ctx.lineTo(-s.size * 0.5, s.size * 0.5);
            ctx.closePath();

            ctx.strokeStyle = s.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.3; // Translucent
            ctx.stroke();

            // Optional fill
            ctx.fillStyle = s.color;
            ctx.globalAlpha = 0.05;
            ctx.fill();

            ctx.restore();
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            shards.forEach((s) => {
                drawShard(s);

                // Update physics
                s.x += s.vx;
                s.y += s.vy;
                s.rotation += s.vRot;

                // Wrap around screen
                if (s.x < -50) s.x = canvas.width + 50;
                if (s.x > canvas.width + 50) s.x = -50;
                if (s.y < -50) s.y = canvas.height + 50;
                if (s.y > canvas.height + 50) s.y = -50;
            });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', () => {
            resizeSettings();
            initShards();
        });

        resizeSettings();
        initShards();
        render();

        return () => {
            window.removeEventListener('resize', resizeSettings);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none mix-blend-screen"
        />
    );
};
