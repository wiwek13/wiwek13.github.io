import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { 
    MdSailing,
    MdWaves,
    MdVolumeUp, 
    MdVolumeOff, 
    MdClose, 
    MdHelpOutline,
    MdDescription,
    MdWarning,
    MdFlightTakeoff,
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdOpenInNew,
    MdSchool,
    MdEmojiEvents,
    MdCheckCircle,
    MdSpeed,
    MdAnchor,
    MdNavigateNext,
    MdNavigateBefore,
    MdPlayArrow,
    MdPause
} from 'react-icons/md';
import { EXPERIENCES, ABOUT, PROJECTS, SKILL_CATEGORIES, CONTACT } from '../data/portfolio';

// ========================================================
// Nautical Web Audio Synthesizer (Zero asset dependencies)
// ========================================================
class NauticalAudio {
    private ctx: AudioContext | null = null;
    public enabled: boolean = true;
    private ambientGain: GainNode | null = null;
    private ambientOsc: OscillatorNode | null = null;

    private init() {
        if (!this.ctx && typeof window !== 'undefined') {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    startOceanAmbience() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx || this.ambientOsc) return;
        try {
            this.ambientOsc = this.ctx.createOscillator();
            this.ambientGain = this.ctx.createGain();
            this.ambientOsc.type = 'sine';
            this.ambientOsc.frequency.setValueAtTime(45, this.ctx.currentTime); // Low abyssal hum
            this.ambientGain.gain.setValueAtTime(0.018, this.ctx.currentTime);
            this.ambientOsc.connect(this.ambientGain);
            this.ambientGain.connect(this.ctx.destination);
            this.ambientOsc.start();
        } catch {
            // Policy fallback
        }
    }

    stopOceanAmbience() {
        if (this.ambientOsc) {
            try {
                this.ambientOsc.stop();
                this.ambientOsc.disconnect();
            } catch {}
            this.ambientOsc = null;
            this.ambientGain = null;
        }
    }

    playSonar() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.35);
    }

    playShipBell() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        // Two consecutive bell pings
        [0, 0.1].forEach((delay, idx) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(idx === 0 ? 1800 : 2200, this.ctx.currentTime + delay);
            gain.gain.setValueAtTime(0.09, this.ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + delay);
            osc.stop(this.ctx.currentTime + delay + 0.25);
        });
    }

    playFoghorn() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.6);
    }

    playTriumph() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        // Major chord arpeggio: C4, E4, G4, C5
        const notes = [261.63, 329.63, 392.00, 523.25];
        notes.forEach((freq, i) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
            gain.gain.setValueAtTime(0.08, this.ctx.currentTime + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.4);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + i * 0.08);
            osc.stop(this.ctx.currentTime + i * 0.08 + 0.4);
        });
    }
}

const audio = new NauticalAudio();

// ========================================================
// 4 Maritime Ocean Themes
// ========================================================
export type OceanThemeType = 'ocean' | 'golden' | 'bermuda' | 'arctic';

interface OceanThemeConfig {
    name: string;
    primaryHex: number;
    accentHex: number;
    waterHex: number;
    skyHex: number;
    primaryCss: string;
    accentCss: string;
    bgCss: string;
}

const OCEAN_THEMES: Record<OceanThemeType, OceanThemeConfig> = {
    ocean: {
        name: 'Deep Ocean',
        primaryHex: 0x00f0ff,
        accentHex: 0x00ffa3,
        waterHex: 0x02172b,
        skyHex: 0x010814,
        primaryCss: '#00f0ff',
        accentCss: '#00ffa3',
        bgCss: 'bg-[#010814]'
    },
    golden: {
        name: 'Golden Sunset',
        primaryHex: 0xffb800,
        accentHex: 0xff4500,
        waterHex: 0x241108,
        skyHex: 0x140703,
        primaryCss: '#ffb800',
        accentCss: '#ff4500',
        bgCss: 'bg-[#140703]'
    },
    bermuda: {
        name: 'Bermuda Radar',
        primaryHex: 0x00ff66,
        accentHex: 0x33ff00,
        waterHex: 0x022410,
        skyHex: 0x011207,
        primaryCss: '#00ff66',
        accentCss: '#33ff00',
        bgCss: 'bg-[#011207]'
    },
    arctic: {
        name: 'Arctic Voyage',
        primaryHex: 0x70b8ff,
        accentHex: 0xb388ff,
        waterHex: 0x08152e,
        skyHex: 0x040817,
        primaryCss: '#70b8ff',
        accentCss: '#b388ff',
        bgCss: 'bg-[#040817]'
    }
};

// ========================================================
// Maritime Fleet Data (All Portfolio Content)
// ========================================================
export interface VesselStation {
    id: string;
    code: string;
    name: string;
    vesselType: string;
    callsign: string;
    period: string;
    location: string;
    badge: string;
    metric: string;
    description: string;
    approach?: string;
    stats?: { value: string; label: string }[];
    education?: { degree: string; school: string; period: string };
    achievements?: string[];
    technologies?: string[];
    awards?: string[];
    projects?: typeof PROJECTS;
    skillCategories?: typeof SKILL_CATEGORIES;
    angle: number;
    radius: number;
    elevation: number;
}

