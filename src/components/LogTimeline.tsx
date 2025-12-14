import React from 'react';
import { TextHighlighter } from './TextHighlighter';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    achievements: string[];
}

interface LogTimelineProps {
    experiences: ExperienceItem[];
}

export const LogTimeline: React.FC<LogTimelineProps> = ({ experiences }) => {
    return (
        <div className="space-y-20 font-mono relative pl-6 md:pl-10 border-l border-gray-700/50 ml-3 md:ml-4">
            {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                    {/* Timeline node */}
                    <div className="absolute -left-[31px] md:-left-[49px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-background border-4 border-gray-700 group-hover:border-primary group-hover:scale-110 transitiom-all z-10" />

                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-4">
                        <span className="text-xs md:text-sm text-secondary bg-surface px-2 py-0.5 rounded border border-gray-800">
                            {exp.period}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {exp.role}
                        </h3>
                        <span className="text-gray-500">@ {exp.company}</span>
                    </div>

                    <ul className="space-y-3 text-gray-400 text-sm font-sans leading-relaxed">
                        {exp.achievements.map((item, i) => (
                            <li key={i} className="flex gap-3 relative">
                                <span className="text-gray-700 select-none mt-1">➜</span>
                                <span>
                                    <TextHighlighter text={item} />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
