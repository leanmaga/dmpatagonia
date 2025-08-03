// app/sections/Explore.jsx
"use client";

import { useState, useEffect } from "react";
import styles from "../styles";
import ProjectCarouselCard from "@/components/ProjectCarouselCard";
import { projects } from "@/constants";

const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all"); // all, web, marketing

  const minSwipeDistance = 50;

  // Filtrar proyectos por categoría
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "web")
      return project.category === "web" || project.category === "desarrollo";
    if (activeCategory === "marketing")
      return project.category === "marketing" || project.category === "digital";
    return true;
  });

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
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

    if (isLeftSwipe) goToNext();
    else if (isRightSwipe) goToPrevious();

    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset activeIndex when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    if (position === 0)
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 20,
        opacity: 1,
      };
    if (position === -1)
      return {
        transform: "translateX(-60%) scale(0.8) rotateY(25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    if (position === 1)
      return {
        transform: "translateX(60%) scale(0.8) rotateY(-25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    return { transform: "translateX(0%) scale(0.6)", zIndex: 1, opacity: 0 };
  };

  const categories = [
    { id: "all", label: "Todos los Proyectos", icon: "🚀" },
    { id: "web", label: "Desarrollo Web", icon: "🌐" },
    { id: "marketing", label: "Marketing Digital", icon: "📱" },
  ];

  return (
    <section
      className={`${styles.paddings} relative overflow-hidden`}
      id="work"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Nuestros Proyectos Integrales
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Desarrollo Web
            </span>
            <br className="md:block hidden" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              + Marketing Digital
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Cada proyecto combina{" "}
            <span className="text-cyan-400 font-semibold">
              desarrollo web profesional
            </span>{" "}
            con{" "}
            <span className="text-purple-400 font-semibold">
              estrategias de marketing efectivas
            </span>
            . Descubre cómo transformamos ideas en experiencias digitales que
            generan resultados reales.
          </p>

          {/* Filtros de categoría */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contador de proyectos */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <span className="text-white/70">Mostrando</span>
            <span className="text-cyan-400 font-semibold">
              {filteredProjects.length}
            </span>
            <span className="text-white/70">
              {activeCategory === "all"
                ? "proyectos integrales"
                : activeCategory === "web"
                ? "desarrollos web"
                : "campañas de marketing"}
            </span>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <>
            <div
              className="relative w-full max-w-6xl mx-auto mb-12 select-none"
              style={{ perspective: "1200px", height: "600px" }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                onClick={goToPrevious}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-30 bg-slate-800/60 hover:bg-slate-700/80 text-white p-3 rounded-full shadow-lg hidden xl:flex items-center justify-center transition-all duration-300 hover:scale-110"
                disabled={filteredProjects.length <= 1}
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
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-30 bg-slate-800/60 hover:bg-slate-700/80 text-white p-3 rounded-full shadow-lg hidden xl:flex items-center justify-center transition-all duration-300 hover:scale-110"
                disabled={filteredProjects.length <= 1}
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

              {filteredProjects.map((project, index) => (
                <ProjectCarouselCard
                  key={`${activeCategory}-${project.id}-${index}`}
                  project={project}
                  isActive={index === activeIndex}
                  isDragging={isDragging}
                  onClick={() => !isDragging && setActiveIndex(index)}
                  cardStyle={getCardStyle(index)}
                />
              ))}
            </div>

            {/* Indicadores de página */}
            {filteredProjects.length > 1 && (
              <div className="flex justify-center gap-3">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex
                        ? "w-8 h-3 bg-gradient-to-r from-cyan-400 to-purple-400"
                        : "w-3 h-3 bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-gray-400">
              Selecciona otra categoría o vuelve a "Todos los Proyectos"
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Explore;
