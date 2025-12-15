import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export const ShellContact = () => {
    return (
        <section id="contact" className="py-24 font-mono relative z-10 w-full bg-gradient-to-b from-[#0a192f] to-[#112240]">
            <div className="flex flex-col items-center w-full">

                <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 py-12 border-t border-white/5 backdrop-blur-xl">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/wiwek13/" target="_blank" rel="noopener noreferrer"
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
