import React, { useEffect, useRef } from 'react';

export const DevOpsNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            originalVx: number;
            originalVy: number;
            isCore: boolean; // Core nodes form connections
        }

        const particles: Particle[] = [];

        // Core Nodes (Form connections) - Keep reasonably limited for O(N^2) perf
        const CORE_COUNT = Math.min(300, Math.floor(width / 6));

        // Dust Particles (Floating background noise) - MAXIMUM OVERDRIVE
        const DUST_COUNT = 4000;

        const CONNECTION_DISTANCE = 110;
        const MOUSE_DISTANCE = 250;

        // Initialize Core Nodes
        for (let i = 0; i < CORE_COUNT; i++) {
            const vx = (Math.random() - 0.5) * 0.5;
            const vy = (Math.random() - 0.5) * 0.5;
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx, vy, originalVx: vx, originalVy: vy,
                radius: Math.random() * 2 + 1.5,
                isCore: true
            });
        }

        // Initialize Dust
        for (let i = 0; i < DUST_COUNT; i++) {
            const vx = (Math.random() - 0.5) * 0.2; // Slower dust
            const vy = (Math.random() - 0.5) * 0.2;
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx, vy, originalVx: vx, originalVy: vy,
                radius: Math.random() * 1 + 0.5, // Tiny dust
                isCore: false
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const coreNodes = particles.filter(p => p.isCore); // Cache for connection loop

            particles.forEach((p, i) => {
                // Mouse Interaction
                const dxMouse = mouseRef.current.x - p.x;
                const dyMouse = mouseRef.current.y - p.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                let isHighlighted = false;

                if (distMouse < MOUSE_DISTANCE) {
                    // Gentle attraction
                    const force = (MOUSE_DISTANCE - distMouse) / MOUSE_DISTANCE;
                    p.vx += dxMouse * force * 0.002;
                    p.vy += dyMouse * force * 0.002;

                    if (p.isCore && distMouse < 100) isHighlighted = true;
                } else {
                    // Return to original
                    p.vx += (p.originalVx - p.vx) * 0.05;
                    p.vy += (p.originalVy - p.vy) * 0.05;
                }

                // Limit speed
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const MAX_SPEED = distMouse < MOUSE_DISTANCE ? 3 : (p.isCore ? 1.5 : 0.5);
                if (speed > MAX_SPEED) {
                    p.vx = (p.vx / speed) * MAX_SPEED;
                    p.vy = (p.vy / speed) * MAX_SPEED;
                }

                p.x += p.vx;
                p.y += p.vy;

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

                if (p.isCore) {
                    ctx.fillStyle = isHighlighted ? '#ffffff' : '#00f3ff';
                } else {
                    // Dust is fainter
                    ctx.fillStyle = 'rgba(0, 243, 255, 0.3)';
                }

                ctx.fill();
                ctx.closePath();

                // Connections (Only for Core Nodes)
                if (p.isCore) {
                    // Optimization: Only check other core nodes
                    for (let j = 0; j < coreNodes.length; j++) {
                        const other = coreNodes[j];
                        // Don't connect to self or duplicates (simplified check, might redraw some lines but oK)
                        if (p === other) continue;

                        // Simple distance check optimized
                        const dx = p.x - other.x;
                        if (Math.abs(dx) > CONNECTION_DISTANCE) continue; // bounding box check X
                        const dy = p.y - other.y;
                        if (Math.abs(dy) > CONNECTION_DISTANCE) continue; // bounding box check Y

                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < CONNECTION_DISTANCE) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(other.x, other.y);
                            const opacity = 1 - distance / CONNECTION_DISTANCE;
                            ctx.strokeStyle = `rgba(0, 243, 255, ${opacity * 0.25})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }

                    // Mouse Link
                    if (distMouse < MOUSE_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                        const opacity = 1 - distMouse / MOUSE_DISTANCE;
                        ctx.strokeStyle = `rgba(255, 0, 255, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            });

            requestAnimationFrame(draw);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen"
        />
    );
};
