import { useState } from "react";
import { 
  MapPin, Calendar, Target, Users, Trophy, Clock, 
  Shield, HeartHandshake, ChevronLeft, ChevronRight, CheckCircle2 
} from "lucide-react";

// Imports de imágenes
import fotoFutbol1 from "../../assets/img/infoClub/futbol1.jpg"
import fotoHockey1 from "../../assets/img/infoClub/hockey1.jpg"

const images = [fotoFutbol1, fotoHockey1];

export default function InfoClub() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <section className="w-full bg-white text-slate-900 py-12 md:py-20 font-['Inter']">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Institucional */}
        <div className="flex flex-col mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc800] text-black text-xs font-bold tracking-widest uppercase mb-4 w-fit shadow-sm">
            <Shield size={14} /> Institucional
          </span>
          <h2 className="font-['Lato'] text-4xl md:text-6xl font-black leading-tight tracking-tight">
            ASOCIACIÓN CIVIL <br />
            <span className="text-[#c80000]">DEPORTIVO CEOS</span>
          </h2>
        </div>

        {/* Slider con Estética Profesional */}
        <div className="relative group mb-16 overflow-hidden rounded-[2rem] shadow-2xl bg-slate-100">
          <img
            src={images[index]}
            alt="Club CEOS"
            className="w-full h-[450px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
          
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-[#c80000] text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-[#c80000] text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores de Slider */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${index === i ? "w-10 bg-[#ffc800]" : "w-2 bg-white/50 hover:bg-white"}`} 
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR: Ficha Técnica */}
          <aside className="lg:col-span-4">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 sticky top-8 shadow-sm">
              <h4 className="font-bold text-xl mb-8 flex items-center gap-2">
                <Target className="text-[#c80000]" /> Datos del Club
              </h4>
              
              <div className="space-y-8">
                {[
                  { icon: <Calendar size={20}/>, label: "Fundación", val: "2019" },
                  { icon: <MapPin size={20}/>, label: "Ubicación", val: "Lanín Carilafquen, Barrio Jardines" },
                  { icon: <Trophy size={20}/>, label: "Disciplinas", val: "Fútbol y Hockey Formativo" },
                  { icon: <Users size={20}/>, label: "Categorías", val: "Infantiles, Juveniles y Mayores" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 p-2 rounded-lg bg-white text-[#c80000] shadow-sm group-hover:bg-[#c80000] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">{item.label}</p>
                      <p className="text-slate-800 font-bold leading-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* CONTENIDO PRINCIPAL */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Sobre el Club */}
            <article>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold">Sobre el Club</h3>
                <div className="flex-1 h-[2px] bg-slate-100" />
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  CEOS nació en <span className="text-[#c80000] font-bold underline decoration-[#ffc800] decoration-4 underline-offset-4">2019</span> con una visión clara: 
                  convertirse en un referente del crecimiento deportivo y humano en la región.
                </p>
                <p>
                  Lo que comenzó como un proyecto de Primera División de fútbol, evolucionó rápidamente hacia una estructura formativa sólida, sumando Hockey en 2022 y expandiendo horizontes cada año para brindar contención y valores a nuestra comunidad.
                </p>
              </div>
            </article>

            {/* Historia / Timeline con colores de marca */}
            <section>
              <h3 className="text-3xl font-bold mb-10">Historia Deportiva</h3>
              <div className="relative space-y-0 border-l-4 border-slate-100 ml-4">
                {[
                  { year: "2019", desc: "Inicio del club con fútbol Primera División." },
                  { year: "2020-21", desc: "Incorporación de divisiones inferiores (9na a 4ta)." },
                  { year: "2022", desc: "Se suma Hockey con Primera y categorías formativas." },
                  { year: "2023", desc: "Integración de Patín Artístico al proyecto institucional." },
                ].map((step, i) => (
                  <div key={i} className="relative pl-10 pb-10 last:pb-0">
                    <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-white border-4 border-[#c80000] shadow-md" />
                    <span className="inline-block px-3 py-1 rounded bg-[#ffc800] text-black font-black text-xs mb-2">
                      {step.year}
                    </span>
                    <p className="text-slate-700 font-semibold text-lg">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disciplinas con Cards Minimalistas */}
            <section>
              <h3 className="text-3xl font-bold mb-8">Disciplinas Actuales</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Fútbol", 
                    icon: <CheckCircle2 className="text-[#c80000]" />, 
                    list: ["9na División", "8va División", "5ta División", "Primera División"] 
                  },
                  { 
                    title: "Hockey", 
                    icon: <CheckCircle2 className="text-[#ffc800]" />, 
                    list: ["Sub 12, 14, 16, 18", "Primera División"] 
                  }
                ].map((disc, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#c80000]/20 hover:shadow-2xl transition-all">
                    <h4 className="text-2xl font-black mb-6 flex items-center justify-between">
                      {disc.title}
                      <span className="text-3xl">{disc.title === "Fútbol" ? "⚽" : "🏑"}</span>
                    </h4>
                    <ul className="space-y-4">
                      {disc.list.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-slate-600 font-medium">
                          {disc.icon} {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Horarios con Bloque de Color Institucional */}
            <section className="bg-gradient-to-b from-[#c80000] to-black rounded-[2.5rem] p-8 md:p-16 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc800] opacity-10 rounded-full -mr-16 -mt-16" />
              
              <div className="flex items-center gap-4 mb-10 relative">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Clock size={32} className="text-[#ffc800]" />
                </div>
                <h3 className="text-3xl font-black italic tracking-tight">HORARIOS DE ENTRENAMIENTO</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 relative">
                <div className="space-y-4">
                  <h4 className="text-[#ffc800] font-black text-xl tracking-widest uppercase">⚽ Fútbol</h4>
                  <div className="p-6 bg-black/10 rounded-2xl border border-white/10">
                    <p className="font-bold text-lg mb-2 text-white">Lunes y Miércoles</p>
                    <p className="opacity-80">Formativas: 18:00 hs</p>
                    <p className="opacity-80">Primera: 20:00 hs</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[#ffc800] font-black text-xl tracking-widest uppercase">🏑 Hockey</h4>
                  <div className="p-6 bg-black/10 rounded-2xl border border-white/10">
                    <p className="font-bold text-lg mb-2 text-white">Martes y Jueves</p>
                    <p className="opacity-80">Formativas: 18:00 hs</p>
                    <p className="opacity-80">Primera: 20:00 hs</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Valores en Grid Moderno */}
            <section className="pb-10">
              <h3 className="text-3xl font-bold mb-8 text-center md:text-left">Nuestros Valores</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Respeto", "Compañerismo", "Compromiso", 
                  "Formación", "Inclusión", "Trabajo en equipo"
                ].map((valor, i) => (
                  <div key={i} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-[#ffc800] transition-all group">
                    <HeartHandshake size={24} className="text-[#c80000] group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-800 uppercase text-xs tracking-tighter">{valor}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}