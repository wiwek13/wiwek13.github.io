import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';

interface HoloCardProps {
    title: string;
    subtitle?: string;
    badge?: string;
    children: React.ReactNode;
    tags?: string[];
    link?: string;
}

export const HoloCard: React.FC<HoloCardProps> = ({ title, subtitle, badge, children, tags, link }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 0 20px rgba(0, 243, 255, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ perspective: 1000 }}
            className="relative p-6 bg-surface/80 border-l-2 border-l-neon-pink border-t border-t-white/5 border-r border-r-white/5 border-b border-b-white/5 backdrop-blur-md group transform-gpu"
        >
            {/* Corner Marker */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-neon-pink opacity-50" />

            <div className="flex justify-between items-start mb-4">
                <div>
                    {badge && <div className="text-neon-cyan text-xs font-mono mb-1">{badge}</div>}
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors">{title}</h3>
                    {subtitle && <div className="text-sm text-gray-400 font-mono">{subtitle}</div>}
                </div>
                {link && (
                    <a href={link} className="text-neon-yellow text-xl hover:scale-125 transition-transform">
                        <MdArrowOutward />
                    </a>
                )}
            </div>

            <div className="text-gray-300 mb-6 text-sm leading-relaxed">
                {children}
            </div>

            {tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 text-gray-400 hover:border-neon-cyan hover:text-neon-cyan transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
};
