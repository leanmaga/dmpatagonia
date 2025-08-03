"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { Features } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative overflow-hidden`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} min-h-[100vh] flex flex-row gap-8 justify-center content-center flex-wrap relative z-10`}
    >
      {/* Lado izquierdo - Contenido de las novedades */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col justify-center items-center text-center content-center flex-wrap"
      >
        <TypingText title="| Novedades de la Fusión" />

        <TitleText
          title={
            <>
              Últimas{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Innovaciones
              </span>{" "}
              Integradas
            </>
          }
        />

        {/* Descripción introductoria */}
        <motion.p
          className="text-lg text-gray-300 max-w-[500px] mt-4 mb-8 leading-relaxed"
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          Descubre las últimas herramientas y tecnologías que estamos
          implementando para potenciar la sinergia entre{" "}
          <span className="text-cyan-400 font-semibold">desarrollo web</span> y{" "}
          <span className="text-purple-400 font-semibold">
            marketing digital
          </span>
          .
        </motion.p>

        <div className="mt-[31px] flex flex-col items-center content-center flex-wrap max-w-[500px] gap-[24px]">
          {Features.map((feature, index) => (
            <NewFeatures key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Lado derecho - Visualización de la fusión */}
      <motion.div
        variants={planetVariants("right")}
        className={`ml-8 ${styles.flexCenter} relative`}
      >
        {/* Contenedor principal con efectos */}
        <div className="relative">
          {/* Efecto de brillo principal */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl scale-110 animate-pulse" />

          {/* Contenedor de las tecnologías en disposición circular */}
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Icono central - Fusión */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-cyan-400/30 flex items-center justify-center shadow-2xl">
                <div className="text-6xl">🚀</div>
              </div>
            </div>

            {/* Iconos orbitales representando las tecnologías */}
            <div className="absolute inset-0 animate-spin-slow">
              {/* Desarrollo Web - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform">
                  🌐
                </div>
              </div>

              {/* Marketing Digital - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform">
                  📱
                </div>
              </div>

              {/* Analytics - Right */}
              <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform">
                  📊
                </div>
              </div>

              {/* AI/Automation - Left */}
              <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-xl flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform">
                  🤖
                </div>
              </div>

              {/* Branding - Top Right */}
              <div className="absolute top-1/4 right-1/4 transform translate-x-2 -translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-lg flex items-center justify-center text-white text-sm shadow-lg hover:scale-110 transition-transform">
                  🎨
                </div>
              </div>

              {/* Support - Bottom Left */}
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-2 translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-300 to-cyan-300 rounded-lg flex items-center justify-center text-white text-sm shadow-lg hover:scale-110 transition-transform">
                  💬
                </div>
              </div>
            </div>

            {/* Líneas de conexión */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 500 500">
                <circle
                  cx="250"
                  cy="250"
                  r="150"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="100"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  className="animate-pulse delay-500"
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
