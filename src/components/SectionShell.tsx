import React from 'react';

interface SectionShellProps {
    id: string;
    title: string;
    command: string;
    children: React.ReactNode;
}

export const SectionShell: React.FC<SectionShellProps> = ({ id, title, command, children }) => {
    return (
        <section id={id} className="scroll-mt-12 group">
            <div className="mb-10 flex items-center font-mono text-sm md:text-base selection:bg-transparent overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                {/* Segment 1: Directory */}
                <div className="bg-primary text-black px-4 py-1.5 font-bold flex items-center whitespace-nowrap">
                    <span className="mr-2">📁</span>
                    <span>~/{id}</span>
                </div>
                <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-primary"></div>

                {/* Segment 2: Git Branch */}
                <div className="bg-surface text-gray-300 px-4 py-1.5 flex items-center -ml-4 pl-6 whitespace-nowrap">
                    <span className="text-yellow-400 mr-2"></span>
                    <span>main</span>
                </div>
                <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-surface"></div>

                {/* Segment 3: Command */}
                <div className="pl-4 text-gray-500 flex items-center">
                    <span className="text-green-500 mr-2">➜</span>
                    <span className="text-white typing-effect">{command}</span>
                    <span className="ml-2 w-2 h-4 bg-gray-500 animate-pulse inline-block opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>

                <h2 className="sr-only">{title}</h2>
            </div>

            <div className="animate-slide-up pl-2 border-l-2 border-gray-800 ml-3 md:ml-0 md:border-l-0 md:pl-0">
                {children}
            </div>
        </section>
    );
};
