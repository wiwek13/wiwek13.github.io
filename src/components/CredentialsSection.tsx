import React from 'react';
import { 
    MdVerified, 
    MdSchool, 
    MdSecurity, 
    MdCloudDone 
} from 'react-icons/md';
import { CERTIFICATIONS, ABOUT } from '../data/portfolio';

export const CredentialsSection: React.FC = () => {
    return (
        <section id="credentials" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
                        // 04 CREDENTIALS &amp; FOUNDATION
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                        Certifications &amp; Academic Background
                    </h2>
                    <p className="max-w-2xl text-sm sm:text-base text-gray-400 font-normal">
                        Industry-standard CNCF security and cloud architecture credentials paired with rigorous computer science and electrical engineering fundamentals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Certifications Card */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-white/10 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                                <MdSecurity className="text-base" />
                                <span>VERIFIED CNCF &amp; AWS CREDENTIALS</span>
                            </div>

                            <div className="space-y-4">
                                {CERTIFICATIONS.map((cert) => (
                                    <div
                                        key={cert.name}
                                        className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between gap-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                                <MdVerified className="text-lg" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white tracking-tight">
                                                    {cert.name}
                                                </div>
                                                <div className="text-xs text-gray-400 font-mono">
                                                    {cert.issuer}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-cyan-300 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">
                                            {cert.year}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 mt-6 text-xs text-gray-400 font-mono flex items-center gap-2">
                            <MdCloudDone className="text-cyan-400" />
                            <span>Linux Foundation &amp; AWS Certified Active Registry</span>
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-white/10 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                                <MdSchool className="text-base" />
                                <span>ACADEMIC FOUNDATION</span>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                                <div className="text-xl font-bold text-white mb-1">
                                    {ABOUT.education.degree}
                                </div>
                                <div className="text-base text-cyan-400 font-semibold mb-3 font-mono">
                                    {ABOUT.education.school}
                                </div>
                                <div className="text-xs text-gray-400 font-mono mb-4">
                                    Period: {ABOUT.education.period} · Full-Time Bachelor of Technology
                                </div>
                                <p className="text-xs text-gray-300 leading-relaxed font-light">
                                    National Institute of Technology (MANIT) Bhopal — one of India’s premier Institutes of National Importance (INI). Rigorous focus on computational systems, algorithm design, distributed computing, and electrical hardware engineering.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 mt-6 text-xs text-gray-400 font-mono">
                            Maulana Azad National Institute of Technology (MANIT Bhopal)
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
