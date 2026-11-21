import React from 'react';
import { 
    MdTrendingUp, 
    MdSpeed, 
    MdShield, 
    MdAutoAwesome, 
    MdArrowDownward,
    MdDescription,
    MdEmail,
    MdOpenInNew,
    MdCode
} from 'react-icons/md';
import { ABOUT, CONTACT } from '../data/portfolio';

export const Hero: React.FC = () => {
    return (
        <section id="overview" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
            {/* Subtle Engineering Mesh Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium mb-6 backdrop-blur-sm animate-fade-in shadow-[0_0_20px_rgba(0,243,255,0.1)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>PRODUCTION CONTROL PLANE · SRE ARCHITECTURE</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                    Autonomous Infrastructure. <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                        Observability as Code.
                    </span>
                </h1>

                {/* Subtitle / Approach */}
                <p className="max-w-3xl text-base sm:text-xl text-gray-300 font-normal leading-relaxed mb-8">
                    Senior DevOps &amp; Platform Architect with 5 years of experience engineering high-scale Kubernetes ecosystems across <strong>AWS, Azure, and OCI</strong>. Pioneer in <strong>Agentic AI Observability</strong>, cutting production RCA by 40% and saving 40% in enterprise cloud FinOps across 2T requests/month.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mb-14">
                    <a
                        href="#telemetry"
                        className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm font-mono tracking-wider transition-all shadow-[0_0_25px_rgba(0,243,255,0.3)] hover:shadow-[0_0_35px_rgba(0,243,255,0.45)] flex items-center gap-2"
                    >
                        <span>INSPECT DISTRIBUTED TRACE</span>
                        <MdArrowDownward className="text-base" />
                    </a>

                    <a
                        href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                        target="_blank"
                        className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-md"
                    >
                        <MdDescription className="text-cyan-400 text-base" />
                        <span>Download Full Resume PDF</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/wiwek13/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all"
                        title="Vivek Kushwah on LinkedIn"
                    >
                        <MdOpenInNew className="text-lg" />
                    </a>
                </div>

                {/* Live Telemetry KPI Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
                    {ABOUT.stats.map((stat) => (
                        <div 
                            key={stat.label}
                            className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-sm group shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[11px] font-mono font-medium text-gray-400 uppercase tracking-wider">
                                    {stat.label}
                                </span>
                                {stat.label.includes('FinOps') && <MdTrendingUp className="text-emerald-400 text-base" />}
                                {stat.label.includes('Builds') && <MdSpeed className="text-cyan-400 text-base" />}
                                {stat.label.includes('Uptime') && <MdShield className="text-blue-400 text-base" />}
                                {stat.label.includes('RCA') && <MdAutoAwesome className="text-amber-400 text-base" />}
                            </div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-[11px] text-gray-400 mt-1 font-mono">
                                {stat.label.includes('FinOps') && 'Opencost capacity optimization'}
                                {stat.label.includes('Builds') && 'GitHub Actions SAST & caching'}
                                {stat.label.includes('Uptime') && 'Multi-window SLO error budget'}
                                {stat.label.includes('RCA') && 'Agentic AI signal correlation'}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
