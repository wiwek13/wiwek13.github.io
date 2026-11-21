import React, { useState, useEffect, useRef } from 'react';
import { 
    MdTerminal, 
    MdSensors, 
    MdPerson, 
    MdWork, 
    MdCode, 
    MdEmail, 
    MdDescription, 
    MdSearch, 
    MdClose, 
    MdContentCopy,
    MdCheck
} from 'react-icons/md';

interface CommandItem {
    id: string;
    title: string;
    category: 'NAVIGATION' | 'ACTIONS' | 'SYSTEM';
    icon: React.ReactNode;
    shortcut?: string;
    action: () => void;
}

export const CommandPalette: React.FC = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        if (dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
            setIsOpen(true);
            setSearch('');
        }
    };

    const closeDialog = () => {
        if (dialogRef.current && dialogRef.current.open) {
            dialogRef.current.close();
            setIsOpen(false);
        }
    };

    // Keyboard listener for Cmd+K / Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                if (dialogRef.current?.open) {
                    closeDialog();
                } else {
                    openDialog();
                }
            }
        };

        // Listen for custom trigger event
        const handleCustomOpen = () => openDialog();
        window.addEventListener('open-command-palette', handleCustomOpen);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('open-command-palette', handleCustomOpen);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const scrollToSection = (id: string) => {
        closeDialog();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const copyContact = () => {
        navigator.clipboard.writeText('vivekkushwah.devops@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const commands: CommandItem[] = [
        {
            id: 'arch',
            title: 'Jump to Architectural Topology & AI RCA',
            category: 'NAVIGATION',
            icon: <MdSensors className="text-[#00f3ff]" />,
            shortcut: '01',
            action: () => scrollToSection('architecture')
        },
        {
            id: 'about',
            title: 'Jump to Identity & Core Philosophy',
            category: 'NAVIGATION',
            icon: <MdPerson className="text-[#00f3ff]" />,
            shortcut: '02',
            action: () => scrollToSection('about')
        },
        {
            id: 'exp',
            title: 'Jump to Production Milestones (Nymcard, Zebpay)',
            category: 'NAVIGATION',
            icon: <MdWork className="text-[#00f3ff]" />,
            shortcut: '03',
            action: () => scrollToSection('experience')
        },
        {
            id: 'skills',
            title: 'Jump to Capabilities & Tool Matrix',
            category: 'NAVIGATION',
            icon: <MdCode className="text-[#00f3ff]" />,
            shortcut: '04',
            action: () => scrollToSection('skills')
        },
        {
            id: 'projects',
            title: 'Jump to Platform Deployments',
            category: 'NAVIGATION',
            icon: <MdCode className="text-[#00f3ff]" />,
            shortcut: '05',
            action: () => scrollToSection('projects')
        },
        {
            id: 'resume',
            title: 'Download Resume [Senior Platform Engineer PDF]',
            category: 'ACTIONS',
            icon: <MdDescription className="text-amber-400" />,
            shortcut: 'PDF',
            action: () => {
                window.open('/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf', '_blank');
                closeDialog();
            }
        },
        {
            id: 'email',
            title: copied ? 'Email Copied to Clipboard!' : 'Copy Email Address (vivekkushwah.devops@gmail.com)',
            category: 'ACTIONS',
            icon: copied ? <MdCheck className="text-emerald-400" /> : <MdContentCopy className="text-emerald-400" />,
            shortcut: 'COPY',
            action: copyContact
        },
        {
            id: 'contact',
            title: 'Deploy Message via Terminal',
            category: 'ACTIONS',
            icon: <MdEmail className="text-[#ff007f]" />,
            shortcut: '06',
            action: () => scrollToSection('contact')
        }
    ];

    const filtered = commands.filter(c => 
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase())
    );

    // Native click-outside handler compliant with Google Modern Web Guidance
    const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (!dialogRef.current) return;
        const rect = dialogRef.current.getBoundingClientRect();
        const isInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.bottom &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.right
        );
        if (!isInDialog) {
            closeDialog();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClick={handleDialogClick}
            className="command-dialog fixed inset-0 m-auto bg-[#0a0d14] border border-[#00f3ff]/40 rounded-2xl p-0 max-w-xl w-[92vw] shadow-[0_0_50px_rgba(0,243,255,0.25)] text-gray-200 font-mono overflow-hidden z-50 backdrop:bg-black/75"
        >
            {/* Header / Search bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-black/40">
                <MdSearch className="text-xl text-[#00f3ff]" />
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search commands, sections, or actions (e.g. 'resume', 'skills')..."
                    className="bg-transparent border-none outline-none text-white text-xs sm:text-sm font-mono w-full placeholder:text-gray-500"
                    autoFocus
                />
                <button
                    onClick={closeDialog}
                    className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                >
                    <MdClose className="text-lg" />
                </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.04]">
                {filtered.length === 0 ? (
                    <div className="text-center py-8 text-xs text-gray-500 font-mono">
                        No commands matching "{search}".
                    </div>
                ) : (
                    filtered.map((item) => (
                        <button
                            key={item.id}
                            onClick={item.action}
                            className="w-full text-left px-3.5 py-3 rounded-lg hover:bg-white/[0.07] hover:border-[#00f3ff]/30 border border-transparent transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-lg group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </span>
                                <div>
                                    <div className="text-xs sm:text-sm text-gray-200 group-hover:text-white font-medium">
                                        {item.title}
                                    </div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                                        {item.category}
                                    </div>
                                </div>
                            </div>

                            {item.shortcut && (
                                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 font-mono group-hover:text-[#00f3ff] group-hover:border-[#00f3ff]/30">
                                    {item.shortcut}
                                </span>
                            )}
                        </button>
                    ))
                )}
            </div>

            {/* Bottom Status Bar */}
            <div className="px-4 py-2.5 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                    <MdTerminal className="text-[#00f3ff]" />
                    <span>VK_CONSOLE v2.4</span>
                </div>
                <div>Press [ESC] to exit</div>
            </div>
        </dialog>
    );
};
