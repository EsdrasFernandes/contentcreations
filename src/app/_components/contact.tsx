"use client";

import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; 

interface ContactCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    buttonText: string;
    buttonHref: string;
    buttonColor: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
    title,
    description,
    icon,
    buttonText,
    buttonHref,
    buttonColor,
}) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center flex-1 mx-4 max-w-sm">
            <div
                className={`p-4 mx-auto rounded-full inline-flex items-center justify-center mb-6`}
                style={{ background: buttonColor }}
            >
                {icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-3 px-6 rounded-full inline-flex items-center justify-center transition-colors duration-300 font-medium text-white`}
                style={{ background: buttonColor }}
            >
                {buttonText}
            </a>
        </div>
    );
};

export default function ContactSection() {
    return (
        <section id="contato" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Fale Conosco</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Entre em contato através das nossas redes sociais e vamos criar algo incrível juntos.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
                    {/* Card do WhatsApp */}
                    <ContactCard
                        title="WhatsApp"
                        description="Fale diretamente conosco pelo WhatsApp para um atendimento rápido e personalizado."
                        icon={<FaWhatsapp className="text-white w-8 h-8" />}
                        buttonText="Conversar no WhatsApp"
                        buttonHref="https://wa.me/+5573991182379" 
                        buttonColor="#25D366"
                    />
                    
                    {/* Card do Instagram */}
                    <ContactCard
                        title="Instagram"
                        description="Siga nosso Instagram para ver nossos trabalhos mais recentes e bastidores dos projetos."
                        icon={<FaInstagram className="text-white w-8 h-8" />}
                        buttonText="Seguir no Instagram"
                        buttonHref="https://www.instagram.com/contentcreations.ag/" 
                        buttonColor="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
                    />
                </div>
            </div>
        </section>
    );
}