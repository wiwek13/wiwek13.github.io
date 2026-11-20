import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { 
    MdSportsEsports, 
    MdSensors, 
    MdVolumeUp, 
    MdVolumeOff, 
    MdPalette, 
    MdClose, 
    MdHelpOutline,
    MdDescription,
    MdWarning,
    MdRestartAlt,
    MdFlightTakeoff,
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdOpenInNew,
    MdSchool,
    MdEmojiEvents,
    MdCheckCircle,
    MdSpeed
} from 'react-icons/md';
import { EXPERIENCES, ABOUT, PROJECTS, SKILL_CATEGORIES, CONTACT } from '../data/portfolio';

// ==========================================
// Web Audio API Procedural Sound Synthesizer
// ==========================================
class SoundEngine {
    private ctx: AudioContext | null = null;
    public enabled: boolean = true;
    private droneOsc: OscillatorNode | null = null;
    private droneGain: GainNode | null = null;

    private init() {
        if (!this.ctx && typeof window !== 'undefined') {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    startDrone() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx || this.droneOsc) return;
        try {
            this.droneOsc = this.ctx.createOscillator();
            this.droneGain = this.ctx.createGain();
            this.droneOsc.type = 'sine';
            this.droneOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A hum
            this.droneGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
            this.droneOsc.connect(this.droneGain);
            this.droneGain.connect(this.ctx.destination);
            this.droneOsc.start();
        } catch {
            // Audio policy fallback
        }
    }

    stopDrone() {
        if (this.droneOsc) {
            try {
                this.droneOsc.stop();
                this.droneOsc.disconnect();
            } catch {}
            this.droneOsc = null;
            this.droneGain = null;
        }
    }

    playLaser() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(920, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.12);
    }

    playClick() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1500, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
    }

    playChaos() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.4);
    }

    playHeal() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        // Ascending harmonic triad
        const freqs = [330, 440, 554, 659];
        freqs.forEach((f, i) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.06);
            gain.gain.setValueAtTime(0.05, this.ctx.currentTime + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.06 + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + i * 0.06);
            osc.stop(this.ctx.currentTime + i * 0.06 + 0.3);
        });
    }
}

const sfx = new SoundEngine();

// ==========================================
// Theme Configurations
// ==========================================
type ThemeType = 'cyber' | 'matrix' | 'solar' | 'void';

interface ThemeConfig {
    name: string;
    primaryHex: number;
    accentHex: number;
    bgHex: number;
    primaryCss: string;
    accentCss: string;
    bgCss: string;
    borderCss: string;
}

const THEMES: Record<ThemeType, ThemeConfig> = {
    cyber: {
        name: 'Cyber Neon',
        primaryHex: 0x00f3ff,
        accentHex: 0xff007f,
        bgHex: 0x07090e,
        primaryCss: '#00f3ff',
        accentCss: '#ff007f',
        bgCss: 'bg-[#07090e]',
        borderCss: 'border-[#00f3ff]/30'
    },
    matrix: {
        name: 'Matrix CRT',
        primaryHex: 0x00ff66,
        accentHex: 0x33ff00,
        bgHex: 0x030804,
        primaryCss: '#00ff66',
        accentCss: '#33ff00',
        bgCss: 'bg-[#030804]',
        borderCss: 'border-[#00ff66]/30'
    },
    solar: {
        name: 'Solar Flare',
        primaryHex: 0xffaa00,
        accentHex: 0xff3300,
        bgHex: 0x0c0603,
        primaryCss: '#ffaa00',
        accentCss: '#ff3300',
        bgCss: 'bg-[#0c0603]',
        borderCss: 'border-[#ffaa00]/30'
    },
    void: {
        name: 'Deep Ice',
        primaryHex: 0x60a5fa,
        accentHex: 0xa78bfa,
        bgHex: 0x05070f,
        primaryCss: '#60a5fa',
        accentCss: '#a78bfa',
        bgCss: 'bg-[#05070f]',
        borderCss: 'border-[#60a5fa]/30'
    }
};

