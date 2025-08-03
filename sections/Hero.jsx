"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";
import RedesSociales from "@/components/RedesSociales";

const Hero = () => (
  <section id="home" className="relative">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} hero mx-auto flex flex-col h-[100vh]`}
    >
      <div className="flex flex-col justify-center items-center h-full">
        {/* Logo con efectos flotantes */}
        <motion.div
          variants={textVariant(1.2)}
          animate={{
            y: [-10, 10, -10],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative flex items-center justify-center gap-4"
        >
          {/* Brillo AZUL para PatagoniaScript (IZQUIERDO) */}
          <div className="absolute -left-24 top-0 bottom-0 w-48 bg-gradient-to-r from-blue-400/40 to-transparent rounded-full blur-xl" />

          {/* Brillo VIOLETA para D'Marketing (DERECHO) */}
          <div className="absolute -right-24 top-0 bottom-0 w-48 bg-gradient-to-l from-purple-400/40 to-transparent rounded-full blur-xl" />

          <img
            src="/logo.png"
            alt="hero_logo"
            className="w-[200px] h-[200px] object-contain relative z-10 drop-shadow-2xl"
          />
          <span className="text-white text-6xl font-bold relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            +
          </span>
          <img
            src="/dmlogo.png"
            alt="hero_logo"
            className="w-[200px] h-[200px] object-contain relative z-10 drop-shadow-2xl"
          />
        </motion.div>

        {/* Título principal fusionado */}
        <motion.div variants={textVariant(1.1)} className="text-center">
          <h1
            className={`${styles.heroHeading} xs:leading-none sm:leading-none md:leading-none relative`}
          >
            {/* PatagoniaScript con efecto AZUL (correspondiente al lado IZQUIERDO) */}
            <span className="relative z-10 bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              PatagoniaScript
            </span>
          </h1>

          {/* Subtítulo de la fusión */}
          <motion.div variants={textVariant(1.15)} className="mt-2">
            <h1
              className={`${styles.heroHeading} xs:leading-none sm:leading-none md:leading-none relative`}
            >
              {/* D'Marketing con efecto VIOLETA (correspondiente al lado DERECHO) */}
              <span className="relative z-10 bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                & D'Marketing Creativo
              </span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Nueva propuesta de valor */}
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center p-6"
        >
          <h2
            className={`${styles.heroSubtitle} pt-4 relative z-10 text-center max-w-4xl text-white/90`}
          >
            "Desarrollo Web + Marketing Digital: La fórmula completa para el
            éxito online"
          </h2>
        </motion.div>

        {/* Botones de acción mejorados */}
        <motion.div
          variants={textVariant(1.3)}
          className="py-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Botón principal con gradiente de fusión AZUL a VIOLETA */}
          <motion.button
            type="button"
            className="relative flex items-center h-fit py-4 px-8 rounded-[32px] gap-3
             bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-purple-600/20
             backdrop-blur-sm
             text-white font-bold uppercase
             border border-gradient-to-r border-blue-400/30 border-purple-400/30
             shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_20px_rgba(168,85,247,0.3)]
             hover:shadow-[0_0_40px_rgba(59,130,246,0.6),0_0_40px_rgba(168,85,247,0.6)]
             hover:border-blue-400 hover:border-purple-400
             transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efecto de brillo neón exterior - fusión AZUL a VIOLETA */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-white to-purple-400 rounded-[32px] blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-110" />

            {/* Anillo exterior con pulso - fusión AZUL a VIOLETA */}
            <div className="absolute inset-0 border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-[32px] group-hover:border-blue-400/60 group-hover:border-purple-400/60 transition-colors duration-300 group-hover:animate-pulse" />

            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-[32px]" />

            {/* Destello suave */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-white/5 to-purple-500/10 blur-lg rounded-[32px] pointer-events-none" />

            {/* Destello al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[32px] transition-opacity duration-300 group-hover:animate-ping" />

            <span className="relative z-10 tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              <a href="#servicios">Ver Paquetes</a>
            </span>

            {/* Partículas flotantes en hover - colores alternados AZUL y VIOLETA */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    i % 2 === 0 ? "bg-blue-400" : "bg-purple-400"
                  }`}
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${25 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [-10, -25, -10],
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.button>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          variants={textVariant(1.45)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <RedesSociales className="text-[#7dd3fc]" />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
