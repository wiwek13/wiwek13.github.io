import React from 'react';

interface ScrollLayoutProps {
    children: React.ReactNode;
}

export const ScrollLayout: React.FC<ScrollLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#07090e] text-gray-300 font-sans selection:bg-[#00f3ff] selection:text-black relative">
            {/* Ambient Vignette */}
            <div className="ambient-vignette" />

            {/* HUD Frame Borders */}
            <div className="fixed left-0 top-0 bottom-0 w-[1px] bg-white/5 z-40 hidden md:block" />
            <div className="fixed right-0 top-0 bottom-0 w-[1px] bg-white/5 z-40 hidden md:block" />

            {/* Main Content Area */}
            <main className="relative">
                <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 relative z-10 space-y-32">
                    {children}
                </div>
            </main>
        </div>
    );
};
