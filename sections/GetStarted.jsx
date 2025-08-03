"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { integratedServices } from "../constants";
import { StartStep, TitleText, TypingText } from "@/components/";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative overflow-hidden`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} min-h-[100vh] flex flex-row gap-8 items-center justify-center content-center flex-wrap relative z-10`}
    >
      {/* Lado izquierdo - Imagen representativa de la fusión */}
      <motion.div
        variants={planetVariants("left")}
        className={`mr-8 ${styles.flexCenter} relative`}
      >
        {/* Contenedor con efectos de la fusión */}
        <div className="relative">
          {/* Efecto de brillo para el icono principal */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl scale-110 animate-pulse" />

          {/* Icono principal - podemos cambiarlo por uno que represente la fusión */}
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30">
            <img
              src="/react-2.svg"
              alt="fusion-icon"
              className="max-w-[400px] w-[90%] h-[90%] object-contain drop-shadow-2xl"
            />

            {/* Iconos flotantes representando ambos servicios */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
              🌐
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce delay-500">
              📱
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lado derecho - Servicios integrados */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-col justify-center items-center text-center content-center flex-wrap"
      >
        <TypingText title="| Servicios Integrados" />

        <TitleText
          title={
            <>
              Potenciá tu negocio con
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Soluciones Completas
              </span>
            </>
          }
        />

        {/* Descripción de la propuesta de valor */}
        <motion.p
          className="text-lg text-gray-300 max-w-[500px] mt-4 mb-8 leading-relaxed"
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          Combinamos{" "}
          <span className="text-cyan-400 font-semibold">
            desarrollo web profesional
          </span>{" "}
          con
          <span className="text-purple-400 font-semibold">
            {" "}
            estrategias de marketing digital
          </span>{" "}
          para crear experiencias que realmente convierten.
        </motion.p>

        <div className="mt-[31px] flex flex-col items-center content-center flex-wrap max-w-[600px] gap-[24px]">
          {integratedServices.map((service, index) => (
            <StartStep key={service.title} {...service} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
