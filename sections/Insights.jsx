"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/insights.css";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const minSwipeDistance = 50;
  const whatsappNumber = "5491127764823";

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fusionPackages = [
    {
      id: 1,
      name: "Presencia Digital",
      subtitle: "Landing Page + Identidad Visual",
      price: "$299",
      originalPrice: "$599",
      color: "from-green-500 to-emerald-500",
      scrollbarColor: "#10b981",
      popular: false,
      badge: "Ideal para emprendedores",
      features: [
        "Landing Page profesional responsiva",
        "Diseño de logo personalizado + variaciones",
        "Kit de identidad visual completo",
        "Tarjetas personales y folletos digitales",
        "Setup Instagram + Facebook Business",
        "Community Manager básico (1 mes)",
        "3 posts semanales + stories",
        "SEO básico optimizado",
        "Formulario de contacto integrado",
        "2 revisiones incluidas",
        "Hosting gratuito 3 meses",
      ],
      deliverables: {
        web: "Landing + hosting + SEO básico",
        marketing: "Logo + redes + gestión 1 mes",
      },
    },
    {
      id: 2,
      name: "Crecimiento Digital",
      subtitle: "Sitio Web Completo + Marketing",
      price: "$599",
      originalPrice: "$1,299",
      color: "from-cyan-500 to-blue-500",
      scrollbarColor: "#06b6d4",
      popular: true,
      badge: "Más completo",
      features: [
        "Sitio web completo (hasta 6 páginas)",
        "Portafolio/catálogo integrado",
        "Identidad visual completa + manual",
        "Diseño de material promocional",
        "Community Manager profesional (3 meses)",
        "Estrategia de contenido personalizada",
        "Gestión completa redes sociales",
        "4 posts semanales + stories diarios",
        "Archivos para impresión incluidos",
        "SEO optimizado + analíticas",
        "Formularios avanzados + WhatsApp",
        "5 revisiones incluidas",
        "Hosting gratuito 6 meses",
        "Soporte técnico 2 meses",
      ],
      deliverables: {
        web: "Sitio completo + portafolio + SEO",
        marketing: "Branding + gestión 3 meses + material gráfico",
      },
    },
    {
      id: 3,
      name: "Dominación Digital",
      subtitle: "Ecosistema Digital Completo",
      price: "$999",
      originalPrice: "$1,999",
      color: "from-purple-500 to-pink-500",
      scrollbarColor: "#a855f7",
      popular: false,
      badge: "Para empresas establecidas",
      features: [
        "Sitio web empresarial + e-commerce",
        "Temáticas personalizadas eventos",
        "Línea completa productos personalizados",
        "Indumentaria comercial sublimación",
        "Branding 360° + manual corporativo",
        "Community Manager premium (6 meses)",
        "Estrategia omnicanal completa",
        "Campañas publicitarias gestionadas",
        "Diseño material promocional completo",
        "Folletos, tarjetas, banners profesionales",
        "SEO avanzado + posicionamiento web",
        "Analíticas detalladas + reportes",
        "Productos físicos personalizados",
        "Revisiones ilimitadas 6 meses",
        "Hosting premium 1 año",
        "Soporte prioritario + consultoría",
      ],
      deliverables: {
        web: "E-commerce completo + temáticas + SEO avanzado",
        marketing: "Branding completo + gestión 6 meses + productos físicos",
      },
    },
  ];

  const generateWhatsAppLink = (packageName, price) => {
    const message = `🚀 ¡Hola! Me interesa el paquete *${packageName}* (${price}) que combina PatagoniaScript + D'Marketing Creativo. 

¿Podrían darme más detalles sobre:
- Cronograma de entrega
- Estrategia específica para mi negocio
- Portfolio de trabajos similares
- Propuesta personalizada

¡Gracias! 💪`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  const openWhatsApp = (packageName, price) => {
    const whatsappLink = generateWhatsAppLink(packageName, price);
    window.open(whatsappLink, "_blank");
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % fusionPackages.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + fusionPackages.length) % fusionPackages.length
    );
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsDragging(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getCardStyle = (index) => {
    const position = index - activeIndex;

    if (isMobile) {
      // Estilo simplificado para móvil
      if (position === 0) {
        return {
          transform: "translateX(0%) scale(1)",
          zIndex: 20,
          opacity: 1,
        };
      } else if (position === -1) {
        return {
          transform: "translateX(-85%) scale(0.7)",
          zIndex: 10,
          opacity: 0.4,
        };
      } else if (position === 1) {
        return {
          transform: "translateX(85%) scale(0.7)",
          zIndex: 10,
          opacity: 0.4,
        };
      } else {
        return {
          transform: "translateX(0%) scale(0.5)",
          zIndex: 1,
          opacity: 0,
        };
      }
    } else {
      // Estilo 3D para desktop
      if (position === 0) {
        return {
          transform: "translateX(0%) scale(1) rotateY(0deg)",
          zIndex: 20,
          opacity: 1,
        };
      } else if (position === -1) {
        return {
          transform: "translateX(-70%) scale(0.9) rotateY(20deg)",
          zIndex: 10,
          opacity: 0.8,
        };
      } else if (position === 1) {
        return {
          transform: "translateX(70%) scale(0.9) rotateY(-20deg)",
          zIndex: 10,
          opacity: 0.8,
        };
      } else if (position === -2) {
        return {
          transform: "translateX(-90%) scale(0.7) rotateY(35deg)",
          zIndex: 5,
          opacity: 0.3,
        };
      } else if (position === 2) {
        return {
          transform: "translateX(90%) scale(0.7) rotateY(-35deg)",
          zIndex: 5,
          opacity: 0.3,
        };
      } else {
        return {
          transform: "translateX(0%) scale(0.5)",
          zIndex: 1,
          opacity: 0,
        };
      }
    }
  };

  return (
    <section
      className="insights-section relative overflow-hidden bg-gradient-to-b from-slate-900 to-black"
      id="paquetes"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="insights-container relative z-10">
        {/* Header */}
        <div className="insights-header">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
            <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-xs">
              PatagoniaScript + D'Marketing
            </span>
            <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Desarrollo Web
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              + Diseño & Marketing
            </span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-4xl leading-relaxed mb-6 px-4">
            <span className="text-cyan-400 font-semibold">
              ¿Por qué elegir entre desarrollo web o diseño gráfico?
            </span>
            <br />
            Fusionamos{" "}
            <span className="text-cyan-400 font-semibold">
              sitios web profesionales
            </span>{" "}
            con{" "}
            <span className="text-purple-400 font-semibold">
              identidad visual completa y gestión de redes
            </span>{" "}
            para crear tu presencia digital integral.
          </p>

          {/* Value proposition - Mejorado para móvil */}
          <div className="insights-value-grid">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-slate-700/50">
              <div className="text-cyan-400 font-bold text-base md:text-lg lg:text-xl mb-1">
                +6 Años
              </div>
              <div className="text-gray-300 text-xs md:text-sm">
                Experiencia combinada
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-slate-700/50">
              <div className="text-purple-400 font-bold text-base md:text-lg lg:text-xl mb-1">
                Todo Incluido
              </div>
              <div className="text-gray-300 text-xs md:text-sm">
                Web + diseño + marketing
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-slate-700/50">
              <div className="text-green-400 font-bold text-base md:text-lg lg:text-xl mb-1">
                2 Equipos
              </div>
              <div className="text-gray-300 text-xs md:text-sm">
                Especializados trabajando juntos
              </div>
            </div>
          </div>
        </div>

        {/* Mobile swipe indicator */}
        {isMobile && (
          <div className="text-center mb-4 px-4">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <span className="animate-pulse">👈</span>
              Desliza para ver más paquetes
              <span className="animate-pulse">👉</span>
            </p>
          </div>
        )}

        {/* Carousel 3D */}
        <div className="carousel-container">
          <div
            className="carousel-3d"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Navigation buttons - Solo desktop */}
            {!isMobile && (
              <>
                <button
                  onClick={goToPrevious}
                  className="nav-buttons prev"
                  aria-label="Paquete anterior"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="nav-buttons next"
                  aria-label="Siguiente paquete"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Cards */}
            {fusionPackages.map((pkg, index) => {
              const isActive = index === activeIndex;
              const cardStyle = getCardStyle(index);

              const getScrollbarClass = (color) => {
                if (color.includes("green")) return "neon-scrollbar-green";
                if (color.includes("cyan")) return "neon-scrollbar-cyan";
                if (color.includes("purple")) return "neon-scrollbar-purple";
                return "neon-scrollbar-cyan";
              };

              const getPriceNeonClass = (color) => {
                if (color.includes("green")) return "price-neon-green";
                if (color.includes("cyan")) return "price-neon-cyan";
                if (color.includes("purple")) return "price-neon-purple";
                return "price-neon-cyan";
              };

              const scrollbarClass = getScrollbarClass(pkg.color);
              const priceNeonClass =
                isActive && !isMobile ? getPriceNeonClass(pkg.color) : "";

              return (
                <div
                  key={pkg.id}
                  className={`carousel-card ${isDragging ? "dragging" : ""}`}
                  style={cardStyle}
                  onClick={() =>
                    !isActive && !isDragging && setActiveIndex(index)
                  }
                >
                  {/* Popular badge - Mejorado para móvil */}
                  {pkg.popular && isActive && (
                    <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 z-30 px-2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 md:px-4 lg:px-6 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-lg animate-pulse whitespace-nowrap">
                        🔥 {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`card-content ${
                      pkg.popular && isActive
                        ? "border-cyan-400/60 shadow-cyan-500/30"
                        : ""
                    }`}
                  >
                    {/* Package header */}
                    <div className="card-header">
                      <div>
                        <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-gray-300 px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                          {pkg.badge}
                        </span>
                      </div>

                      <h3
                        className={`font-bold text-white text-center leading-tight ${
                          isActive
                            ? "text-base sm:text-lg md:text-xl lg:text-2xl"
                            : "text-sm md:text-base lg:text-lg"
                        }`}
                      >
                        {pkg.name}
                      </h3>

                      <p
                        className={`text-gray-400 leading-relaxed text-center ${
                          isActive
                            ? "text-xs sm:text-sm md:text-base"
                            : "text-xs md:text-sm"
                        }`}
                      >
                        {pkg.subtitle}
                      </p>

                      {/* Price section - Optimizado para móvil */}
                      <div>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span
                            className={`text-gray-500 line-through ${
                              isActive
                                ? "text-sm md:text-base lg:text-lg"
                                : "text-xs md:text-sm"
                            }`}
                          >
                            {pkg.originalPrice}
                          </span>
                          <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                            50% OFF
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <span
                            className={`font-bold bg-gradient-to-r ${
                              pkg.color
                            } bg-clip-text text-transparent ${
                              isActive
                                ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                                : "text-lg md:text-xl lg:text-2xl"
                            } ${priceNeonClass}`}
                          >
                            {pkg.price}
                          </span>
                          <span
                            className={`text-gray-400 ml-1 ${
                              isActive
                                ? "text-sm md:text-base lg:text-lg"
                                : "text-xs md:text-sm"
                            }`}
                          >
                            USD
                          </span>
                        </div>
                      </div>

                      {/* Deliverables preview - Solo en card activa */}
                      {isActive && (
                        <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs">
                          <div
                            className="bg-cyan-500/10 rounded-lg p-2 md:p-3 border border-cyan-500/20"
                            style={{
                              boxShadow: "0 0 10px rgba(6, 182, 212, 0.2)",
                            }}
                          >
                            <div
                              className="text-cyan-400 font-semibold mb-1 text-xs md:text-sm"
                              style={
                                !isMobile
                                  ? {
                                      filter: "drop-shadow(0 0 8px #06b6d4)",
                                      textShadow:
                                        "0 0 10px rgba(6, 182, 212, 0.8)",
                                    }
                                  : {}
                              }
                            >
                              💻 PatagoniaScript
                            </div>
                            <div className="text-gray-300 text-xs leading-tight">
                              {pkg.deliverables.web}
                            </div>
                          </div>
                          <div
                            className="bg-purple-500/10 rounded-lg p-2 md:p-3 border border-purple-500/20"
                            style={{
                              boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)",
                            }}
                          >
                            <div
                              className="text-purple-400 font-semibold mb-1 text-xs md:text-sm"
                              style={
                                !isMobile
                                  ? {
                                      filter: "drop-shadow(0 0 8px #a855f7)",
                                      textShadow:
                                        "0 0 10px rgba(168, 85, 247, 0.8)",
                                    }
                                  : {}
                              }
                            >
                              🎨 D'Marketing
                            </div>
                            <div className="text-gray-300 text-xs leading-tight">
                              {pkg.deliverables.marketing}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features list */}
                    <div className={`card-features ${scrollbarClass}`}>
                      <ul className="features-list">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="feature-item">
                            <div
                              className={`rounded-full bg-gradient-to-r ${
                                pkg.color
                              } flex items-center justify-center flex-shrink-0 mt-1 ${
                                isActive
                                  ? "w-2 h-2 md:w-3 md:h-3"
                                  : "w-1.5 h-1.5 md:w-2 md:h-2"
                              }`}
                            >
                              <svg
                                className={`text-white ${
                                  isActive
                                    ? "w-1 h-1 md:w-1.5 md:h-1.5"
                                    : "w-0.5 h-0.5 md:w-1 md:h-1"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span
                              className={`text-gray-300 leading-relaxed ${
                                isActive ? "text-xs md:text-sm" : "text-xs"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="card-cta">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isActive) {
                            openWhatsApp(pkg.name, pkg.price);
                          } else {
                            setActiveIndex(index);
                          }
                        }}
                        className={`w-full rounded-lg font-semibold text-white bg-gradient-to-r ${
                          pkg.color
                        } shadow-lg transition-all duration-300 transform flex items-center justify-center gap-2 relative overflow-hidden ${
                          isActive
                            ? "py-3 md:py-4 px-4 md:px-6 text-sm md:text-base lg:text-lg hover:scale-105 hover:shadow-2xl"
                            : "py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm opacity-75"
                        }`}
                        style={
                          !isMobile && isActive
                            ? {
                                filter: `drop-shadow(0 0 15px ${pkg.scrollbarColor})`,
                                boxShadow: `0 0 20px ${pkg.scrollbarColor}40, 0 0 40px ${pkg.scrollbarColor}20`,
                              }
                            : {}
                        }
                      >
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                        )}

                        {isActive && (
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 relative z-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={
                              !isMobile
                                ? {
                                    filter: `drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))`,
                                  }
                                : {}
                            }
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403" />
                          </svg>
                        )}

                        <span
                          className="relative z-10"
                          style={
                            !isMobile && isActive
                              ? {
                                  textShadow: `0 0 10px rgba(255, 255, 255, 0.8)`,
                                }
                              : {}
                          }
                        >
                          {isActive ? "🚀 Consulta Gratuita" : "Ver Paquete"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Partículas flotantes para cards activas - Solo desktop */}
                  {isActive && !isMobile && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className={`absolute w-1.5 h-1.5 rounded-full ${
                            pkg.color.includes("green")
                              ? "bg-emerald-400"
                              : pkg.color.includes("cyan")
                              ? "bg-cyan-400"
                              : "bg-purple-400"
                          }`}
                          style={{
                            left: `${10 + i * 10}%`,
                            top: `${15 + (i % 3) * 25}%`,
                            filter: `drop-shadow(0 0 4px ${pkg.scrollbarColor})`,
                          }}
                          animate={{
                            y: [-10, -25, -10],
                            x: [-5, 5, -5],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1.2, 0.5],
                          }}
                          transition={{
                            duration: 3 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicadores de navegación - Mejorados para móvil */}
        <div className="flex justify-center gap-3 mt-6">
          {fusionPackages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                rounded-full transition-all duration-300
                ${
                  index === activeIndex
                    ? "w-8 h-3 bg-gradient-to-r from-cyan-400 to-purple-400"
                    : "w-3 h-3 bg-gray-600 hover:bg-gray-400"
                }
              `}
              aria-label={`Ir al paquete ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
