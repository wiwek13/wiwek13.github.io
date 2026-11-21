import React, { useState } from 'react';
import { 
    MdTimeline, 
    MdAttachMoney, 
    MdAutoAwesome, 
    MdCheckCircle, 
    MdInfoOutline,
    MdSpeed,
    MdCode,
    MdSecurity
} from 'react-icons/md';

interface Span {
    id: string;
    service: string;
    operation: string;
    duration: number; // ms
    offset: number; // ms
    status: 'OK' | 'WARN';
    type: 'gateway' | 'ingress' | 'compute' | 'queue' | 'database' | 'ai';
    tags: Record<string, string>;
}

const TRACE_SPANS: Span[] = [
    {
        id: 'span-1',
        service: 'AWS API Gateway',
        operation: 'POST /api/v2/transactions/settle',
        duration: 121,
        offset: 0,
        status: 'OK',
        type: 'gateway',
        tags: {
            'http.status_code': '200',
            'gateway.scale': '2T requests/month',
            'tls.version': 'TLS 1.3',
            'net.peer.ip': '157.240.19.35'
        }
    },
    {
        id: 'span-2',
        service: 'Cilium eBPF Service Mesh',
        operation: 'routing.cluster.internal:443',
        duration: 112,
        offset: 4,
        status: 'OK',
        type: 'ingress',
        tags: {
            'bpf.mode': 'Direct Server Return (DSR)',
            'mesh.encryption': 'WireGuard Kernel Mode',
            'packet.latency': '0.4ms'
        }
    },
    {
        id: 'span-3',
        service: 'Settlement Service (EKS Pod)',
        operation: 'processSettlementIntent()',
        duration: 72,
        offset: 12,
        status: 'OK',
        type: 'compute',
        tags: {
            'k8s.pod': 'settlement-worker-7f89d-42k9x',
            'node.provisioner': 'Karpenter Spot Instance',
            'node.type': 'c6i.2xlarge',
            'cpu.utilization': '42%'
        }
    },
    {
        id: 'span-4',
        service: 'Kafka Quorum Cluster',
        operation: 'Produce [financial.settlement.v2]',
        duration: 18,
        offset: 35,
        status: 'OK',
        type: 'queue',
        tags: {
            'kafka.partition': '3',
            'kafka.replication_factor': '3',
            'consensus': 'Raft Quorum Metadata',
            'ack': 'all (-1)'
        }
    },
    {
        id: 'span-5',
        service: 'PostgreSQL CloudNativePG',
        operation: 'INSERT INTO ledger_entries',
        duration: 28,
        offset: 58,
        status: 'OK',
        type: 'database',
        tags: {
            'db.system': 'postgresql',
            'replica.sync': 'Synchronized Standby WAL',
            'tx.isolation': 'Serializable',
            'connection.pool': 'PgBouncer (Active)'
        }
    },
    {
        id: 'span-6',
        service: 'Agentic AI Observability Assistant',
        operation: 'correlateAnomalyVectors()',
        duration: 16,
        offset: 92,
        status: 'OK',
        type: 'ai',
        tags: {
            'signal.model': 'LLM Vector Semantic Correlator',
            'anomaly.score': '0.012 (Nominal)',
            'rca.speedup': '40% MTTR Reduction',
            'status': 'SLO Guaranteed (99.99%)'
        }
    }
];

