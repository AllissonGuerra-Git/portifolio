import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio - Allisson Guerra",
  description: "Portfólio - Allisson Guerra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      {/* CORREÇÃO: Adicionado bg-[#09090b] (Zinc-950) e text-zinc-100 
          diretamente no body para forçar o tema dark e evitar o bug do fundo branco/verde.
      */}
      <body className="relative min-h-screen bg-[#09090b] text-zinc-100 antialiased">
        <Background />
        
        {/* O z-10 garante que o conteúdo fique na frente das animações do Background */}
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}