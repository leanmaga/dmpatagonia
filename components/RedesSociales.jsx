"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const RedesSociales = ({ className }) => {
  const socials = [
    {
      name: "x",
      link: "https://x.com/PatagoniaScript",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/patagoniascript/",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            fill="currentColor"
          />
          <circle cx="4" cy="4" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "instagram",
      link: "https://instagram.com/patagonia.script",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="17.5"
            y1="6.5"
            x2="17.51"
            y2="6.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/profile.php?id=100072302191154",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      className={`p-2 pt-8 ${className}`}
    >
      <div className="flex gap-6">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            className="group relative"
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Efecto de brillo neón */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150" />

            {/* Anillo exterior con pulso */}
            <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full group-hover:border-purple-400/60 transition-colors duration-300 group-hover:animate-pulse" />

            {/* Contenedor del icono */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/20 group-hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-400/25">
              {/* Icono SVG */}
              <div className="text-purple-400 group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]">
                {social.icon}
              </div>

              {/* Destello al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 group-hover:animate-ping" />
            </div>

            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-purple-400/30 backdrop-blur-sm">
              {social.name.charAt(0).toUpperCase() + social.name.slice(1)}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
            </div>

            {/* Partículas flotantes en hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${30 + i * 15}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <style jsx>{`
        @keyframes glow-pulse {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(147, 51, 234, 0.5),
              0 0 10px rgba(147, 51, 234, 0.5), 0 0 15px rgba(147, 51, 234, 0.5);
          }
          50% {
            text-shadow: 0 0 10px rgba(147, 51, 234, 0.8),
              0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(147, 51, 234, 0.8);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default RedesSociales;
