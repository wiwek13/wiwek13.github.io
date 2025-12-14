import React from 'react';
import { CONTACT } from '../data/portfolio';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const ContactTerminal = () => {
    return (
        <div className="max-w-2xl mx-auto my-12 bg-surface rounded-lg overflow-hidden shadow-2xl border border-gray-700/50">
            {/* Window Title Bar */}
            <div className="bg-terminal-header px-4 py-3 flex items-center justify-between border-b border-gray-700/50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                </div>
                <div className="text-xs font-mono text-gray-400 select-none">send_message.sh — 80x24</div>
                <div className="w-12"></div> {/* Spacer for center alignment */}
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base bg-[#0f172a]/80 backdrop-blur-sm">
                <div className="mb-6 text-gray-400">
                    <span className="text-primary">➜</span>
                    <span className="text-secondary ml-2">~</span>
                    <span className="ml-2">./init_contact_protocol.sh</span>
                </div>

                <div className="space-y-2 mb-8 text-gray-300">
                    <p>&gt; Initializing connection...</p>
                    <p>&gt; Resolving endpoint: <span className="text-accent">wiwek13.github.io</span></p>
                    <p className="text-green-400">&gt; Connection established.</p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-white font-bold mb-4 tracking-wide border-b border-gray-700 pb-2 inline-block">AVAILABLE CHANNELS</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CONTACT.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center p-3 rounded border border-gray-700/50 hover:bg-white/5 hover:border-primary/50 transition-all"
                            >
                                <span className="text-xl md:text-2xl mr-4 text-gray-400 group-hover:text-primary transition-colors">
                                    {link.name === 'GitHub' && <FaGithub />}
                                    {link.name === 'LinkedIn' && <FaLinkedin />}
                                    {link.name === 'Email' && <FaEnvelope />}
                                    {link.name === 'Location' && '📍'}
                                </span>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{link.name}</div>
                                    <div className="text-gray-200 group-hover:text-white">{link.value}</div>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 text-primary transition-opacity">
                                    ➜
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-800 text-gray-500 flex items-center animate-pulse">
                    <span className="mr-2">_</span>
                    <span>Awaiting input...</span>
                </div>
            </div>
        </div>
    );
};
