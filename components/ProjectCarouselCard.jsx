// components/ProjectCarouselCard.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCarouselCard = ({
  project,
  isActive,
  onClick,
  cardStyle,
  isDragging = false,
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 cursor-pointer"
      style={{
        ...cardStyle,
        width: "380px",
        height: "450px",
        marginLeft: "-190px",
        marginTop: "-275px",
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        pointerEvents: isDragging ? "none" : "auto",
      }}
      onClick={onClick}
    >
      <div
        className="
        relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl
        border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden p-6
        hover:border-cyan-400/50 transition-all duration-700 flex flex-col justify-between
      "
      >
        <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
          <Image
            src={project.imgUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-2">Proyecto Web Completo</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded border border-cyan-400/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-300 flex-1 mb-4">{project.subtitle}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <motion.button
            className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg text-sm shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Proyecto
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCarouselCard;
