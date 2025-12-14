import React from 'react';
import { MdHome, MdPerson, MdWork, MdCode, MdEmail } from 'react-icons/md';

export const NavHUD = () => {
    const links = [
        { icon: <MdHome />, href: '#' },
        { icon: <MdPerson />, href: '#about' },
        { icon: <MdWork />, href: '#experience' },
        { icon: <MdCode />, href: '#projects' },
        { icon: <MdEmail />, href: '#contact' },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 bg-surface/90 border border-white/10 px-2 py-2 rounded-full backdrop-blur-md shadow-2xl">
                {links.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all hover:scale-110 active:scale-95"
                    >
                        <span className="text-xl md:text-2xl">{item.icon}</span>
                    </a>
                ))}
            </div>
            <div className="text-center mt-2 text-[10px] text-neon-cyan font-mono tracking-widest opacity-60">HUD NAV</div>
        </div>
    );
};
