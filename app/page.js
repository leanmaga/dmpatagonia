"use client";

import { useEffect, useRef, useState } from "react";
import { Nav, ContactForm, Footer } from "../components";
import UnifiedBackground from "../components/UnifiedBackground";
import HeroBackground from "../components/HeroBackground";
import {
  Hero,
  About,
  Feedback,
  GetStarted,
  Insights,
  WhatsNew,
  Explore,
} from "../sections";

const Page = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el footer es visible, oculta el nav
        setShowNavbar(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2, // Se activa cuando el 20% del footer es visible
      }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Nav show={showNavbar} />

      {/* Hero con su propio fondo dividido azul/violeta */}
      <HeroBackground>
        <Hero />
      </HeroBackground>

      {/* Todas las demás secciones con fondo unificado */}
      <UnifiedBackground>
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
        <Insights />
        <div className="gradient-04 z-0" />
        <GetStarted />
        <WhatsNew />
        <div className="gradient-04 z-0" />
        <Feedback />
        <ContactForm />
        <div className="gradient-04 z-0" />
        <div ref={footerRef}>
          <Footer />
        </div>
      </UnifiedBackground>
    </div>
  );
};

export default Page;
