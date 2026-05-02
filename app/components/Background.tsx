"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const icon = new Image();
    // Usando o ícone do GitHub que você já tem na pasta public
    icon.src = "/github.jpeg"; 

    let particles: any[] = [];
    const PARTICLE_COUNT = 15; // Ajuste aqui se quiser mais ou menos ícones

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Cria os ícones em posições aleatórias com movimento
    particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 0.5, // Velocidade horizontal
      dy: (Math.random() - 0.5) * 0.5, // Velocidade vertical
      size: Math.random() * 15 + 10,  // Tamanho aleatório
    }));

    let frame: number;

    const draw = () => {
      // 1. Pinta o fundo de preto sólido
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Define a transparência dos ícones (para não ficar forte demais)
      ctx.globalAlpha = 0.4;

      // 3. Desenha e move cada ícone
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Rebate nas bordas da tela
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.drawImage(icon, p.x, p.y, p.size, p.size);
      });

      frame = requestAnimationFrame(draw);
    };

    icon.onload = () => {
      draw();
    };

    // Caso a imagem demore, já começa a pintar o preto
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}