import React, { useRef, useState } from 'react';
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

export const HoloCard: React.FC<HoloCardProps> = ({ title, subtitle, badge, children, tags }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        setMousePosition(null);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative p-6 sm:p-8 bg-[#090b10]/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 group flex flex-col h-full overflow-hidden hover:border-[#00f3ff]/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            style={{
                background: mousePosition
                    ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 243, 255, 0.06), rgba(9, 11, 16, 0.8) 70%)`
                    : undefined,
            }}
        >
            {/* Magnetic Border Spotlight */}
            {mousePosition && (
                <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(280px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 243, 255, 0.35), transparent 70%)`,
                        maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                        padding: '1px',
                    }}
                />
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00f3ff] transition-colors">
                            {title}
                        </h3>
                        {badge && (
                            <span className="text-[10px] font-mono border border-[#00f3ff]/30 text-[#00f3ff] bg-[#00f3ff]/10 px-2 py-0.5 rounded">
                                {badge}
                            </span>
                        )}
                    </div>
                    {subtitle && (
                        <div className="text-xs sm:text-sm text-gray-400 font-mono tracking-wide">
                            {subtitle}
                        </div>
                    )}
                </div>
            </div>

            <div className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow relative z-10 font-sans font-light">
                {children}
            </div>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto relative z-10 pt-4 border-t border-white/5">
                    {tags.map(tag => (
                        <SkillTag key={tag} skill={tag} />
                    ))}
                </div>
            )}
        </motion.div>
    );
};
