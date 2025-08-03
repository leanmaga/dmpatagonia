"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useForm, ValidationError } from "@formspree/react";
import RedesSociales from "./RedesSociales";
import { TitleText, TypingText } from "../components";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvdrgba");

  if (state.succeeded) {
    return (
      <section className="h-[100vh] relative overflow-hidden" id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <TypingText title="| ¡Gracias por contactarme!" />
            <TitleText title="Te responderé a la brevedad" />
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative overflow-hidden" id="contact">
      <div className="max-w-3xl mx-auto px-6 z-10 relative flex flex-col lg:flex-row gap-12 items-center">
        {/* Texto y redes */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          {/* Texto con alineación separada */}
          <div className="mb-8 text-center lg:text-left">
            <TypingText title="| Get in touch" />
            <TitleText title={<>Potenciá tu negocio</>} />
          </div>

          {/* Redes sociales siempre centradas */}
          <div className="flex justify-center">
            <RedesSociales />
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl w-full max-w-md text-white"
        >
          <div className="mb-6">
            <input
              required
              id="name"
              name="name"
              type="text"
              className="w-full bg-transparent border-b border-cyan-400/30 py-3 placeholder:text-cyan-200 focus:outline-none focus:border-cyan-400 transition-all"
              placeholder="Su Nombre"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="mb-6">
            <input
              required
              id="email"
              name="email"
              type="email"
              className="w-full bg-transparent border-b border-cyan-400/30 py-3 placeholder:text-cyan-200 focus:outline-none focus:border-cyan-400 transition-all"
              placeholder="Su Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mb-6">
            <textarea
              required
              id="message"
              name="message"
              className="w-full bg-transparent border-b border-cyan-400/30 py-3 placeholder:text-cyan-200 focus:outline-none focus:border-cyan-400 transition-all resize-none h-32"
              placeholder="Su mensaje"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
          >
            Enviar Mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
