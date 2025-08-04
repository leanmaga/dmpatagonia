"use client";

import React, { useState, useEffect } from "react";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;
  const whatsappNumber = "5491127764823";

  // Nuevos paquetes fusionados
  const fusionPackages = [
    {
      id: 1,
      name: "Presencia Digital",
      subtitle: "Web + Marketing básico para emprendedores",
      price: "$599",
      originalPrice: "$899",
      color: "from-green-500 to-emerald-500",
      popular: false,
      badge: "Perfecto para comenzar",
      features: [
        "Landing Page responsiva optimizada",
        "Setup completo redes sociales (Instagram, Facebook)",
        "Estrategia de contenido para 1 mes",
        "Campañas básicas Google Ads ($200 incluidos)",
        "Formulario con WhatsApp Business integrado",
        "SEO básico + Google My Business",
        "Analytics configurado (web + redes)",
        "3 revisiones incluidas",
        "Hosting gratis 3 meses",
      ],
      deliverables: {
        web: "Landing page + formularios",
        marketing: "Setup redes + 1 mes de contenido",
      },
    },
    {
      id: 2,
      name: "Crecimiento Digital",
      subtitle: "Sitio web completo + Marketing integral",
      price: "$1,299",
      originalPrice: "$1,899",
      color: "from-cyan-500 to-blue-500",
      popular: true,
      badge: "Más elegido",
      features: [
        "Sitio web completo (hasta 8 páginas)",
        "E-commerce básico o catálogo digital",
        "Estrategia de redes sociales 3 meses",
        "Campañas publicitarias Facebook + Instagram ($500 incluidos)",
        "Email marketing automatizado",
        "Blog con estrategia de contenido SEO",
        "Analytics avanzado + reportes mensuales",
        "WhatsApp Business API integrado",
        "Chatbot básico para consultas",
        "5 revisiones incluidas",
        "Hosting gratis 6 meses",
        "Soporte técnico 2 meses",
      ],
      deliverables: {
        web: "Sitio completo + e-commerce básico",
        marketing: "3 meses gestión integral + campañas",
      },
    },
    {
      id: 3,
      name: "Dominación Digital",
      subtitle: "E-commerce + Marketing omnicanal avanzado",
      price: "$2,499",
      originalPrice: "$3,499",
      color: "from-purple-500 to-pink-500",
      popular: false,
      badge: "Para empresas serias",
      features: [
        "E-commerce completo con pasarela de pagos",
        "Dashboard administrativo avanzado",
        "Estrategia omnicanal 6 meses",
        "Campañas en Google Ads + Facebook + Instagram + TikTok ($1000 incluidos)",
        "Marketing automation completo",
        "IA para personalización y chatbots",
        "Influencer marketing (gestión completa)",
        "Email marketing + SMS marketing",
        "SEO técnico + Link building",
        "Analytics predictivo + reportes semanales",
        "CRM integrado para leads",
        "Revisiones ilimitadas por 6 meses",
        "Hosting premium gratis 1 año",
        "Soporte prioritario 6 meses",
        "Consultoría estratégica mensual",
      ],
      deliverables: {
        web: "E-commerce completo + CRM + automatizaciones",
        marketing: "6 meses gestión omnicanal + campañas avanzadas",
      },
    },
  ];

  const generateWhatsAppLink = (packageName, price) => {
    const message = `🚀 ¡Hola! Me interesa el paquete *${packageName}* (${price}) que combina desarrollo web + marketing digital. 

¿Podrían darme más detalles sobre:
- Cronograma de entrega
- Estrategia específica para mi negocio
- Casos de éxito similares

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
        // Móvil muy pequeño
        return {
          width: "280px",
          height: "500px",
          marginLeft: "-140px",
          marginTop: "-250px",
        };
      } else if (width < 768) {
        // Móvil
        return {
          width: "320px",
          height: "550px",
          marginLeft: "-160px",
          marginTop: "-275px",
        };
      } else if (width < 1024) {
        // Tablet
        return {
          width: "380px",
          height: "600px",
          marginLeft: "-190px",
          marginTop: "-300px",
        };
      } else {
        // Desktop
        return {
          width: "420px",
          height: "650px",
          marginLeft: "-210px",
          marginTop: "-325px",
        };
      }
    }
    // Fallback para SSR
    return {
      width: "320px",
      height: "550px",
      marginLeft: "-160px",
      marginTop: "-275px",
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
              Paquetes Integrados
            </span>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Web + Marketing
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Todo en Uno
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            <span className="text-cyan-400 font-semibold">
              ¿Por qué elegir entre desarrollo web o marketing digital?
            </span>
            <br />
            Nuestros paquetes fusionan ambos mundos para crear
            <span className="text-purple-400 font-semibold">
              {" "}
              ecosistemas digitales completos{" "}
            </span>
            que no solo se ven increíbles, sino que también generan resultados
            reales.
          </p>

          {/* Value proposition */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto px-4">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-700/50">
              <div className="text-cyan-400 font-bold text-lg sm:text-xl mb-1">
                Ahorro 30%
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                vs. contratar por separado
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-700/50">
              <div className="text-purple-400 font-bold text-lg sm:text-xl mb-1">
                Estrategia Unificada
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                Web y marketing alineados
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-700/50">
              <div className="text-green-400 font-bold text-lg sm:text-xl mb-1">
                1 Solo Equipo
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                Comunicación directa
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
                ? "520px"
                : typeof window !== "undefined" && window.innerWidth < 768
                ? "570px"
                : typeof window !== "undefined" && window.innerWidth < 1024
                ? "620px"
                : "700px",
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
                  <div className="text-center p-3 sm:p-4 md:p-6 pb-2 sm:pb-4">
                    <div className="mb-2 sm:mb-3">
                      <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {pkg.badge}
                      </span>
                    </div>

                    {/* Package Name - Escalado progresivo */}
                    <h3
                      className={`font-bold text-white mb-2 ${
                        isActive
                          ? "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" // Escalado progresivo real
                          : "text-sm sm:text-base md:text-lg lg:text-xl"
                      }`}
                    >
                      {pkg.name}
                    </h3>

                    {/* Subtitle - Escalado progresivo */}
                    <p
                      className={`text-gray-400 mb-3 sm:mb-4 leading-relaxed px-2 ${
                        isActive
                          ? "text-sm sm:text-base md:text-lg lg:text-xl" // Escalado progresivo
                          : "text-xs sm:text-sm md:text-base"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>

                    {/* Price section - Escalado progresivo */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span
                          className={`text-gray-500 line-through ${
                            isActive
                              ? "text-base sm:text-lg md:text-xl lg:text-2xl"
                              : "text-sm sm:text-base md:text-lg"
                          }`}
                        >
                          {pkg.originalPrice}
                        </span>
                        <span className="bg-red-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm md:text-4xl lg:text-6xl font-bold">
                          AHORRO
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span
                          className={`font-bold bg-gradient-to-r ${
                            pkg.color
                          } bg-clip-text text-transparent ${
                            isActive
                              ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" // Escalado progresivo dramático
                              : "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                          }`}
                        >
                          {pkg.price}
                        </span>
                        <span
                          className={`text-gray-400 ml-1 ${
                            isActive
                              ? "text-sm sm:text-base md:text-lg lg:text-xl"
                              : "text-xs sm:text-sm"
                          }`}
                        >
                          USD
                        </span>
                      </div>
                    </div>

                    {/* Deliverables preview */}
                    {isActive && (
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-xs">
                        <div className="bg-cyan-500/10 rounded-lg p-1.5 sm:p-2 border border-cyan-500/20">
                          <div className="text-cyan-400 font-semibold mb-1 text-sm sm:text-base md:text-lg">
                            🌐 Web Dev
                          </div>
                          <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-tight">
                            {pkg.deliverables.web}
                          </div>
                        </div>
                        <div className="bg-purple-500/10 rounded-lg p-1.5 sm:p-2 border border-purple-500/20">
                          <div className="text-purple-400 font-semibold mb-1 text-sm sm:text-base md:text-lg">
                            📈 Marketing
                          </div>
                          <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-tight">
                            {pkg.deliverables.marketing}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="flex-1 px-3 sm:px-4 md:px-6 pb-2 sm:pb-4 overflow-y-auto">
                    <ul className="space-y-1.5 sm:space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <div
                            className={`rounded-full bg-gradient-to-r ${
                              pkg.color
                            } flex items-center justify-center flex-shrink-0 mt-1 ${
                              isActive
                                ? "w-2.5 h-2.5 sm:w-3 sm:h-3"
                                : "w-2 h-2 sm:w-2.5 sm:h-2.5"
                            }`}
                          >
                            <svg
                              className={`text-white ${
                                isActive
                                  ? "w-1.5 h-1.5 sm:w-2 sm:h-2"
                                  : "w-1 h-1 sm:w-1.5 sm:h-1.5"
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
                          {/* Features text - Escalado progresivo */}
                          <span
                            className={`text-gray-300 leading-relaxed ${
                              isActive
                                ? "text-sm sm:text-base md:text-lg lg:text-xl" // Escalado progresivo real
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
                  <div className="p-3 sm:p-4 md:p-6 pt-1 sm:pt-2">
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
                      } shadow-lg transition-all duration-300 transform flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden
                        ${
                          isActive
                            ? "py-2.5 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 text-base sm:text-lg md:text-xl lg:text-2xl hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                            : "py-1.5 sm:py-2 px-2 sm:px-3 text-sm sm:text-base md:text-lg opacity-75"
                        }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                      )}

                      {isActive && (
                        <svg
                          className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 relative z-10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403" />
                        </svg>
                      )}

                      <span className="relative z-10">
                        {isActive ? "🚀 Consulta Gratuita" : "Ver Paquete"}
                      </span>
                    </button>
                  </div>
                </div>
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
  );
};

export default Insights;
