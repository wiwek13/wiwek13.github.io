import React from 'react';
import { motion } from 'framer-motion';
import { MdTerminal, MdRocketLaunch, MdDescription, MdSensors } from 'react-icons/md';

export const ShellHero: React.FC = () => {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-12 pt-8 font-mono relative z-10">
            {/* Live Telemetry Status Pill */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#00f3ff]/30 text-xs text-gray-300 backdrop-blur-md mb-8 max-w-fit shadow-[0_0_20px_rgba(0,243,255,0.15)]"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f3ff] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f3ff]"></span>
                </span>
                <span className="font-semibold text-white tracking-wider">CLUSTER: OPTIMAL</span>
                <span className="text-gray-500">|</span>
                <span className="text-[#00f3ff]/90 flex items-center gap-1">
                    <MdSensors className="text-sm" /> 99.99% SLO · 40% RCA GAIN
                </span>
            </motion.div>

            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-10 max-w-6xl">
                {/* Text Content - Left */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex-1"
                >
                    <div className="text-xs uppercase tracking-widest text-[#00f3ff] font-semibold mb-2 flex items-center gap-2">
                        <MdTerminal className="text-base text-[#00f3ff]" />
                        <span>~/telemetry/sre-command-center</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
                        Vivek{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f3ff] via-white to-[#ff007f]">
                            Kushwah
                        </span>
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 tracking-wide mb-6">
                        Senior Platform &amp; Observability Architect{' '}
                        <span className="text-[#00f3ff] font-light">· Agentic AI Systems</span>
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed font-sans font-light mb-8">
                        Building self-healing cloud ecosystems across AWS &amp; multi-cloud Kubernetes. 
                        Pioneering <strong className="text-white font-medium">Observability as Code</strong> and 
                        <strong className="text-white font-medium"> Agentic AI incident correlation</strong> to slash incident RCA by 40% and cloud spend by 40%. MANIT Bhopal CS graduate.
                    </p>

                    {/* Quick Telemetry Chips */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-2xl font-mono">
                        <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 hover:border-[#00f3ff]/40 transition-colors">
                            <div className="text-2xl font-bold text-white text-glow">40%</div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider">FinOps Savings</div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 hover:border-[#00f3ff]/40 transition-colors">
                            <div className="text-2xl font-bold text-[#00f3ff]">40%</div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider">Faster RCA</div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 hover:border-[#ff007f]/40 transition-colors">
                            <div className="text-2xl font-bold text-white">2T+</div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider">Req/mo Ingest</div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 hover:border-[#00f3ff]/40 transition-colors">
                            <div className="text-2xl font-bold text-[#00f3ff]">8+</div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider">K8s Clusters</div>
                        </div>
                    </div>

                    {/* Action Group */}
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono">
                        <a
                            href="#architecture"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#00f3ff] text-black font-semibold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5"
                        >
                            <MdRocketLaunch className="text-base" />
                            <span>Inspect Topology</span>
                        </a>

                        <a
                            href="#experience"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#00f3ff]/40 transition-all transform hover:-translate-y-0.5"
                        >
                            <span>Incident History</span>
                        </a>

                        <a
                            href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-gray-400 hover:text-white transition-colors"
                        >
                            <MdDescription className="text-base text-[#00f3ff]" />
                            <span>Resume [PDF]</span>
                        </a>
                    </div>
                </motion.div>

                {/* Profile Avatar with Radar HUD Halo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative shrink-0 flex items-center justify-center"
                >
                    {/* Rotating outer radar ring */}
                    <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-dashed border-[#00f3ff]/20 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#ff007f]/20 animate-[spin_20s_linear_infinite_reverse]" />
                    
                    {/* Glowing Avatar Container */}
                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-[#00f3ff] via-transparent to-[#ff007f] shadow-[0_0_35px_rgba(0,243,255,0.25)] group">
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-[#07090e] flex items-center justify-center relative">
                            <img
                                src="/me.png"
                                alt="Vivek Kushwah"
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 scale-105"
                                onError={(e) => {
                                    // Fallback high-tech placeholder if image not present
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                }}
                            />
                            {/* Fallback Icon if image missing */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#00f3ff]/60 font-mono text-xs pointer-events-none">
                                <MdTerminal className="text-4xl text-[#00f3ff] mb-1" />
                                <span>VK_PLATFORM</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
