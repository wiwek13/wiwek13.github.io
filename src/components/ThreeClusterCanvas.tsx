import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MdBolt, MdRestartAlt } from 'react-icons/md';

export const ThreeClusterCanvas: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const chaosTriggerRef = useRef<(() => void) | null>(null);
    const [isChaos, setIsChaos] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Honor reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // 1. Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 24;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 2. Central Core (Master Node / AI Hub)
        const coreGeo = new THREE.IcosahedronGeometry(3.2, 1);
        const coreWireGeo = new THREE.WireframeGeometry(coreGeo);
        const coreMat = new THREE.LineBasicMaterial({
            color: 0x00f3ff,
            transparent: true,
            opacity: 0.45
        });
        const coreMesh = new THREE.LineSegments(coreWireGeo, coreMat);
        scene.add(coreMesh);

        // Inner glowing core sphere
        const innerGeo = new THREE.SphereGeometry(1.6, 16, 16);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0xff007f,
            wireframe: true,
            transparent: true,
            opacity: 0.35
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        scene.add(innerMesh);

        // 3. Satellite Pods with Physics State
        interface Pod {
            mesh: THREE.Mesh;
            originPos: THREE.Vector3;
            pos: THREE.Vector3;
            vel: THREE.Vector3;
            orbitRadius: number;
            orbitSpeed: number;
            orbitAngle: number;
            orbitTilt: number;
            mass: number;
        }

        const POD_COUNT = 45;
        const pods: Pod[] = [];
        const podGeo = new THREE.OctahedronGeometry(0.35);

        for (let i = 0; i < POD_COUNT; i++) {
            const isPink = i % 3 === 0;
            const podMat = new THREE.MeshBasicMaterial({
                color: isPink ? 0xff007f : 0x00f3ff,
                wireframe: true
            });
            const mesh = new THREE.Mesh(podGeo, podMat);

            const orbitRadius = 6 + (i / POD_COUNT) * 11;
            const orbitAngle = (i / POD_COUNT) * Math.PI * 2;
            const orbitSpeed = (0.004 + Math.random() * 0.008) * (i % 2 === 0 ? 1 : -1);
            const orbitTilt = (Math.random() - 0.5) * 1.2;

            const x = Math.cos(orbitAngle) * orbitRadius;
            const y = Math.sin(orbitAngle) * Math.sin(orbitTilt) * orbitRadius;
            const z = Math.sin(orbitAngle) * Math.cos(orbitTilt) * orbitRadius;

            mesh.position.set(x, y, z);
            scene.add(mesh);

            pods.push({
                mesh,
                originPos: new THREE.Vector3(x, y, z),
                pos: new THREE.Vector3(x, y, z),
                vel: new THREE.Vector3(0, 0, 0),
                orbitRadius,
                orbitSpeed,
                orbitAngle,
                orbitTilt,
                mass: 0.8 + Math.random() * 0.4
            });
        }

        // 4. Dynamic Connection Lines
        const lineMaxPoints = POD_COUNT * 2;
        const linePositions = new Float32Array(lineMaxPoints * 3);
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const lineMat = new THREE.LineBasicMaterial({
            color: 0x00f3ff,
            transparent: true,
            opacity: 0.2
        });
        const connectionLines = new THREE.LineSegments(lineGeo, lineMat);
        scene.add(connectionLines);

        // 5. Physics: Chaos & Self-Healing Trigger
        let chaosActive = false;
        let chaosTimer: ReturnType<typeof setTimeout> | null = null;

        const triggerChaos = () => {
            chaosActive = true;
            setIsChaos(true);

            // Apply explosive radial impulse to all pods
            pods.forEach((p) => {
                const impulse = new THREE.Vector3()
                    .subVectors(p.pos, coreMesh.position)
                    .normalize()
                    .multiplyScalar(0.4 + Math.random() * 0.6);
                p.vel.add(impulse);
            });

            if (chaosTimer) clearTimeout(chaosTimer);
            // Self-healing engages after 2 seconds
            chaosTimer = setTimeout(() => {
                chaosActive = false;
                setIsChaos(false);
            }, 2400);
        };

        chaosTriggerRef.current = triggerChaos;

        // 6. Interactive Mouse & Drag Physics
        const mouse = new THREE.Vector2();
        const targetRotation = new THREE.Vector2(0, 0);
        let isDragging = false;
        let prevMousePos = { x: 0, y: 0 };

        const onPointerMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            if (isDragging) {
                const deltaX = e.clientX - prevMousePos.x;
                const deltaY = e.clientY - prevMousePos.y;
                targetRotation.y += deltaX * 0.005;
                targetRotation.x += deltaY * 0.005;
                prevMousePos = { x: e.clientX, y: e.clientY };
            }
        };

        const onPointerDown = (e: MouseEvent) => {
            isDragging = true;
            prevMousePos = { x: e.clientX, y: e.clientY };
        };

        const onPointerUp = () => {
            isDragging = false;
        };

        container.addEventListener('mousemove', onPointerMove);
        container.addEventListener('mousedown', onPointerDown);
        window.addEventListener('mouseup', onPointerUp);

        // 7. Animation Loop with Spring Damping
        let animationFrameId: number;
        let isVisible = true;

        const animate = () => {
            if (!isVisible) return;

            // Fluid spring damping on overall rotation
            scene.rotation.y += (targetRotation.y - scene.rotation.y) * 0.05 + 0.001;
            scene.rotation.x += (targetRotation.x - scene.rotation.x) * 0.05;

            // Core idle breathing
            coreMesh.rotation.y += 0.004;
            coreMesh.rotation.x += 0.002;
            innerMesh.rotation.y -= 0.008;

            let lineIndex = 0;
            const positions = connectionLines.geometry.attributes.position.array as Float32Array;

            // Update Pods with Physics
            pods.forEach((p) => {
                if (!chaosActive) {
                    // Normal orbital motion
                    p.orbitAngle += p.orbitSpeed;
                    const targetX = Math.cos(p.orbitAngle) * p.orbitRadius;
                    const targetY = Math.sin(p.orbitAngle) * Math.sin(p.orbitTilt) * p.orbitRadius;
                    const targetZ = Math.sin(p.orbitAngle) * Math.cos(p.orbitTilt) * p.orbitRadius;

                    const target = new THREE.Vector3(targetX, targetY, targetZ);

                    // Hooke's Law Spring Force toward orbital position
                    const springForce = new THREE.Vector3().subVectors(target, p.pos).multiplyScalar(0.08);
                    p.vel.add(springForce);

                    // Velocity damping (air resistance)
                    p.vel.multiplyScalar(0.92);
                } else {
                    // In chaos state: slight drag
                    p.vel.multiplyScalar(0.97);
                }

                p.pos.add(p.vel);
                p.mesh.position.copy(p.pos);
                p.mesh.rotation.x += 0.02;
                p.mesh.rotation.y += 0.03;

                // Draw lines to core if close
                const distToCore = p.pos.distanceTo(coreMesh.position);
                if (distToCore < 10 && lineIndex < lineMaxPoints * 3 - 6) {
                    positions[lineIndex++] = coreMesh.position.x;
                    positions[lineIndex++] = coreMesh.position.y;
                    positions[lineIndex++] = coreMesh.position.z;

                    positions[lineIndex++] = p.pos.x;
                    positions[lineIndex++] = p.pos.y;
                    positions[lineIndex++] = p.pos.z;
                }
            });

            // Clear remaining line points
            for (let i = lineIndex; i < positions.length; i++) {
                positions[i] = 0;
            }
            connectionLines.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);

            if (!prefersReducedMotion) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        // Resize handler
        const onResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            if (prefersReducedMotion) renderer.render(scene, camera);
        };

        window.addEventListener('resize', onResize);

        // Visibility observer
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible && !prefersReducedMotion) {
                animate();
            }
        }, { threshold: 0.1 });

        observer.observe(container);

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
            window.removeEventListener('resize', onResize);
            container.removeEventListener('mousemove', onPointerMove);
            container.removeEventListener('mousedown', onPointerDown);
            window.removeEventListener('mouseup', onPointerUp);
            if (chaosTimer) clearTimeout(chaosTimer);
            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div className="relative w-full h-[480px] sm:h-[560px] rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.15)] group">
            {/* Top Bar HUD Info */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isChaos ? 'bg-amber-400' : 'bg-[#00f3ff]'} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isChaos ? 'bg-amber-400' : 'bg-[#00f3ff]'}`}></span>
                </span>
                <span className="text-gray-300 font-semibold tracking-wider">
                    {isChaos ? 'CHAOS INJECTED // PODS SCATTERED' : '3D KUBERNETES MESH // DRAG TO ROTATE'}
                </span>
            </div>

            {/* Interactive Chaos Injection Button */}
            <div className="absolute top-4 right-4 z-20">
                <button
                    onClick={() => chaosTriggerRef.current?.()}
                    disabled={isChaos}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                        isChaos
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-wait'
                            : 'bg-[#ff007f]/10 text-[#ff007f] border border-[#ff007f]/40 hover:bg-[#ff007f] hover:text-white shadow-[0_0_15px_rgba(255,0,127,0.3)]'
                    }`}
                >
                    {isChaos ? (
                        <>
                            <MdRestartAlt className="text-sm animate-spin" />
                            <span>Auto Self-Healing (Hooke's Law)...</span>
                        </>
                    ) : (
                        <>
                            <MdBolt className="text-sm" />
                            <span>Inject Chaos Engineering</span>
                        </>
                    )}
                </button>
            </div>

            {/* 3D WebGL Canvas Mount */}
            <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Bottom HUD Hint */}
            <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[11px] font-mono text-gray-500 pointer-events-none">
                <span>SIMULATION: 45 ORBITAL POD NODES · SPRING-DAMPED</span>
                <span>NEWTONIAN KINEMATICS + AUTO-RECONCILIATION</span>
            </div>
        </div>
    );
};
