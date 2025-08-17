// components/Hero.tsx
import { Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="w-full min-h-[90vh] bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white flex flex-col items-center justify-center px-4 text-center gap-6"
    >
      {/* Título */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">Bem Vindo a</h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-2">
          Content Creations
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto">
          Transformamos suas ideias em vídeos incríveis, conteúdos curtos virais e overlays de live profissionais, que encantam e convertem seu público.
        </p>
      </div>

      {/* Botões */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="#Youtube" 
          className="flex items-center gap-2 bg-white text-green-700 font-semibold px-5 py-3 rounded-md hover:bg-green-100 transition"
        >
          <Play className="w-4 h-4" />
          Veja Nosso Trabalho
        </Link>
        <Link
          href="#Contato" 
          className="border border-white px-5 py-3 rounded-md font-semibold hover:bg-white hover:text-green-700 transition"
        >
          Começar Projeto
        </Link>
      </div>
    </section>
  );
}