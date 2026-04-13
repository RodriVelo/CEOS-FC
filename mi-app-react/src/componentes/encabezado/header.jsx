import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import escudo from "../../assets/img/header/ESCUDO.png";

export default function Header() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navega = (direccion) => {
    navigate(direccion);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 
                    bg-black/60 backdrop-blur-md 
                    border-b border-white/10
                    transition-all duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 overflow-hidden rounded-full 
                            bg-gray-800 flex items-center justify-center
                            transition-all duration-300
                            group-hover:scale-110
                            group-hover:shadow-lg
                            group-hover:shadow-red-500/30">
              <img 
                src={escudo} 
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            <span 
              onClick={() => navega("/")}
              className="text-xl font-bold tracking-tighter 
                         text-white cursor-pointer uppercase
                         transition-all duration-300
                         group-hover:text-red-400"
            >
              A.C.D.S CEOS.
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8 items-center">

            <button 
              onClick={() => navega("/")}
              className="relative text-sm text-white/80 
                         hover:text-white transition"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] 
                               bg-red-500 transition-all duration-300
                               group-hover:w-full"/>
            </button>

            <button 
              onClick={() => navega("/deportes")}
              className="text-sm text-white/80 
                         hover:text-white transition 
                         hover:scale-105"
            >
              Deportes
            </button>

            <button 
              onClick={() => navega("/infoClub")}
              className="text-sm text-white/80 
                         hover:text-white transition 
                         hover:scale-105"
            >
              El Club
            </button>

            <button className="bg-red-600 text-white px-6 py-2 
                               rounded-full text-sm font-bold
                               transition-all duration-300
                               hover:bg-red-500
                               hover:scale-105
                               hover:shadow-lg
                               hover:shadow-red-500/30" onClick={() => navega("/informacionSocios")}>
                                
              CONSULTAS
            </button>

          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white text-2xl
                         transition-transform duration-300
                         hover:scale-110"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full
                        bg-black/70 backdrop-blur-xl
                        border-t border-white/10
                        animate-in slide-in-from-top duration-300">

          <nav className="flex flex-col gap-3 p-4">

            <button
              onClick={() => navega("/")}
              className="group flex items-center justify-between
                         px-6 py-4 rounded-xl
                         bg-white/5
                         hover:bg-white/10
                         text-white
                         transition-all duration-300
                         hover:scale-[1.02]"
            >
              Inicio
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            <button
              onClick={() => navega("/deportes")}
              className="group flex items-center justify-between
                         px-6 py-4 rounded-xl
                         bg-white/5
                         hover:bg-white/10
                         text-white
                         transition-all duration-300
                         hover:scale-[1.02]"
            >
              Deportes
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            <button
              onClick={() => navega("/infoClub")}
              className="group flex items-center justify-between
                         px-6 py-4 rounded-xl
                         bg-white/5
                         hover:bg-white/10
                         text-white
                         transition-all duration-300
                         hover:scale-[1.02]"
            >
              El Club
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            <button
              className="mt-2 bg-red-600 text-white
                         py-4 rounded-xl font-bold
                         hover:bg-red-500
                         transition-all duration-300
                         hover:scale-[1.02]
                         shadow-lg shadow-red-500/20"
                         onClick={() => navega("/informacionSocios")}
            >
              CONSULTAS
            </button>

          </nav>
        </div>
      )}

    </nav>
  );
}