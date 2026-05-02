export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Título limpo e visível */}
      <h2 className="text-3xl font-bold text-white mb-12">
        Experiência
      </h2>

      <div className="space-y-8">
        {/* ITEM 1 - DEV FULL STACK */}
        <div className="grid md:grid-cols-[150px_1fr] gap-4 group">
          <span className="text-zinc-500 font-mono text-sm pt-6 uppercase">
            2025 — Atual
          </span>

          <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-300 group-hover:border-emerald-500/50 group-hover:bg-zinc-900/80">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              Dev Full Stack em Treinamento
            </h3>
            
            <p className="text-emerald-500 font-mono text-sm mt-1">
              @ Conta Simples
            </p>

            <p className="text-zinc-400 mt-4 leading-relaxed text-sm md:text-base text-justify">
              Desenvolvimento de novas funcionalidades no produto principal, focando na experiência do usuário e performance do back-end.
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full border border-emerald-500/20">Next.js</span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full border border-emerald-500/20">Node.js</span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full border border-emerald-500/20">TypeScript</span>
            </div>
          </div>
        </div>

        {/* ITEM 2 - SENAI */}
        <div className="grid md:grid-cols-[150px_1fr] gap-4 group">
          <span className="text-zinc-500 font-mono text-sm pt-6 uppercase">
            2025 — Atual
          </span>

          <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 transition-all duration-300 group-hover:border-emerald-500/50 group-hover:bg-zinc-900/80">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              Estudante de Desenvolvimento de Sistemas
            </h3>
            
            <p className="text-emerald-500 font-mono text-sm mt-1">
              @ SENAI Petrolina
            </p>

            <p className="text-zinc-400 mt-4 leading-relaxed text-sm md:text-base text-justify">
              Formação técnica focada em análise de sistemas, banco de dados e lógica de programação avançada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}