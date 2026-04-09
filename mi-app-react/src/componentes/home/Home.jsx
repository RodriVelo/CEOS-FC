import React from 'react';

export default function Home() {
  return (
    // mt-16 compensa la altura del Header fijo (h-16).
    // El degradado va de arriba (from-[#c80000]) hacia abajo (to-[#8b0000]).
    <main className=" min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-[#660000] text-white">
      {/* Contenedor centrado */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
          Bienvenidos <br /> al Club Ceos
        </h1>

        {/* Subtítulo o Descripción */}
        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed">
          Tu espacio para el deporte, la pasión y la comunidad. Descubre nuestras actividades y únete a la familia CEOS.
        </p>

        {/* Botón de Acción Principal (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          <button className="bg-transparent border-2 border-white/40 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white/10 transition-colors">
            Asóciate
          </button>
        </div>

      </div>
    
      {/* --- NUEVA SECCIÓN: DEPORTES --- */}
      {/* 'w-full' asegura que el fondo llegue a los bordes. 'py-12' controla el alto vertical (no muy grande) */}
      <section className="w-full bg-white border-t border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Título de la sección */}
          <h2 className="text-3xl font-bold tracking-tight text-black mb-10 text-center md:text-left">
            Nuestros <span className="font-light text-black/80">Deportes</span>
          </h2>

          {/* Contenedor de Cartas - Grid responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* CARTA 1: FÚTBOL */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-all cursor-pointer group">
              {/* Icono (usando Emoji por simplicidad, o placeholder para imagen) */}
              <div className="w-16 h-16 rounded-full bg-[#c80000]/20 flex items-center justify-center text-4xl border border-[#c80000]/30 shadow-inner group-hover:scale-110 transition-transform">
                ⚽ {/* <img src={iconoFutbol} alt="Fútbol" className="w-10 h-10" /> */}
              </div>
              {/* Texto */}
              <div>
                <h3 className="text-xl font-bold text-white">Fútbol</h3>
                <p className="text-sm text-white/70">Escuela, juveniles y primera.</p>
              </div>
            </div>

            {/* CARTA 2: HOCKEY */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-all cursor-pointer group">
              {/* Icono */}
              <div className="w-16 h-16 rounded-full bg-[#c80000]/20 flex items-center justify-center text-4xl border border-[#c80000]/30 shadow-inner group-hover:scale-110 transition-transform">
                🏑 {/* <img src={iconoHockey} alt="Hockey" className="w-10 h-10" /> */}
              </div>
              {/* Texto */}
              <div>
                <h3 className="text-xl font-bold text-white">Hockey</h3>
                <p className="text-sm text-white/70">Todas las categorías femeninas.</p>
              </div>
            </div>

          </div> {/* Fin Grid */}
        </div> {/* Fin max-w-7xl */}
      </section>
</main>
  );
}