import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
    MdSportsEsports, 
    MdSensors, 
    MdVolumeUp, 
    MdVolumeOff, 
    MdPalette, 
    MdClose, 
    MdOpenInFull, 
    MdHelpOutline,
    MdDescription
} from 'react-icons/md';
import { EXPERIENCES, ABOUT, PROJECTS } from '../data/portfolio';

// Web Audio API Sound Synthesizer (Zero asset dependencies)
class SoundFX {
    private ctx: AudioContext | null = null;
    public enabled: boolean = true;

    private init() {
        if (!this.ctx && typeof window !== 'undefined') {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            this.ctx = new AudioCtx();
        }
    }

    playLaser() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    }

    playClick() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    }

    playHeal() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
    }
}

const sfx = new SoundFX();

// Theme definitions
type ThemeType = 'cyber' | 'matrix' | 'solar' | 'void';

interface ThemeConfig {
    name: string;
    primaryHex: number;
    accentHex: number;
    bgHex: number;
    textColor: string;
}

const THEMES: Record<ThemeType, ThemeConfig> = {
    cyber: {
        name: 'Cyber Neon',
        primaryHex: 0x00f3ff,
        accentHex: 0xff007f,
        bgHex: 0x07090e,
        textColor: '#00f3ff'
    },
    matrix: {
        name: 'Matrix CRT',
        primaryHex: 0x00ff66,
        accentHex: 0x33ff00,
        bgHex: 0x030804,
        textColor: '#00ff66'
    },
    solar: {
        name: 'Solar Flare',
        primaryHex: 0xffaa00,
        accentHex: 0xff3300,
        bgHex: 0x0c0603,
        textColor: '#ffaa00'
    },
    void: {
        name: 'Deep Ice',
        primaryHex: 0x60a5fa,
        accentHex: 0xa78bfa,
        bgHex: 0x05070f,
        textColor: '#60a5fa'
    }
};

