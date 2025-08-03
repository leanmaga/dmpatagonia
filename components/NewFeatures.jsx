"use client";

import Image from "next/image";

const NewFeatures = ({ imgUrl, title, subtitle, index }) => {
  return (
    <div className="flex flex-col justify-center text-center items-center sm:max-w-[500px] lg:min-w-[600px] group">
      {/* Contenedor del icono con efectos neón */}
      <div className="relative mb-6 cursor-pointer">
        {/* Efecto de brillo neón */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-150" />

        {/* Anillo exterior con pulso */}
        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl group-hover:border-cyan-400/60 transition-colors duration-300 group-hover:animate-pulse" />

        {/* Contenedor principal del icono */}
        <div className="relative w-[70px] h-[70px] bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/25 hover:scale-110 hover:rotate-3 transform">
          {/* Icono */}
          <div className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300">
            <Image
              width={35}
              height={35}
              src={imgUrl}
              alt={title}
              className="w-[35px] h-[35px] object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Destello al hacer hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
        </div>

        {/* Partículas flotantes CSS-only */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div
            className="absolute w-1 h-1 bg-cyan-400 rounded-full top-2 left-8 animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute w-1 h-1 bg-cyan-400 rounded-full top-4 right-6 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute w-1 h-1 bg-cyan-400 rounded-full bottom-3 left-6 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>

      {/* Título con efecto hover */}
      <h1 className="font-bold text-[24px] p-[1rem] text-white transition-colors duration-300 group-hover:text-cyan-400">
        {title}
      </h1>

      {/* Descripción con animación */}
      <p className="font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] transition-colors duration-300 group-hover:text-gray-300">
        {subtitle}
      </p>

      {/* Línea decorativa inferior */}
      <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
    </div>
  );
};

export default NewFeatures;
