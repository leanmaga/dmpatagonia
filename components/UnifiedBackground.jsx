// components/UnifiedBackground.jsx
"use client";

import { motion } from "framer-motion";

const UnifiedBackground = ({ children }) => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 min-h-screen">
      {/* Efectos de fondo unificados con tonalidades violetas */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Círculos de neón violetas con pulse */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/12 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/12 via-purple-500/8 to-fuchsia-500/10 rounded-full blur-3xl animate-spin-slow" />

        {/* Efectos adicionales inspirados en tu CSS */}
        <div
          className="absolute top-3/4 left-1/8 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{
            background: "rgba(149, 66, 232, 0.15)",
            animationDelay: "2000ms",
          }}
        />
        <div
          className="absolute top-1/8 right-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            background: "rgba(141, 57, 163, 0.12)",
            animationDelay: "3000ms",
          }}
        />

        {/* Gradiente adicional estilo hero-gradient */}
        <div
          className="absolute top-2/3 left-1/3 w-[500px] h-[300px] rounded-full blur-[150px] opacity-20"
          style={{
            background:
              "linear-gradient(97.86deg, #a509ff 0%, #8d39a3 53.65%, #a134c7 100%)",
          }}
        />
      </div>

      {/* Grid de fondo sutil con toque violeta */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Efectos de partículas mejorados con colores violetas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Partículas que parpadean en tonos violetas */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0
                ? "bg-violet-400"
                : i % 3 === 1
                ? "bg-purple-400"
                : "bg-fuchsia-400"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Líneas de neón violetas que aparecen y desaparecen */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent"
            style={{
              left: "0%",
              right: "0%",
              top: `${15 + i * 15}%`,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + Math.random(),
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Partículas flotantes más grandes en tonos violetas */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`large-particle-${i}`}
            className={`absolute w-2 h-2 rounded-full ${
              i % 4 === 0
                ? "bg-violet-400/30"
                : i % 4 === 1
                ? "bg-purple-400/30"
                : i % 4 === 2
                ? "bg-fuchsia-400/30"
                : "bg-indigo-400/30"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Efecto shimmer violeta sutil */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default UnifiedBackground;
