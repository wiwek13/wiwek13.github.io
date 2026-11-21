import React from 'react';
import { 
    MdWork, 
    MdCheckCircle, 
    MdEmojiEvents, 
    MdLocationOn, 
    MdCalendarToday,
    MdTrendingUp
} from 'react-icons/md';
import { EXPERIENCES } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
                        // 02 ENTERPRISE TENURES &amp; SRE IMPACT
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                        Production Platform Track Record
                    </h2>
                    <p className="max-w-2xl text-sm sm:text-base text-gray-400 font-normal">
                        5 years of battle-tested engineering across fintech payment gateways, high-scale crypto architectures, and media workloads.
                    </p>
                </div>

                {/* Experience Cards Grid */}
                <div className="space-y-6">
                    {EXPERIENCES.map((exp) => (
                        <div
                            key={exp.company}
                            className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl backdrop-blur-sm group"
                        >
                            {/* Card Top Row: Company, Role, Period, Location */}
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-white/10 mb-5">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <h3 className="text-2xl font-bold text-white tracking-tight">
                                            {exp.company}
                                        </h3>
                                        <span className="text-sm font-semibold text-cyan-400 font-mono">
                                            // {exp.role}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                                        <span className="flex items-center gap-1.5">
                                            <MdCalendarToday className="text-cyan-400" />
                                            <span>{exp.period}</span>
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MdLocationOn className="text-cyan-400" />
                                            <span>{exp.location}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Award Badges */}
                                {exp.awards && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.awards.map((a) => (
                                            <span 
                                                key={a}
                                                className="px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(251,191,36,0.15)]"
                                            >
                                                <MdEmojiEvents className="text-amber-400 text-sm" />
                                                <span>{a}</span>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Achievements List */}
                            <div className="mb-6">
                                <h4 className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    Key Architectural Achievements:
                                </h4>
                                <ul className="space-y-2.5">
                                    {exp.achievements.map((ach, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed font-light">
                                            <MdCheckCircle className="text-cyan-400 text-base shrink-0 mt-0.5" />
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies Pills */}
                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 font-mono hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
