import React from 'react';
import { 
    MdHome, 
    MdSensors,
    MdPerson, 
    MdWork, 
    MdCode, 
    MdEmail, 
    MdTerminal 
} from 'react-icons/md';

export const NavHUD: React.FC = () => {
    const triggerPalette = () => {
        window.dispatchEvent(new CustomEvent('open-command-palette'));
    };

    const links = [
        { icon: <MdHome />, href: '#', label: 'Home' },
        { icon: <MdSensors />, href: '#architecture', label: 'Topology' },
        { icon: <MdPerson />, href: '#about', label: 'About' },
        { icon: <MdWork />, href: '#experience', label: 'Milestones' },
        { icon: <MdCode />, href: '#skills', label: 'Skills' },
        { icon: <MdEmail />, href: '#contact', label: 'Contact' },
    ];

    return (
        <aside aria-label="HUD Navigation" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <nav aria-label="Quick Navigation" className="flex items-center gap-1.5 bg-[#090b10]/90 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] border-[#00f3ff]/20">
                {links.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        title={item.label}
                        aria-label={item.label}
                        className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all hover:scale-110 active:scale-95"
                    >
                        <span className="text-lg md:text-xl">{item.icon}</span>
                    </a>
                ))}

                <div className="w-[1px] h-5 bg-white/10 mx-1" />

                {/* ⌘K Trigger Button */}
                <button
                    onClick={triggerPalette}
                    title="Open Command Palette (⌘K)"
                    aria-label="Open Command Palette"
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 text-xs font-mono font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                >
                    <MdTerminal className="text-sm" />
                    <span className="hidden sm:inline">⌘K</span>
                </button>
            </nav>
        </aside>
    );
};
