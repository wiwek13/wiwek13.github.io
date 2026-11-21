import React, { useState, useEffect, useRef } from 'react';
import { 
    MdSensors, 
    MdPerson, 
    MdWork, 
    MdCode, 
    MdEmail, 
    MdDescription, 
    MdSearch, 
    MdClose, 
    MdContentCopy,
    MdCheck,
    MdSecurity,
    MdLayers
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
        navigator.clipboard.writeText('wiwek13@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const commands: CommandItem[] = [
        {
            id: 'overview',
            title: 'Jump to Executive Overview & Metrics',
            category: 'NAVIGATION',
            icon: <MdPerson className="text-cyan-400" />,
            shortcut: '01',
            action: () => scrollToSection('overview')
        },
        {
            id: 'telemetry',
            title: 'Inspect Live Distributed Trace & FinOps',
            category: 'NAVIGATION',
            icon: <MdSensors className="text-cyan-400" />,
            shortcut: '02',
            action: () => scrollToSection('telemetry')
        },
        {
            id: 'experience',
            title: 'View Enterprise Experience (Nymcard, Zebpay...)',
            category: 'NAVIGATION',
            icon: <MdWork className="text-cyan-400" />,
            shortcut: '03',
            action: () => scrollToSection('experience')
        },
        {
            id: 'projects',
            title: 'View Flagship Autonomous Projects',
            category: 'NAVIGATION',
            icon: <MdCode className="text-cyan-400" />,
            shortcut: '04',
            action: () => scrollToSection('projects')
        },
        {
            id: 'credentials',
            title: 'View CNCF Certifications & MANIT Foundation',
            category: 'NAVIGATION',
            icon: <MdSecurity className="text-cyan-400" />,
            shortcut: '05',
            action: () => scrollToSection('credentials')
        },
        {
            id: 'skills',
            title: 'Explore Technical Skill Matrix',
            category: 'NAVIGATION',
            icon: <MdLayers className="text-cyan-400" />,
            shortcut: '06',
            action: () => scrollToSection('skills')
        },
        {
            id: 'contact',
            title: 'Jump to Direct Contact Channels',
            category: 'NAVIGATION',
            icon: <MdEmail className="text-cyan-400" />,
            shortcut: '07',
            action: () => scrollToSection('contact')
        },
        {
            id: 'copy-email',
            title: 'Copy Email Address (wiwek13@gmail.com)',
            category: 'ACTIONS',
            icon: copied ? <MdCheck className="text-emerald-400" /> : <MdContentCopy className="text-cyan-400" />,
            shortcut: 'C',
            action: copyContact
        },
        {
            id: 'resume',
            title: 'Download Official Resume PDF',
            category: 'ACTIONS',
            icon: <MdDescription className="text-cyan-400" />,
            shortcut: 'R',
            action: () => {
                window.open('/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf', '_blank');
                closeDialog();
            }
        }
    ];

    const filtered = commands.filter(cmd => 
        cmd.title.toLowerCase().includes(search.toLowerCase()) ||
        cmd.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <dialog
            ref={dialogRef}
            onClick={(e) => {
                if (e.target === dialogRef.current) closeDialog();
            }}
            className="fixed inset-0 z-50 p-4 m-auto bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-md outline-none"
        >
            <div className="w-full max-w-xl mx-auto rounded-3xl bg-[#0b101c] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden text-gray-200 font-sans">
                {/* Search Bar */}
                <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
                    <MdSearch className="text-cyan-400 text-xl shrink-0" />
                    <input
                        type="text"
                        placeholder="Search commands, sections, or actions..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-transparent text-white text-sm outline-none font-mono placeholder-gray-500"
                        autoFocus
                    />
                    <button
                        onClick={closeDialog}
                        className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"
                    >
                        <MdClose className="text-xl" />
                    </button>
                </div>

                {/* Commands List */}
                <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                    {filtered.length === 0 ? (
                        <div className="py-8 text-center text-xs font-mono text-gray-500">
                            No commands match "{search}"
                        </div>
                    ) : (
                        filtered.map((cmd) => (
                            <button
                                key={cmd.id}
                                onClick={cmd.action}
                                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left group"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{cmd.icon}</span>
                                    <span className="text-xs font-medium text-gray-200 group-hover:text-white">
                                        {cmd.title}
                                    </span>
                                </div>
                                {cmd.shortcut && (
                                    <kbd className="px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-black/40 border border-white/10 rounded">
                                        {cmd.shortcut}
                                    </kbd>
                                )}
                            </button>
                        ))
                    )}
                </div>

                {/* Footer Guide */}
                <div className="px-4 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono text-gray-500">
                    <span>Navigation &amp; SRE Commands</span>
                    <span>ESC to close</span>
                </div>
            </div>
        </dialog>
    );
};
