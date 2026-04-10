import React from 'react';
import escudo from "../../assets/img/home/CEOS.png";
import Carrusel from '../carrusel/carrusel';
import fotoFutbol from "../../assets/img/deportes/futbol.jpg";
import fotoHockey from "../../assets/img/deportes/hockey.jpg";


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

  <section>
    <div>
      <Carrusel></Carrusel>
    </div>
  </section>

     {/* --- SECCIÓN: DEPORTES ----------------------------------------------------- */}
  <section>
    <div className="bg-white min-h-[500px] w-full flex flex-col md:flex-row items-center justify-center p-8 gap-12 font-['Inter']">
      
      {/* Título Vertical - "DEPORTES" */}
      <div className="relative pl-10">
        <h2 className="font-['Lato'] font-black text-7xl md:text-8xl tracking-tighter text-black uppercase leading-none select-none">
          Deportes
        </h2>
      </div>

      {/* Contenedor de Tarjetas */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
       <div className="w-full py-16 flex justify-center">
      <div className="flex gap-8 flex-wrap justify-center">

        {/* Card Futbol */}
        <div className="group relative w-[300px] h-[420px] overflow-hidden 
                        transform -skew-x-6 rounded-xl shadow-xl
                        hover:scale-105 transition-all duration-500 cursor-pointer">

          <img
            src={fotoFutbol}
            alt="Futbol"
            className="w-full h-full object-cover 
                       skew-x-6 scale-110 
                       group-hover:scale-125 
                       transition-all duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

          {/* Label */}
          <div className="absolute bottom-6 left-6 skew-x-6">
            <span className="bg-red-600 text-white px-6 py-2 font-bold tracking-wider shadow-lg">
              FUTBOL
            </span>
          </div>
        </div>

        {/* Card Hockey */}
        <div className="group relative w-[300px] h-[420px] overflow-hidden 
                        transform -skew-x-6 rounded-xl shadow-xl
                        hover:scale-105 transition-all duration-500 cursor-pointer">

          <img
            src={fotoHockey}
            alt="Hockey"
            className="w-full h-full object-cover 
                       skew-x-6 scale-110 
                       group-hover:scale-125 
                       transition-all duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

          {/* Label */}
          <div className="absolute bottom-6 left-6 skew-x-6">
            <span className="bg-red-600 text-white px-6 py-2 font-bold tracking-wider shadow-lg">
              HOCKEY
            </span>
          </div>
        </div>

      </div>
    </div>
      </div>
    </div>
  </section>
    
</main>
  );
}