import React from 'react';
import { motion } from 'framer-motion';
import { MdTerminal, MdArrowForward } from 'react-icons/md';

export const ShellHero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-20 pt-20 font-mono relative z-10">
            {/* Powerline Breadcrumb - Top Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-24 left-4 md:left-20 flex items-center text-sm md:text-base mb-12"
            >
                <div className="bg-[#00f3ff] text-black px-4 py-1 font-bold flex items-center">
                    <MdTerminal className="mr-2" />
                    portfolio
                </div>
                <div className="text-[#00f3ff] bg-gray-800 px-1 text-2xl leading-none -ml-[1px]"></div>
                <div className="bg-gray-800 text-gray-300 px-4 py-1 font-medium">
                    home
                </div>
                <div className="text-gray-800 text-2xl leading-none -ml-[1px]"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mt-16">
                {/* Profile Image - Clean & Neat */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group order-1 md:order-2"
                >
                    {/* Status Ring - Sleek Cyan/White */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#00f3ff] to-white rounded-[2rem] opacity-50 blur-sm group-hover:opacity-80 transition-opacity" />

                    <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-900 rounded-[1.9rem] border-4 border-black overflow-hidden">
                        <img
                            src="/me.png"
                            alt="Vivek Kushwah"
                            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                        />
                    </div>
                </motion.div>

                {/* Text Content - Minimal & Bold */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="order-2 md:order-1 max-w-2xl"
                >
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none">
                        VIVEK
                        <span className="block text-[#00f3ff]">KUSHWAH</span>
                    </h1>

                    <div className="flex items-center gap-4 text-xl md:text-2xl text-gray-400 mb-8 font-light">
                        <span className="text-white font-bold">DevOps Engineer</span>
                        <span className="text-gray-600">|</span>
                        <span className="text-white font-bold">Cloud Architect</span>
                    </div>

                    <div className="p-6 bg-gray-900/50 border-l-4 border-[#00f3ff] text-gray-300 leading-relaxed mb-10 backdrop-blur-sm">
                        <p>
                            Orchestrating resilient infrastructure and automating deployment pipelines.
                            Turning chaos into stability with <span className="text-white font-bold">Kubernetes</span>, <span className="text-white font-bold">AWS</span>, and <span className="text-white font-bold">Code</span>.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#projects" className="group flex items-center gap-2 text-white font-bold text-lg border-b-2 border-[#00f3ff] pb-1 hover:text-[#00f3ff] transition-colors">
                            View Projects <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
                            Initiate Contact
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
