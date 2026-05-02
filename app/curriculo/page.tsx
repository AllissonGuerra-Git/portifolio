"use client";

import Link from "next/link";
import { FaArrowLeft, FaCode, FaIndustry, FaLanguage } from "react-icons/fa";

export default function Curriculo() {
  const formacaoPrincipal = [
    { nome: "Desenvolvimento de Sistemas", escola: "SENAI", horas: "1300h", status: "Em Andamento" },
    { nome: "Fullstack", escola: "SENAI", horas: "746h", status: "Em Andamento" },
  ];

  const cursosTI = [
    { nome: "Inglês", escola: "NEL", horas: "280h" },
    { nome: "IA Aplicada à Indústria", escola: "SENAI", horas: "48h" },
    { nome: "Introdução à Criptografia", escola: "SENAI", horas: "40h" },
    { nome: "Fundamentos de Banco de Dados", escola: "SENAI", horas: "20h" },
    { nome: "Navegação Segura na Internet", escola: "SENAI", horas: "12h" },
  ];

  const industria40 = [
    { nome: "Indústria 4.0: Competências e Conexão", escola: "SENAI", horas: "80h total" },
    { nome: "Protocolos de Redes Industriais", escola: "SENAI", horas: "12h" },
    { nome: "Transformação Digital e Inovação", escola: "SENAI", horas: "4h" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 mb-12 transition-colors">
          <FaArrowLeft /> Voltar ao Portfólio
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl font-black text-white mb-4 italic uppercase">Currículo Técnico</h1>
          <div className="h-1 w-20 bg-emerald-500"></div>
        </header>

        <section className="mb-12">
          <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6 uppercase tracking-tighter">
            <FaCode className="text-emerald-500" /> Formação Base
          </h2>
          <div className="grid gap-4">
            {formacaoPrincipal.map((c, i) => (
              <div key={i} className="bg-zinc-900 border-l-4 border-emerald-600 p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-white">{c.nome}</h3>
                  <p className="text-sm opacity-60">{c.escola} • {c.status}</p>
                </div>
                <span className="text-emerald-500 font-mono font-bold">{c.horas}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6 uppercase tracking-tighter">
            <FaLanguage className="text-emerald-500" /> Especializações TI
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {cursosTI.map((c, i) => (
              <div key={i} className="bg-zinc-900/50 p-4 border border-zinc-800 rounded hover:border-emerald-500 transition-colors">
                <h3 className="font-bold text-zinc-100">{c.nome}</h3>
                <p className="text-xs text-zinc-500">{c.horas}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6 uppercase tracking-tighter">
            <FaIndustry className="text-emerald-500" /> Foco Indústria 4.0
          </h2>
          <div className="grid gap-3">
            {industria40.map((c, i) => (
              <div key={i} className="flex justify-between border-b border-zinc-800 py-2">
                <span>{c.nome}</span>
                <span className="text-zinc-600">{c.horas}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-zinc-900 text-zinc-600 text-sm">
          © {new Date().getFullYear()} — Allisson Guerra
        </footer>
      </div>
    </div>
  );
}