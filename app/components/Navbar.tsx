"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Se a rota for /curriculo, a Navbar retorna nulo (fica invisível)
  if (pathname === "/curriculo") {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50">
        
        {/* Lado Esquerdo: Título */}
        <div className="text-emerald-500 font-mono text-xs md:text-sm tracking-widest uppercase font-bold">
          Portfólio Programador
        </div>

        {/* Lado Direito: Links */}
        <div className="flex gap-4 md:gap-8 items-center">
          <a href="#projetos" className="text-zinc-400 hover:text-green-400 text-xs md:text-sm transition-colors">
            projetos
          </a>
          <a href="#skills" className="text-zinc-400 hover:text-green-400 text-xs md:text-sm transition-colors">
            skills
          </a>
          <a href="#experience" className="text-zinc-400 hover:text-green-400 text-xs md:text-sm transition-colors">
            experiência
          </a>
          <a href="#contact" className="text-zinc-400 hover:text-green-400 text-xs md:text-sm font-medium transition-colors">
            contato
          </a>
        </div>

      </div>
    </nav>
  );
}