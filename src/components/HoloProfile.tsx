import React from 'react';
import { motion } from 'framer-motion';

export const HoloProfile = () => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-neon-cyan/20 blur-3xl rounded-full opacity-50 animate-pulse-slow" />

            {/* Rotating Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-neon-cyan/30 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dotted border-neon-pink/30 rounded-full"
            />

            {/* Hexagon Clip Container */}
            <div className="absolute inset-8 bg-black clip-hexagon border border-white/10 relative overflow-hidden flex items-center justify-center bg-gray-900">
                {/* Image Phase */}
                <img
                    src="/me.png"
                    alt="Profile"
                    className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
                    onError={(e) => {
                        // Fallback to initial if image fails
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />

                {/* Fallback Text if no image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-neon-cyan/20 font-mono text-6xl font-bold">VK</span>
                </div>

                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent h-2 w-full animate-scanline opacity-30 pointer-events-none" />

                {/* Tech Overlays */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-2 left-4 text-[10px] text-neon-cyan font-mono">ID: 8492-AX</div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-neon-yellow shadow-glow-yellow" />
            <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-2 bg-neon-pink shadow-glow-pink" />
        </div>
    );
};