const FLEET_STATIONS: VesselStation[] = [
    {
        id: 'origin',
        code: '01',
        name: 'Helmsman’s Anchorage',
        vesselType: 'Command Flagship',
        callsign: 'K8S-ORIGIN',
        period: '2016 – Present',
        location: 'Indore, India / Remote',
        badge: 'SLO: 99.99%',
        metric: '99.99% UPTIME',
        description: ABOUT.description,
        approach: ABOUT.approach,
        stats: ABOUT.stats,
        education: ABOUT.education,
        angle: 0,
        radius: 20,
        elevation: 0
    },
    {
        id: 'nymcard',
        code: '02',
        name: 'Nymcard Flagship',
        vesselType: 'Stateful Operator Cruiser',
        callsign: 'NYM-K8S-01',
        period: 'Feb 2026 – Present',
        location: 'Abu Dhabi, UAE (Remote)',
        badge: '40% RCA GAIN',
        metric: 'RCA -40%',
        description: 'Automated lifecycle management for stateful clusters (Kafka, PostgreSQL, RabbitMQ) for 99.99% uptime. Managed GitOps (Flux/Argo CD) across 8+ clusters and architected Agentic AI observability tools.',
        achievements: EXPERIENCES[0].achievements,
        technologies: EXPERIENCES[0].technologies,
        angle: (Math.PI * 2) * (1 / 7),
        radius: 25,
        elevation: 0.5
    },
    {
        id: 'zebpay',
        code: '03',
        name: 'Zebpay Ocean Freighter',
        vesselType: '2T+ Request Cargo Vessel',
        callsign: 'ZEB-FINOPS-2T',
        period: 'May 2024 – Dec 2025',
        location: 'New Delhi, India',
        badge: 'POWER PERFORMER (2X)',
        metric: '40% FINOPS SAVED',
        description: 'Led cloud spend reduction of 40% via FinOps (Opencost) intelligent scaling. Orchestrated zero-downtime migration from Azure APIM to AWS API Gateway for 2T requests/month, and scaled EKS with Karpenter and Cilium.',
        achievements: EXPERIENCES[1].achievements,
        technologies: EXPERIENCES[1].technologies,
        awards: EXPERIENCES[1].awards,
        angle: (Math.PI * 2) * (2 / 7),
        radius: 22,
        elevation: -0.5
    },
    {
        id: 'rizzle',
        code: '04',
        name: 'Rizzle Media Vessel',
        vesselType: 'High-Throughput HPA Cutter',
        callsign: 'RIZ-MEDIA-K8S',
        period: 'Sep 2023 – Apr 2024',
        location: 'Hyderabad, India',
        badge: 'ZERO OOM EVICTIONS',
        metric: 'MTTR -25%',
        description: 'Optimized Kubernetes manifests and dynamic HPA scaling for media processing workloads, improving resource utilization by 20% and eliminating OOM pod evictions while shortening deploy cycles.',
        achievements: EXPERIENCES[2].achievements,
        technologies: EXPERIENCES[2].technologies,
        angle: (Math.PI * 2) * (3 / 7),
        radius: 26,
        elevation: 0.3
    },
    {
        id: 'vivvix',
        code: '05',
        name: 'Vivvix Data Armada',
        vesselType: 'Multi-Cloud ETL Carrier',
        callsign: 'VIV-PIPELINE-50',
        period: 'Mar 2021 – Aug 2023',
        location: 'Pune, India',
        badge: 'STAR SPOT AWARD',
        metric: 'DEPLOYS 50% FASTER',
        description: 'Migrated ETL pipelines from Airflow 1.10 to 2.x, bootstrapped Azure AKS clusters and Terraform multi-cloud IaC, cutting deployment times by 50% via parallel execution in Azure Pipelines.',
        achievements: EXPERIENCES[3].achievements,
        technologies: EXPERIENCES[3].technologies,
        awards: EXPERIENCES[3].awards,
        angle: (Math.PI * 2) * (4 / 7),
        radius: 21,
        elevation: -0.4
    },
    {
        id: 'ai-labs',
        code: '06',
        name: 'Agentic AI Drydock',
        vesselType: 'Autonomous Systems Yard',
        callsign: 'DRYDOCK-AI-O11Y',
        period: 'Active Production R&D',
        location: 'Cloud Distributed',
        badge: 'SELF-HEALING GITOPS',
        metric: 'AUTONOMOUS RCA',
        description: 'AI agents that ingest OpenTelemetry spans and Prometheus metric anomalies, correlate them with GitOps commits, and autonomously generate root cause analysis and healing actions.',
        projects: PROJECTS,
        technologies: ['Agentic AI', 'Python', 'OpenTelemetry', 'Thanos', 'Prometheus', 'Flux CD'],
        angle: (Math.PI * 2) * (5 / 7),
        radius: 27,
        elevation: 0.6
    },
    {
        id: 'skills-mesh',
        code: '07',
        name: 'Harbor Skill Warehouse',
        vesselType: 'Full Platform Arsenal',
        callsign: 'HARBOR-ARSENAL-05',
        period: '5 Core Domains',
        location: 'Multi-Cloud Ecosystem',
        badge: 'ENTERPRISE STACK',
        metric: '5 ARCH DOMAINS',
        description: 'The master container warehouse containing enterprise-grade technologies across Container Orchestration, Observability as Code, DevSecOps, Cloud Infrastructures, and AI Automation.',
        skillCategories: SKILL_CATEGORIES,
        angle: (Math.PI * 2) * (6 / 7),
        radius: 23,
        elevation: -0.3
    }
];

