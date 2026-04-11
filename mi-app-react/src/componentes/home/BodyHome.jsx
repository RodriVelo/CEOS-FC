import React from 'react';
import escudo from "../../assets/img/home/CEOS.png";
import Carrusel from '../carrusel/carrusel';
import fotoFutbol from "../../assets/img/deportes/futbol.jpg";
import fotoHockey from "../../assets/img/deportes/hockey.jpg";
import { useNavigate } from 'react-router-dom';


export default function Home() {

 const navigate = useNavigate();

  const navega = (direccion) => {
    navigate(direccion);
  };

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
    CLUB CEOS
  </h1>

  {/* Subtítulo */}
  <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed">
    Deporte, pasión y comunidad en un solo lugar.
  </p>

  {/* Botones */}
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="bg-white text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-white/90 transition-all shadow-md">
     Informacion socios
    </button>

    <button onClick={()=>navega("/deportes")} className="bg-transparent border-2 border-white/40 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white/10 transition-all">
      Ver deportes
    </button>
  </div>

</div>

  <section>
    <div>
      <Carrusel></Carrusel>
    </div>
    </section>
{/* DEPORTES */}
<section className="w-full bg-gray-100 py-16 md:py-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
    
    {/* LEFT IMAGES */}
    <div className="relative flex justify-center lg:justify-start gap-4 md:gap-6">
      
      {/* Image column */}
      <div className="flex flex-col gap-4 md:gap-6">
        <img
          src={fotoHockey}
          alt=""
          className="w-[150px] h-[220px] md:w-[220px] md:h-[320px] lg:w-[260px] lg:h-[360px] object-cover"
        />

        {/* Experience box */}
        <div className="bg-gradient-to-r from-[#c80000] to-black text-white p-4 md:p-6">
          <h3 className="text-2xl md:text-3xl font-bold">+200</h3>
          <p className="text-xs md:text-sm">Jugadores/as en deportes</p>
        </div>
      </div>

      {/* Image 2 */}
      <div className="mt-10 md:mt-16 lg:mt-20">
        <img
          src={fotoFutbol}
          alt=""
          className="w-[150px] h-[220px] md:w-[220px] md:h-[320px] lg:w-[260px] lg:h-[360px] object-cover"
        />
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="text-center lg:text-left">
      <p className="text-[#c80000] font-medium mb-3">
        — SOBRE DISCIPLINAS
      </p>

      <h2 className="font-['Lato'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-black uppercase leading-none select-none mb-4">
        Deportes
      </h2>

      <p className="text-gray-500 mb-4 text-sm md:text-base">
        Descubrí nuestras disciplinas deportivas pensadas para todas las edades y
        niveles. Fútbol y hockey son espacios donde se fomenta el trabajo en equipo,
        la diversión y el desarrollo de habilidades dentro y fuera de la cancha.
      </p>

      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Sumate a los entrenamientos, participá en competencias y formá parte de una
        comunidad apasionada por el deporte. Conocé horarios, categorías y toda la
        información para empezar.
      </p>

      <button onClick={()=>navega("/deportes")} className="bg-gradient-to-r from-[#c80000] to-black text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
        Ver más deportes
      </button>
    </div>

  </div>
</section>
    
</main>
  );
}