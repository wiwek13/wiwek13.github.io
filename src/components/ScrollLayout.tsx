import React from 'react';
import { motion } from 'framer-motion';

interface ScrollLayoutProps {
    children: React.ReactNode;
}

export const ScrollLayout: React.FC<ScrollLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-gray-300 font-sans selection:bg-neon-cyan selection:text-black scanlines">
            {/* HUD Frame Borders */}
            <div className="fixed left-0 top-0 bottom-0 w-1 bg-white/5 z-40 hidden md:block" />
            <div className="fixed right-0 top-0 bottom-0 w-1 bg-white/5 z-40 hidden md:block" />

            {/* Main Content Area */}
            <main className="relative">
                <div className="fixed inset-0 bg-grid opacity-[0.1] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 relative z-10 space-y-32">
                    {children}
                </div>
            </main>
        </div>
    );
};
