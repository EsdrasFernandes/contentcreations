"use client";

import React from 'react';
import { FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa';
import Image from "next/image"; 

export default function Footer() {
    return (
        <footer className="bg-[#2a3c2e] text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-12 md:space-y-0">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/claquete.png"
                                alt="Logo Content Creations"
                                width={32}
                                height={32}
                                className="w-8 h-8" 
                            />
                            <h3 className="text-xl font-bold text-white">CreativeStudio</h3>
                        </div>
                        <p className="max-w-xs text-sm">
                            Transformamos ideias em conteúdo extraordinário. Especializados em edições vídeo para Youtube, vídeos curtos e
                            overlays live que geram resultados reais.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://www.instagram.com/contentcreations.ag/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#3e5241] p-2 rounded-lg hover:bg-[#4a5f4d] transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-6 h-6 text-white" />
                            </a>
                            
                        </div>
                    </div>

                    {/* Seção 2: Links Rápidos */}
                    <div className="flex-1 space-y-4 md:pl-16 lg:pl-32">
                        <h4 className="text-lg font-bold text-white">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#Youtube" className="hover:text-white transition-colors">Youtube</a></li>
                            <li><a href="#Reels" className="hover:text-white transition-colors">Reels</a></li>
                            <li><a href="#Overlays" className="hover:text-white transition-colors">Overlays</a></li>
                            <li><a href="#Sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                        </ul>
                    </div>

                    {/* Seção 3: Contato */}
                    <div className="flex-1 space-y-4">
                        <h4 className="text-lg font-bold text-white">Contato</h4>
                        <div className="space-y-2">
                            <a
                                href="tel:+5511999999999"
                                className="flex items-center space-x-2 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.99 1.12l-.744 4.148A1 1 0 017.062 8.528l3.435-1.718a1 1 0 011.086.202l3.41 3.41a1 1 0 01.202 1.086l-1.718 3.435a1 1 0 01-.54.54l-4.148.744a1 1 0 01-1.12-.99L2 14V3z" />
                                </svg>
                                <span>+55 (73) 99118-2379</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divisória */}
                <hr className="border-t border-[#4a5f4d] my-12" />

                {/* Seção de Links */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
                    <p>© 2025 CreativeStudio.</p>
                </div>
            </div>
        </footer>
    );
}