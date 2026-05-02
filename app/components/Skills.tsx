"use client"; // Adicione isso no topo para garantir que a animação rode no navegador

export default function Skills() {
    const skills = [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Nest.js", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
    ];

    return (
        <section className="mt-10 overflow-hidden w-full">
            {/* ==========================================================
                COR DO TÍTULO "SKILLS": 
                Mude 'text-white' para 'text-green-500' se quiser verde 
                ==========================================================
            */}
            <h2 className="text-3xl font-semibold mb-8 px-4 text-white">
                Skills
            </h2>
            
            <div className="relative flex overflow-hidden py-6 bg-black">
                <div className="animate-marquee flex gap-8">
                    {[...skills, ...skills].map((skill, index) => (
                        <div 
                            key={index} 
                            /* COR DO CARD (bg-zinc-900) E DA BORDA (border-white/10) */
                            className="flex items-center gap-3 px-6 py-3 bg-zinc-900 rounded-lg border border-white/10 min-w-fit"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                            
                            {/* ==========================================================
                                COR DO NOME DENTRO DO CARD (Next.js, etc):
                                Mude 'text-gray-400' para 'text-white' se quiser mais brilho
                                ==========================================================
                            */}
                            <span className="text-gray-400 font-medium whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}