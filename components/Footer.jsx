"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { textVariant, footerVariants } from "../utils/motion";

const Footer = () => (
  <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="relative text-white z-10"
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        {/* Línea divisoria superior */}

        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección de logos y empresas */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start flex-wrap gap-4 mb-4">
              <motion.img
                variants={textVariant(1.2)}
                src="/logowhite.png"
                alt="PatagoniaScript logo"
                className="w-[40px] h-[40px] object-contain"
              />
              <h4 className="font-extrabold text-[18px] text-white">
                PatagoniaScript
              </h4>
              <span className="text-white text-xl font-bold relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                +
              </span>
              <motion.img
                variants={textVariant(1.2)}
                src="/dmlogo.png"
                alt="D'Marketing logo"
                className="w-[40px] h-[40px] object-contain"
              />
              <h4 className="font-extrabold text-[18px] text-white">
                D'Marketing
              </h4>
            </div>
            <p className="text-white opacity-70 text-sm text-center md:text-left max-w-xs">
              Transformando ideas en experiencias digitales extraordinarias
            </p>
          </div>

          {/* Sección de contacto */}
          <div className="flex flex-col items-center md:items-start">
            <div className="space-y-3">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5491127764823"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-center gap-3 text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span className="text-sm">+54 9 11 2776-4823</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:pagatoniascript@gmail.com"
                className="flex items-center gap-3 text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.909L12 11.64l8.455-7.819h1.909c.904 0 1.636.732 1.636 1.636z" />
                </svg>
                <span className="text-sm">pagatoniascript@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse" />
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-normal text-[12px] text-white opacity-50">
            Copyright © 2025 PatagoniaScript & D'Marketing Creativo. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-4 text-[12px] text-white opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Política de Privacidad
            </a>
            <span>|</span>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Términos de Servicio
            </a>
          </div>
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
      </div>
    </motion.footer>
  </section>
);

export default Footer;