export const PlayableUniverse: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [theme, setTheme] = useState<OceanThemeType>('ocean');
    const [soundOn, setSoundOn] = useState(true);
    const [activeStationIndex, setActiveStationIndex] = useState<number>(0);
    const [manifestOpen, setManifestOpen] = useState(false);
    const [dossierOpen, setDossierOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [stormActive, setStormActive] = useState(false);
    const [cruising, setCruising] = useState(false);
    const [fleetHealth, setFleetHealth] = useState('ALL HARBORS OPERATIONAL · 99.99% SLO');

    // Controls bridge to Three.js loop
    const bridgeRef = useRef<{
        sailTo: (angle: number, radius: number) => void;
        triggerStorm: (storm: boolean) => void;
        updateTheme: (cfg: OceanThemeConfig) => void;
    }>({
        sailTo: () => {},
        triggerStorm: () => {},
        updateTheme: () => {}
    });

    const activeStation = FLEET_STATIONS[activeStationIndex];
    const activeCfg = OCEAN_THEMES[theme];

    // Toggle Sound
    const toggleSound = () => {
        const next = !soundOn;
        audio.enabled = next;
        setSoundOn(next);
        if (next) {
            audio.playSonar();
            audio.startOceanAmbience();
        } else {
            audio.stopOceanAmbience();
        }
    };

    // Sail to a station and IMMEDIATELY display its Cargo Manifest HUD
    const handleSailToStation = useCallback((idx: number) => {
        const s = FLEET_STATIONS[idx];
        setActiveStationIndex(idx);
        setManifestOpen(true);
        audio.playSonar();
        setScore(prev => prev + 50);
        if (bridgeRef.current.sailTo) {
            bridgeRef.current.sailTo(s.angle, s.radius);
        }
    }, []);

    // Storm Surge (Chaos minigame)
    const handleStormSurge = useCallback(() => {
        setStormActive(true);
        setFleetHealth('CRITICAL STORM SURGE · 81.2% SLO (CARGO TOSSING)');
        audio.playFoghorn();
        bridgeRef.current.triggerStorm(true);

        // Auto GitOps reconcile after 4 seconds
        setTimeout(() => {
            audio.playTriumph();
            setStormActive(false);
            setFleetHealth('ALL HARBORS OPERATIONAL · 99.99% SLO (RECONCILED)');
            bridgeRef.current.triggerStorm(false);
            setScore(prev => prev + 150);
        }, 4000);
    }, []);

    // Guided Cruise / Tour Expedition Mode
    useEffect(() => {
        if (!cruising) return;
        const interval = setInterval(() => {
            setActiveStationIndex(prev => {
                const next = (prev + 1) % FLEET_STATIONS.length;
                handleSailToStation(next);
                return next;
            });
        }, 7000);
        return () => clearInterval(interval);
    }, [cruising, handleSailToStation]);

    // ========================================================
    // Three.js Maritime Ocean & Fleet Simulation
    // ========================================================
    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        // 1. Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const initialCfg = OCEAN_THEMES[theme];
        scene.background = new THREE.Color(initialCfg.skyHex);
        scene.fog = new THREE.FogExp2(initialCfg.waterHex, 0.015);

        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 16, 36);

        const renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            powerPreference: 'high-performance' 
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 2. Starry Maritime Night Sky & Bioluminescent Dust
        const starsCount = 1200;
        const starGeo = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount * 3; i += 3) {
            starPositions[i] = (Math.random() - 0.5) * 220;
            starPositions[i + 1] = Math.random() * 80 + 5; // Up in the sky
            starPositions[i + 2] = (Math.random() - 0.5) * 220;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, transparent: true, opacity: 0.5 });
        const starField = new THREE.Points(starGeo, starMat);
        scene.add(starField);

        // 3. Dynamic Hyperfluid Ocean Surface (Gerstner Wave Geometry)
        const oceanWidth = 140;
        const oceanSegments = 64;
        const oceanGeo = new THREE.PlaneGeometry(oceanWidth, oceanWidth, oceanSegments, oceanSegments);
        oceanGeo.rotateX(-Math.PI / 2); // Lay horizontal
        const posAttr = oceanGeo.attributes.position;
        const baseOceanPositions = new Float32Array(posAttr.array);

        const oceanMat = new THREE.MeshBasicMaterial({
            color: initialCfg.waterHex,
            wireframe: true,
            transparent: true,
            opacity: 0.35
        });
        const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
        scene.add(oceanMesh);

        // Helper: Calculate wave height at any point
        let isStorming = false;
        const getWaveY = (x: number, z: number, t: number) => {
            const stormMult = isStorming ? 2.6 : 1.0;
            const stormSpeed = isStorming ? 2.0 : 1.0;
            return stormMult * (
                Math.sin(x * 0.12 + t * 1.6 * stormSpeed) * 0.8 +
                Math.cos(z * 0.14 + t * 1.3 * stormSpeed) * 0.6 +
                Math.sin((x + z) * 0.08 + t * 1.9 * stormSpeed) * 0.35
            );
        };

        // 4. Central Flagship: Kubernetes Helm & Lighthouse
        const helmGroup = new THREE.Group();
        scene.add(helmGroup);

        // The 7-Spoked Ship's Wheel (Kubernetes Logo / Helm)
        const helmWheel = new THREE.Group();
        const rimGeo = new THREE.TorusGeometry(3.6, 0.22, 12, 48);
        const rimMat = new THREE.MeshBasicMaterial({ color: initialCfg.primaryHex, wireframe: true });
        const rimMesh = new THREE.Mesh(rimGeo, rimMat);
        helmWheel.add(rimMesh);

        // 7 Spokes
        for (let i = 0; i < 7; i++) {
            const spokeAngle = (i / 7) * Math.PI * 2;
            const spokeGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.6, 8);
            const spokeMat = new THREE.MeshBasicMaterial({ color: initialCfg.primaryHex, wireframe: true });
            const spokeMesh = new THREE.Mesh(spokeGeo, spokeMat);
            spokeMesh.position.set(Math.cos(spokeAngle) * 1.8, Math.sin(spokeAngle) * 1.8, 0);
            spokeMesh.rotation.z = spokeAngle + Math.PI / 2;
            helmWheel.add(spokeMesh);
        }
        helmWheel.position.y = 4.5;
        helmGroup.add(helmWheel);

        // Glowing Lighthouse Beacon (Sweeping light beams)
        const beaconConeGeo = new THREE.ConeGeometry(5, 28, 16, 1, true);
        beaconConeGeo.rotateX(Math.PI / 2);
        beaconConeGeo.translate(0, 0, 14);
        const beaconMat = new THREE.MeshBasicMaterial({
            color: initialCfg.primaryHex,
            transparent: true,
            opacity: 0.12,
            side: THREE.DoubleSide
        });
        const beaconBeam1 = new THREE.Mesh(beaconConeGeo, beaconMat);
        const beaconBeam2 = new THREE.Mesh(beaconConeGeo, beaconMat);
        beaconBeam2.rotation.y = Math.PI;
        beaconBeam1.position.y = 5.5;
        beaconBeam2.position.y = 5.5;
        helmGroup.add(beaconBeam1);
        helmGroup.add(beaconBeam2);

        // Nautical Compass Ring on water
        const compassRingGeo = new THREE.RingGeometry(18, 18.3, 64);
        const compassRingMat = new THREE.MeshBasicMaterial({ color: initialCfg.primaryHex, side: THREE.DoubleSide, transparent: true, opacity: 0.2 });
        const compassRing = new THREE.Mesh(compassRingGeo, compassRingMat);
        compassRing.rotation.x = Math.PI / 2;
        compassRing.position.y = 0.2;
        scene.add(compassRing);

        // 5. The Fleet: 7 Vessels & Harbors
        interface FleetMeshItem {
            group: THREE.Group;
            mesh: THREE.Mesh;
            beacon: THREE.Mesh;
            station: VesselStation;
            index: number;
        }

        const fleetMeshes: FleetMeshItem[] = [];
        const vesselGeo = new THREE.DodecahedronGeometry(1.8);
        const beaconSphereGeo = new THREE.SphereGeometry(0.4, 8, 8);

        FLEET_STATIONS.forEach((station, idx) => {
            const vGroup = new THREE.Group();
            const x = Math.cos(station.angle) * station.radius;
            const z = Math.sin(station.angle) * station.radius;
            vGroup.position.set(x, 0, z);

            const isCurrent = idx === 0;
            const vMat = new THREE.MeshBasicMaterial({
                color: isCurrent ? initialCfg.accentHex : initialCfg.primaryHex,
                wireframe: true
            });
            const vMesh = new THREE.Mesh(vesselGeo, vMat);
            vGroup.add(vMesh);

            // Floating Light Beacon atop vessel
            const bMat = new THREE.MeshBasicMaterial({ color: isCurrent ? initialCfg.accentHex : initialCfg.primaryHex });
            const bMesh = new THREE.Mesh(beaconSphereGeo, bMat);
            bMesh.position.y = 2.4;
            vGroup.add(bMesh);

            scene.add(vGroup);
            fleetMeshes.push({
                group: vGroup,
                mesh: vMesh,
                beacon: bMesh,
                station,
                index: idx
            });
        });

        // 6. Bobbing Shipping Containers (Docker / ISO Cargo Pods)
        interface CargoPod {
            mesh: THREE.Mesh;
            baseX: number;
            baseZ: number;
            angle: number;
            dist: number;
            bobOffset: number;
            rotSpeed: number;
        }

        const cargoPods: CargoPod[] = [];
        const containerGeo = new THREE.BoxGeometry(1.4, 0.7, 0.7);
        const containerMat = new THREE.MeshBasicMaterial({
            color: initialCfg.primaryHex,
            wireframe: true,
            transparent: true,
            opacity: 0.75
        });

        for (let i = 0; i < 35; i++) {
            const cMesh = new THREE.Mesh(containerGeo, containerMat);
            const dist = 9 + Math.random() * 22;
            const angle = Math.random() * Math.PI * 2;
            const x = Math.cos(angle) * dist;
            const z = Math.sin(angle) * dist;

            cMesh.position.set(x, 0, z);
            cMesh.rotation.y = Math.random() * Math.PI;
            scene.add(cMesh);

            cargoPods.push({
                mesh: cMesh,
                baseX: x,
                baseZ: z,
                angle,
                dist,
                bobOffset: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.02
            });
        }

        // 7. Raycasting & Mouse Salvage Interaction
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handlePointerClick = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            // Check vessel hits first
            const vesselIntersects = raycaster.intersectObjects(fleetMeshes.map(f => f.mesh));
            if (vesselIntersects.length > 0) {
                const hit = fleetMeshes.find(f => f.mesh === vesselIntersects[0].object);
                if (hit) {
                    handleSailToStation(hit.index);
                    return;
                }
            }

            // Check cargo container salvage
            const cargoIntersects = raycaster.intersectObjects(cargoPods.map(c => c.mesh));
            if (cargoIntersects.length > 0) {
                audio.playShipBell();
                setScore(prev => prev + 100);
                const hitCargo = cargoPods.find(c => c.mesh === cargoIntersects[0].object);
                if (hitCargo) {
                    hitCargo.mesh.position.y += 2.5; // Jump upon salvage
                }
            } else {
                audio.playSonar();
                setScore(prev => prev + 10);
            }
        };

        // 8. Fluid Camera Controls (Spherical Orbit & Sailing Navigation)
        let isMouseDown = false;
        let lastMouse = { x: 0, y: 0 };
        const cameraTarget = new THREE.Vector3(0, 2, 0);
        const spherical = { radius: 36, theta: 0, phi: Math.PI / 3.4 };
        const targetSpherical = { radius: 36, theta: 0, phi: Math.PI / 3.4 };

        const handleMouseDown = (e: MouseEvent) => {
            if (e.target !== renderer.domElement) return;
            isMouseDown = true;
            lastMouse = { x: e.clientX, y: e.clientY };
            audio.startOceanAmbience();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMouseDown) return;
            const dx = e.clientX - lastMouse.x;
            const dy = e.clientY - lastMouse.y;
            targetSpherical.theta -= dx * 0.005;
            targetSpherical.phi = Math.max(0.18, Math.min(Math.PI / 2 - 0.05, targetSpherical.phi - dy * 0.005));
            lastMouse = { x: e.clientX, y: e.clientY };
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        const handleWheel = (e: WheelEvent) => {
            targetSpherical.radius = Math.max(14, Math.min(55, targetSpherical.radius + e.deltaY * 0.03));
        };

        // Keyboard Controls
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'a' || e.key === 'ArrowLeft') targetSpherical.theta -= 0.08;
            if (e.key === 'd' || e.key === 'ArrowRight') targetSpherical.theta += 0.08;
            if (e.key === 'w' || e.key === 'ArrowUp') targetSpherical.radius = Math.max(14, targetSpherical.radius - 3);
            if (e.key === 's' || e.key === 'ArrowDown') targetSpherical.radius = Math.min(55, targetSpherical.radius + 3);
        };

        // SailTo Bridge: Instantly aligns camera target & angle toward selected vessel
        bridgeRef.current.sailTo = (angle: number, radius: number) => {
            targetSpherical.theta = angle;
            targetSpherical.phi = Math.PI / 3.2;
            targetSpherical.radius = radius + 9;
        };

        bridgeRef.current.triggerStorm = (storm: boolean) => {
            isStorming = storm;
        };

        // Dynamic Real-time Theme Synchronizer
        bridgeRef.current.updateTheme = (cfg: OceanThemeConfig) => {
            scene.background = new THREE.Color(cfg.skyHex);
            if (scene.fog) scene.fog.color = new THREE.Color(cfg.waterHex);
            oceanMat.color.setHex(cfg.waterHex);
            rimMat.color.setHex(cfg.primaryHex);
            compassRingMat.color.setHex(cfg.primaryHex);
            beaconMat.color.setHex(cfg.primaryHex);
            containerMat.color.setHex(cfg.primaryHex);
            fleetMeshes.forEach((f) => {
                const isSelected = f.index === activeStationIndex;
                (f.mesh.material as THREE.MeshBasicMaterial).color.setHex(
                    isSelected ? cfg.accentHex : cfg.primaryHex
                );
                (f.beacon.material as THREE.MeshBasicMaterial).color.setHex(
                    isSelected ? cfg.accentHex : cfg.primaryHex
                );
            });
        };

        container.addEventListener('click', handlePointerClick);
        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('keydown', handleKeyDown);

        // 9. Hyperfluid Ocean Physics & Render Loop
        let animId: number;
        let lastTime = performance.now();
        let totalTime = 0;

        const animate = () => {
            const now = performance.now();
            const delta = Math.min((now - lastTime) / 1000, 0.1);
            lastTime = now;
            totalTime += delta;

            // Camera spring easing
            spherical.theta += (targetSpherical.theta - spherical.theta) * 0.06;
            spherical.phi += (targetSpherical.phi - spherical.phi) * 0.06;
            spherical.radius += (targetSpherical.radius - spherical.radius) * 0.06;

            camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
            camera.position.y = spherical.radius * Math.cos(spherical.phi);
            camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
            camera.lookAt(cameraTarget);

            // Animate Ocean Waves via dynamic vertex displacement
            const pos = oceanGeo.attributes.position;
            const arr = pos.array as Float32Array;
            for (let i = 0; i < arr.length; i += 3) {
                const bx = baseOceanPositions[i];
                const bz = baseOceanPositions[i + 2];
                arr[i + 1] = getWaveY(bx, bz, totalTime);
            }
            pos.needsUpdate = true;

            // Central Helm & Lighthouse rotation
            helmWheel.rotation.z += 0.008;
            beaconBeam1.rotation.y += 0.015;
            beaconBeam2.rotation.y += 0.015;
            compassRing.rotation.z += 0.002;

            // Fleet Vessel Buoyancy & Orbital Sway
            fleetMeshes.forEach((f) => {
                const waveY = getWaveY(f.group.position.x, f.group.position.z, totalTime);
                f.group.position.y = waveY + f.station.elevation;
                f.mesh.rotation.y += 0.01;
                f.mesh.rotation.x = Math.sin(totalTime * 2 + f.index) * 0.08;
                f.mesh.rotation.z = Math.cos(totalTime * 2 + f.index) * 0.08;
            });

            // Cargo Containers Buoyancy & Drift
            cargoPods.forEach((c) => {
                c.angle += 0.0015;
                c.mesh.position.x = Math.cos(c.angle) * c.dist;
                c.mesh.position.z = Math.sin(c.angle) * c.dist;
                c.mesh.position.y = getWaveY(c.mesh.position.x, c.mesh.position.z, totalTime + c.bobOffset);
                c.mesh.rotation.y += c.rotSpeed;
                c.mesh.rotation.x = Math.sin(totalTime * 3) * 0.06;
            });

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
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            renderer.dispose();
            audio.stopOceanAmbience();
        };
    }, [handleSailToStation, activeStationIndex, theme]);

    // Update 3D colors when theme state changes
    useEffect(() => {
        bridgeRef.current.updateTheme(OCEAN_THEMES[theme]);
    }, [theme]);

    return (
        <div className={`relative w-full h-screen ${activeCfg.bgCss} overflow-hidden select-none font-mono text-white transition-colors duration-700`}>
            
            {/* ========================================================= */}
            {/* Top Navigation & Status Bar */}
            {/* ========================================================= */}
            <header className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                
                {/* Left: Helmsman Callout & Live Maritime Health */}
                <div className="flex items-center gap-3 sm:gap-4 bg-black/80 border border-white/10 px-3.5 py-2.5 rounded-2xl backdrop-blur-md pointer-events-auto shadow-2xl">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <MdSailing className="text-2xl" style={{ color: activeCfg.primaryCss }} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold tracking-wider text-white">
                                VIVEK KUSHWAH
                            </span>
                            <span className="text-[10px] text-gray-500 font-mono hidden sm:inline">
                                [PLATFORM HELMSMAN]
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                            <span className={`w-2 h-2 rounded-full ${stormActive ? 'bg-red-500 animate-ping' : 'bg-emerald-400'}`}></span>
                            <span className={stormActive ? 'text-red-400 font-bold' : 'text-gray-400'}>
                                {fleetHealth}
                            </span>
                        </div>
                    </div>
                    <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
                    <div className="hidden sm:flex flex-col text-right">
                        <span className="text-[9px] text-gray-400 uppercase font-mono">Cargo Salvaged</span>
                        <span className="text-xs font-bold text-amber-400">{score} PTS</span>
                    </div>
                </div>

                {/* Right: Cruise, Storm Surge, Themes & Harbor Manifest */}
                <div className="flex items-center gap-2 pointer-events-auto">
                    
                    {/* Guided Fleet Cruise Toggle */}
                    <button
                        onClick={() => {
                            setCruising(!cruising);
                            audio.playSonar();
                        }}
                        title="Automatic guided cruise across all company fleet milestones"
                        className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all backdrop-blur-md ${
                            cruising
                                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                                : 'bg-black/75 border-white/10 text-gray-300 hover:text-white'
                        }`}
                    >
                        {cruising ? <MdPause className="text-cyan-400" /> : <MdPlayArrow className="text-cyan-400" />}
                        <span className="hidden sm:inline">{cruising ? 'PAUSE CRUISE' : 'TOUR FLEET'}</span>
                    </button>

                    {/* Storm Surge (Chaos minigame) */}
                    <button
                        onClick={handleStormSurge}
                        disabled={stormActive}
                        title="Simulate Kubernetes Storm Surge & automated GitOps reconciliation"
                        className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all backdrop-blur-md ${
                            stormActive 
                                ? 'bg-red-500/20 border-red-500 text-red-300' 
                                : 'bg-black/75 border-white/10 text-gray-300 hover:border-red-500/50 hover:text-red-400'
                        }`}
                    >
                        <MdWarning className={stormActive ? 'animate-bounce text-red-400' : 'text-yellow-400'} />
                        <span className="hidden sm:inline">STORM SURGE</span>
                    </button>

                    {/* Harbor Manifest (Complete structured dossier) */}
                    <button
                        onClick={() => {
                            setDossierOpen(true);
                            audio.playSonar();
                        }}
                        className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md"
                    >
                        <MdDescription style={{ color: activeCfg.primaryCss }} />
                        <span className="hidden sm:inline">HARBOR MANIFEST</span>
                    </button>

                    {/* Nautical Theme Switcher */}
                    <div className="flex items-center gap-1 bg-black/75 border border-white/10 p-1 rounded-xl backdrop-blur-md">
                        {(['ocean', 'golden', 'bermuda', 'arctic'] as OceanThemeType[]).map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTheme(t);
                                    audio.playSonar();
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
                        title={soundOn ? 'Mute Ocean Soundscape' : 'Enable Ocean Soundscape'}
                        className="p-2.5 rounded-xl bg-black/75 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md"
                    >
                        {soundOn ? (
                            <MdVolumeUp className="text-base" style={{ color: activeCfg.primaryCss }} />
                        ) : (
                            <MdVolumeOff className="text-base text-gray-500" />
                        )}
                    </button>

                    {/* Flight / Sailing Help */}
                    <button
                        onClick={() => setHelpOpen(true)}
                        className="p-2.5 rounded-xl bg-black/75 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md"
                    >
                        <MdHelpOutline className="text-base" />
                    </button>
                </div>
            </header>

            {/* ========================================================= */}
            {/* 3D WebGL Canvas */}
            {/* ========================================================= */}
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* ========================================================= */}
            {/* Floating Vessel Holographic Manifest Card (Always Visible on Selection!) */}
            {/* ========================================================= */}
            {manifestOpen && activeStation && (
                <div className="absolute top-24 right-4 sm:right-6 z-40 max-w-md w-[calc(100%-2rem)] bg-[#090d16]/95 border rounded-2xl p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.85)] animate-fade-in"
                    style={{ borderColor: `${activeCfg.primaryCss}60` }}
                >
                    {/* Header: Callsign & Close */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white font-mono">
                                {activeStation.code} // {activeStation.vesselType}
                            </span>
                            <span 
                                className="text-[10px] font-bold px-2 py-0.5 rounded border"
                                style={{
                                    backgroundColor: `${activeCfg.primaryCss}15`,
                                    borderColor: `${activeCfg.primaryCss}40`,
                                    color: activeCfg.primaryCss
                                }}
                            >
                                {activeStation.badge}
                            </span>
                        </div>
                        <button
                            onClick={() => setManifestOpen(false)}
                            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
                        >
                            <MdClose className="text-xl" />
                        </button>
                    </div>

                    {/* Vessel Name & Metadata */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                        {activeStation.name}
                    </h3>
                    <div className="text-[11px] text-gray-400 mb-3 font-mono flex items-center justify-between">
                        <span>{activeStation.period}</span>
                        <span>{activeStation.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">
                        {activeStation.description}
                    </p>

                    {/* Stats if Origin */}
                    {activeStation.stats && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                            {activeStation.stats.map(s => (
                                <div key={s.label} className="p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                                    <div className="text-sm font-bold" style={{ color: activeCfg.primaryCss }}>{s.value}</div>
                                    <div className="text-[9px] text-gray-400 font-mono uppercase">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Education if Origin */}
                    {activeStation.education && (
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 mb-4 flex items-center gap-2.5">
                            <MdSchool className="text-xl shrink-0" style={{ color: activeCfg.primaryCss }} />
                            <div>
                                <div className="text-xs font-bold text-white">{activeStation.education.degree}</div>
                                <div className="text-[10px] text-gray-400">{activeStation.education.school} ({activeStation.education.period})</div>
                            </div>
                        </div>
                    )}

                    {/* Key Achievements */}
                    {activeStation.achievements && (
                        <div className="mb-4">
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 font-mono">
                                Vessel Operational Feats:
                            </h4>
                            <ul className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                                {activeStation.achievements.map((a, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[11px] text-gray-300 font-sans leading-relaxed">
                                        <MdCheckCircle className="text-xs shrink-0 mt-0.5" style={{ color: activeCfg.primaryCss }} />
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technology Stack Chips */}
                    {activeStation.technologies && (
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                                {activeStation.technologies.map(t => (
                                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Skill Categories if Warehouse */}
                    {activeStation.skillCategories && (
                        <div className="space-y-2 mb-4 max-h-40 overflow-y-auto pr-1">
                            {activeStation.skillCategories.map(cat => (
                                <div key={cat.category} className="p-2 rounded-lg bg-white/5 border border-white/5">
                                    <div className="text-[10px] font-bold mb-1 font-mono" style={{ color: activeCfg.primaryCss }}>
                                        {cat.category}
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {cat.skills.map(s => (
                                            <span key={s} className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-gray-300 font-mono">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Card Navigation Footer */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                        <button
                            onClick={() => {
                                const prevIdx = (activeStationIndex - 1 + FLEET_STATIONS.length) % FLEET_STATIONS.length;
                                handleSailToStation(prevIdx);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1 transition-colors"
                        >
                            <MdNavigateBefore /> PREV PORT
                        </button>
                        <span className="text-[10px] text-gray-400 font-mono">
                            {activeStationIndex + 1} / {FLEET_STATIONS.length}
                        </span>
                        <button
                            onClick={() => {
                                const nextIdx = (activeStationIndex + 1) % FLEET_STATIONS.length;
                                handleSailToStation(nextIdx);
                            }}
                            style={{ backgroundColor: activeCfg.primaryCss }}
                            className="px-3 py-1.5 rounded-lg text-black text-xs font-bold font-mono flex items-center gap-1 hover:bg-white transition-colors"
                        >
                            NEXT PORT <MdNavigateNext />
                        </button>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* Bottom Nautical Compass & Fleet Teleport Dock */}
            {/* ========================================================= */}
            <footer className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
                
                {/* 8 Fleet Stations Teleport Buttons */}
                <div className="flex items-center gap-1.5 bg-black/85 border border-white/15 p-2 rounded-2xl backdrop-blur-xl pointer-events-auto overflow-x-auto max-w-full shadow-2xl">
                    <span className="text-[10px] text-gray-400 font-bold px-2 hidden lg:flex items-center gap-1 font-mono">
                        <MdAnchor style={{ color: activeCfg.primaryCss }} />
                        <span>PORTS:</span>
                    </span>
                    {FLEET_STATIONS.map((station, idx) => {
                        const isSelected = activeStationIndex === idx;
                        return (
                            <button
                                key={station.id}
                                onClick={() => handleSailToStation(idx)}
                                style={{
                                    borderColor: isSelected ? activeCfg.primaryCss : 'rgba(255,255,255,0.08)',
                                    backgroundColor: isSelected ? `${activeCfg.primaryCss}25` : 'rgba(255,255,255,0.04)',
                                    color: isSelected ? '#fff' : '#aaa'
                                }}
                                className="px-3 py-2 rounded-xl text-xs whitespace-nowrap border font-mono transition-all flex items-center gap-1.5 hover:text-white hover:bg-white/10"
                            >
                                <span className="text-[10px] opacity-60">{station.code}</span>
                                <span>{station.name.split(' ')[0]}</span>
                            </button>
                        );
                    })}
                </div>

                {/* SRE Controls & Resume PDF */}
                <div className="flex items-center gap-2 pointer-events-auto">
                    <div className="bg-black/80 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-md text-[10px] text-gray-400 hidden xl:flex items-center gap-2 font-mono">
                        <span>CLICK CARGO = RESCUE</span>
                        <span className="text-gray-600">·</span>
                        <span>DRAG = 360° STEER</span>
                        <span className="text-gray-600">·</span>
                        <span>SCROLL = ZOOM</span>
                    </div>

                    <a
                        href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md shadow-lg"
                    >
                        <MdDescription style={{ color: activeCfg.primaryCss }} />
                        <span>PDF Resume</span>
                    </a>
                </div>
            </footer>

            {/* ========================================================= */}
            {/* Slide-Out Drawer: Complete Harbor Manifest (Dossier Mode) */}
            {/* ========================================================= */}
            {dossierOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in">
                    <div className="w-full max-w-2xl bg-[#080d16] border-l border-white/10 h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl">
                        <div>
                            {/* Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <span>HARBOR MANIFEST</span>
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

                            {/* Section 1: Executive Overview */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-3" style={{ color: activeCfg.primaryCss }}>
                                    // 01 EXECUTIVE EXPEDITION
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

                            {/* Section 2: Fleet History */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-4" style={{ color: activeCfg.primaryCss }}>
                                    // 02 ENTERPRISE FLEET VOYAGES
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
                                    // 03 PLATFORM SKILL ARSENAL
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

                            {/* Section 4: Direct Comms */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-4" style={{ color: activeCfg.primaryCss }}>
                                    // 04 COASTAL RADIO TRANSMISSIONS
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

                        {/* Footer */}
                        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                                target="_blank"
                                style={{ backgroundColor: activeCfg.primaryCss }}
                                className="flex-1 py-3 rounded-xl text-black font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center gap-2 hover:bg-white transition-colors"
                            >
                                <MdDescription className="text-base" />
                                <span>Download PDF Resume</span>
                            </a>
                            <button
                                onClick={() => setDossierOpen(false)}
                                className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                            >
                                Close Manifest
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* Guide & Controls Modal */}
            {/* ========================================================= */}
            {helpOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="bg-[#080d16] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full relative text-left">
                        <button
                            onClick={() => setHelpOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white"
                        >
                            <MdClose className="text-2xl" />
                        </button>
                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 font-mono">
                            <MdSailing style={{ color: activeCfg.primaryCss }} />
                            <span>Kubernetes High Seas Navigation</span>
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed font-sans mb-4">
                            You are exploring Vivek Kushwah's Cloud-Native Kubernetes ecosystem on the open digital sea. Each vessel represents a career milestone, and floating containers represent deployed workloads.
                        </p>
                        <ul className="text-xs space-y-2.5 text-gray-300 font-mono mb-6">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Ports Dock:</strong> Click any port below to sail right up to that ship and open its manifest card!
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Click Cargo:</strong> Click any floating ISO container to salvage it and log points.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Tour Fleet:</strong> Click [TOUR FLEET] for an automated guided cruise across all tenures.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCfg.primaryCss }}></span>
                                <strong>Storm Surge:</strong> Inject chaos to test how GitOps auto-heals troubled waters.
                            </li>
                        </ul>
                        <button
                            onClick={() => setHelpOpen(false)}
                            style={{ backgroundColor: activeCfg.primaryCss }}
                            className="w-full py-2.5 rounded-xl text-black text-xs font-bold font-mono uppercase"
                        >
                            Take the Helm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
