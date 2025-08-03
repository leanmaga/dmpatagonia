"use client";

import Image from "next/image";

const StartStep = ({ imgUrl, title, subtitle, index, category }) => {
  // Definir colores según la categoría del servicio
  const getCategoryColors = (category) => {
    switch (category) {
      case "web":
        return {
          gradient: "from-cyan-400 to-blue-500",
          border: "border-cyan-400/20 group-hover:border-cyan-400/50",
          glow: "group-hover:shadow-cyan-400/25",
          text: "group-hover:text-cyan-400",
          line: "from-cyan-400 to-blue-400",
          particles: "bg-cyan-400",
        };
      case "marketing":
        return {
          gradient: "from-purple-400 to-pink-500",
          border: "border-purple-400/20 group-hover:border-purple-400/50",
          glow: "group-hover:shadow-purple-400/25",
          text: "group-hover:text-purple-400",
          line: "from-purple-400 to-pink-400",
          particles: "bg-purple-400",
        };
      case "integral":
        return {
          gradient: "from-cyan-400 via-purple-400 to-pink-500",
          border: "border-cyan-400/20 group-hover:border-purple-400/50",
          glow: "group-hover:shadow-cyan-400/25",
          text: "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text",
          line: "from-cyan-400 via-purple-400 to-pink-400",
          particles: "bg-gradient-to-r from-cyan-400 to-purple-400",
        };
      default:
        return {
          gradient: "from-cyan-400 to-blue-500",
          border: "border-cyan-400/20 group-hover:border-cyan-400/50",
          glow: "group-hover:shadow-cyan-400/25",
          text: "group-hover:text-cyan-400",
          line: "from-cyan-400 to-blue-400",
          particles: "bg-cyan-400",
        };
    }
  };

  const colors = getCategoryColors(category);

  return (
    <div className="flex flex-col justify-center text-center items-center sm:max-w-[500px] lg:min-w-[600px] group relative">
      {/* Badge de categoría */}
      {category && (
        <div
          className={`absolute -top-2 -right-4 z-20 px-3 py-1 rounded-full text-xs font-medium border ${
            category === "web"
              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
              : category === "marketing"
              ? "bg-purple-500/20 text-purple-300 border-purple-400/30"
              : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-cyan-400/30"
          }`}
        >
          {category === "web"
            ? "🌐 Web"
            : category === "marketing"
            ? "📱 Marketing"
            : "🚀 Integral"}
        </div>
      )}

      {/* Contenedor del icono con efectos neón */}
      <div className="relative mb-6 cursor-pointer">
        {/* Efecto de brillo neón */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150`}
        />

        {/* Anillo exterior con pulso */}
        <div
          className={`absolute inset-0 border-2 ${colors.border.replace(
            "group-hover:border-cyan-400/50",
            "group-hover:border-purple-400/50"
          )} rounded-2xl transition-colors duration-300 group-hover:animate-pulse`}
        />

        {/* Contenedor principal del icono */}
        <div
          className={`relative w-[70px] h-[70px] bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl flex items-center justify-center border ${colors.border} transition-all duration-300 ${colors.glow} hover:scale-110 hover:rotate-3 transform`}
        >
          {/* Icono */}
          <div className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300">
            <Image
              width={50}
              height={50}
              src={imgUrl}
              alt={title}
              className="w-[50px] h-[50px] object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Destello al hacer hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
        </div>

        {/* Partículas flotantes CSS-only */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div
            className={`absolute w-1 h-1 ${colors.particles} rounded-full top-2 left-8 animate-bounce`}
            style={{ animationDelay: "0s" }}
          />
          <div
            className={`absolute w-1 h-1 ${colors.particles} rounded-full top-4 right-6 animate-bounce`}
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className={`absolute w-1 h-1 ${colors.particles} rounded-full bottom-3 left-6 animate-bounce`}
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>

      {/* Título con efecto hover */}
      <h1
        className={`font-bold text-[28px] p-[1rem] text-white transition-all duration-300 ${colors.text}`}
      >
        {title}
      </h1>

      {/* Descripción con animación */}
      <p className="font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] transition-colors duration-300 group-hover:text-gray-300">
        {subtitle}
      </p>

      {/* Línea decorativa inferior */}
      <div
        className={`w-16 h-0.5 bg-gradient-to-r ${colors.line} mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100`}
      />
    </div>
  );
};

export default StartStep;
