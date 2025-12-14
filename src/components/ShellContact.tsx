import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export const ShellContact = () => {
    return (
        <section id="contact" className="py-24 px-4 font-mono relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                <div className="flex items-center gap-8 md:gap-12 p-8 rounded-2xl bg-black/40 border border-gray-800 backdrop-blur-sm">
                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/vivek-kushwah" target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#00f3ff] transition-colors hover:scale-110 transform duration-300" aria-label="LinkedIn">
                        <FaLinkedin className="text-4xl md:text-5xl" />
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/wiwek13" target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-300" aria-label="GitHub">
                        <FaGithub className="text-4xl md:text-5xl" />
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/918989879834" target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#25D366] transition-colors hover:scale-110 transform duration-300" aria-label="WhatsApp">
                        <FaWhatsapp className="text-4xl md:text-5xl" />
                    </a>

                    {/* Telegram */}
                    <a href="https://t.me/+918989879834" target="_blank" rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#0088cc] transition-colors hover:scale-110 transform duration-300" aria-label="Telegram">
                        <FaTelegramPlane className="text-4xl md:text-5xl" />
                    </a>

                    {/* Email */}
                    <a href="mailto:wiwek13@gmail.com"
                        className="text-gray-500 hover:text-[#00f3ff] transition-colors hover:scale-110 transform duration-300" aria-label="Email">
                        <MdEmail className="text-4xl md:text-5xl" />
                    </a>
                </div>

                <p className="mt-8 text-gray-600 text-sm tracking-widest uppercase">
                    Start a Loop
                </p>
            </div>
        </section>
    );
};
