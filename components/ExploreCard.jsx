"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  const isActive = active === id;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`
        relative cursor-pointer
        transition-all duration-700 ease-out-flex
        ${isActive ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"}
        flex items-center justify-center 
        min-w-[170px] h-[250px]
        group overflow-hidden rounded-2xl
        bg-gradient-to-br from-slate-800/80 to-slate-900/80
        backdrop-blur-xl border border-slate-700/50
        hover:border-cyan-400/30 transition-all duration-300
      `}
      onClick={() => handleClick(id)}
    >
      {/* Contenido para cards no activas */}
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h3
            className="
            font-bold text-white text-lg
            lg:absolute lg:bottom-16 lg:left-6 lg:rotate-[-90deg] lg:origin-bottom-left
            lg:text-xl lg:bg-gradient-to-r lg:from-cyan-400 lg:to-blue-400 lg:bg-clip-text lg:text-transparent
            text-center px-4 drop-shadow-lg
            group-hover:scale-110 transition-transform duration-300
          "
          >
            {title}
          </h3>
        </div>
      )}

      {/* Contenido expandido para card activa - Layout 50/50 */}
      {isActive && (
        <motion.div
          className="absolute inset-0 flex h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Lado izquierdo - Imagen (50%) */}
          <motion.div
            className="w-1/2 relative overflow-hidden"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              width={400}
              height={300}
              src={imgUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />
          </motion.div>

          {/* Lado derecho - Información (50%) */}
          <motion.div
            className="w-1/2 p-4 flex flex-col justify-between"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <motion.h2
                    className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {title}
                  </motion.h2>
                  <motion.p
                    className="text-cyan-300 text-sm font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Proyecto Web Completo
                  </motion.p>
                </div>

                {/* Icono GitHub */}
                <motion.div
                  className="
                    flex items-center justify-center w-10 h-10 rounded-lg
                    bg-gradient-to-br from-cyan-500/20 to-blue-500/20
                    border border-cyan-400/30 hover:scale-110 transition-transform duration-300 cursor-pointer
                  "
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ rotate: 360 }}
                >
                  <Image
                    width={14}
                    height={14}
                    src="/github.svg"
                    alt="github"
                    className="w-3.5 h-3.5 object-contain filter brightness-0 invert"
                  />
                </motion.div>
              </div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-1.5 mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {["React", "Next.js", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Descripción compacta */}
              <motion.p
                className="text-gray-300 text-xs leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Diseño moderno con funcionalidad avanzada para crear resultados
                excepcionales.
              </motion.p>
            </div>

            {/* Botón de acción */}
            <motion.button
              className="
                w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-500
                text-white font-semibold rounded-lg text-sm
                shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40
                transition-all duration-300 hover:scale-105 mt-3
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Proyecto
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Efecto de hover sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Borde brillante */}
      <div
        className={`
        absolute inset-0 rounded-2xl pointer-events-none
        transition-all duration-500
        ${
          isActive
            ? "ring-1 ring-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            : "group-hover:ring-1 group-hover:ring-cyan-400/20"
        }
      `}
      />
    </motion.div>
  );
};

export default ExploreCard;
