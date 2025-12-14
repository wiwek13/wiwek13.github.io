import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { MdCode, MdCloud, MdStorage, MdDns, MdSpeed, MdBuild } from 'react-icons/md';
import { SkillTag } from './SkillTag';

// Helper to map icons to categories
const getIcon = (category: string) => {
    if (category.includes('Cloud')) return <MdCloud className="text-neon-cyan" />;
    if (category.includes('Container')) return <MdDns className="text-neon-cyan" />;
    if (category.includes('Code')) return <MdCode className="text-neon-cyan" />;
    if (category.includes('Data')) return <MdStorage className="text-neon-cyan" />;
    if (category.includes('Monitor')) return <MdSpeed className="text-neon-cyan" />;
    return <MdBuild className="text-neon-cyan" />;
};

export const SkillMatrix = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#112240]/30 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:border-neon-cyan/40 hover:bg-[#112240]/50 hover:shadow-[0_4px_20px_-5px_rgba(0,243,255,0.15)] transition-all duration-300 group"
                >
                    <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/5">
                        <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">{getIcon(cat.category)}</span>
                        <h3 className="text-neon-cyan font-mono text-sm uppercase tracking-widest">{cat.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                            <SkillTag key={skill} skill={skill} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
