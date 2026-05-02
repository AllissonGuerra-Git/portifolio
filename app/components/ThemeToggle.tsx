"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Esse useEffect é importante para evitar erros de hidratação (quando o servidor pensa uma coisa e o navegador outra)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-5 right-5 z-50 p-3 rounded-full bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black border border-white/10 shadow-lg hover:scale-110 transition-all active:scale-95"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}