import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { SkillTag } from './SkillTag';

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
                y: -5,
                transition: { duration: 0.2 }
            }}
            className="relative p-6 bg-[#112240]/30 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-[#112240]/50 hover:border-neon-cyan/30 hover:shadow-[0_4px_20px_-5px_rgba(0,243,255,0.15)] transition-all duration-300 group flex flex-col h-full overflow-hidden"
        >
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{title}</h3>
                        {badge && (
                            <span className="text-[10px] font-mono border border-neon-cyan/30 text-neon-cyan px-1.5 py-0.5 rounded">
                                {badge}
                            </span>
                        )}
                    </div>
                    {subtitle && <div className="text-sm text-gray-400 font-mono">{subtitle}</div>}
                </div>
                {/* Arrow removed as requested for cleaner look, or only if strictly needed */}
            </div>

            <div className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow relative z-10">
                {children}
            </div>

            {tags && (
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {tags.map(tag => (
                        <SkillTag key={tag} skill={tag} />
                    ))}
                </div>
            )}

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
};
