import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import escudo from "../../assets/img/header/ESCUDO.png";

export default function Header() {

  const navigate = useNavigate();

  const navega = (direccion) => {
    navigate(direccion);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-800 flex items-center justify-center">
              <img src={escudo} alt="Logo" className="w-full h-full object-cover"/>
            </div>
            <span 
              onClick={() => navega("/")}
              className="text-xl font-bold tracking-tighter text-white cursor-pointer uppercase"
            >
              A.C.D.S CEOS.
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => navega("/")} className="text-sm text-white/80 hover:text-white">
              Inicio
            </button>

            <button onClick={() => navega("/deportes")} className="text-sm text-white/80 hover:text-white">
              Deportes
            </button>

            <button className="text-sm text-white/80 hover:text-white">
              El Club
            </button>

            <button className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              CONSULTAS
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              ☰
            </button>
          </div>
        </div>
      </div>


      
        {/* Mobile */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full 
                          bg-black/80 backdrop-blur-lg 
                          border-t border-white/10
                          animate-in slide-in-from-top duration-300">

            <nav className="flex flex-col py-2">

              <button
                onClick={() => navega("/")}
                className="flex items-center justify-between
                          px-6 py-4 text-white 
                          hover:bg-white/10 
                          transition-all duration-200"
              >
                Inicio
                <span className="text-white/40">→</span>
              </button>

              <div className="h-px bg-white/10 mx-4" />

              <button
                onClick={() => navega("/deportes")}
                className="flex items-center justify-between
                          px-6 py-4 text-white 
                          hover:bg-white/10 
                          transition-all duration-200"
              >
                Deportes
                <span className="text-white/40">→</span>
              </button>

            </nav>
          </div>
        )}
    </nav>
  );
}