import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MdSensors, 
    MdAutoAwesome, 
    MdHub, 
    MdPublishedWithChanges, 
    MdWarning, 
    MdPlayArrow, 
    MdClose
} from 'react-icons/md';

interface TopologyNode {
    id: string;
    title: string;
    stage: string;
    icon: React.ReactNode;
    color: string;
    technologies: string[];
    description: string;
    metrics: { label: string; value: string }[];
}

const NODES: TopologyNode[] = [
    {
        id: 'ingest',
        stage: '01_INGESTION',
        title: 'OpenTelemetry & Metric Pipeline',
        icon: <MdSensors className="text-xl" />,
        color: '#00f3ff',
        technologies: ['Prometheus', 'Thanos', 'Grafana Loki', 'OTel Collector', 'Fluentbit'],
        description: 'Ingesting 2T+ events/month across multi-cloud environments. Real-time distributed traces, logs, and high-cardinality time series metrics.',
        metrics: [
            { label: 'Throughput', value: '45.2k req/s' },
            { label: 'Ingestion Latency', value: '4.2 ms' },
            { label: 'Log Compression', value: '82%' }
        ]
    },
    {
        id: 'mesh',
        stage: '02_MESH_INFRA',
        title: 'Cilium eBPF & Dynamic Scaling',
        icon: <MdHub className="text-xl" />,
        color: '#3b82f6',
        technologies: ['AWS EKS', 'Karpenter', 'Cilium eBPF', 'Terraform', 'OPA Gatekeeper'],
        description: 'Kernel-level observability via Cilium eBPF and sub-minute intelligent node provisioning with Karpenter, saving 40% on compute costs.',
        metrics: [
            { label: 'Nodes Active', value: '42 / 120' },
            { label: 'Provisioning Time', value: '38s' },
            { label: 'Network Policy Drops', value: '0.00%' }
        ]
    },
    {
        id: 'agentic-ai',
        stage: '03_AGENTIC_REASONING',
        title: 'Agentic AI Observability Assistant',
        icon: <MdAutoAwesome className="text-xl" />,
        color: '#ff007f',
        technologies: ['LLM Signal Correlation', 'Vector Embeddings', 'Automated RCA', 'LangChain'],
        description: 'Autonomous AI agents correlating spans with memory leaks, cross-referencing GitHub commits, cutting incident RCA time by 40%.',
        metrics: [
            { label: 'RCA Speedup', value: '40% Faster' },
            { label: 'Signal Correlation', value: '99.2%' },
            { label: 'False Positives', value: '< 1.4%' }
        ]
    },
    {
        id: 'healing',
        stage: '04_GITOPS_RECOVERY',
        title: 'GitOps Self-Healing Remediation',
        icon: <MdPublishedWithChanges className="text-xl" />,
        color: '#10b981',
        technologies: ['Flux v2', 'Argo CD', 'GitHub Actions', 'OpenCost', 'Slack Webhooks'],
        description: 'Declarative auto-reconciliation and canary rollouts. When an anomaly is detected, corrective patches or autoscaling policies deploy autonomously.',
        metrics: [
            { label: 'Rollout Success', value: '99.98%' },
            { label: 'MTTR', value: '< 3.5 min' },
            { label: 'Audit Trail', value: '100% Cryptographic' }
        ]
    }
];

