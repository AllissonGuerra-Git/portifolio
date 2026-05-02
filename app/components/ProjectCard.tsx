"use client";

import { FaGithub } from "react-icons/fa"

type ProjectProps = {
    title: string
    description: string
    techs: string[]
    github: string
}

export default function ProjectCard({title, description, techs, github}: ProjectProps) {
    
    const tocarSom = (e: React.MouseEvent) => {
        e.preventDefault(); 
        
        const audio = new Audio('/sounds/clique.mp3');
        audio.volume = 0.6; // Aumentei um pouco o volume
        
        audio.play().catch(() => {});

        // Reduzi de 200ms para 100ms para ficar mais rápido
        setTimeout(() => {
            window.open(github, "_blank", "noopener,noreferrer");
        }, 100);
    };

    return (
        <a 
            href={github} 
            onClick={tocarSom}
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group"
        >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 
                            hover:bg-zinc-800/80 hover:border-emerald-500/50 
                            transition-all duration-300 space-y-4 h-full cursor-pointer">
                
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {title}
                </h3>
                
                <p className="text-emerald-500 text-sm">{description}</p>
                
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                        <span 
                            key={index} 
                            className="text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="pt-2 flex justify-between items-center">
                    <div className="text-emerald-600 group-hover:text-emerald-400 group-hover:scale-110 transition-all">
                        <FaGithub size={40} />
                    </div>
                    
                    <span className="text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver no GitHub →
                    </span>
                </div>
            </div>
        </a>
    )
}