"use client";

import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const contactLinks = [
    {
      name: "E-mail",
      icon: <FaEnvelope size={20} />,
      label: "allissongsantos@gmail.com",
      href: "mailto:allissongsantos@gmail.com",
    },
    {
      name: "Github",
      icon: <FaGithub size={20} />,
      label: "AllissonGuerra-Git",
      href: "https://github.com/AllissonGuerra-Git",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      label: "_allisson_guerra",
      href: "https://instagram.com/_allisson_guerra",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-32 py-20" id="contact">
      <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
        
        {/* LADO ESQUERDO */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl italic text-white font-light">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-zinc-400">
            Aberto a projetos freelance e oportunidades CLT.
          </p>
        </div>

        {/* LADO DIREITO - LINKS COM HOVER ROXO */}
        <div className="flex flex-col gap-4">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.name !== "E-mail" ? "_blank" : undefined}
              rel={contact.name !== "E-mail" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-zinc-200 font-mono text-sm md:text-base transition-all duration-300 hover:text-purple-500 group"
            >
              <span className="p-2 bg-zinc-800 rounded-lg group-hover:bg-purple-500/10 group-hover:border group-hover:border-purple-500/50 transition-all duration-300">
                {contact.icon}
              </span>
              <span>{contact.label}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}