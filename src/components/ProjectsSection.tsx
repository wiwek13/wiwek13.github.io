import React from 'react';
import { 
    MdCode, 
    MdAutoAwesome, 
    MdOpenInNew, 
    MdLayers
} from 'react-icons/md';
import { PROJECTS } from '../data/portfolio';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
                        // 03 FLAGSHIP ENGINEERING INITIATIVES
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                        Autonomous Systems &amp; Platforms
                    </h2>
                    <p className="max-w-2xl text-sm sm:text-base text-gray-400 font-normal">
                        Core research and production initiatives integrating AI reasoning engines with large-scale multi-cluster observability.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project, idx) => (
                        <div
                            key={project.title}
                            className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl backdrop-blur-sm flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold">
                                        {idx === 0 ? <MdAutoAwesome /> : <MdLayers />}
                                    </div>
                                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                        PRODUCTION ARCHITECTURE
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <div className="text-[11px] font-mono text-gray-400 mb-2 uppercase tracking-wider">
                                    Architecture Stack:
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-cyan-300 font-mono"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