export const PlayableUniverse: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [theme, setTheme] = useState<ThemeType>('cyber');
    const [soundOn, setSoundOn] = useState(true);
    const [activeIsland, setActiveIsland] = useState<any | null>(null);
    const [dossierOpen, setDossierOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [chaosActive, setChaosActive] = useState(false);
    const [healthStatus, setHealthStatus] = useState('OPTIMAL · 99.99% SLO');

    // Controls refs to bridge UI buttons with Three.js camera
    const cameraControlsRef = useRef<{
        flyTo: (theta: number, phi: number, radius: number) => void;
        triggerChaos: () => void;
    }>({
        flyTo: () => {},
        triggerChaos: () => {}
    });

    const updateSceneThemeRef = useRef<((cfg: ThemeConfig) => void) | null>(null);

    const themeRef = useRef(THEMES[theme]);
    themeRef.current = THEMES[theme];

    // Real-time dynamic theme synchronizer for WebGL canvas
    useEffect(() => {
        if (updateSceneThemeRef.current) {
            updateSceneThemeRef.current(THEMES[theme]);
        }
    }, [theme]);

    // Trigger Chaos Physics
    const handleChaosExperiment = useCallback(() => {
        setChaosActive(true);
        setHealthStatus('DEGRADED · 82.4% (CHAOS INJECTED)');
        sfx.playChaos();
        setScore(prev => prev + 50);

        if (cameraControlsRef.current.triggerChaos) {
            cameraControlsRef.current.triggerChaos();
        }

        // GitOps Self-Healing Auto Reconciliation
        setTimeout(() => {
            sfx.playHeal();
            setChaosActive(false);
            setHealthStatus('OPTIMAL · 99.99% SLO (RECONCILED)');
        }, 3200);
    }, []);

    // Toggle Sound
    const toggleSound = () => {
        const next = !soundOn;
        sfx.enabled = next;
        setSoundOn(next);
        if (next) {
            sfx.playClick();
            sfx.startDrone();
        } else {
            sfx.stopDrone();
        }
    };

    // ==========================================
    // Three.js Hyperfluid World Setup
    // ==========================================
    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        // 1. Scene & Renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(themeRef.current.bgHex);
        scene.fog = new THREE.FogExp2(themeRef.current.bgHex, 0.016);

        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 14, 38);

        const renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            powerPreference: 'high-performance',
            alpha: false 
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 2. Starfield & Cosmic Dust
        const starsCount = 1400;
        const starGeo = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starsCount * 3);
        const starScales = new Float32Array(starsCount);

        for (let i = 0; i < starsCount; i++) {
            const idx = i * 3;
            starPositions[idx] = (Math.random() - 0.5) * 220;
            starPositions[idx + 1] = (Math.random() - 0.5) * 220;
            starPositions[idx + 2] = (Math.random() - 0.5) * 220;
            starScales[i] = Math.random() * 0.8 + 0.2;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMat = new THREE.PointsMaterial({ 
            color: 0xffffff, 
            size: 0.9, 
            transparent: true, 
            opacity: 0.45 
        });
        const starField = new THREE.Points(starGeo, starMat);
        scene.add(starField);

        // 3. Central SRE Command Hub
        const hubGroup = new THREE.Group();
        scene.add(hubGroup);

        const coreOuterGeo = new THREE.IcosahedronGeometry(4.2, 1);
        const coreOuterMat = new THREE.MeshBasicMaterial({
            color: themeRef.current.primaryHex,
            wireframe: true,
            transparent: true,
            opacity: 0.35
        });
        const coreOuter = new THREE.Mesh(coreOuterGeo, coreOuterMat);
        hubGroup.add(coreOuter);

        const coreInnerGeo = new THREE.SphereGeometry(2.4, 16, 16);
        const coreInnerMat = new THREE.MeshBasicMaterial({
            color: themeRef.current.accentHex,
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });
        const coreInner = new THREE.Mesh(coreInnerGeo, coreInnerMat);
        hubGroup.add(coreInner);

        // Telemetry Orbital Rings
        const ring1Mat = new THREE.MeshBasicMaterial({ color: themeRef.current.primaryHex, side: THREE.DoubleSide, transparent: true, opacity: 0.15 });
        const ring1 = new THREE.Mesh(
            new THREE.RingGeometry(18, 18.2, 64),
            ring1Mat
        );
        ring1.rotation.x = Math.PI / 2;
        scene.add(ring1);

        const ring2Mat = new THREE.MeshBasicMaterial({ color: themeRef.current.accentHex, side: THREE.DoubleSide, transparent: true, opacity: 0.12 });
        const ring2 = new THREE.Mesh(
            new THREE.RingGeometry(26, 26.2, 64),
            ring2Mat
        );
        ring2.rotation.x = Math.PI / 2.3;
        scene.add(ring2);

        // 4. Interactive Sector Orbs (Complete Portfolio Content)
        interface SectorNode {
            mesh: THREE.Mesh;
            data: any;
            orbitAngle: number;
            orbitRadius: number;
            orbitSpeed: number;
            baseY: number;
            initialAngle: number;
        }

        const sectorsData = [
            {
                id: 'origin',
                code: '01',
                title: 'ORIGIN // VIVEK KUSHWAH',
                subtitle: 'Platform Architect & Autonomous SRE',
                category: 'Identity & Philosophy',
                badge: 'SLO: 99.99%',
                description: ABOUT.description,
                approach: ABOUT.approach,
                stats: ABOUT.stats,
                education: ABOUT.education,
                targetPhi: Math.PI / 3,
                targetTheta: 0
            },
            {
                id: 'nymcard',
                code: '02',
                title: 'NYMCARD // AGENTIC AI & K8S',
                subtitle: 'Abu Dhabi, UAE (Remote) · Feb 2026 - Present',
                category: 'Career Tenure',
                badge: '40% RCA SPEEDUP',
                description: 'Senior DevOps / SRE leading autonomous stateful operator infrastructure, multi-cluster GitOps (8+ clusters), and LLM-powered incident root cause analysis.',
                achievements: EXPERIENCES[0].achievements,
                technologies: EXPERIENCES[0].technologies,
                targetPhi: Math.PI / 3.2,
                targetTheta: (Math.PI * 2) * (1 / 7)
            },
            {
                id: 'zebpay',
                code: '03',
                title: 'ZEBPAY // 2T+ FINOPS & API GATEWAY',
                subtitle: 'New Delhi · May 2024 - Dec 2025',
                category: 'Career Tenure',
                badge: 'POWER PERFORMER (2X)',
                description: 'Engineered centralized observability (Prometheus/Thanos/OTel), executed zero-downtime 2T req/mo API Gateway migration, and led FinOps initiative reducing cloud spend by 40%.',
                achievements: EXPERIENCES[1].achievements,
                technologies: EXPERIENCES[1].technologies,
                awards: EXPERIENCES[1].awards,
                targetPhi: Math.PI / 2.8,
                targetTheta: (Math.PI * 2) * (2 / 7)
            },
            {
                id: 'rizzle',
                code: '04',
                title: 'RIZZLE // MEDIA WORKLOAD HPA',
                subtitle: 'Hyderabad · Sep 2023 - Apr 2024',
                category: 'Career Tenure',
                badge: 'ZERO OOM EVICTIONS',
                description: 'Optimized Kubernetes manifests and dynamic HPA scaling for high-throughput media workloads, eliminating OOM evictions and cutting MTTR by 25%.',
                achievements: EXPERIENCES[2].achievements,
                technologies: EXPERIENCES[2].technologies,
                targetPhi: Math.PI / 3.5,
                targetTheta: (Math.PI * 2) * (3 / 7)
            },
            {
                id: 'vivvix',
                code: '05',
                title: 'VIVVIX // MULTI-CLOUD PIPELINES',
                subtitle: 'Pune · Mar 2021 - Aug 2023',
                category: 'Career Tenure',
                badge: 'STAR SPOT AWARD',
                description: 'Bootstrapped Azure AKS clusters, migrated Airflow ETL to 2.x, and re-architected parallel execution pipelines to cut deployment cycles by 50%.',
                achievements: EXPERIENCES[3].achievements,
                technologies: EXPERIENCES[3].technologies,
                awards: EXPERIENCES[3].awards,
                targetPhi: Math.PI / 2.6,
                targetTheta: (Math.PI * 2) * (4 / 7)
            },
            {
                id: 'ai-labs',
                code: '06',
                title: 'AUTONOMOUS RCA & O11Y PLATFORM',
                subtitle: 'Self-Healing Distributed Systems',
                category: 'Production Projects',
                badge: 'AGENTIC AI LABS',
                description: 'LLM agents correlating OpenTelemetry traces and Prometheus metric spikes with GitOps commits to autonomously heal infrastructure drift.',
                projects: PROJECTS,
                technologies: ['Agentic AI', 'Python', 'OpenTelemetry', 'Thanos', 'Kubernetes', 'Flux CD'],
                targetPhi: Math.PI / 3.1,
                targetTheta: (Math.PI * 2) * (5 / 7)
            },
            {
                id: 'skills-mesh',
                code: '07',
                title: 'PLATFORM SKILL MATRIX & ARCHITECTURE',
                subtitle: 'Full Enterprise Tech Constellation',
                category: 'Technical Stack',
                badge: '5 EXPERTISE DOMAINS',
                description: 'Production-tested tooling across Kubernetes orchestration, Observability as Code, DevSecOps pipelines, multi-cloud platforms, and AI automation.',
                skillCategories: SKILL_CATEGORIES,
                targetPhi: Math.PI / 2.9,
                targetTheta: (Math.PI * 2) * (6 / 7)
            }
        ];

        const sectorNodes: SectorNode[] = [];
        const dodecaGeo = new THREE.DodecahedronGeometry(1.6);

        sectorsData.forEach((s, idx) => {
            const angle = (idx / sectorsData.length) * Math.PI * 2;
            const radius = 18 + (idx % 2) * 5;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (idx % 2 === 0 ? 2 : -2);

            const isAccent = idx === 1 || idx === 2;
            const mat = new THREE.MeshBasicMaterial({
                color: isAccent ? themeRef.current.accentHex : themeRef.current.primaryHex,
                wireframe: true
            });
            const mesh = new THREE.Mesh(dodecaGeo, mat);
            mesh.position.set(x, y, z);
            mesh.userData = { sectorId: s.id, index: idx };
            scene.add(mesh);

            sectorNodes.push({
                mesh,
                data: s,
                orbitAngle: angle,
                initialAngle: angle,
                orbitRadius: radius,
                orbitSpeed: 0.0018 * (idx % 2 === 0 ? 1 : -1),
                baseY: y
            });
        });

        // 5. Orbiting Kubernetes Pod Swarm (Physics Pods)
        interface PhysicsPod {
            mesh: THREE.Mesh;
            basePos: THREE.Vector3;
            vel: THREE.Vector3;
            orbitAngle: number;
            orbitRadius: number;
            orbitSpeed: number;
        }

        const pods: PhysicsPod[] = [];
        const podGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const podMat = new THREE.MeshBasicMaterial({
            color: themeRef.current.primaryHex,
            wireframe: true,
            transparent: true,
            opacity: 0.7
        });

        for (let i = 0; i < 50; i++) {
            const podMesh = new THREE.Mesh(podGeo, podMat);
            const radius = 10 + Math.random() * 20;
            const angle = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 12;

            podMesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
            scene.add(podMesh);

            pods.push({
                mesh: podMesh,
                basePos: new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius),
                vel: new THREE.Vector3(0, 0, 0),
                orbitAngle: angle,
                orbitRadius: radius,
                orbitSpeed: (Math.random() * 0.003 + 0.001) * (i % 2 === 0 ? 1 : -1)
            });
        }

        // Chaos Trigger Mechanism
        cameraControlsRef.current.triggerChaos = () => {
            pods.forEach((p) => {
                p.vel.set(
                    (Math.random() - 0.5) * 1.5,
                    (Math.random() - 0.5) * 1.5,
                    (Math.random() - 0.5) * 1.5
                );
            });
        };

        // 6. Interactive Lasers / Data Telemetry Projectiles
        interface Projectile {
            mesh: THREE.Mesh;
            vel: THREE.Vector3;
            alive: number;
        }
        const projectiles: Projectile[] = [];
        const projectileGeo = new THREE.SphereGeometry(0.22, 6, 6);

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
                vel: dir.multiplyScalar(1.4),
                alive: 0
            });
        };

        // 7. Raycasting & Click Interactions
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handlePointerClick = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(sectorNodes.map(n => n.mesh));

            if (intersects.length > 0) {
                const hit = sectorNodes.find(n => n.mesh === intersects[0].object);
                if (hit) {
                    sfx.playClick();
                    setActiveIsland(hit.data);
                    shootLaser(hit.mesh.position);
                    setScore(prev => prev + 100);
                }
            } else {
                shootLaser();
                setScore(prev => prev + 15);
            }
        };

        // 8. Fluid Spherical Camera Controls
        let isMouseDown = false;
        let lastMouse = { x: 0, y: 0 };
        const cameraTarget = new THREE.Vector3(0, 0, 0);
        const spherical = { radius: 38, theta: 0, phi: Math.PI / 3.2 };
        const targetSpherical = { radius: 38, theta: 0, phi: Math.PI / 3.2 };

        const handleMouseDown = (e: MouseEvent) => {
            if (e.target !== renderer.domElement) return;
            isMouseDown = true;
            lastMouse = { x: e.clientX, y: e.clientY };
            sfx.startDrone();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMouseDown) return;
            const dx = e.clientX - lastMouse.x;
            const dy = e.clientY - lastMouse.y;
            targetSpherical.theta -= dx * 0.005;
            targetSpherical.phi = Math.max(0.15, Math.min(Math.PI / 2 - 0.08, targetSpherical.phi - dy * 0.005));
            lastMouse = { x: e.clientX, y: e.clientY };
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        const handleWheel = (e: WheelEvent) => {
            targetSpherical.radius = Math.max(14, Math.min(55, targetSpherical.radius + e.deltaY * 0.03));
        };

        // Touch controls for mobile
        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 1) {
                isMouseDown = true;
                lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                sfx.startDrone();
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isMouseDown || e.touches.length !== 1) return;
            const dx = e.touches[0].clientX - lastMouse.x;
            const dy = e.touches[0].clientY - lastMouse.y;
            targetSpherical.theta -= dx * 0.007;
            targetSpherical.phi = Math.max(0.15, Math.min(Math.PI / 2 - 0.08, targetSpherical.phi - dy * 0.007));
            lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };

        const handleTouchEnd = () => {
            isMouseDown = false;
        };

        // Keyboard Controls
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                shootLaser();
                setScore(prev => prev + 15);
            }
            if (e.key === 'a' || e.key === 'ArrowLeft') targetSpherical.theta -= 0.08;
            if (e.key === 'd' || e.key === 'ArrowRight') targetSpherical.theta += 0.08;
            if (e.key === 'w' || e.key === 'ArrowUp') targetSpherical.radius = Math.max(14, targetSpherical.radius - 3);
            if (e.key === 's' || e.key === 'ArrowDown') targetSpherical.radius = Math.min(55, targetSpherical.radius + 3);
        };

        // FlyTo Bridge
        cameraControlsRef.current.flyTo = (theta: number, phi: number, radius: number) => {
            targetSpherical.theta = theta;
            targetSpherical.phi = phi;
            targetSpherical.radius = radius;
            sfx.playClick();
        };

        container.addEventListener('click', handlePointerClick);
        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('wheel', handleWheel, { passive: true });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('keydown', handleKeyDown);

        // Dynamic Scene Theme Switcher
        updateSceneThemeRef.current = (cfg: ThemeConfig) => {
            scene.background = new THREE.Color(cfg.bgHex);
            if (scene.fog) scene.fog.color = new THREE.Color(cfg.bgHex);
            coreOuterMat.color.setHex(cfg.primaryHex);
            coreInnerMat.color.setHex(cfg.accentHex);
            ring1Mat.color.setHex(cfg.primaryHex);
            ring2Mat.color.setHex(cfg.accentHex);
            podMat.color.setHex(cfg.primaryHex);
            sectorNodes.forEach((node, idx) => {
                const isAccent = idx === 1 || idx === 2;
                (node.mesh.material as THREE.MeshBasicMaterial).color.setHex(
                    isAccent ? cfg.accentHex : cfg.primaryHex
                );
            });
        };

        // 9. Hyperfluid Animation & Physics Render Loop
        let animId: number;
        let lastTime = performance.now();

        const animate = () => {
            const now = performance.now();
            const delta = Math.min((now - lastTime) / 1000, 0.1);
            lastTime = now;

            // Spring Camera Interpolation
            spherical.theta += (targetSpherical.theta - spherical.theta) * 0.06;
            spherical.phi += (targetSpherical.phi - spherical.phi) * 0.06;
            spherical.radius += (targetSpherical.radius - spherical.radius) * 0.06;

            camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
            camera.position.y = spherical.radius * Math.cos(spherical.phi);
            camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
            camera.lookAt(cameraTarget);

            // Core Rotation
            hubGroup.rotation.y += 0.004;
            hubGroup.rotation.x += 0.002;
            starField.rotation.y += 0.0002;
            ring1.rotation.z += 0.001;
            ring2.rotation.z -= 0.0015;

            // Sector Orbs Orbital Physics
            sectorNodes.forEach((node) => {
                node.orbitAngle += node.orbitSpeed;
                node.mesh.position.x = Math.cos(node.orbitAngle) * node.orbitRadius;
                node.mesh.position.z = Math.sin(node.orbitAngle) * node.orbitRadius;
                node.mesh.rotation.y += 0.012;
                node.mesh.rotation.x += 0.006;
            });

            // Pod Swarm Spring Physics
            pods.forEach((p) => {
                p.orbitAngle += p.orbitSpeed;
                const idealX = Math.cos(p.orbitAngle) * p.orbitRadius;
                const idealZ = Math.sin(p.orbitAngle) * p.orbitRadius;
                const idealY = p.basePos.y;

                // Restitution toward ideal orbit
                p.vel.x += (idealX - p.mesh.position.x) * 0.04;
                p.vel.y += (idealY - p.mesh.position.y) * 0.04;
                p.vel.z += (idealZ - p.mesh.position.z) * 0.04;

                // Damping
                p.vel.multiplyScalar(0.92);

                p.mesh.position.add(p.vel);
                p.mesh.rotation.x += 0.02;
                p.mesh.rotation.y += 0.02;
            });

            // Projectiles update
            for (let i = projectiles.length - 1; i >= 0; i--) {
                const p = projectiles[i];
                p.mesh.position.add(p.vel);
                p.alive += delta;
                if (p.alive > 2.8) {
                    scene.remove(p.mesh);
                    projectiles.splice(i, 1);
                }
            }

            renderer.render(scene, camera);
            animId = requestAnimationFrame(animate);
        };

        animate();

        // 10. Window Resize
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
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            renderer.dispose();
            sfx.stopDrone();
        };
    }, []);

    // Active theme colors
    const activeCfg = THEMES[theme];

    return (
        <div className={`relative w-full h-screen ${activeCfg.bgCss} overflow-hidden select-none font-mono text-white transition-colors duration-700`}>
            
            {/* ========================================================= */}
            {/* Top Playable Cockpit HUD */}
            {/* ========================================================= */}
            <header className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                
                {/* Left: Player Identity & Live Health Telemetry */}
                <div className="flex items-center gap-3 sm:gap-4 bg-black/70 border border-white/10 px-3 sm:px-4 py-2 rounded-xl backdrop-blur-md pointer-events-auto shadow-2xl">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <MdSportsEsports className="text-xl" style={{ color: activeCfg.primaryCss }} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold tracking-wider text-white">
                                VIVEK KUSHWAH
                            </span>
                            <span className="text-[10px] text-gray-500 font-mono hidden sm:inline">
                                [PLATFORM ARCHITECT]
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                            <span className={`w-2 h-2 rounded-full ${chaosActive ? 'bg-red-500 animate-ping' : 'bg-emerald-400'}`}></span>
                            <span className={chaosActive ? 'text-red-400 font-bold' : 'text-gray-400'}>
                                {healthStatus}
                            </span>
                        </div>
                    </div>
                    <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
                    <div className="hidden sm:flex flex-col text-right">
                        <span className="text-[9px] text-gray-400 uppercase">Telemetry PTS</span>
                        <span className="text-xs font-bold text-amber-400">{score}</span>
                    </div>
                </div>

                {/* Right: Actions, Theme Switcher & Dossier Mode */}
                <div className="flex items-center gap-2 pointer-events-auto">
                    
                    {/* Chaos Experiment Button */}
                    <button
                        onClick={handleChaosExperiment}
                        disabled={chaosActive}
                        title="Inject Chaos Engineering into 3D Kubernetes Pods"
                        className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all backdrop-blur-md ${
                            chaosActive 
                                ? 'bg-red-500/20 border-red-500 text-red-300' 
                                : 'bg-black/70 border-white/10 text-gray-300 hover:border-red-500/50 hover:text-red-400'
                        }`}
                    >
                        <MdWarning className={chaosActive ? 'animate-bounce text-red-400' : 'text-yellow-400'} />
                        <span className="hidden sm:inline">CHAOS INJECT</span>
                    </button>

                    {/* Full Dossier View Slide-Over Toggle */}
                    <button
                        onClick={() => {
                            setDossierOpen(true);
                            sfx.playClick();
                        }}
                        className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md"
                    >
                        <MdDescription style={{ color: activeCfg.primaryCss }} />
                        <span>DOSSIER VIEW</span>
                    </button>

                    {/* Theme Switcher Bar */}
                    <div className="flex items-center gap-1 bg-black/70 border border-white/10 p-1 rounded-xl backdrop-blur-md">
                        {(['cyber', 'matrix', 'solar', 'void'] as ThemeType[]).map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTheme(t);
                                    sfx.playClick();
                                }}
                                style={{
                                    backgroundColor: theme === t ? activeCfg.primaryCss : 'transparent',
                                    color: theme === t ? '#000' : '#888'
                                }}
                                className="px-2 py-1 rounded-lg text-[10px] uppercase font-bold transition-all hover:text-white"
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* Audio Toggle */}
                    <button
                        onClick={toggleSound}
                        title={soundOn ? 'Mute Procedural Audio' : 'Enable Audio'}
                        className="p-2.5 rounded-xl bg-black/70 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md"
                    >
                        {soundOn ? (
                            <MdVolumeUp className="text-base" style={{ color: activeCfg.primaryCss }} />
                        ) : (
                            <MdVolumeOff className="text-base text-gray-500" />
                        )}
                    </button>

                    {/* Controls Help */}
                    <button
                        onClick={() => setHelpOpen(true)}
                        className="p-2.5 rounded-xl bg-black/70 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md"
                    >
                        <MdHelpOutline className="text-base" />
                    </button>
                </div>
            </header>

            {/* ========================================================= */}
            {/* Main 3D Canvas Mount Point */}
            {/* ========================================================= */}
            <div ref={mountRef} className="w-full h-full cursor-crosshair" />

            {/* ========================================================= */}
            {/* Bottom Quick-Travel Sector Dock */}
            {/* ========================================================= */}
            <footer className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
                
                {/* Sector Fast-Travel Dock */}
                <div className="flex items-center gap-1.5 bg-black/80 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl pointer-events-auto overflow-x-auto max-w-full">
                    <span className="text-[10px] text-gray-500 font-bold px-2 hidden md:inline">
                        TELEPORT:
                    </span>
                    {[
                        { id: 'origin', label: '01 Identity', theta: 0, phi: Math.PI / 3.2, radius: 25 },
                        { id: 'nymcard', label: '02 Nymcard', theta: (Math.PI * 2) * (1 / 7), phi: Math.PI / 3.2, radius: 24 },
                        { id: 'zebpay', label: '03 Zebpay', theta: (Math.PI * 2) * (2 / 7), phi: Math.PI / 2.8, radius: 24 },
                        { id: 'rizzle', label: '04 Rizzle', theta: (Math.PI * 2) * (3 / 7), phi: Math.PI / 3.5, radius: 24 },
                        { id: 'vivvix', label: '05 Vivvix', theta: (Math.PI * 2) * (4 / 7), phi: Math.PI / 2.6, radius: 24 },
                        { id: 'ai-labs', label: '06 AI Labs', theta: (Math.PI * 2) * (5 / 7), phi: Math.PI / 3.1, radius: 25 },
                        { id: 'skills-mesh', label: '07 Stack', theta: (Math.PI * 2) * (6 / 7), phi: Math.PI / 2.9, radius: 25 },
                    ].map((sec) => (
                        <button
                            key={sec.id}
                            onClick={() => cameraControlsRef.current.flyTo(sec.theta, sec.phi, sec.radius)}
                            className="px-2.5 py-1.5 rounded-xl text-[10px] whitespace-nowrap bg-white/5 hover:bg-white/15 border border-white/5 hover:border-white/20 text-gray-300 hover:text-white transition-all flex items-center gap-1"
                        >
                            <MdFlightTakeoff className="text-[10px]" style={{ color: activeCfg.primaryCss }} />
                            <span>{sec.label}</span>
                        </button>
                    ))}
                </div>

                {/* Controls Badge & Direct PDF Download */}
                <div className="flex items-center gap-2 pointer-events-auto">
                    <div className="bg-black/80 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md text-[10px] text-gray-400 hidden lg:flex items-center gap-2">
                        <span>CLICK / SPACE = SHOOT</span>
                        <span className="text-gray-600">·</span>
                        <span>DRAG = 360° ORBIT</span>
                        <span className="text-gray-600">·</span>
                        <span>SCROLL = ZOOM</span>
                    </div>

                    <a
                        href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                        target="_blank"
                        className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md shadow-lg"
                    >
                        <MdDescription style={{ color: activeCfg.primaryCss }} />
                        <span>PDF Resume</span>
                    </a>
                </div>
            </footer>

            {/* ========================================================= */}
            {/* Modal: Interactive Sector Inspector */}
            {/* ========================================================= */}
            {activeIsland && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="bg-[#0b0e14] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-2xl w-full relative shadow-[0_0_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
                        
                        {/* Close button */}
                        <button
                            onClick={() => setActiveIsland(null)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
                        >
                            <MdClose className="text-2xl" />
                        </button>

                        {/* Header Badges */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white">
                                {activeIsland.code} // {activeIsland.category}
                            </span>
                            <span 
                                className="text-[10px] font-bold px-2 py-0.5 rounded border"
                                style={{
                                    backgroundColor: `${activeCfg.primaryCss}15`,
                                    borderColor: `${activeCfg.primaryCss}40`,
                                    color: activeCfg.primaryCss
                                }}
                            >
                                {activeIsland.badge}
                            </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            {activeIsland.title}
                        </h2>
                        <p className="text-xs text-gray-400 mb-6 font-mono">
                            {activeIsland.subtitle}
                        </p>

                        {/* Description */}
                        <div className="text-sm text-gray-300 leading-relaxed font-sans font-light mb-6">
                            {activeIsland.description}
                        </div>

                        {/* If Identity: Approach & Stats */}
                        {activeIsland.approach && (
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 border-l-4" style={{ borderLeftColor: activeCfg.accentCss }}>
                                <p className="text-xs sm:text-sm text-gray-200 italic font-sans font-normal">
                                    "{activeIsland.approach}"
                                </p>
                            </div>
                        )}

                        {activeIsland.stats && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                                {activeIsland.stats.map((s: any) => (
                                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                                        <div className="text-lg font-bold" style={{ color: activeCfg.primaryCss }}>
                                            {s.value}
                                        </div>
                                        <div className="text-[10px] text-gray-400 uppercase font-mono">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Education */}
                        {activeIsland.education && (
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-center gap-3">
                                <MdSchool className="text-2xl" style={{ color: activeCfg.primaryCss }} />
                                <div>
                                    <div className="text-xs font-bold text-white">{activeIsland.education.degree}</div>
                                    <div className="text-[11px] text-gray-400">{activeIsland.education.school} ({activeIsland.education.period})</div>
                                </div>
                            </div>
                        )}

                        {/* Experience Achievements */}
                        {activeIsland.achievements && (
                            <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider font-mono">
                                    Key Production Achievements:
                                </h3>
                                <ul className="space-y-2.5">
                                    {activeIsland.achievements.map((ach: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans leading-relaxed">
                                            <MdCheckCircle className="text-sm shrink-0 mt-0.5" style={{ color: activeCfg.primaryCss }} />
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack Chips */}
                        {activeIsland.technologies && (
                            <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider font-mono">
                                    Orchestration Stack:
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {activeIsland.technologies.map((t: string) => (
                                        <span key={t} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Projects Breakdown */}
                        {activeIsland.projects && (
                            <div className="space-y-4 mb-6">
                                {activeIsland.projects.map((p: any) => (
                                    <div key={p.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <div className="text-sm font-bold text-white mb-1">{p.title}</div>
                                        <div className="text-xs text-gray-300 font-sans mb-3">{p.description}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {p.technologies.map((tech: string) => (
                                                <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-300 font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Skill Matrix Categories */}
                        {activeIsland.skillCategories && (
                            <div className="space-y-4 mb-6">
                                {activeIsland.skillCategories.map((cat: any) => (
                                    <div key={cat.category} className="p-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="text-xs font-bold mb-2 font-mono" style={{ color: activeCfg.primaryCss }}>
                                            {cat.category}
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {cat.skills.map((s: string) => (
                                                <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/5 text-gray-300 font-mono">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button
                            onClick={() => setActiveIsland(null)}
                            style={{ backgroundColor: activeCfg.primaryCss }}
                            className="w-full py-3 rounded-xl text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Return to Playable SRE Universe
                        </button>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* Slide-Over Drawer: Complete Recruiter Dossier */}
            {/* ========================================================= */}
            {dossierOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in">
                    <div className="w-full max-w-2xl bg-[#090c12] border-l border-white/10 h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl">
                        <div>
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <span>SYSTEM DOSSIER</span>
                                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 border border-white/10" style={{ color: activeCfg.primaryCss }}>
                                            FULL SPEC
                                        </span>
                                    </h2>
                                    <p className="text-xs text-gray-400 font-mono mt-1">
                                        Vivek Kushwah · Senior Platform &amp; Observability Architect
                                    </p>
                                </div>
                                <button
                                    onClick={() => setDossierOpen(false)}
                                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                                >
                                    <MdClose className="text-2xl" />
                                </button>
                            </div>

                            {/* Section 1: Executive Summary */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-3" style={{ color: activeCfg.primaryCss }}>
                                    // 01 EXECUTIVE SUMMARY
                                </h3>
                                <p className="text-sm text-gray-300 font-sans leading-relaxed mb-4">
                                    {ABOUT.description}
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {ABOUT.stats.map(s => (
                                        <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                            <div className="text-base font-bold" style={{ color: activeCfg.primaryCss }}>{s.value}</div>
                                            <div className="text-[10px] text-gray-400 font-mono uppercase">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 2: Career History */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-4" style={{ color: activeCfg.primaryCss }}>
                                    // 02 ENTERPRISE TENURES
                                </h3>
                                <div className="space-y-6">
                                    {EXPERIENCES.map((exp) => (
                                        <div key={exp.company} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <div className="text-base font-bold text-white flex items-center gap-2">
                                                    <span>{exp.company}</span>
                                                    <span className="text-xs text-gray-400 font-normal">· {exp.role}</span>
                                                </div>
                                                <span className="text-[11px] font-mono text-gray-400">{exp.period}</span>
                                            </div>
                                            <div className="text-xs text-gray-400 font-mono mb-3">{exp.location}</div>
                                            
                                            {exp.awards && (
                                                <div className="flex gap-2 mb-3">
                                                    {exp.awards.map(a => (
                                                        <span key={a} className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-center gap-1 font-mono">
                                                            <MdEmojiEvents /> {a}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <ul className="space-y-2 mb-4">
                                                {exp.achievements.map((a, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300 font-sans leading-relaxed">
                                                        <span style={{ color: activeCfg.primaryCss }}>▸</span>
                                                        <span>{a}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-1">
                                                {exp.technologies.map(t => (
                                                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 3: Skill Domains */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-4" style={{ color: activeCfg.primaryCss }}>
                                    // 03 TECHNICAL CONSTELLATION
                                </h3>
                                <div className="space-y-3">
                                    {SKILL_CATEGORIES.map(cat => (
                                        <div key={cat.category} className="p-3 rounded-xl bg-white/5 border border-white/10">
                                            <div className="text-xs font-bold text-white mb-2 font-mono">{cat.category}</div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {cat.skills.map(s => (
                                                    <span key={s} className="text-[11px] px-2.5 py-1 rounded bg-black/50 border border-white/10 text-gray-300 font-mono">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 4: Contact & Direct Comms */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-4" style={{ color: activeCfg.primaryCss }}>
                                    // 04 SECURE COMM CHANNELS
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {CONTACT.map(c => (
                                        <a
                                            key={c.name}
                                            href={c.href}
                                            target={c.href.startsWith('http') ? '_blank' : '_self'}
                                            className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-between text-xs"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                {c.name === 'Email' && <MdEmail style={{ color: activeCfg.primaryCss }} />}
                                                {c.name === 'LinkedIn' && <MdOpenInNew style={{ color: activeCfg.primaryCss }} />}
                                                {c.name === 'Location' && <MdLocationOn style={{ color: activeCfg.primaryCss }} />}
                                                {c.name === 'Phone' && <MdPhone style={{ color: activeCfg.primaryCss }} />}
                                                <div>
                                                    <div className="text-[10px] text-gray-400 uppercase font-mono">{c.name}</div>
                                                    <div className="text-white font-medium">{c.value}</div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Drawer Footer Actions */}
                        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                                target="_blank"
                                style={{ backgroundColor: activeCfg.primaryCss }}
                                className="flex-1 py-3 rounded-xl text-black font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center gap-2 hover:bg-white transition-colors"
                            >
                                <MdDescription className="text-base" />
                                <span>Download Full PDF Resume</span>
                            </a>
                            <button
                                onClick={() => setDossierOpen(false)}
                                className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                            >
                                Close Dossier
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* Modal: Controls & Guide */}
            {/* ========================================================= */}
            {helpOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="bg-[#0b0e14] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full relative text-left">
                        <button
                            onClick={() => setHelpOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white"
                        >
                            <MdClose className="text-2xl" />
                        </button>
                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 font-mono">
                            <MdSportsEsports style={{ color: activeCfg.primaryCss }} />
                            <span>Playable Universe Flight Controls</span>
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed font-sans mb-4">
                            You are inside Vivek Kushwah's interactive 3D SRE universe. Every orbit represents a real production milestone and platform tier.
                        </p>
                        <ul className="text-xs space-y-2.5 text-gray-300 font-mono mb-6">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Click &amp; Drag:</strong> Orbit camera 360° across the cluster.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Left Click / Space:</strong> Fire OTel telemetry packets.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Click Any Sector:</strong> Inspect deep career metrics &amp; achievements.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Bottom Dock:</strong> Instant cinematic fly-through camera teleport.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Chaos Inject:</strong> Simulate pod blast &amp; GitOps auto-healing.
                            </li>
                        </ul>
                        <button
                            onClick={() => setHelpOpen(false)}
                            style={{ backgroundColor: activeCfg.primaryCss }}
                            className="w-full py-2.5 rounded-xl text-black text-xs font-bold font-mono uppercase"
                        >
                            Enter Cockpit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
