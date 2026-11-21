import React, { useState, useEffect } from 'react';
import { 
    MdDescription, 
    MdEmail, 
    MdMenu, 
    MdClose, 
    MdSearch,
    MdOpenInNew
} from 'react-icons/md';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Telemetry & Trace', href: '#telemetry' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Credentials', href: '#credentials' },
        { name: 'Skill Matrix', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const openCommandPalette = () => {
        window.dispatchEvent(new CustomEvent('open-command-palette'));
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' 
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                
                {/* Brand / Identity */}
                <a href="#overview" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm shadow-[0_0_15px_rgba(0,243,255,0.15)] group-hover:border-cyan-400 transition-colors">
                        VK
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm sm:text-base tracking-tight">
                                VIVEK KUSHWAH
                            </span>
                            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                                SRE / PLATFORM
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="hidden md:inline">99.99% SLO · Multi-Cloud Observability</span>
                            <span className="md:hidden">Available for Roles</span>
                        </div>
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Action Cluster */}
                <div className="flex items-center gap-2">
                    {/* Command Palette Trigger */}
                    <button
                        onClick={openCommandPalette}
                        className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-xs font-mono transition-all"
                        title="Command Palette (Cmd+K)"
                    >
                        <MdSearch className="text-base text-cyan-400" />
                        <span className="text-[11px]">Search</span>
                        <kbd className="px-1.5 py-0.5 text-[10px] bg-black/40 border border-white/15 rounded text-gray-400">⌘K</kbd>
                    </button>

                    {/* PDF Resume Direct Download */}
                    <a
                        href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                        target="_blank"
                        className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                    >
                        <MdDescription className="text-sm" />
                        <span className="hidden sm:inline">Resume PDF</span>
                        <span className="sm:hidden">CV</span>
                    </a>

                    {/* Email CTA */}
                    <a
                        href="mailto:wiwek13@gmail.com"
                        className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                    >
                        <MdEmail className="text-sm text-cyan-400" />
                        <span className="hidden sm:inline">Get in Touch</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                        aria-label="Toggle navigation"
                    >
                        {mobileOpen ? <MdClose className="text-xl" /> : <MdMenu className="text-xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileOpen && (
                <div className="lg:hidden bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 animate-fade-in">
                    <nav className="flex flex-col gap-1.5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-3 py-2 rounded-xl text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2">
                        <button
                            onClick={() => {
                                setMobileOpen(false);
                                openCommandPalette();
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-left text-xs font-mono text-gray-300 flex items-center justify-between"
                        >
                            <span>Open Command Palette</span>
                            <kbd className="px-1.5 py-0.5 text-[10px] bg-black/40 rounded border border-white/20">⌘K</kbd>
                        </button>
                        <a
                            href="/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf"
                            target="_blank"
                            className="w-full py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-center text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5"
                        >
                            <MdDescription className="text-base" />
                            <span>Download Full Resume PDF</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};
