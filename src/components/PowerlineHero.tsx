import React from 'react';
import { motion } from 'framer-motion';
import { MdTerminal } from 'react-icons/md';

export const PowerlineHero = () => {
    const currentDate = new Date().toDateString();

    return (
        <section className="min-h-screen flex items-center justify-center p-4 pt-20 font-mono">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl bg-[#0d1117]/90 border border-gray-700 rounded-lg shadow-2xl overflow-hidden backdrop-blur-md"
            >
                {/* Terminal Title Bar */}
                <div className="bg-[#161b22] px-4 py-2 flex items-center gap-4 border-b border-gray-700">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" /> {/* Close */}
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /> {/* Minimize */}
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" /> {/* Maximize */}
                    </div>
                    <div className="flex-1 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
                        <MdTerminal />
                        wiwek13@portfolio: ~
                    </div>
                    <div className="w-16" /> {/* Spacer for balance */}
                </div>

                {/* Terminal Content */}
                <div className="p-6 md:p-12 text-sm md:text-base leading-relaxed">
                    {/* Command Prompt */}
                    <div className="mb-6 flex flex-wrap gap-2 text-neon-green">
                        <span className="text-neon-pink">➜</span>
                        <span className="text-neon-cyan">~</span>
                        <span className="text-gray-400">neofetch</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                        {/* Left: Image / ASCII Placeholder */}
                        <div className="relative group shrink-0 mx-auto md:mx-0">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded bg-black border-2 border-neon-cyan/50 overflow-hidden relative shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                                <img
                                    src="/me.png"
                                    alt="Vivek Kushwah"
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                />
                                {/* Scanline overlay for image */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent h-2 w-full animate-scanline pointer-events-none" />
                            </div>
                            {/* ASCII decoration below image is optional but cool in neofetch */}
                        </div>

                        {/* Right: Info */}
                        <div className="flex-1 space-y-2">
                            <div className="mb-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    <span className="text-neon-cyan">vivek</span>@<span className="text-neon-pink">portfolio</span>
                                </h1>
                                <div className="h-px w-full bg-gradient-to-r from-gray-500 to-transparent" />
                            </div>

                            <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1">
                                <span className="text-neon-yellow font-bold">OS</span>
                                <span className="text-gray-300">Cloud Architecture (AWS/Azure)</span>

                                <span className="text-neon-yellow font-bold">Host</span>
                                <span className="text-gray-300">DevOps Engineer</span>

                                <span className="text-neon-yellow font-bold">Kernel</span>
                                <span className="text-gray-300">v4.2.0 (Experience_Level)</span>

                                <span className="text-neon-yellow font-bold">Uptime</span>
                                <span className="text-gray-300">Always On (High Availability)</span>

                                <span className="text-neon-yellow font-bold">Packages</span>
                                <span className="text-gray-300">Terraform, K8s, Python, Docker</span>

                                <span className="text-neon-yellow font-bold">Shell</span>
                                <span className="text-gray-300">zsh 5.8 (Powerline)</span>

                                <span className="text-neon-yellow font-bold">Resolution</span>
                                <span className="text-gray-300">Scalable & Resilient</span>

                                <span className="text-neon-yellow font-bold">Theme</span>
                                <span className="text-gray-300">Cyberpunk / Terminal Chic</span>

                                <span className="text-neon-yellow font-bold">CPU</span>
                                <span className="text-gray-300">Automating Entropy 100%</span>
                            </div>

                            {/* Color Palette Strip */}
                            <div className="flex gap-2 mt-8 pt-4">
                                <div className="w-8 h-8 bg-black rounded" />
                                <div className="w-8 h-8 bg-red-500 rounded" />
                                <div className="w-8 h-8 bg-green-500 rounded" />
                                <div className="w-8 h-8 bg-yellow-500 rounded" />
                                <div className="w-8 h-8 bg-blue-500 rounded" />
                                <div className="w-8 h-8 bg-magenta-500 rounded" />
                                <div className="w-8 h-8 bg-cyan-500 rounded" />
                                <div className="w-8 h-8 bg-white rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Cursor blinking at the bottom */}
                    <div className="mt-8 flex items-center gap-2 text-neon-green">
                        <span className="text-neon-pink">➜</span>
                        <span className="text-neon-cyan">~</span>
                        <span className="animate-pulse">_</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
