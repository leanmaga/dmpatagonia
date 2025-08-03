"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleTextPeople, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} min-h-[100vh] flex flex-col gap-8 justify-center content-center flex-wrap`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col justify-center items-center text-center content-center flex-wrap"
      >
        <TypingText title="| People on the World" />

        <div className="mt-[31px] sm:text-[20px] text-[24px] flex flex-col items-center content-center flex-wrap gap-[24px]">
          <TitleTextPeople
            title={
              <>
                "En PatagoniaScript, creemos en el poder de la conectividad
                global. Explora cómo nuestro equipo diverso y talentoso trabaja
                de la mano con clientes de todo el mundo. Cada proyecto es una
                colaboración internacional, y cada línea de código es un paso
                hacia un mundo más interconectado."
              </>
            }
          />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] sm:mt-[1rem] flex w-full h-[550px] sm:h-[250px]"
      >
        <Image
          width={550}
          height={550}
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
