import React from 'react';
import escudo from "../../assets/img/home/CEOS.png";


export default function Home() {
  return (
    // mt-16 compensa la altura del Header fijo (h-16).
    // El degradado va de arriba (from-[#c80000]) hacia abajo (to-[#8b0000]).
    <main className=" min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-[BLACK] text-white">
      {/* Contenedor centrado */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:py-32 flex flex-col items-center justify-center text-center">

  {/* Escudo */}
  <div className="w-28 h-28 md:w-48 md:h-48 mb-4 overflow-hidden hover:scale-105 transition-transform">
    <img
      src={escudo}
      alt="Escudo Club Ceos"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Título */}
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
    BIENVENIDOS
  </h1>

  {/* Subtítulo */}
  <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed">
    Deporte, pasión y comunidad en un solo lugar.
  </p>

  {/* Botones */}
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="bg-white text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-white/90 transition-all shadow-md">
      Asociate
    </button>

    <button className="bg-transparent border-2 border-white/40 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white/10 transition-all">
      Ver deportes
    </button>
  </div>

</div>
    
     {/* --- SECCIÓN: DEPORTES ----------------------------------------------------- */}
<section className="w-full bg-white py-12 border-y border-gray-200">
  <div className="max-w-7xl mx-auto px-6">

    {/* Título */}
    <h2 className="text-3xl font-bold tracking-tight text-black mb-10 text-center md:text-left">
      Nuestros <span className="font-light text-black/70">Deportes</span>
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* CARD: FÚTBOL */}
      <div className="flex items-center gap-5 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
        
        {/* Icono */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 border border-red-200 text-3xl group-hover:scale-110 transition-transform">
          ⚽
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-lg font-semibold text-black">Fútbol</h3>
          <p className="text-sm text-gray-600">Escuela, juveniles y primera.</p>
        </div>
      </div>

      {/* CARD: HOCKEY */}
      <div className="flex items-center gap-5 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
        
        {/* Icono */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 border border-red-200 text-3xl group-hover:scale-110 transition-transform">
          🏑
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-lg font-semibold text-black">Hockey</h3>
          <p className="text-sm text-gray-600">Todas las categorías femeninas.</p>
        </div>
      </div>

    </div>
  </div>
</section>
</main>
  );
}