export const AgenticTraceVisualizer: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<TopologyNode | null>(null);
    const [simulating, setSimulating] = useState(false);
    const [simStep, setSimStep] = useState<number>(0);
    const [simLogs, setSimLogs] = useState<string[]>([
        'System operational. Telemetry pipelines running in steady state.',
        'eBPF network filters active. Karpenter bin-packing optimized at 40% FinOps savings.'
    ]);

    const runSimulation = () => {
        if (simulating) return;
        setSimulating(true);
        setSimStep(1);
        setSimLogs([
            '⚠️ [T+0s] Latency spike detected in payment-gateway: p99 > 1850ms',
            '📡 [T+1s] OpenTelemetry span anomaly flagged; correlation requested...'
        ]);

        setTimeout(() => {
            setSimStep(2);
            setSimLogs(prev => [
                ...prev,
                '🔍 [T+2s] Agentic AI Assistant correlating logs, metrics & recent GitOps commits...',
                '🧠 [T+3s] Root Cause Identified: Memory leak in worker pool v2.4.1 + pod throttling.'
            ]);
        }, 2200);

        setTimeout(() => {
            setSimStep(3);
            setSimLogs(prev => [
                ...prev,
                '⚡ [T+4s] Triggering automated GitOps hot-patch via ArgoCD & Karpenter capacity burst...',
                '✅ [T+5.5s] Latency normalized to 18ms. Incident resolved in 5.5s. SLA preserved.'
            ]);
        }, 4600);

        setTimeout(() => {
            setSimulating(false);
            setSimStep(0);
        }, 7500);
    };

    return (
        <section id="architecture" className="relative font-mono">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] bg-white/10 flex-grow"></div>
                <h2 className="text-[#00f3ff] text-xs sm:text-sm font-mono tracking-widest uppercase flex items-center gap-2">
                    <MdSensors className="text-base" />
                    <span>01 // ARCHITECTURAL TELEMETRY TOPOLOGY</span>
                </h2>
                <div className="h-[1px] bg-white/10 flex-grow"></div>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                {/* Background Ambient Glow */}
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#00f3ff]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none" />

                {/* Visualizer Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
                            <span>Autonomous Observability &amp; Self-Healing Loop</span>
                            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                                LIVE TOPOLOGY
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1 font-sans font-light">
                            Interactive architecture demonstrating Agentic AI signal correlation &amp; automated GitOps remediation.
                        </p>
                    </div>

                    {/* Simulation Trigger Button */}
                    <button
                        onClick={runSimulation}
                        disabled={simulating}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                            simulating
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 cursor-wait'
                                : 'bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/40 hover:bg-[#00f3ff] hover:text-black shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                        }`}
                    >
                        {simulating ? (
                            <>
                                <MdWarning className="text-base animate-pulse" />
                                <span>Simulating Incident ({simStep}/3)...</span>
                            </>
                        ) : (
                            <>
                                <MdPlayArrow className="text-base" />
                                <span>Simulate Production Incident</span>
                            </>
                        )}
                    </button>
                </div>

                {/* 4-Node Interactive Topology Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 mb-8">
                    {NODES.map((node, index) => {
                        const isSimActive = 
                            (simStep === 1 && index === 0) ||
                            (simStep === 2 && (index === 1 || index === 2)) ||
                            (simStep === 3 && index === 3);

                        const isSelected = selectedNode?.id === node.id;

                        return (
                            <div
                                key={node.id}
                                onClick={() => setSelectedNode(node)}
                                className={`group p-5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                                    isSimActive
                                        ? 'bg-amber-500/10 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.3)] scale-[1.02]'
                                        : isSelected
                                        ? 'bg-white/10 border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.25)]'
                                        : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                                }`}
                            >
                                {/* Stage number pill */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-semibold tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                        {node.stage}
                                    </span>
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: `${node.color}15`, color: node.color }}
                                    >
                                        {node.icon}
                                    </div>
                                </div>

                                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-[#00f3ff] transition-colors">
                                    {node.title}
                                </h3>

                                <p className="text-xs text-gray-400 leading-relaxed font-sans font-light line-clamp-2 mb-4">
                                    {node.description}
                                </p>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {node.technologies.slice(0, 3).map(tech => (
                                        <span
                                            key={tech}
                                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {node.technologies.length > 3 && (
                                        <span className="text-[10px] px-1.5 py-0.5 text-gray-500">
                                            +{node.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Status bar */}
                                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                                    <span className="text-gray-500">Status</span>
                                    <span className={`flex items-center gap-1 font-medium ${
                                        isSimActive ? 'text-amber-400 animate-pulse' : 'text-emerald-400'
                                    }`}>
                                        {isSimActive ? 'ANALYZING' : 'OPTIMAL'}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Simulated Telemetry Log Console */}
                <div className="bg-[#05070b] border border-white/10 rounded-xl p-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-gray-400">
                        <span className="flex items-center gap-1.5 text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                            REALTIME SRE EVENT STREAM
                        </span>
                        <span className="text-gray-500">FORMAT: JSON-L (OTEL ENGINE)</span>
                    </div>
                    <div className="space-y-1.5 overflow-hidden">
                        {simLogs.map((log, i) => (
                            <div
                                key={i}
                                className={`transition-all duration-300 ${
                                    log.includes('⚠️') 
                                        ? 'text-amber-300 font-semibold' 
                                        : log.includes('✅') 
                                        ? 'text-emerald-400 font-semibold' 
                                        : log.includes('🧠') || log.includes('🔍') 
                                        ? 'text-[#00f3ff]' 
                                        : 'text-gray-400'
                                }`}
                            >
                                {log}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Node Inspection Drawer Modal */}
            <AnimatePresence>
                {selectedNode && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="bg-[#0c0e14] border border-[#00f3ff]/40 rounded-2xl p-6 sm:p-8 max-w-xl w-full relative shadow-[0_0_40px_rgba(0,243,255,0.2)]"
                        >
                            <button
                                onClick={() => setSelectedNode(null)}
                                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <MdClose className="text-xl" />
                            </button>

                            <div className="text-[11px] font-mono text-[#00f3ff] tracking-widest uppercase mb-1">
                                {selectedNode.stage} // ARCHITECTURE TELEMETRY
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {selectedNode.title}
                            </h3>

                            <p className="text-sm text-gray-300 leading-relaxed font-sans font-light mb-6">
                                {selectedNode.description}
                            </p>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-3 gap-3 mb-6 font-mono">
                                {selectedNode.metrics.map(m => (
                                    <div key={m.label} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
                                        <div className="text-sm sm:text-base font-bold text-[#00f3ff]">{m.value}</div>
                                        <div className="text-[10px] text-gray-400 uppercase mt-0.5">{m.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-6">
                                <div className="text-xs text-gray-400 font-mono uppercase mb-2">Technologies Configured:</div>
                                <div className="flex flex-wrap gap-2">
                                    {selectedNode.technologies.map(t => (
                                        <span key={t} className="text-xs px-2.5 py-1 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/20 text-white font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedNode(null)}
                                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                            >
                                Close Inspection Panel
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
