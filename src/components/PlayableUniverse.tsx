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
    MdAutoAwesome,
    MdVerified,
    MdExpandMore,
    MdExpandLess,
    MdInventory2,
    MdCode
} from 'react-icons/md';
import { EXPERIENCES, ABOUT, PROJECTS, SKILL_CATEGORIES, CONTACT, CERTIFICATIONS } from '../data/portfolio';

// ========================================================
// 1. Procedural Natural Audio Synthesizer (Zero asset loads)
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
            filter.frequency.setValueAtTime(360, this.ctx.currentTime);

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
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.04);
            gain.gain.setValueAtTime(0.05, this.ctx.currentTime + idx * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.04 + 0.45);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.04);
            osc.stop(this.ctx.currentTime + idx * 0.04 + 0.45);
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
        gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.18);
    }

    playSalvage() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
        notes.forEach((freq, idx) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
            gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.6);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.06);
            osc.stop(this.ctx.currentTime + idx * 0.06 + 0.6);
        });
    }
}

const audio = new CoastalAudio();

// ========================================================
// 2. Secret Engineering Artifacts in Salvage Pods
// ========================================================
interface SecretArtifact {
    id: number;
    title: string;
    system: string;
    insight: string;
    snippet: string;
}

const SECRET_ARTIFACTS: SecretArtifact[] = [
    {
        id: 1,
        title: "Kafka StatefulSet Pod Graceful Drain",
        system: "Nymcard Stateful Infrastructure",
        insight: "Prevent consumer group rebalancing storms by extending Pod termination grace period and flushing replication offsets before SIGKILL.",
        snippet: "terminationGracePeriodSeconds: 120\npreStop: /opt/kafka/bin/kafka-server-stop.sh"
    },
    {
        id: 2,
        title: "Opencost FinOps Idle Consolidation",
        system: "Zebpay FinOps (40% Savings)",
        insight: "Identified over-provisioned non-prod workloads and introduced automated cluster night/weekend sleep schedules coupled with spot consolidation.",
        snippet: "kubectl annotate namespace dev scheduled-sleep=\"0 20 * * 1-5\""
    },
    {
        id: 3,
        title: "2T Req/Mo API Gateway Cutover",
        system: "Zebpay Enterprise Gateway",
        insight: "Executed a zero-downtime migration from Azure APIM to AWS API Gateway using DNS weighted routing and canary TLS certificate pre-validation.",
        snippet: "Route53.changeResourceRecordSets({ Weight: 10, HealthCheckId: ... })"
    },
    {
        id: 4,
        title: "Autonomous LLM Incident RCA Correlation",
        system: "Agentic AI Observability Assistant",
        insight: "Correlated Prometheus metric anomaly vectors with recent GitOps commits (Flux/Argo CD) to isolate root causes in under 3 minutes, slashing MTTR by 40%.",
        snippet: "embed(span_error) <-> embed(git_commit_diff) => similarity > 0.88"
    },
    {
        id: 5,
        title: "Thanos Global Multi-Cluster Querying",
        system: "Observability as Code",
        insight: "Unified Prometheus storage across 8+ clusters into S3 with Thanos Compact, enabling infinite retention at 1/10th disk cost.",
        snippet: "thanos query --store=thanos-sidecar-grpc:10901 --store=thanos-store:10901"
    },
    {
        id: 6,
        title: "Cilium eBPF Host Routing & Encryption",
        system: "Kubernetes Platform Hardening",
        insight: "Replaced iptables kube-proxy with eBPF maps to achieve sub-millisecond service mesh routing with transparent WireGuard node encryption.",
        snippet: "cilium config set bpf-lb-mode dsr --set encryption.type=wireguard"
    },
    {
        id: 7,
        title: "Karpenter Dynamic Node Scaling",
        system: "AWS EKS Infrastructure",
        insight: "Slashing node launch latency from 4 minutes down to 45 seconds using direct EC2 fleet spot orchestration tailored to pending pod specs.",
        snippet: "apiVersion: karpenter.sh/v1beta1\nkind: NodePool\nspec:\n  requirements:\n  - key: karpenter.sh/capacity-type\n    operator: In\n    values: [\"spot\"]"
    },
    {
        id: 8,
        title: "RabbitMQ Quorum Queues Raft Consensus",
        system: "High-Reliability Messaging",
        insight: "Migrated legacy mirrored queues to Raft-based Quorum Queues, eliminating split-brain data corruption during transient network partitions.",
        snippet: "x-queue-type: quorum\nx-delivery-limit: 5"
    },
    {
        id: 9,
        title: "PostgreSQL CloudNativePG Zero-Data-Loss Failover",
        system: "Financial Ledger DB",
        insight: "Engineered automated failover with synchronized standby replication and continuous WAL archiving to object storage.",
        snippet: "minSyncReplicas: 1\nmaxSyncReplicas: 2\nsync: true"
    },
    {
        id: 10,
        title: "Airflow 2.x Dynamic Task Mapping",
        system: "Vivvix Data Pipelines",
        insight: "Modernized legacy monolithic ETL DAGs into dynamic task groups, slashing job runtime by 50% through parallel executor workers.",
        snippet: "extract_task.expand(partition=get_partitions())"
    },
    {
        id: 11,
        title: "Trivy & Semgrep SAST Gateways",
        system: "GitHub Actions CI/CD Security",
        insight: "Blocked container deployment whenever high/critical CVEs or hardcoded secret patterns entered pull requests.",
        snippet: "trivy image --severity HIGH,CRITICAL --exit-code 1 $IMAGE_URI"
    },
    {
        id: 12,
        title: "AWS DMS CDC Auto-Throttle Tuning",
        system: "Database Migration Service",
        insight: "Tuned memory buffer buffers and CDC batch apply parameters to prevent source database memory exhaustion during peak ingestion.",
        snippet: "MemoryLimitTotal: 1024, BatchApplyTimeoutMin: 1, BatchApplyTimeoutMax: 30"
    },
    {
        id: 13,
        title: "Multi-Window Multi-Burn-Rate Alerting",
        system: "SLO Engineering (99.99%)",
        insight: "Implemented Google SRE multi-burn-rate algorithms (1h & 6h windows) to eliminate alert fatigue while safeguarding the error budget.",
        snippet: "sum(rate(http_requests_total{status=~\"5..\"}[1h])) / sum(rate(http_requests_total[1h])) > (14.4 * 0.0001)"
    },
    {
        id: 14,
        title: "Loki Structured Metadata LogQL Optimization",
        system: "Logging Architecture",
        insight: "Utilized structured metadata indexing to avoid cardinality explosions while retaining fast regex query filters.",
        snippet: "{env=\"production\", app=\"api\"} | json | duration > 2s"
    },
    {
        id: 15,
        title: "OpenTelemetry W3C Distributed Tracing",
        system: "Microservices Observability",
        insight: "Automated trace context propagation across polyglot microservices (Node.js, Go, Python) into Grafana Tempo.",
        snippet: "OTEL_PROPAGATORS=tracecontext,baggage\nOTEL_EXPORTER_OTLP_ENDPOINT=http://tempo:4317"
    },
    {
        id: 16,
        title: "HPA Media Workload Scaling on SQS Depth",
        system: "Rizzle Video Pipeline",
        insight: "Configured Kubernetes KEDA to autoscale transcoder worker pods on SQS queue backlog rather than raw CPU, preventing OOM spikes.",
        snippet: "triggers:\n- type: aws-sqs\n  metadata:\n    queueURL: https://sqs.us-east-1.amazonaws.com/...\n    queueLength: \"10\""
    },
    {
        id: 17,
        title: "Atlantis IaC Terraform Automation",
        system: "Multi-Cloud IaC Delivery",
        insight: "Shifted infrastructure changes directly into GitHub pull-request comment workflows with plan locks and team approval gates.",
        snippet: "atlantis plan -d terraform/aws/production"
    },
    {
        id: 18,
        title: "Snowflake & Databricks Warehouse Auto-Suspend",
        system: "FinOps Enterprise Governance",
        insight: "Aggressively tuned compute warehouse auto-suspend times down to 60 seconds with query cache optimization, saving 40% on analytics compute.",
        snippet: "ALTER WAREHOUSE ANALYTICS_WH SET AUTO_SUSPEND = 60, AUTO_RESUME = TRUE;"
    }
];

