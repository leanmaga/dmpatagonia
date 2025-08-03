"use client";

import React, { useState, useEffect } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

const Nav = ({ show = true }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: BiHomeAlt, label: "Inicio" },
    { id: "about", icon: BiUser, label: "Nosotros" },
    { id: "work", icon: BsBriefcase, label: "Trabajo" },
    { id: "paquetes", icon: BsClipboardData, label: "Servicios" },
    { id: "contact", icon: BsChatSquareText, label: "Contacto" },
  ];

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
        transition-all duration-500 ease-in-out
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        }
      `}
    >
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-black/40" : "bg-black/20"} 
          backdrop-blur-xl rounded-full border border-white/10
          shadow-2xl shadow-cyan-500/20
          px-6 py-3 flex gap-2
          hover:shadow-cyan-500/30 hover:bg-black/50
        `}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`
                relative group cursor-pointer p-3 rounded-full
                transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }
                transform hover:scale-110 active:scale-95
              `}
              title={item.label}
            >
              <Icon className="text-xl" />

              {/* Tooltip */}
              <span
                className="
                  absolute -top-12 left-1/2 transform -translate-x-1/2
                  bg-black/80 text-white text-xs px-2 py-1 rounded-md
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  pointer-events-none whitespace-nowrap
                  border border-white/20
                "
              >
                {item.label}
              </span>

              {/* Indicador activo */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
