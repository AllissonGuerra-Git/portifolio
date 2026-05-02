import Image from "next/image";
import imagem from "../public/foto.jpeg";
import { projects } from "@/data/project";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Layout Dark com contraste em Emerald */}
      <main
        className="
        flex flex-col-reverse lg:flex-row
        items-center
        justify-between
        gap-12
        max-w-6xl
        mx-auto
        px-6
        py-12
        lg:py-24
        bg-transparent
      "
      >
        <div className="space-y-6 text-center lg:text-left">
          {/* Subtítulo Estilo Hacker */}
          <h1 className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-mono">
            DESENVOLVEDOR FULL STACK
          </h1>

          {/* Nome em Branco */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight text-white">
            Allisson Guerra
          </h1>

          {/* Descrição em Cinza para leitura confortável */}
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 text-justify">
            Construo produtos web do zero — desde a API até a interface.
            Foco em código limpo, UX que faz sentido e entregas que não travam.
          </p>

          {/* Botões com Brilho (Glow) - Todos padronizados */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.4)] text-center text-sm"
            >
              Falar comigo
            </a>

            <a
              href="#projetos"
              className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.4)] text-center text-sm"
            >
              Ver projetos
            </a>

            <Link href="/curriculo" className="contents">
              <button className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.4)] text-sm">
                Ver currículo
              </button>
            </Link>
          </div>
        </div>

        {/* Foto de Perfil com Sombra Esmeralda */}
        <div className="relative">
          <Image
            className="rounded-full
            w-48 h-48
            md:w-56 md:h-56
            lg:w-72 lg:h-72
            object-cover
            border-4 border-emerald-500/20 shadow-[0_0_60px_-12px_rgba(16,185,129,0.4)]"
            src={imagem}
            alt="foto perfil"
            width={300}
            height={300}
            priority
          />
        </div>
      </main>

      {/* SEÇÃO DE PROJETOS - Onde os links do GitHub aparecem */}
      <section className="max-w-6xl mx-auto px-6 py-16" id="projetos">
        <h2 className="text-3xl font-bold mb-10 text-white border-l-4 border-emerald-500 pl-4">
          Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techs={project.techs}
              github={project.github}
            />
          ))}
        </div>
      </section>

      {/* SEÇÃO DE SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-16" id="skills">
        <Skills />
      </section>

      {/* SEÇÃO DE EXPERIÊNCIA */}
      <section className="max-w-6xl mx-auto px-6 py-16" id="experience">
        <Experience />
      </section>

      {/* SEÇÃO DE CONTATO */}
      <section id="contact" className="py-16">
        <Contact />
      </section>

      {/* FOOTER */}
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}