// ========================================================
// 3. Time-of-Day Lighting Configurations
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
        waterColor: 0x38b6ff,
        waterOpacity: 0.82,
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
        waterColor: 0x8338ec,
        waterOpacity: 0.85,
        accentColor: '#ffaa5e',
        badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    night: {
        name: 'Bioluminescent Night',
        skyColor: 0x050a14,
        fogColor: 0x07111e,
        sunColor: 0x00f0ff,
        sunIntensity: 0.65,
        ambientColor: 0x0e243a,
        waterColor: 0x0077b6,
        waterOpacity: 0.88,
        accentColor: '#00f0ff',
        badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    }
};

// ========================================================
// 4. The 8 Island Landmarks (Vivek Career Architecture)
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
    certifications?: typeof CERTIFICATIONS;
    projects?: typeof PROJECTS;
    skillCategories?: typeof SKILL_CATEGORIES;
    coords: [number, number, number];
    cameraTarget: [number, number, number];
    cameraPos: [number, number, number];
    wandererTarget: [number, number, number];
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
        certifications: CERTIFICATIONS,
        coords: [0, 4.2, -6],
        cameraTarget: [0, 4, -6],
        cameraPos: [0, 8, 8],
        wandererTarget: [0, 4.0, -4.5]
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
        cameraPos: [14, 5, 10],
        wandererTarget: [5.5, 1.4, 2.5]
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
        cameraPos: [-12, 7, 9],
        wandererTarget: [-4.2, 2.6, 1.8]
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
        cameraPos: [-10, 6, 4],
        wandererTarget: [-3.8, 2.6, -3.0]
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
        cameraPos: [11, 5, 5],
        wandererTarget: [3.8, 1.5, -1.8]
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
        cameraPos: [1, 6, 12],
        wandererTarget: [1, 2.4, 2.8]
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
        cameraPos: [-1, 6, 9],
        wandererTarget: [-1, 2.2, 2.4]
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
        cameraPos: [8, 5, 13],
        wandererTarget: [3.2, 1.6, 4.8]
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
    const [activeArtifact, setActiveArtifact] = useState<SecretArtifact | null>(null);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(true);

    // Camera and character control bridge
    const cameraBridgeRef = useRef<{
        flyTo: (target: [number, number, number], pos: [number, number, number]) => void;
        moveWanderer: (target: [number, number, number]) => void;
        setLightingPreset: (preset: LightingPreset) => void;
    }>({
        flyTo: () => {},
        moveWanderer: () => {},
        setLightingPreset: () => {}
    });

    const activeLandmark = LANDMARKS[activeLandmarkIndex];
    const activePreset = LIGHTING_PRESETS[timeOfDay];

    // Toggle Sound
    const toggleSound = useCallback(() => {
        const next = !soundOn;
        audio.enabled = next;
        setSoundOn(next);
        if (next) {
            audio.playChime();
            audio.startOceanAmbience();
        } else {
            audio.stopOceanAmbience();
        }
    }, [soundOn]);

    // Fly to Landmark smoothly and dispatch wanderer
    const handleSelectLandmark = useCallback((idx: number) => {
        setActiveLandmarkIndex(idx);
        audio.playPluck();
        const l = LANDMARKS[idx];
        if (cameraBridgeRef.current.flyTo) {
            cameraBridgeRef.current.flyTo(l.cameraTarget, l.cameraPos);
        }
        if (cameraBridgeRef.current.moveWanderer) {
            cameraBridgeRef.current.moveWanderer(l.wandererTarget);
        }
    }, []);

    // Cycle Lighting Presets (Day -> Twilight -> Night)
    const cycleLighting = useCallback(() => {
        audio.playPluck();
        setTimeOfDay(prev => {
            if (prev === 'day') return 'sunset';
            if (prev === 'sunset') return 'night';
            return 'day';
        });
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
        }, 8500);
        return () => clearInterval(interval);
    }, [tourActive, handleSelectLandmark]);

    // Global Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

            const key = e.key.toLowerCase();
            if (key >= '1' && key <= '8') {
                const idx = parseInt(key, 10) - 1;
                if (idx < LANDMARKS.length) {
                    handleSelectLandmark(idx);
                }
            } else if (key === 't') {
                setTourActive(prev => !prev);
                audio.playChime();
            } else if (key === 'l') {
                cycleLighting();
            } else if (key === 'm') {
                toggleSound();
            } else if (key === 'r') {
                setFullResumeOpen(prev => !prev);
                audio.playChime();
            } else if (key === 'escape') {
                setFullResumeOpen(false);
                setHelpOpen(false);
                setActiveArtifact(null);
            } else if (key === 'arrowleft') {
                const prev = (activeLandmarkIndex - 1 + LANDMARKS.length) % LANDMARKS.length;
                handleSelectLandmark(prev);
            } else if (key === 'arrowright' || key === ' ') {
                e.preventDefault();
                const next = (activeLandmarkIndex + 1) % LANDMARKS.length;
                handleSelectLandmark(next);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeLandmarkIndex, handleSelectLandmark, cycleLighting, toggleSound]);

    // ========================================================
    // 5. Three.js Living Low-Poly Island Diorama & Game Loop
    // ========================================================
    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        // 1. Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const initialPreset = LIGHTING_PRESETS[timeOfDay];
        scene.background = new THREE.Color(initialPreset.skyColor);
        scene.fog = new THREE.FogExp2(initialPreset.fogColor, 0.015);

        const camera = new THREE.PerspectiveCamera(
            48,
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

        // 2. Dynamic Lighting Rig with Lerp Capabilities
        const currentSkyColor = new THREE.Color(initialPreset.skyColor);
        const targetSkyColor = new THREE.Color(initialPreset.skyColor);
        const currentFogColor = new THREE.Color(initialPreset.fogColor);
        const targetFogColor = new THREE.Color(initialPreset.fogColor);
        const currentSunColor = new THREE.Color(initialPreset.sunColor);
        const targetSunColor = new THREE.Color(initialPreset.sunColor);
        const currentAmbientColor = new THREE.Color(initialPreset.ambientColor);
        const targetAmbientColor = new THREE.Color(initialPreset.ambientColor);
        const currentWaterColor = new THREE.Color(initialPreset.waterColor);
        const targetWaterColor = new THREE.Color(initialPreset.waterColor);
        let targetSunIntensity = initialPreset.sunIntensity;

        const hemiLight = new THREE.HemisphereLight(
            initialPreset.skyColor,
            initialPreset.ambientColor,
            0.75
        );
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(initialPreset.sunColor, initialPreset.sunIntensity);
        dirLight.position.set(20, 30, 16);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.bias = -0.0004;
        scene.add(dirLight);

        // Point Light at Lighthouse Beacon
        const lighthouseBeaconLight = new THREE.PointLight(0x00f0ff, 2.5, 22);
        lighthouseBeaconLight.position.set(0, 7.2, -6);
        scene.add(lighthouseBeaconLight);

        // Point Light at AI Crystal
        const crystalLight = new THREE.PointLight(0x00f0ff, 1.8, 12);
        crystalLight.position.set(1, 4.6, 4);
        scene.add(crystalLight);

        // 3. Dynamic Living Water Plane with Compound Vertex Waves
        const waterGeo = new THREE.PlaneGeometry(180, 180, 64, 64);
        waterGeo.rotateX(-Math.PI / 2);
        const initialWaterPos = waterGeo.attributes.position.array.slice() as Float32Array;

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
        const foamGeo = new THREE.RingGeometry(11, 14.8, 36);
        foamGeo.rotateX(-Math.PI / 2);
        const foamMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.32,
            side: THREE.DoubleSide
        });
        const foamMesh = new THREE.Mesh(foamGeo, foamMat);
        foamMesh.position.y = 0.06;
        scene.add(foamMesh);

        // 4. Low-Poly Procedural Island Terrain
        const islandGroup = new THREE.Group();
        scene.add(islandGroup);

        // Sandy Shore Base
        const sandGeo = new THREE.CylinderGeometry(13.6, 15.2, 1.2, 18);
        const sandMat = new THREE.MeshLambertMaterial({ color: 0xdec699, flatShading: true });
        const sandMesh = new THREE.Mesh(sandGeo, sandMat);
        sandMesh.position.y = 0.4;
        sandMesh.receiveShadow = true;
        sandMesh.castShadow = true;
        islandGroup.add(sandMesh);

        // Main Terraced Grass Plateau
        const grassGeo1 = new THREE.CylinderGeometry(11.6, 13.2, 1.4, 16);
        const grassMat1 = new THREE.MeshLambertMaterial({ color: 0x588157, flatShading: true });
        const grassMesh1 = new THREE.Mesh(grassGeo1, grassMat1);
        grassMesh1.position.y = 1.4;
        grassMesh1.receiveShadow = true;
        grassMesh1.castShadow = true;
        islandGroup.add(grassMesh1);

        // Elevated Upper Hill
        const grassGeo2 = new THREE.CylinderGeometry(8.2, 10.2, 1.6, 14);
        const grassMat2 = new THREE.MeshLambertMaterial({ color: 0x3a5a40, flatShading: true });
        const grassMesh2 = new THREE.Mesh(grassGeo2, grassMat2);
        grassMesh2.position.set(-1, 2.6, -1);
        grassMesh2.receiveShadow = true;
        grassMesh2.castShadow = true;
        islandGroup.add(grassMesh2);

        // High Lighthouse Cliff Outcrop
        const cliffGeo = new THREE.CylinderGeometry(3.6, 4.6, 2.2, 8);
        const cliffMat = new THREE.MeshLambertMaterial({ color: 0x6b705c, flatShading: true });
        const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
        cliffMesh.position.set(0, 3.8, -6);
        cliffMesh.receiveShadow = true;
        cliffMesh.castShadow = true;
        islandGroup.add(cliffMesh);

        // Island Stone Pathways
        const pathMat = new THREE.MeshLambertMaterial({ color: 0xa5a58d, flatShading: true });
        const pathCoords: [number, number, number][] = [
            [0, 2.12, 0], [1.2, 2.12, 1.4], [2.6, 2.12, 2.5], [4.5, 1.42, 2.8],
            [-1.5, 2.12, 0.5], [-3.2, 2.62, 1.2], [-4.8, 2.62, 1.6],
            [-0.5, 2.62, -2.5], [-1.8, 2.62, -3.2], [-3.5, 2.62, -3.8],
            [0, 3.82, -4.5]
        ];
        pathCoords.forEach(pt => {
            const stoneGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.1, 7);
            const stoneMesh = new THREE.Mesh(stoneGeo, pathMat);
            stoneMesh.position.set(pt[0], pt[1], pt[2]);
            stoneMesh.receiveShadow = true;
            islandGroup.add(stoneMesh);
        });

        // 5. Handcrafted Low-Poly Landmarks & Colliders
        interface InteractiveNode {
            mesh: THREE.Object3D;
            landmarkIndex: number;
        }
        const interactiveNodes: InteractiveNode[] = [];

        // Landmark 1: The Observability Lighthouse (Cliff Peak)
        const lighthouseGroup = new THREE.Group();
        lighthouseGroup.position.set(0, 4.9, -6);

        const towerGeo = new THREE.CylinderGeometry(0.7, 1.1, 4.5, 10);
        const towerMat = new THREE.MeshLambertMaterial({ color: 0xf4f1de, flatShading: true });
        const towerMesh = new THREE.Mesh(towerGeo, towerMat);
        towerMesh.castShadow = true;
        lighthouseGroup.add(towerMesh);

        const roofGeo = new THREE.ConeGeometry(0.9, 1.4, 8);
        const roofMat = new THREE.MeshLambertMaterial({ color: 0xbc4749, flatShading: true });
        const roofMesh = new THREE.Mesh(roofGeo, roofMat);
        roofMesh.position.y = 2.8;
        lighthouseGroup.add(roofMesh);

        const beaconConeGeo = new THREE.ConeGeometry(3, 16, 12, 1, true);
        beaconConeGeo.rotateX(Math.PI / 2);
        beaconConeGeo.translate(0, 0, 8);
        const beaconMat = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.28,
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

        const pierGeo = new THREE.BoxGeometry(4.5, 0.3, 2.5);
        const woodMat = new THREE.MeshLambertMaterial({ color: 0x7f5539, flatShading: true });
        const pierMesh = new THREE.Mesh(pierGeo, woodMat);
        pierMesh.castShadow = true;
        dockGroup.add(pierMesh);

        const crateColors = [0x0077b6, 0x0096c7, 0x023e8a];
        for (let i = 0; i < 4; i++) {
            const crateGeo = new THREE.BoxGeometry(1.2, 0.7, 0.8);
            const cMat = new THREE.MeshLambertMaterial({ color: crateColors[i % 3], flatShading: true });
            const crateMesh = new THREE.Mesh(crateGeo, cMat);
            crateMesh.position.set((i % 2) * 1.3 - 0.7, 0.5 + Math.floor(i / 2) * 0.7, (i % 2) * 0.4);
            crateMesh.castShadow = true;
            dockGroup.add(crateMesh);
        }

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

        const keepGeo = new THREE.BoxGeometry(3.2, 2.8, 3.2);
        const keepMat = new THREE.MeshLambertMaterial({ color: 0xd4a373, flatShading: true });
        const keepMesh = new THREE.Mesh(keepGeo, keepMat);
        keepMesh.castShadow = true;
        citadelGroup.add(keepMesh);

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

        // Landmark 4: Rizzle Transmission Windmill
        const windmillGroup = new THREE.Group();
        windmillGroup.position.set(-5, 2.8, -4);

        const millGeo = new THREE.CylinderGeometry(0.9, 1.4, 3.2, 8);
        const millMat = new THREE.MeshLambertMaterial({ color: 0xfaedcd, flatShading: true });
        const millMesh = new THREE.Mesh(millGeo, millMat);
        millMesh.castShadow = true;
        windmillGroup.add(millMesh);

        const millRoofGeo = new THREE.ConeGeometry(1.2, 1.1, 8);
        const millRoof = new THREE.Mesh(millRoofGeo, roofMat);
        millRoof.position.y = 2.1;
        windmillGroup.add(millRoof);

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

        const roofPrismGeo = new THREE.ConeGeometry(1.8, 1.1, 4);
        roofPrismGeo.rotateY(Math.PI / 4);
        const forgeRoof = new THREE.Mesh(roofPrismGeo, roofMat);
        forgeRoof.position.y = 1.35;
        shipyardGroup.add(forgeRoof);

        islandGroup.add(shipyardGroup);
        interactiveNodes.push({ mesh: shipyardGroup, landmarkIndex: 4 });

        // Landmark 6: Autonomous Alchemist Lab
        const labGroup = new THREE.Group();
        labGroup.position.set(1, 2.8, 4);

        const labGeo = new THREE.DodecahedronGeometry(1.4);
        const labMat = new THREE.MeshLambertMaterial({ color: 0x4a4e69, flatShading: true });
        const labMesh = new THREE.Mesh(labGeo, labMat);
        labMesh.castShadow = true;
        labGroup.add(labMesh);

        const crystalGeo = new THREE.OctahedronGeometry(0.55);
        const crystalMat = new THREE.MeshStandardMaterial({ 
            color: 0x00f0ff, 
            emissive: 0x00c4d6, 
            emissiveIntensity: 0.8,
            roughness: 0.2,
            metalness: 0.8
        });
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

        const dishGeo = new THREE.ConeGeometry(0.6, 0.3, 8, 1, true);
        dishGeo.rotateX(Math.PI / 2);
        const dishMesh = new THREE.Mesh(dishGeo, woodMat);
        dishMesh.position.set(0, 3.8, 0.2);
        telegraphGroup.add(dishMesh);

        islandGroup.add(telegraphGroup);
        interactiveNodes.push({ mesh: telegraphGroup, landmarkIndex: 7 });

        // 6. Low-Poly Trees
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

            const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 0.9, 6);
            const trunkMat = new THREE.MeshLambertMaterial({ color: 0x582f0e, flatShading: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.y = 0.45;
            trunk.castShadow = true;
            treeGroup.add(trunk);

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

        // 7. Floating Cargo Pods in the Water (Salvageable Secrets)
        interface WaterCrate {
            mesh: THREE.Mesh;
            basePos: THREE.Vector3;
            angle: number;
            dist: number;
            speed: number;
            artifactId: number;
            salvaged: boolean;
        }
        const waterCrates: WaterCrate[] = [];
        const crateGeo = new THREE.BoxGeometry(0.85, 0.55, 0.55);

        for (let i = 0; i < 18; i++) {
            const crateMat = new THREE.MeshLambertMaterial({ 
                color: i % 2 === 0 ? 0x0077b6 : 0xd90429, 
                flatShading: true 
            });
            const cMesh = new THREE.Mesh(crateGeo, crateMat);
            const dist = 14 + Math.random() * 8.5;
            const angle = (i / 18) * Math.PI * 2;
            cMesh.position.set(Math.cos(angle) * dist, 0.2, Math.sin(angle) * dist);
            cMesh.castShadow = true;
            scene.add(cMesh);

            waterCrates.push({
                mesh: cMesh,
                basePos: cMesh.position.clone(),
                angle,
                dist,
                speed: 0.002 * (i % 2 === 0 ? 1 : -1),
                artifactId: i + 1,
                salvaged: false
            });
        }

        // 8. The Animated Low-Poly Wayfarer Character
        const characterGroup = new THREE.Group();
        characterGroup.position.set(0, 4.0, -4.5);
        islandGroup.add(characterGroup);

        // Body / Cloak
        const bodyGeo = new THREE.ConeGeometry(0.3, 0.8, 6);
        const bodyMat = new THREE.MeshLambertMaterial({ color: 0x2b2d42, flatShading: true });
        const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
        bodyMesh.position.y = 0.55;
        bodyMesh.castShadow = true;
        characterGroup.add(bodyMesh);

        // Head
        const headGeo = new THREE.SphereGeometry(0.18, 6, 6);
        const headMat = new THREE.MeshLambertMaterial({ color: 0xf4a261, flatShading: true });
        const headMesh = new THREE.Mesh(headGeo, headMat);
        headMesh.position.y = 1.05;
        headMesh.castShadow = true;
        characterGroup.add(headMesh);

        // Hood / Hat
        const hatGeo = new THREE.ConeGeometry(0.28, 0.35, 6);
        const hatMat = new THREE.MeshLambertMaterial({ color: 0x1d3557, flatShading: true });
        const hatMesh = new THREE.Mesh(hatGeo, hatMat);
        hatMesh.position.y = 1.25;
        characterGroup.add(hatMesh);

        // Walking Staff with glowing gem
        const staffGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.2, 5);
        const staffMat = new THREE.MeshLambertMaterial({ color: 0x7f5539, flatShading: true });
        const staffMesh = new THREE.Mesh(staffGeo, staffMat);
        staffMesh.position.set(0.32, 0.6, 0.15);
        staffMesh.rotation.z = -0.15;
        characterGroup.add(staffMesh);

        const gemGeo = new THREE.OctahedronGeometry(0.08);
        const gemMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
        const gemMesh = new THREE.Mesh(gemGeo, gemMat);
        gemMesh.position.set(0.35, 1.22, 0.15);
        characterGroup.add(gemMesh);

        // Legs (left & right)
        const legGeo = new THREE.BoxGeometry(0.08, 0.3, 0.08);
        const legMat = new THREE.MeshLambertMaterial({ color: 0x111111, flatShading: true });
        
        const leftLeg = new THREE.Mesh(legGeo, legMat);
        leftLeg.position.set(-0.1, 0.15, 0);
        characterGroup.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeo, legMat);
        rightLeg.position.set(0.1, 0.15, 0);
        characterGroup.add(rightLeg);

        // Character motion state
        const wandererTarget = new THREE.Vector3(0, 4.0, -4.5);
        let walkCycle = 0;

        cameraBridgeRef.current.moveWanderer = (target: [number, number, number]) => {
            wandererTarget.set(target[0], target[1], target[2]);
        };

        // 9. Atmospheric 220-Particle System (Motes / Fireflies / Sea Spray)
        const particleCount = 220;
        const particleGeo = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        const particleVelocities: { x: number; y: number; z: number }[] = [];

        for (let p = 0; p < particleCount; p++) {
            particlePositions[p * 3] = (Math.random() - 0.5) * 32;
            particlePositions[p * 3 + 1] = 1.0 + Math.random() * 8.0;
            particlePositions[p * 3 + 2] = (Math.random() - 0.5) * 32;
            particleVelocities.push({
                x: (Math.random() - 0.5) * 0.015,
                y: 0.005 + Math.random() * 0.01,
                z: (Math.random() - 0.5) * 0.015
            });
        }
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const particleMat = new THREE.PointsMaterial({
            color: 0x00f0ff,
            size: 0.22,
            transparent: true,
            opacity: 0.65,
            blending: THREE.AdditiveBlending
        });
        const particleSystem = new THREE.Points(particleGeo, particleMat);
        scene.add(particleSystem);

        // 10. Pointer & Touch Event Handlers with Drag Distance Gate
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        let isPointerDown = false;
        let pointerDownPos = { x: 0, y: 0 };
        let lastPointerPos = { x: 0, y: 0 };
        let angularVelocity = { theta: 0, phi: 0 };
        let pinchStartDistance = 0;

        const currentTarget = new THREE.Vector3(0, 3, 0);
        const destTarget = new THREE.Vector3(0, 3, 0);
        const destPos = new THREE.Vector3(0, 10, 24);

        const onPointerDown = (e: PointerEvent) => {
            if (e.target !== renderer.domElement) return;
            isPointerDown = true;
            pointerDownPos = { x: e.clientX, y: e.clientY };
            lastPointerPos = { x: e.clientX, y: e.clientY };
            angularVelocity = { theta: 0, phi: 0 };
            audio.startOceanAmbience();
        };

        const onPointerMove = (e: PointerEvent) => {
            if (!isPointerDown) return;
            const dx = e.clientX - lastPointerPos.x;
            const dy = e.clientY - lastPointerPos.y;

            const offset = camera.position.clone().sub(currentTarget);
            let radius = offset.length();
            let theta = Math.atan2(offset.x, offset.z);
            let phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius)));

            const dTheta = -dx * 0.0055;
            const dPhi = -dy * 0.0055;

            angularVelocity = { theta: dTheta, phi: dPhi };

            theta += dTheta;
            phi = Math.max(0.18, Math.min(Math.PI / 2 - 0.06, phi + dPhi));

            destPos.x = currentTarget.x + radius * Math.sin(phi) * Math.sin(theta);
            destPos.y = currentTarget.y + radius * Math.cos(phi);
            destPos.z = currentTarget.z + radius * Math.sin(phi) * Math.cos(theta);

            lastPointerPos = { x: e.clientX, y: e.clientY };
        };

        const onPointerUp = (e: PointerEvent) => {
            if (!isPointerDown) return;
            isPointerDown = false;

            const dragDist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
            if (dragDist > 6) return;

            const rect = container.getBoundingClientRect();
            pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(pointer, camera);

            // 1. Check landmarks
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

            // 2. Check water cargo crates
            const crateMeshes = waterCrates.map(c => c.mesh);
            const crateHits = raycaster.intersectObjects(crateMeshes);
            if (crateHits.length > 0) {
                const hitCrate = waterCrates.find(c => c.mesh === crateHits[0].object);
                if (hitCrate && !hitCrate.salvaged) {
                    hitCrate.salvaged = true;
                    hitCrate.mesh.position.y += 2.2;
                    audio.playSalvage();
                    setCollectedCargo(prev => prev + 1);

                    const artifact = SECRET_ARTIFACTS.find(a => a.id === hitCrate.artifactId) || SECRET_ARTIFACTS[0];
                    setActiveArtifact(artifact);
                }
            }
        };

        // Mobile Touch Pinch-to-Zoom
        const onTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                pinchStartDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
            }
        };

        const onTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 2 && pinchStartDistance > 0) {
                const currentDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const delta = pinchStartDistance - currentDist;
                pinchStartDistance = currentDist;

                const dir = camera.position.clone().sub(currentTarget).normalize();
                let dist = camera.position.distanceTo(currentTarget);
                dist = Math.max(7, Math.min(42, dist + delta * 0.05));
                destPos.copy(currentTarget).add(dir.multiplyScalar(dist));
            }
        };

        const onWheel = (e: WheelEvent) => {
            const dir = camera.position.clone().sub(currentTarget).normalize();
            let dist = camera.position.distanceTo(currentTarget);
            dist = Math.max(7, Math.min(42, dist + e.deltaY * 0.025));
            destPos.copy(currentTarget).add(dir.multiplyScalar(dist));
        };

        cameraBridgeRef.current.flyTo = (target: [number, number, number], pos: [number, number, number]) => {
            destTarget.set(target[0], target[1], target[2]);
            destPos.set(pos[0], pos[1], pos[2]);
        };

        cameraBridgeRef.current.setLightingPreset = (preset: LightingPreset) => {
            targetSkyColor.setHex(preset.skyColor);
            targetFogColor.setHex(preset.fogColor);
            targetSunColor.setHex(preset.sunColor);
            targetSunIntensity = preset.sunIntensity;
            targetAmbientColor.setHex(preset.ambientColor);
            targetWaterColor.setHex(preset.waterColor);
            waterMat.opacity = preset.waterOpacity;
            particleMat.color.setHex(preset.skyColor === 0x050a14 ? 0x00f0ff : (preset.skyColor === 0x3d1c28 ? 0xffaa5e : 0xffffff));
        };

        const domElem = renderer.domElement;
        domElem.style.touchAction = 'none';
        domElem.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
        domElem.addEventListener('touchstart', onTouchStart, { passive: true });
        domElem.addEventListener('touchmove', onTouchMove, { passive: true });
        domElem.addEventListener('wheel', onWheel, { passive: true });

        // 11. Main Render & Buoyancy Loop
        let animId: number;
        let clock = new THREE.Clock();

        const animate = () => {
            const elapsed = clock.getElapsedTime();

            // Smooth spring camera transition & lookAt
            currentTarget.lerp(destTarget, 0.05);
            camera.position.lerp(destPos, 0.05);
            camera.lookAt(currentTarget);

            // Orbit velocity inertia damping
            if (!isPointerDown && (Math.abs(angularVelocity.theta) > 0.0001 || Math.abs(angularVelocity.phi) > 0.0001)) {
                angularVelocity.theta *= 0.92;
                angularVelocity.phi *= 0.92;
                const offset = destPos.clone().sub(currentTarget);
                let radius = offset.length();
                let theta = Math.atan2(offset.x, offset.z) + angularVelocity.theta;
                let phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius))) + angularVelocity.phi;
                phi = Math.max(0.18, Math.min(Math.PI / 2 - 0.06, phi));
                destPos.x = currentTarget.x + radius * Math.sin(phi) * Math.sin(theta);
                destPos.y = currentTarget.y + radius * Math.cos(phi);
                destPos.z = currentTarget.z + radius * Math.sin(phi) * Math.cos(theta);
            }

            // Smooth Diurnal Color Lerping
            currentSkyColor.lerp(targetSkyColor, 0.04);
            scene.background = currentSkyColor;
            currentFogColor.lerp(targetFogColor, 0.04);
            if (scene.fog) scene.fog.color = currentFogColor;
            currentSunColor.lerp(targetSunColor, 0.04);
            dirLight.color = currentSunColor;
            dirLight.intensity = THREE.MathUtils.lerp(dirLight.intensity, targetSunIntensity, 0.04);
            currentAmbientColor.lerp(targetAmbientColor, 0.04);
            hemiLight.groundColor = currentAmbientColor;
            currentWaterColor.lerp(targetWaterColor, 0.04);
            waterMat.color = currentWaterColor;

            // Rotate Lighthouse Beacon
            beaconBeam.rotation.y += 0.025;

            // Rotate Windmill Sails
            sailsGroup.rotation.z += 0.018;

            // Crystal pulse
            crystalMesh.rotation.y += 0.02;
            crystalMesh.rotation.x += 0.01;
            crystalLight.intensity = 1.4 + Math.sin(elapsed * 4) * 0.4;

            // Dynamic Vertex Wave Displacement for Rolling Sea
            const posAttr = waterGeo.attributes.position;
            for (let i = 0; i < posAttr.count; i++) {
                const u = initialWaterPos[i * 3];
                const w = initialWaterPos[i * 3 + 2];
                const wave = Math.sin(u * 0.14 + elapsed * 1.5) * Math.cos(w * 0.14 + elapsed * 1.3) * 0.32
                           + Math.sin(u * 0.28 + w * 0.22 + elapsed * 2.0) * 0.12;
                posAttr.setY(i, wave);
            }
            posAttr.needsUpdate = true;
            waterGeo.computeVertexNormals();

            // Shoreline Foam ring pulse
            foamMesh.scale.setScalar(1 + Math.sin(elapsed * 1.8) * 0.025);
            foamMat.opacity = 0.28 + Math.sin(elapsed * 1.8) * 0.08;

            // Animate Water Crates Buoyancy
            waterCrates.forEach((c) => {
                c.angle += c.speed;
                c.mesh.position.x = Math.cos(c.angle) * c.dist;
                c.mesh.position.z = Math.sin(c.angle) * c.dist;
                const bobY = 0.2 + Math.sin(elapsed * 2.5 + c.dist) * 0.15;
                if (!c.salvaged) {
                    c.mesh.position.y = bobY;
                } else {
                    c.mesh.position.y = THREE.MathUtils.lerp(c.mesh.position.y, -1.5, 0.02);
                }
                c.mesh.rotation.y += 0.01;
                c.mesh.rotation.z = Math.sin(elapsed * 2) * 0.06;
            });

            // Animate Wayfarer Character Walking
            const distToTarget = characterGroup.position.distanceTo(wandererTarget);
            if (distToTarget > 0.15) {
                const moveDir = wandererTarget.clone().sub(characterGroup.position).normalize();
                characterGroup.position.addScaledVector(moveDir, 0.09);

                const lookAngle = Math.atan2(moveDir.x, moveDir.z);
                characterGroup.rotation.y = THREE.MathUtils.lerp(characterGroup.rotation.y, lookAngle, 0.15);

                walkCycle += 0.25;
                leftLeg.rotation.x = Math.sin(walkCycle) * 0.6;
                rightLeg.rotation.x = -Math.sin(walkCycle) * 0.6;
                staffMesh.position.y = 0.6 + Math.sin(walkCycle * 2) * 0.05;
                bodyMesh.position.y = 0.55 + Math.abs(Math.sin(walkCycle)) * 0.06;
            } else {
                leftLeg.rotation.x = THREE.MathUtils.lerp(leftLeg.rotation.x, 0, 0.1);
                rightLeg.rotation.x = THREE.MathUtils.lerp(rightLeg.rotation.x, 0, 0.1);
                bodyMesh.position.y = 0.55 + Math.sin(elapsed * 2.5) * 0.02;
                gemMesh.rotation.y += 0.03;
            }

            // Animate Atmospheric Particle Field
            const pPos = particleGeo.attributes.position.array as Float32Array;
            for (let p = 0; p < particleCount; p++) {
                pPos[p * 3] += particleVelocities[p].x;
                pPos[p * 3 + 1] += particleVelocities[p].y;
                pPos[p * 3 + 2] += particleVelocities[p].z;

                if (pPos[p * 3 + 1] > 9.0) pPos[p * 3 + 1] = 1.0;
                if (pPos[p * 3] > 16) pPos[p * 3] = -16;
                if (pPos[p * 3] < -16) pPos[p * 3] = 16;
                if (pPos[p * 3 + 2] > 16) pPos[p * 3 + 2] = -16;
                if (pPos[p * 3 + 2] < -16) pPos[p * 3 + 2] = 16;
            }
            particleGeo.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
            animId = requestAnimationFrame(animate);
        };

        animate();

        // 12. Window Resize Handler
        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animId);
            domElem.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            window.removeEventListener('pointercancel', onPointerUp);
            domElem.removeEventListener('touchstart', onTouchStart);
            domElem.removeEventListener('touchmove', onTouchMove);
            domElem.removeEventListener('wheel', onWheel);
            window.removeEventListener('resize', handleResize);
            if (domElem.parentNode) {
                domElem.parentNode.removeChild(domElem);
            }
            renderer.dispose();
            audio.stopOceanAmbience();
        };
    }, [handleSelectLandmark]);

    // Update 3D Lighting when time-of-day changes
    useEffect(() => {
        cameraBridgeRef.current.setLightingPreset(LIGHTING_PRESETS[timeOfDay]);
    }, [timeOfDay]);

    return (
        <div className="relative w-full h-screen overflow-hidden select-none font-sans text-gray-100 bg-[#070b14]">
            
            {/* ========================================================= */}
            {/* Top Navigation Bar: Identity, Time-of-Day & Quick Actions */}
            {/* ========================================================= */}
            <header className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                
                {/* Left: Wayfarer Identity & Cargo Score */}
                <div className="flex items-center gap-3 sm:gap-4 bg-black/80 border border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md pointer-events-auto shadow-2xl">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                        <MdExplore className="text-2xl" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                                VIVEK KUSHWAH
                            </span>
                            <span className="text-[10px] text-cyan-400 font-mono hidden sm:inline">
                                [PLATFORM ARCHITECT]
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>SLO: 99.99% · The Cloud Haven</span>
                        </div>
                    </div>
                    {collectedCargo > 0 && (
                        <div className="hidden md:flex items-center gap-1.5 pl-3 border-l border-white/10 text-xs font-mono text-amber-300">
                            <MdAutoAwesome className="animate-spin text-amber-400" />
                            <span>{collectedCargo} Pods Rescued</span>
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
                        title="Automatic guided cruise across all 8 landmarks (Hotkey: T)"
                        className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all backdrop-blur-md ${
                            tourActive 
                                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                                : 'bg-black/75 border-white/10 text-gray-300 hover:text-white'
                        }`}
                    >
                        {tourActive ? <MdPause className="text-cyan-400" /> : <MdPlayArrow className="text-cyan-400" />}
                        <span className="hidden sm:inline">{tourActive ? 'PAUSE CRUISE' : 'TOUR HAVEN'}</span>
                    </button>

                    {/* Time-of-Day Lighting Switcher */}
                    <div className="flex items-center gap-1 bg-black/75 border border-white/10 p-1 rounded-xl backdrop-blur-md">
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
                        title="Open Full Recruiter Resume Codex (Hotkey: R)"
                        className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md shadow-lg"
                    >
                        <MdMenuBook className="text-cyan-400 text-sm" />
                        <span className="hidden sm:inline">FULL RESUME</span>
                    </button>

                    {/* Audio Toggle */}
                    <button
                        onClick={toggleSound}
                        title={soundOn ? 'Mute Ocean Ambience (Hotkey: M)' : 'Enable Ocean Ambience (Hotkey: M)'}
                        className="p-2.5 rounded-xl bg-black/75 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md shadow-lg"
                    >
                        {soundOn ? <MdVolumeUp className="text-base text-cyan-400" /> : <MdVolumeOff className="text-base text-gray-500" />}
                    </button>

                    {/* Help Guide */}
                    <button
                        onClick={() => setHelpOpen(true)}
                        title="Archipelago Hotkeys & Exploration Guide"
                        className="p-2.5 rounded-xl bg-black/75 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md shadow-lg"
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
            {/* Architect Field Journal (Desktop Docked / Mobile Collapsible) */}
            {/* ========================================================= */}
            <aside className="absolute bottom-24 sm:bottom-28 right-4 sm:right-6 top-auto sm:top-24 z-30 w-[calc(100%-2rem)] sm:w-[470px] pointer-events-none flex flex-col justify-end">
                <div 
                    style={{ backgroundColor: 'rgba(9, 14, 26, 0.96)', borderColor: 'rgba(255, 255, 255, 0.16)' }}
                    className="border rounded-3xl p-5 sm:p-7 backdrop-blur-2xl pointer-events-auto shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-y-auto max-h-[70vh] sm:max-h-full transition-all text-left text-white"
                >
                    
                    {/* Chapter Header & Mobile Drawer Handle */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                                {activeLandmark.code} // {activeLandmark.category}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${activePreset.badgeBg}`}>
                                {activeLandmark.badge}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-gray-400">
                                {activeLandmarkIndex + 1} of {LANDMARKS.length}
                            </span>
                            <button
                                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                                className="sm:hidden p-1 text-gray-400 hover:text-white"
                                title="Toggle Field Journal"
                            >
                                {mobileDrawerOpen ? <MdExpandMore className="text-xl" /> : <MdExpandLess className="text-xl" />}
                            </button>
                        </div>
                    </div>

                    {/* Collapsible Content Area */}
                    {mobileDrawerOpen && (
                        <div>
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

                            {/* Certifications Highlights (if Origin) */}
                            {activeLandmark.certifications && (
                                <div className="mb-4 space-y-1.5">
                                    <h4 className="text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest mb-1.5">
                                        Verified Professional Credentials:
                                    </h4>
                                    {activeLandmark.certifications.map(c => (
                                        <div key={c.name} className="p-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <MdVerified className="text-cyan-400 text-sm shrink-0" />
                                                <span className="font-semibold text-gray-100">{c.name}</span>
                                            </div>
                                            <span className="text-[10px] text-cyan-300 font-mono">{c.year}</span>
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

                            {/* Featured Architecture Projects (if Landmark 06 AI Labs) */}
                            {activeLandmark.projects && (
                                <div className="mb-4">
                                    <h4 className="text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest mb-2.5">
                                        Flagship Engineering Projects:
                                    </h4>
                                    <div className="space-y-2.5">
                                        {activeLandmark.projects.map(proj => (
                                            <div key={proj.title} className="p-3 rounded-xl bg-white/[0.05] border border-white/15">
                                                <div className="text-xs font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                                                    <MdCode />
                                                    <span>{proj.title}</span>
                                                </div>
                                                <p className="text-[11px] text-gray-200 leading-relaxed mb-2 font-light">
                                                    {proj.description}
                                                </p>
                                                <div className="flex flex-wrap gap-1">
                                                    {proj.technologies.map(t => (
                                                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-gray-300 font-mono">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

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
                    )}
                </div>
            </aside>

            {/* ========================================================= */}
            {/* Bottom Archipelago Compass Dock (Click to Fly Instantly) */}
            {/* ========================================================= */}
            <footer className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
                
                {/* 8 Landmark Stations */}
                <div className="flex items-center gap-1.5 bg-black/85 border border-white/15 p-2 rounded-2xl backdrop-blur-xl pointer-events-auto overflow-x-auto max-w-full shadow-2xl">
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
            {/* Decrypted Salvage Artifact Modal */}
            {/* ========================================================= */}
            {activeArtifact && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
                    <div className="bg-[#0b1220] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-[0_0_50px_rgba(6,182,212,0.25)] text-left">
                        <button
                            onClick={() => setActiveArtifact(null)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg bg-white/5"
                        >
                            <MdClose className="text-xl" />
                        </button>
                        
                        <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-cyan-400">
                            <MdInventory2 className="text-base" />
                            <span>DECRYPTED CARGO ARTIFACT #{activeArtifact.id}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1">
                            {activeArtifact.title}
                        </h3>
                        <div className="text-xs text-amber-300 font-mono mb-4">
                            System: {activeArtifact.system}
                        </div>

                        <p className="text-xs text-gray-200 leading-relaxed mb-4">
                            {activeArtifact.insight}
                        </p>

                        <div className="p-3 rounded-xl bg-black/70 border border-white/10 font-mono text-[11px] text-emerald-400 mb-6 overflow-x-auto">
                            <pre className="whitespace-pre-wrap">{activeArtifact.snippet}</pre>
                        </div>

                        <button
                            onClick={() => setActiveArtifact(null)}
                            className="w-full py-2.5 rounded-xl bg-cyan-500 text-black text-xs font-bold font-mono uppercase hover:bg-cyan-400 transition-colors"
                        >
                            Stow Artifact in Field Codex
                        </button>
                    </div>
                </div>
            )}

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

                            {/* Section 3: Flagship Architecture Projects */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                                    // 03 FLAGSHIP ENGINEERING PROJECTS
                                </h3>
                                <div className="space-y-4">
                                    {PROJECTS.map(p => (
                                        <div key={p.title} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                                            <div className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                                <MdCode className="text-cyan-400 text-base" />
                                                <span>{p.title}</span>
                                            </div>
                                            <p className="text-xs text-gray-300 leading-relaxed font-light mb-3">
                                                {p.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {p.technologies.map(t => (
                                                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 4: Verified Credentials & Certifications */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                                    // 04 CERTIFICATIONS &amp; CREDENTIALS
                                </h3>
                                <div className="space-y-2.5">
                                    {CERTIFICATIONS.map(c => (
                                        <div key={c.name} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <MdVerified className="text-cyan-400 text-lg" />
                                                <div>
                                                    <div className="text-xs font-bold text-white">{c.name}</div>
                                                    <div className="text-[10px] text-gray-400 font-mono">{c.issuer}</div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-cyan-400 font-mono font-semibold">{c.year}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 5: Skill Domains */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                                    // 05 PLATFORM SKILL MATRIX
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

                            {/* Section 6: Education */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                                    // 06 ACADEMIC FOUNDATION
                                </h3>
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                                    <MdSchool className="text-2xl text-cyan-400 shrink-0" />
                                    <div>
                                        <div className="text-xs font-bold text-white">{ABOUT.education.degree}</div>
                                        <div className="text-[11px] text-gray-300">{ABOUT.education.school} ({ABOUT.education.period})</div>
                                    </div>
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
                            <span>The Cloud Haven Exploration Guide</span>
                        </h3>
                        <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                            Welcome to Vivek Kushwah's interactive 3D island diorama. Every building and landmark represents a real production milestone and platform achievement.
                        </p>
                        <ul className="text-xs space-y-2.5 text-gray-300 font-mono mb-6">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Click &amp; Drag:</strong> Orbit 360° around the island with smooth inertia.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Click Any Landmark:</strong> The Wayfarer character walks over and camera glides in.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Click Floating Pods:</strong> Rescues cargo pods &amp; decrypts engineering logs.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                <strong>Hotkeys:</strong> [1-8] Jump Isle · [T] Tour · [L] Lighting · [M] Sound · [R] Resume.
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
