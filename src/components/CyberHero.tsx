import React from 'react';
import { motion } from 'framer-motion';
import { MdTerminal, MdSecurity } from 'react-icons/md';
import { HoloProfile } from './HoloProfile';

export const CyberHero = () => {
    return (
        <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative overflow-hidden font-mono pt-10 px-4">
            {/* HUD Corners - Made thinner/smaller */}
            <div className="absolute top-10 left-4 w-8 h-8 border-t border-l border-neon-cyan/40" />
            <div className="absolute top-10 right-4 w-8 h-8 border-t border-r border-neon-pink/40" />
            <div className="absolute bottom-10 left-4 w-8 h-8 border-b border-l border-neon-cyan/40" />
            <div className="absolute bottom-10 right-4 w-8 h-8 border-b border-r border-neon-pink/40" />

            {/* Profile Image Column */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 order-1 md:order-2 flex-shrink-0"
            >
                <HoloProfile />
            </motion.div>

            {/* Text Column */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative z-10 max-w-xl order-2 md:order-1 text-center md:text-left"
            >
                {/* Badge Removed per feedback */}

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter leading-none mix-blend-screen">
                    <span className="block">VIVEK</span>
                    <span className="block text-neon-pink text-glow">KUSHWAH</span>
                </h1>

                <div className="h-0.5 w-24 bg-neon-yellow mb-8 shadow-glow-yellow mx-auto md:mx-0" />

                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
                    <span className="text-neon-cyan font-medium">Cloud Architect</span> & DevOps Engineer.
                    <br />
                    Building resilient systems and automating entropy in the digital void.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#projects" className="px-6 py-2 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all font-mono text-sm tracking-wider uppercase flex items-center gap-2 group">
                        Explore <MdTerminal className="group-hover:animate-pulse" />
                    </a>
                    <a href="#contact" className="px-6 py-2 border border-neon-pink/50 text-neon-pink hover:border-neon-pink hover:bg-neon-pink/10 transition-all font-mono text-sm tracking-wider uppercase flex items-center gap-2">
                        Connect <MdSecurity />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
