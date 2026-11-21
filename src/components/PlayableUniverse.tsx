import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { 
    MdExplore,
    MdWbSunny,
    MdBrightness3,
    MdWbTwilight,
    MdVolumeUp, 
    MdVolumeOff, 
    MdClose, 
    MdHelpOutline,
    MdDescription,
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdOpenInNew,
    MdSchool,
    MdEmojiEvents,
    MdCheckCircle,
    MdNavigateNext,
    MdNavigateBefore,
    MdPlayArrow,
    MdPause,
    MdMenuBook,
    MdAutoAwesome
} from 'react-icons/md';
import { EXPERIENCES, ABOUT, PROJECTS, SKILL_CATEGORIES, CONTACT } from '../data/portfolio';

// ========================================================
// Procedural Natural Audio Synthesizer (Zero asset loads)
// ========================================================
class CoastalAudio {
    private ctx: AudioContext | null = null;
    public enabled: boolean = true;
    private waveGain: GainNode | null = null;
    private waveSource: AudioBufferSourceNode | null = null;

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
        if (!this.ctx || this.waveSource) return;
        try {
            // Generate procedural pink noise buffer for realistic ocean surf
            const bufferSize = this.ctx.sampleRate * 2;
            const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                b0 = 0.99886 * b0 + white * 0.0555179;
                b1 = 0.99332 * b1 + white * 0.0750759;
                b2 = 0.96900 * b2 + white * 0.1538520;
                b3 = 0.86650 * b3 + white * 0.3104856;
                b4 = 0.55000 * b4 + white * 0.5329522;
                b5 = -0.7616 * b5 - white * 0.0168980;
                output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
                b6 = white * 0.115926;
            }

            this.waveSource = this.ctx.createBufferSource();
            this.waveSource.buffer = noiseBuffer;
            this.waveSource.loop = true;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(380, this.ctx.currentTime);

            this.waveGain = this.ctx.createGain();
            this.waveGain.gain.setValueAtTime(0.06, this.ctx.currentTime);

            this.waveSource.connect(filter);
            filter.connect(this.waveGain);
            this.waveGain.connect(this.ctx.destination);
            this.waveSource.start();
        } catch {
            // Audio policy fallback
        }
    }

    stopOceanAmbience() {
        if (this.waveSource) {
            try {
                this.waveSource.stop();
                this.waveSource.disconnect();
            } catch {}
            this.waveSource = null;
            this.waveGain = null;
        }
    }

    playChime() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        // Warm wooden chime chord
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);
            gain.gain.setValueAtTime(0.06, this.ctx.currentTime + idx * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.05 + 0.5);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.05);
            osc.stop(this.ctx.currentTime + idx * 0.05 + 0.5);
        });
    }

    playPluck() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.2);
    }
}

const audio = new CoastalAudio();

// ========================================================
// Time-of-Day Lighting Configurations
// ========================================================
export type TimeOfDay = 'day' | 'sunset' | 'night';

interface LightingPreset {
    name: string;
    skyColor: number;
    fogColor: number;
    sunColor: number;
    sunIntensity: number;
    ambientColor: number;
    waterColor: number;
    waterOpacity: number;
    accentColor: string;
    badgeBg: string;
}

