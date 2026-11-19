import React, { useEffect, useRef } from 'react';

export const DevOpsNetwork: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number | null = null;
        let isRunning = true;

        // Honor reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        interface Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            baseAlpha: number;
            pulseOffset: number;
        }

        // Keep node count bounded for guaranteed 60+ FPS (max 75 nodes)
        const NODE_COUNT = Math.min(75, Math.max(35, Math.floor((width * height) / 25000)));
        const MAX_DIST = 140;
        const MOUSE_RADIUS = 180;

        const nodes: Node[] = [];
        for (let i = 0; i < NODE_COUNT; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.2 + Math.random() * 0.4;
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: 1.5 + Math.random() * 1.5,
                baseAlpha: 0.3 + Math.random() * 0.5,
                pulseOffset: Math.random() * Math.PI * 2,
            });
        }

        let time = 0;

        const render = () => {
            if (!isRunning) return;

            time += 0.02;
            ctx.clearRect(0, 0, width, height);

            // Update node positions and bounce off walls
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];

                if (!prefersReducedMotion) {
                    // Mouse gravity interaction
                    if (mouseRef.current.active) {
                        const dx = mouseRef.current.x - n.x;
                        const dy = mouseRef.current.y - n.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < MOUSE_RADIUS && dist > 1) {
                            const force = (1 - dist / MOUSE_RADIUS) * 0.6;
                            n.vx += (dx / dist) * force;
                            n.vy += (dy / dist) * force;
                        }
                    }

                    // Natural damping to keep speed smooth
                    n.vx *= 0.98;
                    n.vy *= 0.98;

                    // Ensure minimum drift
                    const currentSpeed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
                    if (currentSpeed < 0.2) {
                        n.vx += (Math.random() - 0.5) * 0.05;
                        n.vy += (Math.random() - 0.5) * 0.05;
                    }

                    n.x += n.vx;
                    n.y += n.vy;

                    // Wrap or bounce edges
                    if (n.x < 0) { n.x = 0; n.vx *= -1; }
                    if (n.x > width) { n.x = width; n.vx *= -1; }
                    if (n.y < 0) { n.y = 0; n.vy *= -1; }
                    if (n.y > height) { n.y = height; n.vy *= -1; }
                }
            }

            // Draw connections with distance check
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < MAX_DIST * MAX_DIST) {
                        const dist = Math.sqrt(distSq);
                        const alpha = (1 - dist / MAX_DIST) * 0.35;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }

                // Connect to mouse if nearby
                if (mouseRef.current.active) {
                    const dxm = a.x - mouseRef.current.x;
                    const dym = a.y - mouseRef.current.y;
                    const distSqMouse = dxm * dxm + dym * dym;
                    if (distSqMouse < MOUSE_RADIUS * MOUSE_RADIUS) {
                        const distM = Math.sqrt(distSqMouse);
                        const alphaM = (1 - distM / MOUSE_RADIUS) * 0.45;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                        ctx.strokeStyle = `rgba(255, 0, 127, ${alphaM})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const pulse = 1 + Math.sin(time + n.pulseOffset) * 0.3;
                const r = n.radius * pulse;

                ctx.beginPath();
                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 243, 255, ${n.baseAlpha})`;
                ctx.fill();

                // Core glow
                if (i % 5 === 0) {
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r * 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(0, 243, 255, 0.08)';
                    ctx.fill();
                }
            }

            if (!prefersReducedMotion) {
                animationFrameId = requestAnimationFrame(render);
            }
        };

        const startAnimation = () => {
            if (!isRunning) {
                isRunning = true;
                if (!animationFrameId && !prefersReducedMotion) {
                    animationFrameId = requestAnimationFrame(render);
                }
            }
        };

        const stopAnimation = () => {
            isRunning = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };

        // Auto-pause when tab is hidden
        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAnimation();
            } else {
                startAnimation();
            }
        };

        // Auto-pause when canvas is off-screen
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                startAnimation();
            } else {
                stopAnimation();
            }
        }, { threshold: 0.05 });

        observer.observe(canvas);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            if (prefersReducedMotion) render();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.active = true;
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        render();

        return () => {
            stopAnimation();
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed inset-0 z-0 pointer-events-none opacity-40 will-change-transform"
        />
    );
};
