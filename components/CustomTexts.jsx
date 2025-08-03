'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold text-white text-[40px] xs:text-[24px] sm:text-[24px]
    lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] ${textStyles}`
    }
  >
    {title}
  </motion.h2>
);

export const TitleTextPeople = ({ title, textStyles }) => (

  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`text-center max-w-[800px] font-bold text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
