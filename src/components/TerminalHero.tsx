import React from 'react';
import { motion } from 'framer-motion';

export const TerminalHero = () => {
    return (
        <section className="min-h-[50vh] flex flex-col justify-center font-sans relative pt-10">
            <div className="absolute top-0 left-0 text-xs font-mono text-gray-600 mb-8 block w-full border-b border-gray-800 pb-2">
                Last login: {new Date().toDateString()} on ttys001
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50" />
                    <span className="font-mono text-primary text-sm tracking-widest">SYSTEM READY</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
                    Vivek<br />
                    <span className="text-stroke-primary text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Kushwah</span>
                    <span className="text-primary animate-cursor">_</span>
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10 border-l-4 border-gray-800 pl-6">
                    Senior DevOps Engineer & Cloud Architect. <br />
                    <span className="text-secondary">Orchestrating resilient infrastructure.</span>
                </h2>

                <div className="flex flex-wrap gap-4 font-mono text-sm">
                    <a href="#projects" className="group flex items-center bg-white/5 border border-white/10 px-6 py-3 rounded hover:border-primary hover:bg-primary/5 transition-colors text-white">
                        <span className="text-primary mr-2">./</span>
                        view_projects.sh
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a href="#contact" className="px-6 py-3 text-gray-500 hover:text-white transition-colors">
                        --contact-info
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
