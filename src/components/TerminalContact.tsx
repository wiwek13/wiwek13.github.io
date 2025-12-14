import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const TerminalContact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('sent');
            // Reset after delay
            setTimeout(() => setStatus('idle'), 3000);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 px-4 font-mono">
            <div className="max-w-4xl mx-auto bg-black/90 border border-gray-800 rounded-lg overflow-hidden shadow-2xl backdrop-blur">
                {/* Header */}
                <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex justify-between items-center text-xs text-gray-500">
                    <span>bash — 80x24</span>
                    <span>SSH: secure_connection_active</span>
                </div>

                <div className="p-6 md:p-10 text-sm md:text-base text-gray-300">
                    <div className="mb-6 text-gray-400">
                        Last login: {new Date().toUTCString()} from 127.0.0.1
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <div className="flex-shrink-0 text-neon-green">
                                <span className="font-bold">root@portfolio</span>:<span className="text-blue-400">~/contact</span>$
                            </div>
                            <div className="flex-1 flex gap-2">
                                <span className="text-yellow-500 whitespace-nowrap">./input_name.sh</span>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    placeholder='Enter Name...'
                                    className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 placeholder-gray-700"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <div className="flex-shrink-0 text-neon-green">
                                <span className="font-bold">root@portfolio</span>:<span className="text-blue-400">~/contact</span>$
                            </div>
                            <div className="flex-1 flex gap-2">
                                <span className="text-yellow-500 whitespace-nowrap">./input_email.sh</span>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    placeholder='Enter Email...'
                                    className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 placeholder-gray-700"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="flex flex-col gap-2">
                            <div className="text-neon-green">
                                <span className="font-bold">root@portfolio</span>:<span className="text-blue-400">~/contact</span>$
                                <span className="text-yellow-500 ml-2">nano message.txt</span>
                            </div>
                            <textarea
                                required
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                placeholder="// Write your message here... Press Ctrl+X to send (or click the button)"
                                className="w-full bg-gray-900/50 border border-dashed border-gray-700 p-4 text-white outline-none focus:border-neon-cyan h-32 resize-none font-mono"
                            />
                        </div>

                        {/* Submit Action */}
                        <div className="pt-4">
                            {status === 'idle' && (
                                <button type="submit" className="group flex items-center gap-2 text-neon-cyan hover:text-white transition-colors">
                                    <span className="text-neon-pink">❯</span>
                                    <span className="underline decoration-dashed capitalize group-hover:no-underline">sh send_message.sh --force</span>
                                </button>
                            )}

                            {status === 'sending' && (
                                <div className="text-yellow-500 animate-pulse">
                                    [Process] Encrypting and transmitting payload...
                                </div>
                            )}

                            {status === 'sent' && (
                                <div className="text-green-500">
                                    <span className="block">[Success] Message packet delivered successfully.</span>
                                    <span className="block text-gray-500 text-xs mt-1">Connection closed. Resetting session...</span>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
