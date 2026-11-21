import React, { useState } from 'react';
import { 
    MdEmail, 
    MdPhone, 
    MdLocationOn, 
    MdOpenInNew, 
    MdContentCopy, 
    MdCheck,
    MdDescription
} from 'react-icons/md';
import { CONTACT } from '../data/portfolio';

export const ContactSection: React.FC = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('wiwek13@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Card Shell */}
                <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1220] to-[#070a12] border border-white/15 shadow-2xl relative overflow-hidden">
                    
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                        
                        {/* Left Column: Direct Invitation */}
                        <div>
                            <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
                                // 06 DIRECT COMMS &amp; TRANSMISSIONS
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                                Available for Senior &amp; Staff Roles
                            </h2>
                            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-6">
                                Looking for high-impact leadership and principal roles in <strong>Autonomous SRE, Observability as Code, Kubernetes Platform Engineering, and Cloud FinOps</strong>. Available for remote positions globally or on-site relocation.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href="mailto:wiwek13@gmail.com"
                                    className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm font-mono tracking-wider transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center gap-2"
                                >
                                    <MdEmail className="text-base" />
                                    <span>SEND EMAIL</span>
                                </a>

                                <button
                                    onClick={copyEmail}
                                    className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-md"
                                >
                                    {copiedEmail ? <MdCheck className="text-emerald-400" /> : <MdContentCopy className="text-cyan-400" />}
                                    <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Channels Matrix */}
                        <div className="space-y-3">
                            {CONTACT.map((c) => (
                                <a
                                    key={c.name}
                                    href={c.href}
                                    target={c.href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 hover:bg-black/60 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                                            {c.name === 'Email' && <MdEmail />}
                                            {c.name === 'LinkedIn' && <MdOpenInNew />}
                                            {c.name === 'Location' && <MdLocationOn />}
                                            {c.name === 'Phone' && <MdPhone />}
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                                                {c.name}
                                            </div>
                                            <div className="text-sm font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                                                {c.value}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {c.href.startsWith('http') && (
                                        <MdOpenInNew className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                    )}
                                </a>
                            ))}

                            {/* Resume PDF Download Card */}
                            <a
                                href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                                target="_blank"
                                className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 hover:border-cyan-400 transition-all flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                                        <MdDescription />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider">
                                            OFFICIAL RESUME
                                        </div>
                                        <div className="text-sm font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                                            Download Latest Curriculum Vitae (PDF)
                                        </div>
                                    </div>
                                </div>
                                <MdOpenInNew className="text-cyan-400" />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
