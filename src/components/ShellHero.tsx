import React from 'react';
import { motion } from 'framer-motion';
import { MdTerminal } from 'react-icons/md';

export const ShellHero = () => {
    return (
        <section className="min-h-[60vh] flex flex-col justify-center px-4 md:px-20 pt-10 font-mono relative z-10">
            {/* Minimal Breadcrumb */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-12 left-4 md:left-20 flex items-center text-xs text-gray-500 mb-8"
            >
                <div className="flex items-center gap-2">
                    <MdTerminal className="text-neon-cyan" />
                    <span>~/portfolio/profile</span>
                </div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8 mt-8 max-w-5xl">
                {/* Text Content - Left */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center md:text-left flex-1"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                        Vivek <span className="font-light text-gray-400">Kushwah</span>
                    </h1>
                    <div className="text-neon-cyan text-sm md:text-base font-mono tracking-widest mb-4">
                        DEVOPS ENGINEER • SRE
                    </div>

                    <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed font-light mb-6">
                        Designing, testing, and implementing resilient infrastructure.
                        Building autonomous systems that scale.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-6">
                        <a href="#projects" className="text-sm text-white border-b border-neon-cyan/50 hover:text-neon-cyan hover:border-neon-cyan transition-colors pb-0.5">
                            View Projects
                        </a>
                        <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image - Right & Compact */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group shrink-0"
                >
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors bg-black">
                        <img
                            src="/me.png"
                            alt="Vivek Kushwah"
                            className="w-full h-full object-cover grayscale transition-all duration-500"
                            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
