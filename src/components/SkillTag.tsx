import React from 'react';

interface SkillTagProps {
    skill: string;
    className?: string;
}

export const SkillTag = ({ skill, className = "" }: SkillTagProps) => {
    return (
        <a
            href={`https://www.google.com/search?q=${encodeURIComponent("What is " + skill + "? OR \"Vivek Kushwah\" \"Senior DevOps Engineer\" OR \"Vivek Kushwah\" \"NIT Bhopal\" OR wiwek13.github.io")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-block px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300 rounded hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-white/20 hover:shadow-[0_0_10px_-2px_rgba(0,243,255,0.3)] transition-all duration-300 cursor-pointer no-underline ${className}`}
        >
            {skill}
        </a>
    );
};