export const LiveTraceTelemetry: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'trace' | 'finops' | 'ai'>('trace');
    const [selectedSpan, setSelectedSpan] = useState<Span>(TRACE_SPANS[0]);

    return (
        <section id="telemetry" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
                            // LIVE CONTROL PLANE TELEMETRY
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Interactive Architecture Workbench
                        </h2>
                    </div>

                    {/* View Switcher Tabs */}
                    <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 self-start md:self-auto backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('trace')}
                            className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                                activeTab === 'trace'
                                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <MdTimeline className="text-base" />
                            <span>Distributed Trace Waterfall</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('finops')}
                            className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                                activeTab === 'finops'
                                    ? 'bg-emerald-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <MdAttachMoney className="text-base" />
                            <span>FinOps 40% Savings</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('ai')}
                            className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                                activeTab === 'ai'
                                    ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <MdAutoAwesome className="text-base" />
                            <span>Agentic AI RCA</span>
                        </button>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* TAB 1: Distributed Trace Waterfall */}
                {/* ========================================================= */}
                {activeTab === 'trace' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        
                        {/* Trace Spans List (Left 2 Columns) */}
                        <div className="lg:col-span-2 p-5 sm:p-6 rounded-3xl bg-[#090d16] border border-white/10 shadow-2xl">
                            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                                <div>
                                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                                        TRACE ID:
                                    </span>
                                    <span className="text-xs font-mono text-cyan-300 ml-2">
                                        7f89d42k9x-settle-prod-001
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-mono">
                                    <span className="text-gray-400">Total Duration:</span>
                                    <span className="text-emerald-400 font-bold">121ms</span>
                                </div>
                            </div>

                            {/* Spans Timeline Waterfall */}
                            <div className="space-y-3">
                                {TRACE_SPANS.map((span) => {
                                    const isSelected = selectedSpan.id === span.id;
                                    const widthPercent = (span.duration / 121) * 100;
                                    const leftPercent = (span.offset / 121) * 100;

                                    return (
                                        <div
                                            key={span.id}
                                            onClick={() => setSelectedSpan(span)}
                                            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                                                isSelected
                                                    ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.15)]'
                                                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between text-xs mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                                    <span className="font-bold text-white">{span.service}</span>
                                                    <span className="text-[11px] text-gray-400 font-mono hidden sm:inline">
                                                        ({span.operation})
                                                    </span>
                                                </div>
                                                <span className="font-mono text-xs text-gray-300 font-semibold">
                                                    {span.duration}ms
                                                </span>
                                            </div>

                                            {/* Waterfall Bar */}
                                            <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden relative">
                                                <div
                                                    style={{
                                                        marginLeft: `${leftPercent}%`,
                                                        width: `${Math.max(widthPercent, 5)}%`
                                                    }}
                                                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-sm"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Selected Span Metadata Inspector (Right Column) */}
                        <div className="p-5 sm:p-6 rounded-3xl bg-[#090d16] border border-white/10 shadow-2xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                                        <MdInfoOutline className="text-base" />
                                        <span>SPAN ATTRIBUTES</span>
                                    </span>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                                        STATUS: {selectedSpan.status}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-white mb-1">
                                    {selectedSpan.service}
                                </h3>
                                <p className="text-xs font-mono text-cyan-300 mb-4">
                                    {selectedSpan.operation}
                                </p>

                                <div className="space-y-2 mb-4">
                                    {Object.entries(selectedSpan.tags).map(([key, val]) => (
                                        <div key={key} className="p-2.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs">
                                            <div className="text-[10px] text-gray-400">{key}</div>
                                            <div className="text-gray-200 font-medium truncate">{val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-gray-400">
                                OpenTelemetry v1.28 · Prometheus &amp; Grafana Tempo Instrumented
                            </div>
                        </div>

                    </div>
                )}

                {/* ========================================================= */}
                {/* TAB 2: FinOps 40% Savings Matrix */}
                {/* ========================================================= */}
                {activeTab === 'finops' && (
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                                    <span>Enterprise Cloud FinOps Architecture</span>
                                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
                                        -40% CLOUD SPEND
                                    </span>
                                </h3>
                                <p className="text-xs text-gray-400 font-mono">
                                    Opencost governance, capacity reservation pooling &amp; idle workload pause schedules (Zebpay &amp; Vivvix).
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-right">
                                <div>
                                    <div className="text-[10px] text-gray-400 font-mono uppercase">Annualized Savings</div>
                                    <div className="text-2xl font-extrabold text-emerald-400 font-mono">$960,000 / yr</div>
                                </div>
                            </div>
                        </div>

                        {/* FinOps Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="text-xs font-bold text-cyan-300 font-mono mb-1">01. Karpenter Spot Orchestration</div>
                                <div className="text-xl font-bold text-white font-mono mb-2">-$420K Saved</div>
                                <p className="text-xs text-gray-300 leading-relaxed font-light">
                                    Dynamically provisioned spot fleet worker instances based on real-time pod resource requests, dropping node provisioning latency to 45 seconds.
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="text-xs font-bold text-cyan-300 font-mono mb-1">02. Automated Workload Auto-Suspend</div>
                                <div className="text-xl font-bold text-white font-mono mb-2">-$310K Saved</div>
                                <p className="text-xs text-gray-300 leading-relaxed font-light">
                                    Aggressive 60-second auto-suspend policies for Snowflake/Databricks query compute warehouses and Kubernetes dev/staging weekend sleeping.
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="text-xs font-bold text-cyan-300 font-mono mb-1">03. AWS DMS &amp; Storage Compaction</div>
                                <div className="text-xl font-bold text-white font-mono mb-2">-$230K Saved</div>
                                <p className="text-xs text-gray-300 leading-relaxed font-light">
                                    Thanos long-term metric downsampling to S3 object storage (cutting EBS disk bills by 70%) and tuning DMS replication buffer pipelines.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ========================================================= */}
                {/* TAB 3: Agentic AI Observability RCA */}
                {/* ========================================================= */}
                {activeTab === 'ai' && (
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-white/10 shadow-2xl">
                        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                                    <span>Agentic AI Observability Assistant</span>
                                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-bold">
                                        RCA -40% MTTR
                                    </span>
                                </h3>
                                <p className="text-xs text-gray-400 font-mono">
                                    Autonomous signal correlation across OpenTelemetry spans, Prometheus metrics, and GitOps deployments.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-gray-200 space-y-2 overflow-x-auto">
                            <div className="text-cyan-400">[02:14:02.192] INGEST: Prometheus anomaly detected on namespace `payments` (http_5xx_rate &gt; 0.05%)</div>
                            <div className="text-gray-400">[02:14:02.410] CORRELATE: Cross-referencing OpenTelemetry spans with Flux CD / Argo CD commits...</div>
                            <div className="text-amber-300">[02:14:02.890] MATCH: Isolated culprit commit `e7b91a` (DB connection pool timeout decrease from 30s to 2s)</div>
                            <div className="text-emerald-400">[02:14:03.110] RESOLUTION: Automated RCA summary generated &amp; routed to Slack #sre-ops with 1-click GitOps rollback PR.</div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};