const LIGHTING_PRESETS: Record<TimeOfDay, LightingPreset> = {
    day: {
        name: 'Coastal Day',
        skyColor: 0xdff3fb,
        fogColor: 0xd6eef9,
        sunColor: 0xfff3db,
        sunIntensity: 1.4,
        ambientColor: 0x90c5dc,
        waterColor: 0x48bfe3,
        waterOpacity: 0.78,
        accentColor: '#0096c7',
        badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    },
    sunset: {
        name: 'Golden Twilight',
        skyColor: 0x3d1c28,
        fogColor: 0x2e1520,
        sunColor: 0xffaa5e,
        sunIntensity: 1.6,
        ambientColor: 0x8a3b47,
        waterColor: 0x9d4edd,
        waterOpacity: 0.82,
        accentColor: '#ffaa5e',
        badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    night: {
        name: 'Bioluminescent Night',
        skyColor: 0x050a14,
        fogColor: 0x07111e,
        sunColor: 0x48cae4,
        sunIntensity: 0.6,
        ambientColor: 0x0e243a,
        waterColor: 0x0077b6,
        waterOpacity: 0.85,
        accentColor: '#00f0ff',
        badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    }
};

// ========================================================
// The 8 Island Landmarks (Vivek's Real Career Architecture)
// ========================================================
export interface IslandLandmark {
    id: string;
    code: string;
    title: string;
    role: string;
    period: string;
    location: string;
    landmarkName: string;
    category: string;
    badge: string;
    metric: string;
    summary: string;
    achievements?: string[];
    technologies?: string[];
    awards?: string[];
    stats?: { value: string; label: string }[];
    education?: { degree: string; school: string; period: string };
    projects?: typeof PROJECTS;
    skillCategories?: typeof SKILL_CATEGORIES;
    coords: [number, number, number]; // [x, y, z] on the island
    cameraTarget: [number, number, number];
    cameraPos: [number, number, number];
}

const LANDMARKS: IslandLandmark[] = [
    {
        id: 'lighthouse',
        code: '01',
        title: 'Vivek Kushwah',
        role: 'Senior Platform & Observability Architect',
        period: '2016 – Present',
        location: 'Indore, India · Remote',
        landmarkName: 'The Observability Lighthouse',
        category: 'Origin & Core Philosophy',
        badge: 'SLO 99.99%',
        metric: '99.99% UPTIME',
        summary: ABOUT.description,
        stats: ABOUT.stats,
        education: ABOUT.education,
        coords: [0, 4.2, -6],
        cameraTarget: [0, 4, -6],
        cameraPos: [0, 8, 8]
    },
    {
        id: 'nymcard',
        code: '02',
        title: 'Nymcard',
        role: 'DevOps Engineer (Stateful Infra & GitOps)',
        period: 'Feb 2026 – Present',
        location: 'Abu Dhabi, UAE (Remote)',
        landmarkName: 'The Container Docks',
        category: 'Production Milestone',
        badge: '40% RCA SPEEDUP',
        metric: 'RCA -40%',
        summary: 'Automated operator-based lifecycle management for stateful services (Kafka, PostgreSQL, RabbitMQ) across 8+ clusters for 99.99% uptime. Architected an Agentic AI Observability Assistant using LLMs to correlate signals, cutting incident resolution time by 40%.',
        achievements: EXPERIENCES[0].achievements,
        technologies: EXPERIENCES[0].technologies,
        coords: [7, 0.8, 3],
        cameraTarget: [7, 1.2, 3],
        cameraPos: [14, 5, 10]
    },
    {
        id: 'zebpay',
        code: '03',
        title: 'Zebpay',
        role: 'DevOps Engineer (FinOps & High-Scale API)',
        period: 'May 2024 – Dec 2025',
        location: 'New Delhi, India',
        landmarkName: 'The High Citadel & Treasury',
        category: 'Production Milestone',
        badge: 'POWER PERFORMER (2X)',
        metric: '40% CLOUD SAVINGS',
        summary: 'Deployed centralized observability (Prometheus, Grafana, Thanos, Loki, OTel) across AWS accounts. Slashed cloud spend by 40% via an Opencost FinOps initiative, orchestrated zero-downtime migration for 2T requests/month from Azure APIM to AWS API Gateway, and scaled EKS with Karpenter and Cilium.',
        achievements: EXPERIENCES[1].achievements,
        technologies: EXPERIENCES[1].technologies,
        awards: EXPERIENCES[1].awards,
        coords: [-6, 3.2, 2],
        cameraTarget: [-6, 3, 2],
        cameraPos: [-12, 7, 9]
    },
    {
        id: 'rizzle',
        code: '04',
        title: 'Rizzle',
        role: 'DevOps Engineer (Media Infrastructure)',
        period: 'Sep 2023 – Apr 2024',
        location: 'Hyderabad, India',
        landmarkName: 'The Transmission Windmill',
        category: 'Production Milestone',
        badge: 'ZERO OOM PODS',
        metric: 'MTTR -25%',
        summary: 'Optimized Kubernetes manifests and dynamic HPA scaling for media workloads, improving resource utilization by 20% and eliminating OOM evictions. Shortened deployment cycles with Argo CD and integrated Slack ops automation.',
        achievements: EXPERIENCES[2].achievements,
        technologies: EXPERIENCES[2].technologies,
        coords: [-5, 2.5, -4],
        cameraTarget: [-5, 2.5, -4],
        cameraPos: [-10, 6, 4]
    },
    {
        id: 'vivvix',
        code: '05',
        title: 'Vivvix (Numerator + Kantar)',
        role: 'DevOps Engineer (Data Pipelines & Multi-Cloud)',
        period: 'Mar 2021 – Aug 2023',
        location: 'Pune, India',
        landmarkName: 'The Shipyard & Forge',
        category: 'Production Milestone',
        badge: 'STAR SPOT AWARD',
        metric: '50% FASTER DEPLOYS',
        summary: 'Led Airflow ETL migration from 1.10 to 2.x, bootstrapped Azure AKS clusters, and standardized multi-cloud Terraform pipelines. Cut deployment times by 50% via parallel caching in Azure Pipelines and reduced Snowflake/Databricks FinOps costs by 40%.',
        achievements: EXPERIENCES[3].achievements,
        technologies: EXPERIENCES[3].technologies,
        awards: EXPERIENCES[3].awards,
        coords: [5, 1.2, -2],
        cameraTarget: [5, 1.5, -2],
        cameraPos: [11, 5, 5]
    },
    {
        id: 'ai-labs',
        code: '06',
        title: 'Agentic AI & Observability Labs',
        role: 'Self-Healing Distributed Systems',
        period: 'Active Systems R&D',
        location: 'Cloud Distributed',
        landmarkName: 'The Alchemist’s Autonomous Lab',
        category: 'Autonomous Projects',
        badge: 'SELF-HEALING GITOPS',
        metric: 'AUTONOMOUS RCA',
        summary: 'Engineered autonomous LLM agents that ingest OpenTelemetry spans and Prometheus metric anomalies, correlate them with GitOps commits, and autonomously generate root cause analysis and healing actions.',
        projects: PROJECTS,
        technologies: ['Agentic AI', 'Python', 'OpenTelemetry', 'Thanos', 'Prometheus', 'Flux CD', 'Kubernetes'],
        coords: [1, 2.8, 4],
        cameraTarget: [1, 2.8, 4],
        cameraPos: [1, 6, 12]
    },
    {
        id: 'skills-mesh',
        code: '07',
        title: 'Platform Tech Arsenal',
        role: 'Production Architecture Stack',
        period: '5 Core Domains',
        location: 'Multi-Cloud Ecosystem',
        landmarkName: 'The Wayfarer’s Guild Hall',
        category: 'Technical Stack',
        badge: '5 EXPERTISE DOMAINS',
        metric: 'ENTERPRISE STACK',
        summary: 'A battle-tested technology foundation across Kubernetes orchestration, Observability as Code, DevSecOps pipelines, multi-cloud platforms, and AI automation.',
        skillCategories: SKILL_CATEGORIES,
        coords: [-1, 2.0, 1],
        cameraTarget: [-1, 2.0, 1],
        cameraPos: [-1, 6, 9]
    },
    {
        id: 'contact',
        code: '08',
        title: 'Direct Transmissions',
        role: 'Secure Communication Channels',
        period: 'Immediate Availability',
        location: 'Indore, MP, India',
        landmarkName: 'The Coastal Telegraph Post',
        category: 'Uplink & Contact',
        badge: 'OPEN FOR ROLES',
        metric: 'DIRECT UPLINK',
        summary: 'Available for Staff/Senior SRE, Platform Engineering, and Autonomous Observability Architect leadership roles globally (remote or relocation).',
        coords: [4, 1.5, 6],
        cameraTarget: [4, 1.5, 6],
        cameraPos: [8, 5, 13]
    }
];

export const PlayableUniverse: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day');
    const [soundOn, setSoundOn] = useState(true);
    const [activeLandmarkIndex, setActiveLandmarkIndex] = useState<number>(0);
    const [fullResumeOpen, setFullResumeOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [tourActive, setTourActive] = useState(false);
    const [collectedCargo, setCollectedCargo] = useState(0);

    // Camera control bridge
    const cameraBridgeRef = useRef<{
        flyTo: (target: [number, number, number], pos: [number, number, number]) => void;
        updateLighting: (preset: LightingPreset) => void;
    }>({
        flyTo: () => {},
        updateLighting: () => {}
    });

    const activeLandmark = LANDMARKS[activeLandmarkIndex];
    const activePreset = LIGHTING_PRESETS[timeOfDay];

    // Toggle Sound
    const toggleSound = () => {
        const next = !soundOn;
        audio.enabled = next;
        setSoundOn(next);
        if (next) {
            audio.playChime();
            audio.startOceanAmbience();
        } else {
            audio.stopOceanAmbience();
        }
    };

    // Fly to Landmark smoothly
    const handleSelectLandmark = useCallback((idx: number) => {
        setActiveLandmarkIndex(idx);
        audio.playPluck();
        const l = LANDMARKS[idx];
        if (cameraBridgeRef.current.flyTo) {
            cameraBridgeRef.current.flyTo(l.cameraTarget, l.cameraPos);
        }
    }, []);

    // Automated Guided Tour mode across the island
    useEffect(() => {
        if (!tourActive) return;
        const interval = setInterval(() => {
            setActiveLandmarkIndex((prev) => {
                const next = (prev + 1) % LANDMARKS.length;
                handleSelectLandmark(next);
                return next;
            });
        }, 8000);
        return () => clearInterval(interval);
    }, [tourActive, handleSelectLandmark]);

    // ========================================================
    // Three.js Handcrafted Low-Poly Island Diorama
    // ========================================================
    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        // 1. Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const initialPreset = LIGHTING_PRESETS[timeOfDay];
        scene.background = new THREE.Color(initialPreset.skyColor);
        scene.fog = new THREE.FogExp2(initialPreset.fogColor, 0.016);

        const camera = new THREE.PerspectiveCamera(
            50,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 10, 24);

        const renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            powerPreference: 'high-performance' 
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // 2. Lights: Warm Directional Sunlight + Ambient Sky Fill
        const hemiLight = new THREE.HemisphereLight(
            initialPreset.skyColor,
            initialPreset.ambientColor,
            0.7
        );
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(initialPreset.sunColor, initialPreset.sunIntensity);
        dirLight.position.set(18, 28, 14);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.bias = -0.0005;
        scene.add(dirLight);

        // 3. Dynamic Water Surface with Soft Foam Ripples
        const waterGeo = new THREE.PlaneGeometry(160, 160, 48, 48);
        waterGeo.rotateX(-Math.PI / 2);
        const waterMat = new THREE.MeshLambertMaterial({
            color: initialPreset.waterColor,
            transparent: true,
            opacity: initialPreset.waterOpacity,
            flatShading: true
        });
        const waterMesh = new THREE.Mesh(waterGeo, waterMat);
        waterMesh.receiveShadow = true;
        scene.add(waterMesh);

        // Foam Shoreline Ring
        const foamGeo = new THREE.RingGeometry(11, 14.5, 32);
        foamGeo.rotateX(-Math.PI / 2);
        const foamMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.28,
            side: THREE.DoubleSide
        });
        const foamMesh = new THREE.Mesh(foamGeo, foamMat);
        foamMesh.position.y = 0.05;
        scene.add(foamMesh);

        // 4. Procedural Low-Poly Island Terrain (Layered Terraces)
        const islandGroup = new THREE.Group();
        scene.add(islandGroup);

        // Sandy Shore Base
        const sandGeo = new THREE.CylinderGeometry(13.5, 15, 1.2, 18);
        const sandMat = new THREE.MeshLambertMaterial({ color: 0xdec699, flatShading: true });
        const sandMesh = new THREE.Mesh(sandGeo, sandMat);
        sandMesh.position.y = 0.4;
        sandMesh.receiveShadow = true;
        sandMesh.castShadow = true;
        islandGroup.add(sandMesh);

        // Main Terraced Grass Plateau
        const grassGeo1 = new THREE.CylinderGeometry(11.5, 13, 1.4, 16);
        const grassMat1 = new THREE.MeshLambertMaterial({ color: 0x588157, flatShading: true });
        const grassMesh1 = new THREE.Mesh(grassGeo1, grassMat1);
        grassMesh1.position.y = 1.4;
        grassMesh1.receiveShadow = true;
        grassMesh1.castShadow = true;
        islandGroup.add(grassMesh1);

        // Elevated Upper Hill
        const grassGeo2 = new THREE.CylinderGeometry(8, 10, 1.6, 14);
        const grassMat2 = new THREE.MeshLambertMaterial({ color: 0x3a5a40, flatShading: true });
        const grassMesh2 = new THREE.Mesh(grassGeo2, grassMat2);
        grassMesh2.position.set(-1, 2.6, -1);
        grassMesh2.receiveShadow = true;
        grassMesh2.castShadow = true;
        islandGroup.add(grassMesh2);

        // High Lighthouse Cliff Outcrop
        const cliffGeo = new THREE.CylinderGeometry(3.5, 4.5, 2.2, 8);
        const cliffMat = new THREE.MeshLambertMaterial({ color: 0x6b705c, flatShading: true });
        const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
        cliffMesh.position.set(0, 3.8, -6);
        cliffMesh.receiveShadow = true;
        cliffMesh.castShadow = true;
        islandGroup.add(cliffMesh);

        // 5. Handcrafted Low-Poly Landmarks
        interface InteractiveNode {
            mesh: THREE.Object3D;
            landmarkIndex: number;
        }
        const interactiveNodes: InteractiveNode[] = [];

        // Landmark 1: The Observability Lighthouse (Cliff Peak)
        const lighthouseGroup = new THREE.Group();
        lighthouseGroup.position.set(0, 4.9, -6);

        // Tower Body
        const towerGeo = new THREE.CylinderGeometry(0.7, 1.1, 4.5, 10);
        const towerMat = new THREE.MeshLambertMaterial({ color: 0xf4f1de, flatShading: true });
        const towerMesh = new THREE.Mesh(towerGeo, towerMat);
        towerMesh.castShadow = true;
        lighthouseGroup.add(towerMesh);

        // Tower Roof & Lantern Room
        const roofGeo = new THREE.ConeGeometry(0.9, 1.4, 8);
        const roofMat = new THREE.MeshLambertMaterial({ color: 0xbc4749, flatShading: true });
        const roofMesh = new THREE.Mesh(roofGeo, roofMat);
        roofMesh.position.y = 2.8;
        lighthouseGroup.add(roofMesh);

        // Rotating Beacon Light Beam
        const beaconConeGeo = new THREE.ConeGeometry(3, 16, 12, 1, true);
        beaconConeGeo.rotateX(Math.PI / 2);
        beaconConeGeo.translate(0, 0, 8);
        const beaconMat = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.22,
            side: THREE.DoubleSide
        });
        const beaconBeam = new THREE.Mesh(beaconConeGeo, beaconMat);
        beaconBeam.position.y = 2.4;
        lighthouseGroup.add(beaconBeam);

        islandGroup.add(lighthouseGroup);
        interactiveNodes.push({ mesh: lighthouseGroup, landmarkIndex: 0 });

        // Landmark 2: Nymcard Container Docks
        const dockGroup = new THREE.Group();
        dockGroup.position.set(7, 0.8, 3);

        // Wooden Pier Planks
        const pierGeo = new THREE.BoxGeometry(4.5, 0.3, 2.5);
        const woodMat = new THREE.MeshLambertMaterial({ color: 0x7f5539, flatShading: true });
        const pierMesh = new THREE.Mesh(pierGeo, woodMat);
        pierMesh.castShadow = true;
        dockGroup.add(pierMesh);

        // Docker / Kubernetes Cargo Containers on Pier
        const crateColors = [0x0077b6, 0x0096c7, 0x023e8a];
        for (let i = 0; i < 4; i++) {
            const crateGeo = new THREE.BoxGeometry(1.2, 0.7, 0.8);
            const crateMat = new THREE.MeshLambertMaterial({ color: crateColors[i % 3], flatShading: true });
            const crateMesh = new THREE.Mesh(crateGeo, crateMat);
            crateMesh.position.set((i % 2) * 1.3 - 0.7, 0.5 + Math.floor(i / 2) * 0.7, (i % 2) * 0.4);
            crateMesh.castShadow = true;
            dockGroup.add(crateMesh);
        }

        // Small Dock Crane
        const cranePoleGeo = new THREE.CylinderGeometry(0.1, 0.1, 2.8, 6);
        const metalMat = new THREE.MeshLambertMaterial({ color: 0xd90429, flatShading: true });
        const cranePole = new THREE.Mesh(cranePoleGeo, metalMat);
        cranePole.position.set(1.6, 1.4, 0.8);
        dockGroup.add(cranePole);

        islandGroup.add(dockGroup);
        interactiveNodes.push({ mesh: dockGroup, landmarkIndex: 1 });

        // Landmark 3: Zebpay High Citadel & Treasury
        const citadelGroup = new THREE.Group();
        citadelGroup.position.set(-6, 3.2, 2);

        // Stone Keep
        const keepGeo = new THREE.BoxGeometry(3.2, 2.8, 3.2);
        const keepMat = new THREE.MeshLambertMaterial({ color: 0xd4a373, flatShading: true });
        const keepMesh = new THREE.Mesh(keepGeo, keepMat);
        keepMesh.castShadow = true;
        citadelGroup.add(keepMesh);

        // 4 Corner Turrets
        for (let tx = -1; tx <= 1; tx += 2) {
            for (let tz = -1; tz <= 1; tz += 2) {
                const turretGeo = new THREE.CylinderGeometry(0.5, 0.5, 3.4, 8);
                const turretMesh = new THREE.Mesh(turretGeo, keepMat);
                turretMesh.position.set(tx * 1.6, 0.3, tz * 1.6);
                turretMesh.castShadow = true;
                citadelGroup.add(turretMesh);

                const turretConeGeo = new THREE.ConeGeometry(0.65, 0.9, 8);
                const turretRoof = new THREE.Mesh(turretConeGeo, roofMat);
                turretRoof.position.set(tx * 1.6, 2.3, tz * 1.6);
                citadelGroup.add(turretRoof);
            }
        }
        islandGroup.add(citadelGroup);
        interactiveNodes.push({ mesh: citadelGroup, landmarkIndex: 2 });

        // Landmark 4: Rizzle Windmill (HPA Media Sails)
        const windmillGroup = new THREE.Group();
        windmillGroup.position.set(-5, 2.8, -4);

        const millGeo = new THREE.CylinderGeometry(0.9, 1.4, 3.2, 8);
        const millMat = new THREE.MeshLambertMaterial({ color: 0xfaedcd, flatShading: true });
        const millMesh = new THREE.Mesh(millGeo, millMat);
        millMesh.castShadow = true;
        windmillGroup.add(millMesh);

        // Windmill Roof
        const millRoofGeo = new THREE.ConeGeometry(1.2, 1.1, 8);
        const millRoof = new THREE.Mesh(millRoofGeo, roofMat);
        millRoof.position.y = 2.1;
        windmillGroup.add(millRoof);

        // 4 Rotating Sails
        const sailsGroup = new THREE.Group();
        sailsGroup.position.set(0, 1.8, 1.1);
        for (let s = 0; s < 4; s++) {
            const sailGeo = new THREE.BoxGeometry(0.25, 2.2, 0.05);
            const sailMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true });
            const sailMesh = new THREE.Mesh(sailGeo, sailMat);
            sailMesh.position.y = 1.1;
            const sailHolder = new THREE.Group();
            sailHolder.rotation.z = s * (Math.PI / 2);
            sailHolder.add(sailMesh);
            sailsGroup.add(sailHolder);
        }
        windmillGroup.add(sailsGroup);
        islandGroup.add(windmillGroup);
        interactiveNodes.push({ mesh: windmillGroup, landmarkIndex: 3 });

        // Landmark 5: Vivvix Shipyard & Forge
        const shipyardGroup = new THREE.Group();
        shipyardGroup.position.set(5, 1.4, -2);

        const forgeGeo = new THREE.BoxGeometry(2.6, 1.6, 2.2);
        const forgeMat = new THREE.MeshLambertMaterial({ color: 0x9a8c98, flatShading: true });
        const forgeMesh = new THREE.Mesh(forgeGeo, forgeMat);
        forgeMesh.castShadow = true;
        shipyardGroup.add(forgeMesh);

        // A-Frame Roof
        const roofPrismGeo = new THREE.ConeGeometry(1.8, 1.1, 4);
        roofPrismGeo.rotateY(Math.PI / 4);
        const forgeRoof = new THREE.Mesh(roofPrismGeo, roofMat);
        forgeRoof.position.y = 1.35;
        shipyardGroup.add(forgeRoof);

        islandGroup.add(shipyardGroup);
        interactiveNodes.push({ mesh: shipyardGroup, landmarkIndex: 4 });

        // Landmark 6: Autonomous Alchemist's Lab
        const labGroup = new THREE.Group();
        labGroup.position.set(1, 2.8, 4);

        const labGeo = new THREE.DodecahedronGeometry(1.4);
        const labMat = new THREE.MeshLambertMaterial({ color: 0x4a4e69, flatShading: true });
        const labMesh = new THREE.Mesh(labGeo, labMat);
        labMesh.castShadow = true;
        labGroup.add(labMesh);

        // Glowing Core / AI Crystal
        const crystalGeo = new THREE.OctahedronGeometry(0.5);
        const crystalMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
        const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
        crystalMesh.position.y = 1.8;
        labGroup.add(crystalMesh);

        islandGroup.add(labGroup);
        interactiveNodes.push({ mesh: labGroup, landmarkIndex: 5 });

        // Landmark 7: Guild Hall (Tech Arsenal)
        const guildGroup = new THREE.Group();
        guildGroup.position.set(-1, 2.2, 1);

        const guildGeo = new THREE.BoxGeometry(3.5, 1.8, 2.5);
        const guildMat = new THREE.MeshLambertMaterial({ color: 0x606c38, flatShading: true });
        const guildMesh = new THREE.Mesh(guildGeo, guildMat);
        guildMesh.castShadow = true;
        guildGroup.add(guildMesh);

        const guildRoofGeo = new THREE.ConeGeometry(2.4, 1.2, 4);
        guildRoofGeo.rotateY(Math.PI / 4);
        const guildRoof = new THREE.Mesh(guildRoofGeo, roofMat);
        guildRoof.position.y = 1.45;
        guildGroup.add(guildRoof);

        islandGroup.add(guildGroup);
        interactiveNodes.push({ mesh: guildGroup, landmarkIndex: 6 });

        // Landmark 8: Coastal Telegraph Post
        const telegraphGroup = new THREE.Group();
        telegraphGroup.position.set(4, 1.5, 6);

        const mastGeo = new THREE.CylinderGeometry(0.12, 0.18, 4.2, 6);
        const mastMesh = new THREE.Mesh(mastGeo, metalMat);
        mastMesh.castShadow = true;
        telegraphGroup.add(mastMesh);

        // Dish
        const dishGeo = new THREE.ConeGeometry(0.6, 0.3, 8, 1, true);
        dishGeo.rotateX(Math.PI / 2);
        const dishMesh = new THREE.Mesh(dishGeo, woodMat);
        dishMesh.position.set(0, 3.8, 0.2);
        telegraphGroup.add(dishMesh);

        islandGroup.add(telegraphGroup);
        interactiveNodes.push({ mesh: telegraphGroup, landmarkIndex: 7 });

        // 6. Low-Poly Pine & Leafy Trees
        const treeColors = [0x2d6a4f, 0x40916c, 0x1b4332];
        const treePositions: [number, number, number][] = [
            [-2.5, 2.5, -5],
            [-7, 1.5, -1],
            [3, 2.6, 2],
            [-3, 2.2, 4.5],
            [6, 1.2, 0.5],
            [-6, 1.6, 5],
            [1.5, 3.0, -3.5]
        ];

        treePositions.forEach((pos, i) => {
            const treeGroup = new THREE.Group();
            treeGroup.position.set(...pos);

            // Trunk
            const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 0.9, 6);
            const trunkMat = new THREE.MeshLambertMaterial({ color: 0x582f0e, flatShading: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.y = 0.45;
            trunk.castShadow = true;
            treeGroup.add(trunk);

            // Foliage Cones
            for (let l = 0; l < 3; l++) {
                const foliageGeo = new THREE.ConeGeometry(0.9 - l * 0.2, 1.0, 7);
                const foliageMat = new THREE.MeshLambertMaterial({ 
                    color: treeColors[(i + l) % 3], 
                    flatShading: true 
                });
                const foliage = new THREE.Mesh(foliageGeo, foliageMat);
                foliage.position.y = 0.9 + l * 0.6;
                foliage.castShadow = true;
                treeGroup.add(foliage);
            }
            islandGroup.add(treeGroup);
        });

        // 7. Floating Cargo Pods in the Water (Salvageable)
        interface WaterCrate {
            mesh: THREE.Mesh;
            basePos: THREE.Vector3;
            angle: number;
            dist: number;
            speed: number;
        }
        const waterCrates: WaterCrate[] = [];
        const crateGeo = new THREE.BoxGeometry(0.8, 0.5, 0.5);

        for (let i = 0; i < 18; i++) {
            const crateMat = new THREE.MeshLambertMaterial({ 
                color: i % 2 === 0 ? 0x0077b6 : 0xd90429, 
                flatShading: true 
            });
            const cMesh = new THREE.Mesh(crateGeo, crateMat);
            const dist = 14 + Math.random() * 8;
            const angle = (i / 18) * Math.PI * 2;
            cMesh.position.set(Math.cos(angle) * dist, 0.2, Math.sin(angle) * dist);
            cMesh.castShadow = true;
            scene.add(cMesh);

            waterCrates.push({
                mesh: cMesh,
                basePos: cMesh.position.clone(),
                angle,
                dist,
                speed: 0.002 * (i % 2 === 0 ? 1 : -1)
            });
        }

        // 8. Raycasting (Click to Select Landmark or Salvage Cargo)
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handlePointerClick = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            // Check landmarks
            const allMeshes: THREE.Object3D[] = [];
            interactiveNodes.forEach(n => {
                n.mesh.traverse(child => {
                    if ((child as THREE.Mesh).isMesh) {
                        child.userData = { landmarkIndex: n.landmarkIndex };
                        allMeshes.push(child);
                    }
                });
            });

            const intersects = raycaster.intersectObjects(allMeshes);
            if (intersects.length > 0) {
                const hitIdx = intersects[0].object.userData.landmarkIndex;
                if (hitIdx !== undefined) {
                    handleSelectLandmark(hitIdx);
                    return;
                }
            }

            // Check water cargo crates
            const crateIntersects = raycaster.intersectObjects(waterCrates.map(c => c.mesh));
            if (crateIntersects.length > 0) {
                audio.playChime();
                setCollectedCargo(prev => prev + 1);
                const hit = waterCrates.find(c => c.mesh === crateIntersects[0].object);
                if (hit) {
                    hit.mesh.position.y += 2.0; // Jump up on salvage
                }
            }
        };

        // 9. Camera Controls & Smooth Orbiting
        let isMouseDown = false;
        let lastMouse = { x: 0, y: 0 };
        const currentTarget = new THREE.Vector3(0, 3, 0);
        const destTarget = new THREE.Vector3(0, 3, 0);
        const destPos = new THREE.Vector3(0, 10, 24);

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
            
            // Orbit camera around current target
            const offset = camera.position.clone().sub(currentTarget);
            let radius = offset.length();
            let theta = Math.atan2(offset.x, offset.z);
            let phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius)));

            theta -= dx * 0.006;
            phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, phi - dy * 0.006));

            destPos.x = currentTarget.x + radius * Math.sin(phi) * Math.sin(theta);
            destPos.y = currentTarget.y + radius * Math.cos(phi);
            destPos.z = currentTarget.z + radius * Math.sin(phi) * Math.cos(theta);

            lastMouse = { x: e.clientX, y: e.clientY };
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        const handleWheel = (e: WheelEvent) => {
            const dir = camera.position.clone().sub(currentTarget).normalize();
            let dist = camera.position.distanceTo(currentTarget);
            dist = Math.max(8, Math.min(42, dist + e.deltaY * 0.025));
            destPos.copy(currentTarget).add(dir.multiplyScalar(dist));
        };

        // Bridge: Fly Camera smoothly to landmark
        cameraBridgeRef.current.flyTo = (target: [number, number, number], pos: [number, number, number]) => {
            destTarget.set(target[0], target[1], target[2]);
            destPos.set(pos[0], pos[1], pos[2]);
        };

        // Bridge: Dynamic Lighting Updates
        cameraBridgeRef.current.updateLighting = (preset: LightingPreset) => {
            scene.background = new THREE.Color(preset.skyColor);
            if (scene.fog) scene.fog.color = new THREE.Color(preset.fogColor);
            hemiLight.color.setHex(preset.skyColor);
            hemiLight.groundColor.setHex(preset.ambientColor);
            dirLight.color.setHex(preset.sunColor);
            dirLight.intensity = preset.sunIntensity;
            waterMat.color.setHex(preset.waterColor);
            waterMat.opacity = preset.waterOpacity;
        };

        container.addEventListener('click', handlePointerClick);
        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('wheel', handleWheel, { passive: true });

        // 10. Main Render & Buoyancy Loop
        let animId: number;
        let clock = new THREE.Clock();

        const animate = () => {
            const elapsed = clock.getElapsedTime();

            // Smooth spring camera transition
            currentTarget.lerp(destTarget, 0.05);
            camera.position.lerp(destPos, 0.05);
            camera.lookAt(currentTarget);

            // Rotate Lighthouse Beacon
            beaconBeam.rotation.y += 0.025;

            // Rotate Windmill Sails
            sailsGroup.rotation.z += 0.018;

            // Crystal pulse
            crystalMesh.rotation.y += 0.02;
            crystalMesh.rotation.x += 0.01;

            // Animate Water ripples & Crates Buoyancy
            waterCrates.forEach((c) => {
                c.angle += c.speed;
                c.mesh.position.x = Math.cos(c.angle) * c.dist;
                c.mesh.position.z = Math.sin(c.angle) * c.dist;
                c.mesh.position.y = 0.2 + Math.sin(elapsed * 2.5 + c.dist) * 0.15;
                c.mesh.rotation.y += 0.01;
                c.mesh.rotation.z = Math.sin(elapsed * 2) * 0.06;
            });

            // Gentle foam pulse
            foamMesh.scale.setScalar(1 + Math.sin(elapsed * 1.5) * 0.02);

            renderer.render(scene, camera);
            animId = requestAnimationFrame(animate);
        };

        animate();

        // 11. Window Resize
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
            window.removeEventListener('resize', handleResize);
            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            renderer.dispose();
            audio.stopOceanAmbience();
        };
    }, [handleSelectLandmark]);

    // Update 3D Lighting when time-of-day changes
    useEffect(() => {
        cameraBridgeRef.current.updateLighting(LIGHTING_PRESETS[timeOfDay]);
    }, [timeOfDay]);

    return (
        <div className="relative w-full h-screen overflow-hidden select-none font-sans text-gray-100 bg-[#070b14]">
            
            {/* ========================================================= */}
            {/* Top Navigation Bar: Identity, Time-of-Day & Quick Actions */}
            {/* ========================================================= */}
            <header className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                
                {/* Left: Wayfarer Identity & Cargo Score */}
                <div className="flex items-center gap-3 sm:gap-4 bg-black/75 border border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md pointer-events-auto shadow-xl">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                        <MdExplore className="text-2xl" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                                VIVEK KUSHWAH
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono hidden sm:inline">
                                [PLATFORM ARCHITECT]
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>SLO: 99.99% · Cloud Haven Archipelago</span>
                        </div>
                    </div>
                    {collectedCargo > 0 && (
                        <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-white/10 text-xs font-mono text-amber-300">
                            <MdAutoAwesome />
                            <span>{collectedCargo} Cargo Rescued</span>
                        </div>
                    )}
                </div>

                {/* Right: Tour, Lighting, Audio & Full Resume */}
                <div className="flex items-center gap-2 pointer-events-auto">
                    
                    {/* Guided Tour Expedition */}
                    <button
                        onClick={() => {
                            setTourActive(!tourActive);
                            audio.playChime();
                        }}
                        title="Automatic guided cruise across all 8 landmarks"
                        className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all backdrop-blur-md ${
                            tourActive 
                                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                                : 'bg-black/70 border-white/10 text-gray-300 hover:text-white'
                        }`}
                    >
                        {tourActive ? <MdPause className="text-cyan-400" /> : <MdPlayArrow className="text-cyan-400" />}
                        <span className="hidden sm:inline">{tourActive ? 'PAUSE CRUISE' : 'TOUR HAVEN'}</span>
                    </button>

                    {/* Time-of-Day Lighting Switcher */}
                    <div className="flex items-center gap-1 bg-black/70 border border-white/10 p-1 rounded-xl backdrop-blur-md">
                        <button
                            onClick={() => {
                                setTimeOfDay('day');
                                audio.playPluck();
                            }}
                            title="Coastal Daylight"
                            className={`p-1.5 rounded-lg transition-all ${timeOfDay === 'day' ? 'bg-sky-500 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            <MdWbSunny className="text-base" />
                        </button>
                        <button
                            onClick={() => {
                                setTimeOfDay('sunset');
                                audio.playPluck();
                            }}
                            title="Golden Twilight"
                            className={`p-1.5 rounded-lg transition-all ${timeOfDay === 'sunset' ? 'bg-amber-500 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            <MdWbTwilight className="text-base" />
                        </button>
                        <button
                            onClick={() => {
                                setTimeOfDay('night');
                                audio.playPluck();
                            }}
                            title="Bioluminescent Night"
                            className={`p-1.5 rounded-lg transition-all ${timeOfDay === 'night' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            <MdBrightness3 className="text-base" />
                        </button>
                    </div>

                    {/* Full Linear Resume Drawer Toggle */}
                    <button
                        onClick={() => {
                            setFullResumeOpen(true);
                            audio.playChime();
                        }}
                        className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md"
                    >
                        <MdMenuBook className="text-cyan-400 text-sm" />
                        <span className="hidden sm:inline">FULL RESUME</span>
                    </button>

                    {/* Audio Toggle */}
                    <button
                        onClick={toggleSound}
                        title={soundOn ? 'Mute Ocean Ambience' : 'Enable Ocean Ambience'}
                        className="p-2.5 rounded-xl bg-black/70 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md"
                    >
                        {soundOn ? <MdVolumeUp className="text-base text-cyan-400" /> : <MdVolumeOff className="text-base text-gray-500" />}
                    </button>

                    {/* Help Guide */}
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
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* ========================================================= */}
            {/* Docked Architect's Field Journal (Right Panel / Smoothly Updating) */}
            {/* ========================================================= */}
            <aside className="absolute top-20 sm:top-24 bottom-24 sm:bottom-28 right-4 sm:right-6 z-30 w-[calc(100%-2rem)] sm:w-[460px] pointer-events-none flex flex-col justify-end">
                <div 
                    style={{ backgroundColor: 'rgba(9, 14, 26, 0.95)', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                    className="border rounded-3xl p-6 sm:p-7 backdrop-blur-2xl pointer-events-auto shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-y-auto max-h-full transition-all text-left text-white"
                >
                    
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                                {activeLandmark.code} // {activeLandmark.category}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${activePreset.badgeBg}`}>
                                {activeLandmark.badge}
                            </span>
                        </div>
                        <span className="text-[11px] font-mono text-gray-400">
                            {activeLandmarkIndex + 1} of {LANDMARKS.length}
                        </span>
                    </div>

                    {/* Landmark & Role Title */}
                    <div className="mb-3">
                        <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 mb-1 font-semibold">
                            <span>LANDMARK:</span>
                            <span className="text-white font-bold">{activeLandmark.landmarkName}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                            {activeLandmark.title}
                        </h2>
                        <div className="text-xs text-gray-300 font-mono flex items-center justify-between font-medium">
                            <span>{activeLandmark.role}</span>
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                            {activeLandmark.period} · {activeLandmark.location}
                        </div>
                    </div>

                    {/* Metric Highlight Chips (if Origin) */}
                    {activeLandmark.stats && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                            {activeLandmark.stats.map(s => (
                                <div key={s.label} className="p-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-center shadow-sm">
                                    <div className="text-base font-bold text-cyan-400 font-mono">{s.value}</div>
                                    <div className="text-[9px] text-gray-300 uppercase font-mono tracking-wider font-semibold">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Education Card (if Origin) */}
                    {activeLandmark.education && (
                        <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/15 mb-4 flex items-center gap-3">
                            <MdSchool className="text-2xl text-cyan-400 shrink-0" />
                            <div>
                                <div className="text-xs font-bold text-white">{activeLandmark.education.degree}</div>
                                <div className="text-[11px] text-gray-300">{activeLandmark.education.school} ({activeLandmark.education.period})</div>
                            </div>
                        </div>
                    )}

                    {/* Summary Description */}
                    <p className="text-xs sm:text-[13px] text-gray-200 leading-relaxed font-normal mb-4">
                        {activeLandmark.summary}
                    </p>

                    {/* Operational Feats / Achievements */}
                    {activeLandmark.achievements && (
                        <div className="mb-4">
                            <h4 className="text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest mb-2.5">
                                Operational Architecture Feats:
                            </h4>
                            <ul className="space-y-2">
                                {activeLandmark.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-200 leading-relaxed font-normal">
                                        <MdCheckCircle className="text-cyan-400 text-sm shrink-0 mt-0.5" />
                                        <span>{ach}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Awards Pill */}
                    {activeLandmark.awards && (
                        <div className="flex gap-2 mb-4">
                            {activeLandmark.awards.map(a => (
                                <span key={a} className="text-xs px-2.5 py-1 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center gap-1.5 font-mono font-semibold">
                                    <MdEmojiEvents /> {a}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Technology Stack Pills */}
                    {activeLandmark.technologies && (
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-1.5">
                                {activeLandmark.technologies.map(t => (
                                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-gray-200 font-mono font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Skill Arsenal Categories */}
                    {activeLandmark.skillCategories && (
                        <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-1">
                            {activeLandmark.skillCategories.map(cat => (
                                <div key={cat.category} className="p-2.5 rounded-xl bg-white/[0.06] border border-white/15">
                                    <div className="text-[11px] font-bold text-cyan-300 font-mono mb-1.5">{cat.category}</div>
                                    <div className="flex flex-wrap gap-1">
                                        {cat.skills.map(s => (
                                            <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-black/50 text-gray-200 font-mono">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Direct Contact Links */}
                    {activeLandmark.id === 'contact' && (
                        <div className="grid grid-cols-1 gap-2 mb-4">
                            {CONTACT.map(c => (
                                <a
                                    key={c.name}
                                    href={c.href}
                                    target={c.href.startsWith('http') ? '_blank' : '_self'}
                                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-between text-xs"
                                >
                                    <div className="flex items-center gap-2.5">
                                        {c.name === 'Email' && <MdEmail className="text-cyan-400 text-base" />}
                                        {c.name === 'LinkedIn' && <MdOpenInNew className="text-cyan-400 text-base" />}
                                        {c.name === 'Location' && <MdLocationOn className="text-cyan-400 text-base" />}
                                        {c.name === 'Phone' && <MdPhone className="text-cyan-400 text-base" />}
                                        <div>
                                            <div className="text-[9px] text-gray-300 font-mono uppercase font-semibold">{c.name}</div>
                                            <div className="text-white font-medium">{c.value}</div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Navigation Footer */}
                    <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
                        <button
                            onClick={() => {
                                const prev = (activeLandmarkIndex - 1 + LANDMARKS.length) % LANDMARKS.length;
                                handleSelectLandmark(prev);
                            }}
                            className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1 transition-colors font-semibold"
                        >
                            <MdNavigateBefore /> PREV
                        </button>
                        <a
                            href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                            target="_blank"
                            className="text-[11px] font-mono text-cyan-400 hover:text-white flex items-center gap-1 font-semibold"
                        >
                            <MdDescription /> Resume PDF
                        </a>
                        <button
                            onClick={() => {
                                const next = (activeLandmarkIndex + 1) % LANDMARKS.length;
                                handleSelectLandmark(next);
                            }}
                            className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold font-mono flex items-center gap-1 transition-colors shadow-md"
                        >
                            NEXT <MdNavigateNext />
                        </button>
                    </div>
                </div>
            </aside>

            {/* ========================================================= */}
            {/* Bottom Archipelago Compass Dock (Click to Fly Instantly) */}
            {/* ========================================================= */}
            <footer className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
                
                {/* 8 Landmark Stations */}
                <div className="flex items-center gap-1.5 bg-black/80 border border-white/15 p-2 rounded-2xl backdrop-blur-xl pointer-events-auto overflow-x-auto max-w-full shadow-2xl">
                    <span className="text-[10px] text-gray-400 font-bold px-2 hidden lg:flex items-center gap-1 font-mono">
                        <MdExplore className="text-cyan-400" />
                        <span>ISLE:</span>
                    </span>
                    {LANDMARKS.map((lm, idx) => {
                        const isSelected = activeLandmarkIndex === idx;
                        return (
                            <button
                                key={lm.id}
                                onClick={() => handleSelectLandmark(idx)}
                                className={`px-3 py-2 rounded-xl text-xs whitespace-nowrap border font-mono transition-all flex items-center gap-1.5 ${
                                    isSelected 
                                        ? 'bg-cyan-500/25 border-cyan-400 text-white font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]' 
                                        : 'bg-white/[0.04] border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                <span className="text-[10px] opacity-60">{lm.code}</span>
                                <span>{lm.title.split(' ')[0]}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Direct PDF Resume Button */}
                <div className="pointer-events-auto">
                    <a
                        href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                        target="_blank"
                        className="px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-2 transition-colors backdrop-blur-md shadow-xl"
                    >
                        <MdDescription className="text-cyan-400 text-sm" />
                        <span>Download PDF Resume</span>
                    </a>
                </div>
            </footer>

            {/* ========================================================= */}
            {/* Full Linear Resume Side-Sheet (For Technical Recruiters) */}
            {/* ========================================================= */}
            {fullResumeOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in">
                    <div className="w-full max-w-2xl bg-[#080d18] border-l border-white/10 h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl">
                        <div>
                            {/* Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <span>WAYFARER CODEX</span>
                                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                                            FULL SPEC
                                        </span>
                                    </h2>
                                    <p className="text-xs text-gray-400 font-mono mt-1">
                                        Vivek Kushwah · Senior Platform &amp; Observability Architect
                                    </p>
                                </div>
                                <button
                                    onClick={() => setFullResumeOpen(false)}
                                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                                >
                                    <MdClose className="text-2xl" />
                                </button>
                            </div>

                            {/* Section 1: Executive Overview */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3">
                                    // 01 EXECUTIVE ARCHITECTURE PROFILE
                                </h3>
                                <p className="text-sm text-gray-300 font-sans leading-relaxed mb-4">
                                    {ABOUT.description}
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {ABOUT.stats.map(s => (
                                        <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                            <div className="text-base font-bold text-cyan-400 font-mono">{s.value}</div>
                                            <div className="text-[10px] text-gray-400 font-mono uppercase">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 2: Enterprise Tenures */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                                    // 02 ENTERPRISE TENURES &amp; ACHIEVEMENTS
                                </h3>
                                <div className="space-y-6">
                                    {EXPERIENCES.map((exp) => (
                                        <div key={exp.company} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
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
                                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed font-light">
                                                        <span className="text-cyan-400">▸</span>
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
                                <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                                    // 03 PLATFORM SKILL MATRIX
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
                        </div>

                        {/* Footer */}
                        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                                target="_blank"
                                className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center gap-2 transition-colors"
                            >
                                <MdDescription className="text-base" />
                                <span>Download Full PDF Resume</span>
                            </a>
                            <button
                                onClick={() => setFullResumeOpen(false)}
                                className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                            >
                                Close Codex
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* Guide & Exploration Instructions Modal */}
            {/* ========================================================= */}
            {helpOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="bg-[#0b101c] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full relative text-left">
                        <button
                            onClick={() => setHelpOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white"
                        >
                            <MdClose className="text-2xl" />
                        </button>
                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 font-sans">
                            <MdExplore className="text-cyan-400" />
                            <span>Cloud Haven Archipelago Guide</span>
                        </h3>
                        <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                            Welcome to Vivek Kushwah's interactive 3D island diorama. Every building and landmark represents a real production milestone and platform achievement.
                        </p>
                        <ul className="text-xs space-y-2.5 text-gray-300 font-mono mb-6">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Click &amp; Drag:</strong> Orbit 360° around the island.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Click Any Landmark:</strong> Camera glides in &amp; Field Journal displays details.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Click Floating Crates:</strong> Salvage cargo pods floating in the sea.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Sun/Moon Icons:</strong> Switch between Day, Sunset, and Bioluminescent Night.
                            </li>
                        </ul>
                        <button
                            onClick={() => setHelpOpen(false)}
                            className="w-full py-2.5 rounded-xl bg-cyan-500 text-black text-xs font-bold font-mono uppercase hover:bg-cyan-400"
                        >
                            Explore Archipelago
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
