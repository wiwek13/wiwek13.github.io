import React, { useState } from 'react';
import { 
    MdLayers, 
    MdSearch, 
    MdCheck
} from 'react-icons/md';
import { SKILL_CATEGORIES } from '../data/portfolio';

export const SkillMatrixSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = SKILL_CATEGORIES.map((cat) => {
        const matchingSkills = cat.skills.filter((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
            category: cat.category,
            skills: matchingSkills
        };
    }).filter((cat) => cat.skills.length > 0);

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
                            // 05 ARCHITECTURAL COMPETENCIES
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                            Technical Skill Matrix
                        </h2>
                        <p className="text-sm text-gray-400 font-normal">
                            Multi-cloud orchestration, DevSecOps pipelines, and AI-driven telemetry.
                        </p>
                    </div>

                    {/* Skill Filter Search */}
                    <div className="relative w-full md:w-72">
                        <MdSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Filter skills (e.g. Kubernetes, Thanos)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#090d16] border border-white/10 focus:border-cyan-400 text-white placeholder-gray-500 text-xs font-mono outline-none transition-all shadow-inner"
                        />
                    </div>
                </div>

                {/* Skill Domains Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredCategories.map((cat) => (
                        <div
                            key={cat.category}
                            className="p-6 rounded-3xl bg-[#090d16] border border-white/10 hover:border-cyan-500/30 transition-all shadow-lg flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                    <h3 className="text-base font-bold text-white tracking-tight">
                                        {cat.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {cat.skills.map((s) => (
                                        <span
                                            key={s}
                                            className="text-xs px-2.5 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-gray-200 font-mono hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/5 mt-4 text-[10px] font-mono text-gray-500 text-right">
                                {cat.skills.length} competencies
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