export const PlayableUniverse: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [theme, setTheme] = useState<ThemeType>('cyber');
    const [soundOn, setSoundOn] = useState(true);
    const [activeIsland, setActiveIsland] = useState<any | null>(null);
    const [score, setScore] = useState(0);
    const [chaosActive, setChaosActive] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);

    // Refs to pass to Three.js loop
    const themeRef = useRef(THEMES[theme]);
    themeRef.current = THEMES[theme];

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        // 1. Scene, Camera, Renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(themeRef.current.bgHex);
        scene.fog = new THREE.FogExp2(themeRef.current.bgHex, 0.018);

        const camera = new THREE.PerspectiveCamera(
            60,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 15, 35);

        const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 2. Starfield & Particles (Depth background)
        const starsCount = 1200;
        const starGeo = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount * 3; i += 3) {
            starPositions[i] = (Math.random() - 0.5) * 200;
            starPositions[i + 1] = (Math.random() - 0.5) * 200;
            starPositions[i + 2] = (Math.random() - 0.5) * 200;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, transparent: true, opacity: 0.5 });
        const starField = new THREE.Points(starGeo, starMat);
        scene.add(starField);

        // 3. Central Core: Vivek's Command Hub
        const coreGeo = new THREE.IcosahedronGeometry(4.5, 1);
        const coreMat = new THREE.MeshBasicMaterial({
            color: themeRef.current.primaryHex,
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        scene.add(coreMesh);

        // 4. Interactive Islands (Career Milestones & Pillars)
        interface IslandObject {
            mesh: THREE.Mesh;
            data: any;
            type: 'identity' | 'experience' | 'skills' | 'projects';
            basePos: THREE.Vector3;
            orbitSpeed: number;
            orbitAngle: number;
            orbitRadius: number;
        }

        const islandsData = [
            {
                type: 'identity',
                title: '01_IDENTITY // VIVEK KUSHWAH',
                subtitle: 'Senior Platform Architect · MANIT Bhopal',
                content: ABOUT.description,
                badge: 'SLO 99.99%',
                details: ABOUT.stats
            },
            {
                type: 'experience',
                title: '02_NYMCARD // AGENTIC AI & K8S',
                subtitle: 'Abu Dhabi (Remote) · 2026 - Present',
                content: EXPERIENCES[0].achievements.join(' • '),
                badge: '40% RCA GAIN',
                tech: EXPERIENCES[0].technologies
            },
            {
                type: 'experience',
                title: '03_ZEBPAY // 2T+ INGEST & FINOPS',
                subtitle: 'New Delhi · May 2024 - Dec 2025',
                content: EXPERIENCES[1].achievements.join(' • '),
                badge: '40% CLOUD SAVINGS',
                tech: EXPERIENCES[1].technologies
            },
            {
                type: 'experience',
                title: '04_RIZZLE & VIVVIX // GITOPS & OBSERVABILITY',
                subtitle: 'Production Kubernetes & eBPF',
                content: EXPERIENCES[2].achievements.join(' • '),
                badge: 'POWER PERFORMER',
                tech: EXPERIENCES[2].technologies
            },
            {
                type: 'projects',
                title: '05_PLATFORM DEPLOYMENTS',
                subtitle: 'Autonomous Systems & Edge Controller',
                content: PROJECTS.map(p => `${p.title}: ${p.description}`).join(' • '),
                badge: 'SELF-HEALING',
                tech: ['Kubernetes', 'LLM Agents', 'Prometheus', 'Flux CD']
            }
        ];

        const islandObjects: IslandObject[] = [];
        const islandGeo = new THREE.DodecahedronGeometry(1.6);

        islandsData.forEach((data, index) => {
            const angle = (index / islandsData.length) * Math.PI * 2;
            const radius = 16 + (index % 2) * 5;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (index % 2 === 0 ? 2 : -2) + (Math.random() - 0.5) * 3;

            const isCurrent = index === 1;
            const mat = new THREE.MeshBasicMaterial({
                color: isCurrent ? themeRef.current.accentHex : themeRef.current.primaryHex,
                wireframe: true
            });
            const mesh = new THREE.Mesh(islandGeo, mat);
            mesh.position.set(x, y, z);
            scene.add(mesh);

            islandObjects.push({
                mesh,
                data,
                type: data.type as any,
                basePos: new THREE.Vector3(x, y, z),
                orbitSpeed: 0.002 * (index % 2 === 0 ? 1 : -1),
                orbitAngle: angle,
                orbitRadius: radius
            });
        });

        // 5. Connective Cyber Ring
        const ringGeo = new THREE.RingGeometry(15.8, 16.2, 64);
        const ringMat = new THREE.MeshBasicMaterial({
            color: themeRef.current.primaryHex,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.15
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        scene.add(ringMesh);

        // 6. Interactive Lasers / Data Packets (Spacebar / Click to Shoot)
        interface Projectile {
            mesh: THREE.Mesh;
            vel: THREE.Vector3;
            alive: number;
        }
        const projectiles: Projectile[] = [];
        const projectileGeo = new THREE.SphereGeometry(0.25, 8, 8);

        const shootLaser = (targetPos?: THREE.Vector3) => {
            sfx.playLaser();
            const projMat = new THREE.MeshBasicMaterial({ color: themeRef.current.accentHex });
            const pMesh = new THREE.Mesh(projectileGeo, projMat);
            pMesh.position.copy(camera.position);

            const dir = targetPos 
                ? new THREE.Vector3().subVectors(targetPos, camera.position).normalize()
                : new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).normalize();

            scene.add(pMesh);
            projectiles.push({
                mesh: pMesh,
                vel: dir.multiplyScalar(1.2),
                alive: 0
            });
        };

        // 7. Raycasting for Island Clicks
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handlePointerClick = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(islandObjects.map(o => o.mesh));

            if (intersects.length > 0) {
                const hit = islandObjects.find(o => o.mesh === intersects[0].object);
                if (hit) {
                    sfx.playClick();
                    setActiveIsland(hit.data);
                    shootLaser(hit.mesh.position);
                    setScore(prev => prev + 100);
                }
            } else {
                // Shoot a laser packet into space
                shootLaser();
                setScore(prev => prev + 10);
            }
        };

        // 8. Interactive Free Drag Camera Rotation
        let isMouseDown = false;
        let lastMouse = { x: 0, y: 0 };
        const cameraTarget = new THREE.Vector3(0, 0, 0);
        let spherical = { radius: 36, theta: 0, phi: Math.PI / 3 };

        const handleMouseDown = (e: MouseEvent) => {
            if (e.target !== renderer.domElement) return;
            isMouseDown = true;
            lastMouse = { x: e.clientX, y: e.clientY };
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMouseDown) return;
            const dx = e.clientX - lastMouse.x;
            const dy = e.clientY - lastMouse.y;
            spherical.theta -= dx * 0.005;
            spherical.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, spherical.phi - dy * 0.005));
            lastMouse = { x: e.clientX, y: e.clientY };
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        // Keyboard Controls (WASD / Space)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                shootLaser();
                setScore(prev => prev + 10);
            }
            if (e.key === 'a' || e.key === 'ArrowLeft') spherical.theta -= 0.05;
            if (e.key === 'd' || e.key === 'ArrowRight') spherical.theta += 0.05;
            if (e.key === 'w' || e.key === 'ArrowUp') spherical.radius = Math.max(12, spherical.radius - 2);
            if (e.key === 's' || e.key === 'ArrowDown') spherical.radius = Math.min(60, spherical.radius + 2);
        };

        container.addEventListener('click', handlePointerClick);
        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('keydown', handleKeyDown);

        // 9. Main Physics & Render Loop
        let animId: number;
        let clock = new THREE.Clock();

        const animate = () => {
            const delta = clock.getDelta();

            // Camera spherical position update
            camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
            camera.position.y = spherical.radius * Math.cos(spherical.phi);
            camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
            camera.lookAt(cameraTarget);

            // Core idle rotation
            coreMesh.rotation.y += 0.003;
            coreMesh.rotation.x += 0.002;
            starField.rotation.y += 0.0003;

            // Island orbital physics
            islandObjects.forEach((island) => {
                island.orbitAngle += island.orbitSpeed;
                island.mesh.position.x = Math.cos(island.orbitAngle) * island.orbitRadius;
                island.mesh.position.z = Math.sin(island.orbitAngle) * island.orbitRadius;
                island.mesh.rotation.y += 0.01;
                island.mesh.rotation.x += 0.005;
            });

            // Projectiles update
            for (let i = projectiles.length - 1; i >= 0; i--) {
                const p = projectiles[i];
                p.mesh.position.add(p.vel);
                p.alive += delta;
                if (p.alive > 3) {
                    scene.remove(p.mesh);
                    projectiles.splice(i, 1);
                }
            }

            renderer.render(scene, camera);
            animId = requestAnimationFrame(animate);
        };

        animate();

        // 10. Resize
        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animId);
            container.removeEventListener('click', handlePointerClick);
            container.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    // Toggle sound
    const toggleSound = () => {
        sfx.enabled = !soundOn;
        setSoundOn(!soundOn);
        if (!soundOn) sfx.playClick();
    };

    return (
        <div className="relative w-full h-screen bg-[#07090e] overflow-hidden select-none font-mono">
            {/* Top Playable Game HUD */}
            <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
                {/* Left: Player SRE Score & Status */}
                <div className="flex items-center gap-4 bg-black/60 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md pointer-events-auto shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    <span className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                        <MdSportsEsports className="text-lg text-[#00f3ff]" />
                        <span>SRE SIMULATOR // TELEMETRY TELEPORT</span>
                    </span>
                    <span className="text-gray-500">|</span>
                    <span className="text-xs text-amber-400 font-bold">
                        METRICS LOGGED: {score} PTS
                    </span>
                </div>

                {/* Right: Controls & Themes */}
                <div className="flex items-center gap-2 pointer-events-auto">
                    {/* Theme Switcher */}
                    <div className="flex items-center gap-1 bg-black/60 border border-white/10 p-1 rounded-xl backdrop-blur-md">
                        {(['cyber', 'matrix', 'solar', 'void'] as ThemeType[]).map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTheme(t);
                                    sfx.playClick();
                                }}
                                className={`px-2.5 py-1 rounded-lg text-[10px] uppercase font-bold transition-all ${
                                    theme === t
                                        ? 'bg-[#00f3ff] text-black shadow-[0_0_10px_#00f3ff]'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* Sound Toggle */}
                    <button
                        onClick={toggleSound}
                        title={soundOn ? 'Sound FX On' : 'Sound FX Muted'}
                        className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-gray-300 hover:text-white hover:border-[#00f3ff]/40 transition-colors backdrop-blur-md"
                    >
                        {soundOn ? <MdVolumeUp className="text-base text-[#00f3ff]" /> : <MdVolumeOff className="text-base text-gray-500" />}
                    </button>

                    {/* Help Toggle */}
                    <button
                        onClick={() => setHelpOpen(true)}
                        className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-gray-300 hover:text-white hover:border-[#00f3ff]/40 transition-colors backdrop-blur-md"
                    >
                        <MdHelpOutline className="text-base" />
                    </button>
                </div>
            </div>

            {/* 3D WebGL Scene Mount */}
            <div ref={mountRef} className="w-full h-full cursor-crosshair" />

            {/* Bottom Playable Controls Hint */}
            <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between text-xs text-gray-400 pointer-events-none">
                <div className="bg-black/60 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md pointer-events-auto flex items-center gap-3">
                    <span className="text-[#00f3ff] font-bold">CONTROLS:</span>
                    <span>DRAG to Orbit 360°</span>
                    <span className="text-gray-600">·</span>
                    <span>CLICK/SPACE to Shoot OTel Packets</span>
                    <span className="text-gray-600">·</span>
                    <span>CLICK ORBS to Inspect Career Roles</span>
                </div>

                <div className="bg-black/60 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md pointer-events-auto flex items-center gap-3">
                    <a
                        href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                        target="_blank"
                        className="text-[#00f3ff] hover:text-white flex items-center gap-1 font-semibold"
                    >
                        <MdDescription />
                        <span>Download PDF Resume</span>
                    </a>
                </div>
            </div>

            {/* Island Information Drawer Modal */}
            {activeIsland && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="bg-[#0b0e14] border border-[#00f3ff]/50 rounded-2xl p-6 sm:p-8 max-w-xl w-full relative shadow-[0_0_50px_rgba(0,243,255,0.25)] text-left">
                        <button
                            onClick={() => setActiveIsland(null)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
                        >
                            <MdClose className="text-2xl" />
                        </button>

                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/30">
                                {activeIsland.badge}
                            </span>
                            <span className="text-xs text-gray-400">{activeIsland.subtitle}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-4">
                            {activeIsland.title}
                        </h2>

                        <div className="text-sm text-gray-300 leading-relaxed font-sans font-light mb-6">
                            {activeIsland.content}
                        </div>

                        {activeIsland.details && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                                {activeIsland.details.map((s: any) => (
                                    <div key={s.label} className="bg-white/5 border border-white/5 rounded-lg p-2.5 text-center">
                                        <div className="text-lg font-bold text-[#00f3ff]">{s.value}</div>
                                        <div className="text-[10px] text-gray-400">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeIsland.tech && (
                            <div className="mb-6">
                                <div className="text-xs text-gray-400 mb-2 font-mono">CORE TECHNOLOGIES:</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {activeIsland.tech.map((t: string) => (
                                        <span key={t} className="text-xs px-2.5 py-1 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/20 text-white">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            onClick={() => setActiveIsland(null)}
                            className="w-full py-3 rounded-xl bg-[#00f3ff] text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Return to Playable SRE Cockpit
                        </button>
                    </div>
                </div>
            )}

            {/* Help / Instructions Modal */}
            {helpOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="bg-[#0b0e14] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full relative text-left">
                        <button
                            onClick={() => setHelpOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white"
                        >
                            <MdClose className="text-2xl" />
                        </button>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <MdSportsEsports className="text-[#00f3ff]" />
                            <span>Playable Cockpit Guide</span>
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed font-sans mb-4">
                            You are exploring Vivek Kushwah's SRE &amp; Platform architecture in an interactive 3D universe.
                        </p>
                        <ul className="text-xs space-y-2 text-gray-300 font-mono mb-6">
                            <li>• <strong>Click &amp; Drag:</strong> Orbit the 3D camera in 360° space.</li>
                            <li>• <strong>Left Click / Space:</strong> Fire OTel telemetry packets into clusters.</li>
                            <li>• <strong>Click Floating Orbs:</strong> Inspect career tenures (Nymcard, Zebpay, Vivvix).</li>
                            <li>• <strong>Theme Bar:</strong> Switch real-time rendering between Cyber, Matrix, Solar, and Ice.</li>
                        </ul>
                        <button
                            onClick={() => setHelpOpen(false)}
                            className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase"
                        >
                            Got It
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
