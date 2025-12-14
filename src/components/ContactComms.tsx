import React from 'react';
import { CONTACT } from '../data/portfolio';
import { MdEmail, MdLink, MdSend, MdMap } from 'react-icons/md';

export const ContactComms = () => {
    return (
        <div className="relative border border-neon-cyan/30 bg-black/40 p-1 md:p-2 max-w-2xl mx-auto">
            {/* Animated Scanning Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-neon-cyan animate-scanline opacity-50" />

            <div className="bg-surface/90 p-8 border border-white/5 relative overflow-hidden">
                <h3 className="text-neon-cyan font-mono text-xl mb-6 flex items-center gap-2">
                    <MdSend className="animate-pulse" />
                    INIT_COMM_LINK
                </h3>

                <div className="grid gap-4">
                    {CONTACT.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            className="flex items-center justify-between p-4 bg-black/40 border border-white/5 hover:border-neon-pink hover:bg-neon-pink/5 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-2xl text-gray-400 group-hover:text-neon-pink">
                                    {link.name === 'Email' ? <MdEmail /> : link.name === 'Location' ? <MdMap /> : <MdLink />}
                                </span>
                                <div>
                                    <div className="text-xs text-xs font-mono text-gray-500 uppercase">{link.name}</div>
                                    <div className="text-white font-mono">{link.value}</div>
                                </div>
                            </div>
                            <span className="text-neon-pink opacity-0 group-hover:opacity-100 transition-opacity">Connect &gt;&gt;</span>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-center text-xs text-gray-600 font-mono">
                    ENCRYPTED CONNECTION // SECURE
                </div>
            </div>
        </div>
    );
};
