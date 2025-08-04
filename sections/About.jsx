"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="about" className={`${styles.yPaddings} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center relative z-10 min-h-[100vh] py-20 p-10`}
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center"
        >
          {/* Indicador con línea */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-xs sm:text-sm">
              Dos Pasiones, Una Visión
            </span>
            <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-purple-400" />
          </motion.div>

          {/* Título principal - Más pequeño en móvil */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Nuestra
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Fusión
            </span>
          </motion.h2>

          {/* Subtítulo destacado fusionado - Responsivo */}
          <motion.div
            className="relative mb-6 sm:mb-8 md:mb-12"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-2xl" />
            <blockquote className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-400/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
              <motion.h3
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white leading-relaxed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                "La unión de{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  PatagoniaScript
                </span>{" "}
                y{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  D'Marketing Creativo
                </span>{" "}
                crea la fórmula perfecta:{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  desarrollo web + marketing digital
                </span>
                ."
              </motion.h3>

              {/* Comillas decorativas - Más pequeñas en móvil */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-4xl sm:text-6xl text-cyan-400/30 font-serif">
                "
              </div>
              <div className="absolute -bottom-4 sm:-bottom-8 -right-2 sm:-right-4 text-4xl sm:text-6xl text-purple-400/30 font-serif">
                "
              </div>
            </blockquote>
          </motion.div>

          {/* Historia de la fusión - Texto más pequeño en móvil */}
          <motion.div
            className="space-y-4 sm:space-y-6 max-w-4xl mb-8 sm:mb-12 px-4 sm:px-0"
            variants={itemVariants}
          >
            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-cyan-400 font-semibold">
                PatagoniaScript
              </span>{" "}
              nació de la pasión por el desarrollo web, creando sitios que no
              solo son hermosos, sino que{" "}
              <span className="text-cyan-400 font-semibold">
                convierten visitantes en clientes
              </span>
              . Cada proyecto es una aventura, y cada línea de código cuenta una
              historia.
            </motion.p>

            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="text-purple-400 font-semibold">
                D'Marketing Creativo
              </span>{" "}
              surgió del amor por las estrategias digitales que realmente
              funcionan, por el{" "}
              <span className="text-purple-400 font-semibold">
                contenido que inspira y las campañas que generan resultados
              </span>
              .
            </motion.p>

            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              Hoy, fusionamos ambas expertise para ofrecerte{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                soluciones digitales completas
              </span>
              . Desde nuestra base en la majestuosa{" "}
              <span className="text-cyan-400 font-semibold">Patagonia</span> y{" "}
              <span className="text-purple-400 font-semibold">
                Buenos Aires
              </span>
              , llegamos a todo el mundo con proyectos que marcan la diferencia.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
