import React from 'react';
// Card import removed
// Since Card was deleted, I'll implement the styling directly here.

interface ProjectShellProps {
    title: string;
    description: string;
    tags: string[];
}

export const ProjectShell: React.FC<ProjectShellProps> = ({ title, description, tags }) => {
    return (
        <div className="bg-surface border border-gray-800 rounded overflow-hidden hover:border-primary/50 transition-colors group">
            <div className="bg-[#0f0f11] px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                <div className="font-mono text-xs text-gray-500">./projects/{title.replace(/\s+/g, '_').toLowerCase()}</div>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs font-mono bg-gray-800 text-gray-300 rounded border border-gray-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
