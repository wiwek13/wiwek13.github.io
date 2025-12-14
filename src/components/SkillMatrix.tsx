import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { MdCode, MdCloud, MdStorage, MdDns, MdSpeed, MdBuild } from 'react-icons/md';

// Helper to map icons to categories
const getIcon = (category: string) => {
    if (category.includes('Cloud')) return <MdCloud className="text-neon-cyan" />;
    if (category.includes('Container')) return <MdDns className="text-neon-pink" />;
    if (category.includes('Code')) return <MdCode className="text-neon-yellow" />;
    if (category.includes('Data')) return <MdStorage className="text-green-400" />;
    if (category.includes('Monitor')) return <MdSpeed className="text-red-400" />;
    return <MdBuild className="text-gray-400" />;
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
                    className="bg-surface/50 border border-white/10 p-6 rounded hover:border-neon-cyan/50 hover:shadow-glow-cyan transition-all group"
                >
                    <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/5">
                        <span className="text-2xl">{getIcon(cat.category)}</span>
                        <h3 className="text-neon-cyan font-mono text-sm uppercase tracking-widest">{cat.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                            <a
                                key={skill}
                                href={`https://www.google.com/search?q=${encodeURIComponent(skill + " technology")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2 py-1 bg-black/50 border border-white/10 text-xs text-gray-300 rounded font-mono hover:text-neon-yellow hover:border-neon-yellow transition-colors cursor-pointer hover:bg-white/5 no-underline"
                            >
                                {skill}
                            </a>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
