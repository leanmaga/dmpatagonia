"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;
  const whatsappNumber = "5491127764823";

  const fusionPackages = [
    {
      id: 1,
      name: "Presencia Digital",
      subtitle: "Landing Page + Identidad Visual Completa",
      price: "$299",
      originalPrice: "$599",
      color: "from-green-500 to-emerald-500",
      scrollbarColor: "#10b981", // emerald-500
      popular: false,
      badge: "Ideal para emprendedores",
      features: [
        "Landing Page profesional responsiva",
        "Diseño de logo personalizado + variaciones",
        "Kit de identidad visual (colores, tipografías)",
        "Tarjetas personales y folletos digitales",
        "Setup Instagram + Facebook Business",
        "Community Manager básico (1 mes)",
        "3 posts semanales + stories",
        "SEO básico",
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
      subtitle: "Sitio Web Completo + Marketing Integral",
      price: "$599",
      originalPrice: "$1,299",
      color: "from-cyan-500 to-blue-500",
      scrollbarColor: "#06b6d4", // cyan-500
      popular: true,
      badge: "Más completo",
      features: [
        "Sitio web completo (hasta 6 páginas)",
        "Portafolio/catálogo de productos integrado",
        "Identidad visual completa + manual de marca",
        "Diseño de flyers, banners y material promocional",
        "Community Manager profesional (3 meses)",
        "Estrategia de contenido personalizada",
        "Gestión completa Instagram + Facebook",
        "4 posts semanales + stories diarios",
        "Armado de archivos para impresión",
        "SEO optimizado + analíticas configuradas",
        "Formularios avanzados + WhatsApp Business",
        "5 revisiones incluidas",
        "Hosting gratuito 6 meses",
        "Soporte técnico 2 meses",
      ],
      deliverables: {
        web: "Sitio completo + portafolio + SEO",
        marketing: "Branding + gestión redes 3 meses + material gráfico",
      },
    },
    {
      id: 3,
      name: "Dominación Digital",
      subtitle: "Ecosistema Digital Completo + Productos Personalizados",
      price: "$999",
      originalPrice: "$1,999",
      color: "from-purple-500 to-pink-500",
      scrollbarColor: "#a855f7", // purple-500
      popular: false,
      badge: "Para empresas establecidas",
      features: [
        "Sitio web empresarial completo + e-commerce",
        "Temáticas personalizadas para eventos",
        "Línea completa de productos personalizados",
        "Indumentaria comercial con sublimación",
        "Branding 360° + manual de identidad corporativa",
        "Community Manager premium (6 meses)",
        "Estrategia omnicanal (Instagram, Facebook, WhatsApp)",
        "Campañas publicitarias gestionadas",
        "Diseño completo de material promocional",
        "Folletos, tarjetas, banners, flyers profesionales",
        "SEO avanzado + posicionamiento web",
        "Analíticas detalladas + reportes mensuales",
        "Productos físicos personalizados incluidos",
        "Revisiones ilimitadas 6 meses",
        "Hosting premium 1 año",
        "Soporte prioritario + consultoría mensual",
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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (position === 0) {
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 20,
        opacity: 1,
      };
    } else if (position === -1) {
      return {
        transform: isMobile
          ? "translateX(-80%) scale(0.7) rotateY(15deg)"
          : "translateX(-60%) scale(0.8) rotateY(25deg)",
        zIndex: 10,
        opacity: isMobile ? 0.5 : 0.7,
      };
    } else if (position === 1) {
      return {
        transform: isMobile
          ? "translateX(80%) scale(0.7) rotateY(-15deg)"
          : "translateX(60%) scale(0.8) rotateY(-25deg)",
        zIndex: 10,
        opacity: isMobile ? 0.5 : 0.7,
      };
    } else {
      return {
        transform: "translateX(0%) scale(0.6)",
        zIndex: 1,
        opacity: 0,
      };
    }
  };

  // Función para obtener dimensiones responsivas de las cards
  const getCardDimensions = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 480) {
        return {
          width: "280px",
          height: "520px",
          marginLeft: "-140px",
          marginTop: "-260px",
        };
      } else if (width < 768) {
        return {
          width: "320px",
          height: "570px",
          marginLeft: "-160px",
          marginTop: "-285px",
        };
      } else if (width < 1024) {
        return {
          width: "400px",
          height: "700px",
          marginLeft: "-200px",
          marginTop: "-350px",
        };
      } else if (width < 1440) {
        return {
          width: "450px",
          height: "750px",
          marginLeft: "-225px",
          marginTop: "-375px",
        };
      } else {
        return {
          width: "500px",
          height: "800px",
          marginLeft: "-250px",
          marginTop: "-400px",
        };
      }
    }
    return {
      width: "420px",
      height: "570px",
      marginLeft: "-160px",
      marginTop: "-285px",
    };
  };

  const [cardDimensions, setCardDimensions] = useState(getCardDimensions());

  useEffect(() => {
    const handleResize = () => {
      setCardDimensions(getCardDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Estilos CSS personalizados para scrollbars neón dinámicos */}
      <style jsx>{`
        .neon-scrollbar-green::-webkit-scrollbar {
          width: 10px;
        }
        .neon-scrollbar-green::-webkit-scrollbar-track {
          background: rgba(16, 185, 129, 0.1);
          border-radius: 15px;
          box-shadow: inset 0 0 5px rgba(16, 185, 129, 0.2);
        }
        .neon-scrollbar-green::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 15px;
          box-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981,
            inset 0 0 10px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .neon-scrollbar-green::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #059669, #047857);
          box-shadow: 0 0 20px #10b981, 0 0 35px #10b981, 0 0 50px #10b981,
            inset 0 0 15px rgba(255, 255, 255, 0.2);
          animation: neon-pulse-green 1.5s ease-in-out infinite alternate;
        }

        .neon-scrollbar-cyan::-webkit-scrollbar {
          width: 10px;
        }
        .neon-scrollbar-cyan::-webkit-scrollbar-track {
          background: rgba(6, 182, 212, 0.1);
          border-radius: 15px;
          box-shadow: inset 0 0 5px rgba(6, 182, 212, 0.2);
        }
        .neon-scrollbar-cyan::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          border-radius: 15px;
          box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4,
            inset 0 0 10px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }
        .neon-scrollbar-cyan::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          box-shadow: 0 0 20px #06b6d4, 0 0 35px #06b6d4, 0 0 50px #06b6d4,
            inset 0 0 15px rgba(255, 255, 255, 0.2);
          animation: neon-pulse-cyan 1.5s ease-in-out infinite alternate;
        }

        .neon-scrollbar-purple::-webkit-scrollbar {
          width: 10px;
        }
        .neon-scrollbar-purple::-webkit-scrollbar-track {
          background: rgba(168, 85, 247, 0.1);
          border-radius: 15px;
          box-shadow: inset 0 0 5px rgba(168, 85, 247, 0.2);
        }
        .neon-scrollbar-purple::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #a855f7, #9333ea);
          border-radius: 15px;
          box-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7,
            inset 0 0 10px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
        }
        .neon-scrollbar-purple::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #9333ea, #7c3aed);
          box-shadow: 0 0 20px #a855f7, 0 0 35px #a855f7, 0 0 50px #a855f7,
            inset 0 0 15px rgba(255, 255, 255, 0.2);
          animation: neon-pulse-purple 1.5s ease-in-out infinite alternate;
        }

        /* Animaciones neón para scrollbars */
        @keyframes neon-pulse-green {
          0% {
            box-shadow: 0 0 20px #10b981, 0 0 35px #10b981, 0 0 50px #10b981;
          }
          100% {
            box-shadow: 0 0 25px #10b981, 0 0 45px #10b981, 0 0 65px #10b981;
          }
        }
        @keyframes neon-pulse-cyan {
          0% {
            box-shadow: 0 0 20px #06b6d4, 0 0 35px #06b6d4, 0 0 50px #06b6d4;
          }
          100% {
            box-shadow: 0 0 25px #06b6d4, 0 0 45px #06b6d4, 0 0 65px #06b6d4;
          }
        }
        @keyframes neon-pulse-purple {
          0% {
            box-shadow: 0 0 20px #a855f7, 0 0 35px #a855f7, 0 0 50px #a855f7;
          }
          100% {
            box-shadow: 0 0 25px #a855f7, 0 0 45px #a855f7, 0 0 65px #a855f7;
          }
        }

        /* Animación para precios neón */
        @keyframes price-glow-green {
          0%,
          100% {
            text-shadow: 0 0 5px #10b981, 0 0 10px #10b981, 0 0 15px #10b981,
              0 0 20px #10b981;
            filter: drop-shadow(0 0 10px #10b981);
          }
          50% {
            text-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981,
              0 0 40px #10b981;
            filter: drop-shadow(0 0 20px #10b981);
          }
        }
        @keyframes price-glow-cyan {
          0%,
          100% {
            text-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4,
              0 0 20px #06b6d4;
            filter: drop-shadow(0 0 10px #06b6d4);
          }
          50% {
            text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4,
              0 0 40px #06b6d4;
            filter: drop-shadow(0 0 20px #06b6d4);
          }
        }
        @keyframes price-glow-purple {
          0%,
          100% {
            text-shadow: 0 0 5px #a855f7, 0 0 10px #a855f7, 0 0 15px #a855f7,
              0 0 20px #a855f7;
            filter: drop-shadow(0 0 10px #a855f7);
          }
          50% {
            text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7,
              0 0 40px #a855f7;
            filter: drop-shadow(0 0 20px #a855f7);
          }
        }

        .price-neon-green {
          animation: price-glow-green 2s ease-in-out infinite;
        }
        .price-neon-cyan {
          animation: price-glow-cyan 2s ease-in-out infinite;
        }
        .price-neon-purple {
          animation: price-glow-purple 2s ease-in-out infinite;
        }

        /* Para Firefox */
        .neon-scrollbar-green {
          scrollbar-width: thin;
          scrollbar-color: #10b981 rgba(16, 185, 129, 0.1);
        }
        .neon-scrollbar-cyan {
          scrollbar-width: thin;
          scrollbar-color: #06b6d4 rgba(6, 182, 212, 0.1);
        }
        .neon-scrollbar-purple {
          scrollbar-width: thin;
          scrollbar-color: #a855f7 rgba(168, 85, 247, 0.1);
        }
      `}</style>

      <section
        className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900 to-black"
        id="paquetes"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header mejorado */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 font-medium tracking-wider uppercase text-xs sm:text-sm">
                PatagoniaScript + D'Marketing
              </span>
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Desarrollo Web
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                + Diseño & Marketing
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
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

            {/* Value proposition actualizada */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto px-4">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-700/50">
                <div className="text-cyan-400 font-bold text-lg sm:text-xl mb-1">
                  +6 Años
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  Experiencia combinada
                </div>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-700/50">
                <div className="text-purple-400 font-bold text-lg sm:text-xl mb-1">
                  Todo Incluido
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  Web + diseño + marketing
                </div>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-700/50">
                <div className="text-green-400 font-bold text-lg sm:text-xl mb-1">
                  2 Equipos
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  Especializados trabajando juntos
                </div>
              </div>
            </div>
          </div>

          {/* Carousel 3D */}
          <div
            className="relative w-full max-w-6xl mx-auto mb-8 sm:mb-12 select-none"
            style={{
              perspective: "1200px",
              height:
                typeof window !== "undefined" && window.innerWidth < 480
                  ? "540px"
                  : typeof window !== "undefined" && window.innerWidth < 768
                  ? "590px"
                  : typeof window !== "undefined" && window.innerWidth < 1024
                  ? "720px"
                  : typeof window !== "undefined" && window.innerWidth < 1440
                  ? "770px"
                  : "820px",
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-30 
                         bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-sm
                         text-white p-3 rounded-full shadow-lg
                         transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                         hidden xl:flex items-center justify-center"
              aria-label="Paquete anterior"
            >
              <svg
                className="w-5 h-5"
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
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-30
                         bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-sm
                         text-white p-3 rounded-full shadow-lg
                         transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                         hidden xl:flex items-center justify-center"
              aria-label="Siguiente paquete"
            >
              <svg
                className="w-5 h-5"
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

            {/* Cards */}
            {fusionPackages.map((pkg, index) => {
              const isActive = index === activeIndex;
              const cardStyle = getCardStyle(index);

              // Obtener la clase de scrollbar según el color del paquete
              const getScrollbarClass = (color) => {
                if (color.includes("green")) return "neon-scrollbar-green";
                if (color.includes("cyan")) return "neon-scrollbar-cyan";
                if (color.includes("purple")) return "neon-scrollbar-purple";
                return "neon-scrollbar-cyan"; // fallback
              };

              // Obtener la clase de precio neón según el color del paquete
              const getPriceNeonClass = (color) => {
                if (color.includes("green")) return "price-neon-green";
                if (color.includes("cyan")) return "price-neon-cyan";
                if (color.includes("purple")) return "price-neon-purple";
                return "price-neon-cyan"; // fallback
              };

              const scrollbarClass = getScrollbarClass(pkg.color);
              const priceNeonClass = isActive
                ? getPriceNeonClass(pkg.color)
                : "";

              return (
                <div
                  key={pkg.id}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    ...cardStyle,
                    ...cardDimensions,
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                    transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    pointerEvents: isDragging ? "none" : "auto",
                  }}
                  onClick={() =>
                    !isActive && !isDragging && setActiveIndex(index)
                  }
                >
                  {/* Popular badge */}
                  {pkg.popular && isActive && (
                    <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-30 px-2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-pulse whitespace-nowrap">
                        🔥 {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl 
                    border ${
                      pkg.popular && isActive
                        ? "border-cyan-400/60 shadow-cyan-500/30"
                        : "border-slate-700/50"
                    } 
                    rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-700 flex flex-col overflow-hidden
                    ${
                      isActive
                        ? "hover:shadow-cyan-500/30 hover:border-cyan-400/70"
                        : "hover:border-slate-600/60"
                    }
                  `}
                  >
                    {/* Package header */}
                    <div className="text-center p-3 sm:p-4 md:p-8 lg:p-10 pb-2 sm:pb-4 md:pb-6">
                      <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5">
                        <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-gray-300 px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
                          {pkg.badge}
                        </span>
                      </div>

                      {/* Package Name */}
                      <h3
                        className={`font-bold text-white mb-2 md:mb-4 lg:mb-5 ${
                          isActive
                            ? "text-lg sm:text-xl md:text-2xl lg:text-3xl"
                            : "text-sm sm:text-base md:text-lg lg:text-xl"
                        }`}
                      >
                        {pkg.name}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className={`text-gray-400 mb-3 sm:mb-4 md:mb-6 lg:mb-7 leading-relaxed px-2 md:px-4 ${
                          isActive
                            ? "text-sm sm:text-base md:text-lg"
                            : "text-xs sm:text-sm md:text-base"
                        }`}
                      >
                        {pkg.subtitle}
                      </p>

                      {/* Price section */}
                      <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2">
                          <span
                            className={`text-gray-500 line-through ${
                              isActive
                                ? "text-base sm:text-lg md:text-xl lg:text-2xl"
                                : "text-sm sm:text-base md:text-lg"
                            }`}
                          >
                            {pkg.originalPrice}
                          </span>
                          <span className="bg-red-500 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded text-xs sm:text-sm md:text-base font-bold">
                            50% OFF
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-1 md:gap-2">
                          <span
                            className={`font-bold bg-gradient-to-r ${
                              pkg.color
                            } bg-clip-text text-transparent ${
                              isActive
                                ? " sm:text-3xl md:text-4xl text-5xl"
                                : "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                            }`}
                          >
                            {pkg.price}
                          </span>
                          <span
                            className={`text-gray-400 ml-1 ${
                              isActive
                                ? "text-sm sm:text-base md:text-lg lg:text-xl"
                                : "text-xs sm:text-sm md:text-base"
                            }`}
                          >
                            USD
                          </span>
                        </div>
                      </div>

                      {/* Deliverables preview */}
                      {isActive && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 text-xs p-2 sm:p-3 md:p-4 lg:p-5">
                          <div
                            className="bg-cyan-500/10 rounded-lg p-4 sm:p-2 md:p-3 lg:p-4 border border-cyan-500/20"
                            style={{
                              boxShadow:
                                "0 0 10px rgba(6, 182, 212, 0.2), 0 0 20px rgba(6, 182, 212, 0.1)",
                            }}
                          >
                            <div
                              className="text-cyan-400 font-semibold mb-1 md:mb-2 text-sm sm:text-base md:text-lg"
                              style={{
                                filter: "drop-shadow(0 0 8px #06b6d4)",
                                textShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
                              }}
                            >
                              💻 PatagoniaScript
                            </div>
                            <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-tight">
                              {pkg.deliverables.web}
                            </div>
                          </div>
                          <div
                            className="bg-purple-500/10 rounded-lg p-4 sm:p-2 md:p-3 lg:p-4  border border-purple-500/20"
                            style={{
                              boxShadow:
                                "0 0 10px rgba(168, 85, 247, 0.2), 0 0 20px rgba(168, 85, 247, 0.1)",
                            }}
                          >
                            <div
                              className="text-purple-400 font-semibold mb-1 md:mb-2 text-sm sm:text-base md:text-lg"
                              style={{
                                filter: "drop-shadow(0 0 8px #a855f7)",
                                textShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
                              }}
                            >
                              🎨 D'Marketing
                            </div>
                            <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-tight">
                              {pkg.deliverables.marketing}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features list con scrollbar neón personalizado */}
                    <div
                      className={`flex-1 p-5 m-5 overflow-y-auto ${scrollbarClass}`}
                    >
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 md:gap-3 lg:gap-4"
                          >
                            <div
                              className={`rounded-full bg-gradient-to-r ${
                                pkg.color
                              } flex items-center justify-center flex-shrink-0 mt-1 ${
                                isActive
                                  ? "w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4"
                                  : "w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3"
                              }`}
                            >
                              <svg
                                className={`text-white ${
                                  isActive
                                    ? "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5"
                                    : "w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2"
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
                                isActive
                                  ? "text-sm sm:text-base md:text-lg"
                                  : "text-xs sm:text-sm md:text-base"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="p-3 sm:p-4 md:p-8 lg:p-10 pt-1 sm:pt-2 md:pt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isActive) {
                            openWhatsApp(pkg.name, pkg.price);
                          } else {
                            setActiveIndex(index);
                          }
                        }}
                        className={`w-full rounded-lg sm:rounded-xl font-semibold text-white bg-gradient-to-r ${
                          pkg.color
                        } shadow-lg transition-all duration-300 transform flex items-center justify-center gap-2 sm:gap-3 md:gap-4 relative overflow-hidden
                          ${
                            isActive
                              ? "py-2.5 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-6 lg:px-8 text-base sm:text-lg md:text-xl lg:text-2xl hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                              : "py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 text-sm sm:text-base md:text-lg opacity-75"
                          }`}
                        style={{
                          filter: isActive
                            ? `drop-shadow(0 0 15px ${pkg.scrollbarColor})`
                            : "none",
                          boxShadow: isActive
                            ? `0 0 20px ${pkg.scrollbarColor}40, 0 0 40px ${pkg.scrollbarColor}20`
                            : "none",
                        }}
                      >
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                        )}

                        {isActive && (
                          <svg
                            className="w-4 h-4 sm:w-5 md:w-6 lg:w-7 sm:h-5 md:h-6 lg:h-7 relative z-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{
                              filter: `drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))`,
                            }}
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403" />
                          </svg>
                        )}

                        <span
                          className="relative z-10"
                          style={{
                            textShadow: isActive
                              ? `0 0 10px rgba(255, 255, 255, 0.8)`
                              : "none",
                          }}
                        >
                          {isActive ? "🚀 Consulta Gratuita" : "Ver Paquete"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Partículas flotantes para cards activas */}
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl">
                      {/* Partículas principales del color del paquete */}
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

                      {/* Partículas secundarias más pequeñas */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={`mini-particle-${i}`}
                          className={`absolute w-1 h-1 rounded-full ${
                            pkg.color.includes("green")
                              ? "bg-green-300"
                              : pkg.color.includes("cyan")
                              ? "bg-blue-300"
                              : "bg-pink-300"
                          }`}
                          style={{
                            right: `${15 + i * 12}%`,
                            bottom: `${20 + (i % 2) * 30}%`,
                            filter: `drop-shadow(0 0 2px ${pkg.scrollbarColor})`,
                          }}
                          animate={{
                            y: [-15, -30, -15],
                            x: [5, -5, 5],
                            opacity: [0.2, 0.8, 0.2],
                            rotate: [0, 360, 0],
                          }}
                          transition={{
                            duration: 4 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                          }}
                        />
                      ))}

                      {/* Efecto de brillo orbital */}
                      <motion.div
                        className={`absolute w-20 h-20 rounded-full ${
                          pkg.color.includes("green")
                            ? "bg-emerald-400/10"
                            : pkg.color.includes("cyan")
                            ? "bg-cyan-400/10"
                            : "bg-purple-400/10"
                        } blur-xl`}
                        style={{
                          top: "20%",
                          right: "10%",
                          filter: `drop-shadow(0 0 20px ${pkg.scrollbarColor})`,
                        }}
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.3, 0.7, 0.3],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Segundo efecto de brillo orbital */}
                      <motion.div
                        className={`absolute w-16 h-16 rounded-full ${
                          pkg.color.includes("green")
                            ? "bg-green-300/10"
                            : pkg.color.includes("cyan")
                            ? "bg-blue-300/10"
                            : "bg-pink-300/10"
                        } blur-lg`}
                        style={{
                          bottom: "15%",
                          left: "15%",
                          filter: `drop-shadow(0 0 15px ${pkg.scrollbarColor})`,
                        }}
                        animate={{
                          scale: [1.2, 0.8, 1.2],
                          opacity: [0.2, 0.6, 0.2],
                          rotate: [360, 180, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation indicators */}
          <div className="text-center">
            {/* Mobile swipe indicator */}
            <div className="mb-4 sm:mb-6 block xl:hidden">
              <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-2">
                <span className="animate-bounce">👈</span>
                Desliza para ver todos los paquetes
                <span className="animate-bounce">👉</span>
              </p>
            </div>

            {/* Desktop keyboard indicator */}
            <div className="mb-4 sm:mb-6 hidden xl:block">
              <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
                <span>←</span> Usa las flechas del teclado para navegar{" "}
                <span>→</span>
              </p>
            </div>

            {/* Dots indicators */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {fusionPackages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al paquete ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
