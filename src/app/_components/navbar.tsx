// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#f3f7f3] py-4 px-8 flex items-center justify-between shadow-sm z-50">
      {/* Logo e Nome */}
      <div className="flex items-center gap-2">
        <Image src="/claquete.png" alt="Logo" width={32} height={32} />
        <span className="font-bold text-xl text-zinc-900">Content Creations</span>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex gap-6 text-zinc-800 font-medium">
        <Link href="#inicio">Início</Link>
        <Link href="#sobre">Sobre</Link>
        <Link href="#youtube">Youtube</Link>
        <Link href="#curtos">Curtos</Link>
        <Link href="#overlays">Overlays</Link>
        <Link href="#thumbs">Thumbs</Link>

      </nav>

      {/* Botão Contato */}
      <Link
        href="#contato"
        className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition"
      >
        Contato
      </Link>
    </header>
  );
}