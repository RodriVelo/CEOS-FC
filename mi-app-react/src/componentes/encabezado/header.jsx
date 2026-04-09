import React, { useState } from 'react';
// Descomenta la importación cuando tengas la imagen lista
 import escudo from "../../assets/img/header/ESCUDO.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo y Nombre alineados */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Contenedor de la imagen del logo */}
            <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-800 flex items-center justify-center">
               <img
                src={escudo} // Reemplazar por {escudo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white cursor-pointer uppercase">
              A.C.D.S CEOS<span className="text-red-600">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Inicio</a>
            <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Deportes</a>
            <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">El Club</a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20">
              CONSULTAS
            </button>
          </div>

          {/* Mobile Button (Icono de hamburguesa blanco) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu con fondo oscuro */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black/90 backdrop-blur-xl`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#" className="block px-3 py-3 text-base font-medium text-white border-b border-white/5">Inicio</a>
          <a href="#" className="block px-3 py-3 text-base font-medium text-white border-b border-white/5">Deportes</a>
          <a href="#" className="block px-3 py-3 text-base font-medium text-white border-b border-white/5">El Club</a>
          <div className="pt-4">
            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold">
              CONSULTAS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}