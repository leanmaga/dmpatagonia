// components/HeroBackground.jsx
"use client";

import { motion } from "framer-motion";

const HeroBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo dividido FORZADO con grid CSS - MÁS CONTRASTADO */}
      <div className="absolute inset-0 grid grid-cols-2">
        {/* Columna IZQUIERDA - AZUL MÁS INTENSO */}
        <div className="bg-gradient-to-br from-zinc-950 via-blue-700 to-zinc-950"></div>

        {/* Columna DERECHA - VIOLETA MÁS INTENSO */}
        <div className="bg-gradient-to-bl from-zinc-950 via-purple-700 to-zinc-950"></div>
      </div>

      {/* Efectos de fondo - Lado AZUL (IZQUIERDO) - MÁS INTENSOS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/8 w-72 h-72 bg-blue-400/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2000ms" }}
        ></div>
      </div>

      {/* Efectos de fondo - Lado VIOLETA (DERECHO) - MÁS INTENSOS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1500ms" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/8 w-72 h-72 bg-purple-400/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2500ms" }}
        ></div>
      </div>

      {/* Grid pattern overlay - MÁS VISIBLE */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Efectos de partículas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        {/* Partículas azules - lado izquierdo */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`blue-particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 50}%`, // Solo lado izquierdo (0-50%)
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
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

        {/* Partículas violetas - lado derecho */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`purple-particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${50 + Math.random() * 50}%`, // Solo lado derecho (50-100%)
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
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

        {/* Partículas de fusión en el centro */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`fusion-particle-${i}`}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0 ? "bg-blue-400/40" : "bg-purple-400/40"
            }`}
            style={{
              left: `${45 + Math.random() * 10}%`, // Concentradas en el centro (45-55%)
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 60 - 30],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-40">{children}</div>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroBackground;
