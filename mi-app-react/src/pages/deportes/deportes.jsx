import { useState, useRef } from "react";
import futbol from "../../assets/img/deportes/futbol.jpg";
import hockey from "../../assets/img/deportes/hockey.jpg";
import { Users, MapPin, Trophy, Goal, Shield } from "lucide-react";
import { motion } from "framer-motion";
import foto8va1 from "../../assets/img/deportes/octava1.jpg";
import foto8va2 from "../../assets/img/deportes/octava2.jpg";
import foto9na1 from "../../assets/img/deportes/novena1.jpg";
import foto9na2 from "../../assets/img/deportes/novena2.jpg";
import foto5ta1 from "../../assets/img/deportes/quinta1.jpg";
import foto5ta2 from "../../assets/img/deportes/quinta2.jpg";
import foto1ra1 from "../../assets/img/deportes/primera1.jpg";
import foto1ra2 from "../../assets/img/deportes/primera2.jpg";
import foto141 from "../../assets/img/deportes/sub141.jpg";
import foto142 from "../../assets/img/deportes/sub142.jpg";
import foto161 from "../../assets/img/deportes/sub161.jpg";
import foto162 from "../../assets/img/deportes/sub162.jpg";
import foto181 from "../../assets/img/deportes/sub181.jpg";
import foto182 from "../../assets/img/deportes/sub182.jpg";
import foto1raH1 from "../../assets/img/deportes/primeraH1.jpg";
import foto1raH2 from "../../assets/img/deportes/primeraH2.jpg";

import galeriaF1 from "../../assets/img/deportes/carrusel/futbol/1.jpg";
import galeriaF2 from "../../assets/img/deportes/carrusel/futbol/2.jpg";
import galeriaF3 from "../../assets/img/deportes/carrusel/futbol/3.jpg";
import galeriaF4 from "../../assets/img/deportes/carrusel/futbol/4.jpg";
import galeriaF5 from "../../assets/img/deportes/carrusel/futbol/5.jpg";

import galeriaH1 from "../../assets/img/deportes/carrusel/hockey/1.jpg";
import galeriaH2 from "../../assets/img/deportes/carrusel/hockey/2.jpg";
import galeriaH3 from "../../assets/img/deportes/carrusel/hockey/3.jpg";
import galeriaH4 from "../../assets/img/deportes/carrusel/hockey/4.jpg";
import galeriaH5 from "../../assets/img/deportes/carrusel/hockey/5.jpg";

const imagenesFutbol = [galeriaF1, galeriaF2, galeriaF3, galeriaF4, galeriaF5];
const imagenesHockey = [galeriaH1, galeriaH2, galeriaH3, galeriaH4, galeriaH5];
import DeporteInfo from "../../componentes/deportes/deporteInfo";

export default function Deportes() {
  const [activo, setActivo] = useState(null);
  const infoRef = useRef(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleClick = (deporte) => {
    setActivo(deporte);

    setTimeout(() => {
      infoRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const dataFutbol = [
    {
      cat: "9na Division",
      edad: "2018 / 2019 / 2020",
      profe: "Raul Paiz, Leo Guenchullan",
      imgs: [foto9na1, foto9na2],
      dias: "Lunes, Miercoles y Viernes",
      horario: "20:00 hs-21:00 hs",
      lugar: "Predio Ceos",
    },
    {
      cat: "8va Division",
      edad: "2016 / 2017",
      profe: "Raul Paiz, Leo Guenchullan",
      imgs: [foto8va1, foto8va2],
      dias: "Lunes, Miercoles y Viernes",
      horario: "20:00 hs-21:00 hs",
      lugar: "Predio Ceos",
    },
    {
      cat: "5ta Division",
      edad: "2010",
      profe: "Leo Kreitman",
      imgs: [foto5ta1, foto5ta2],
      dias: "Lunes, Miercoles y Viernes",
      horario: "18:00 hs-20:00 hs",
      lugar: "Predio Ceos",
    },
    {
      cat: "PRIMERA DIVISION",
      edad: "Mayores",
      profe: "Lihuen Sibon",
      imgs: [foto1ra1, foto1ra2],
      dias: "Lunes, Miercoles y Viernes",
      horario: "20:00 hs -21:00 hs",
      lugar: "Cancha Municipal de Hockey",
    },
  ];

  const dataHockey = [
    {
      cat: "SUB 13",
      edad: "2018 / 2019 / 2020",
      profe: "Fernando Vallejos, Lucila Solorza",
      imgs: [foto141, foto142],
      dias: "Lunes, Miercoles y Viernes",
      horario: "19:00 hs -21:00 hs",
      lugar: "Cancha Municipal de Hockey",
    },
    {
      cat: "SUB 16",
      edad: "2016 / 2017",
      profe: "Fernando Vallejos, Lucila Solorza",
      imgs: [foto161, foto162],
      dias: "Lunes, Miercoles y Viernes",
      horario: "20:00 hs -21:00 hs",
      lugar: "Cancha Municipal de Hockey",
    },
    {
      cat: "SUB 18",
      edad: "2010",
      profe: "Fernando Aminahuel, Juan Pipe Rocha",
      imgs: [foto181, foto182],
      dias: "Miercoles y Viernes",
      horario: "20:00 hs -21:00 hs",
      lugar: "Cancha Municipal de Hockey",
    },
    {
      cat: "PRIMERA DIVISION",
      edad: "Mayores",
      profe: "Fernando Aminahuel, Juan Pipe Rocha",
      imgs: [foto1raH1, foto1raH2],
      dias: "Miercoles y Viernes",
      horario: "20:00 hs -21:00 hs",
      lugar: "Cancha Municipal de Hockey",
    },
  ];

 
const deportes = [
  {
    key: "hockey",
    label: "Hockey",
    desc: "Equipos, torneos y entrenamientos para todas las edades.",
    img: galeriaH2,
    accent: "#ffc800",
    accentText: "#000",
    tag: "Césped",
  },
  {
    key: "futbol",
    label: "Fútbol",
    desc: "Ligas, competencias y divisiones para cada categoría.",
    img: galeriaF2,
    accent: "#c80000",
    accentText: "#fff",
    tag: "Once",
  },
];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   // Sección principal
<section id="deportes" className="bg-white">
  <main className="min-h-[calc(100vh-64px)] w-full text-white pt-24 pb-16 overflow-hidden flex flex-col items-center"
    style={{ background: "linear-gradient(170deg, #c80000 0%, #1a0000 55%, #000 100%)" }}>

    {/* TÍTULO */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="text-center mb-14 px-4"
    >
      <h1 className="text-[clamp(40px,7vw,68px)] font-black uppercase tracking-tighter leading-[0.95] text-white">
        Nuestros<br />deportes
      </h1>
      <p className="text-white/45 mt-3 text-[15px]">
        Entrená, competí y formá parte del equipo
      </p>
    </motion.div>

    {/* CARDS */}
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl mx-auto px-4">
  {deportes.map((d, i) => (
    <motion.button
      key={d.key}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: i * 0.12 }}
      onClick={() => handleClick(d.key)}
      className="group relative cursor-pointer text-left w-full sm:flex-1
                 overflow-hidden bg-red transition-all duration-200
                 hover:-translate-y-1 focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-[#ffc800]"
      style={{ borderRadius: "16px" }}
    >
      {/* IMAGEN */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={d.img}
          alt={d.label}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, #ffffff 100%)" }}
        />
      </div>

      {/* CUERPO */}
      <div className="px-5 pt-4 pb-5 bg-white">
        <span
          className="inline-block text-[11px] font-medium uppercase tracking-wider
                     px-3 py-1 rounded-full mb-3"
          style={{ background: d.accent, color: d.accentText }}
        >
          {d.tag}
        </span>

        <h2
          className="uppercase text-gray-900 leading-none mb-2"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(36px, 8vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          {d.label.toUpperCase()}
        </h2>

        <p className="text-gray-900 text-xs leading-relaxed mb-4 max-w-[200px]">
          {d.desc}
        </p>

        <div className="flex items-center gap-2 text-gray-900 text-[13px]
                        font-medium uppercase tracking-wide">
          VER MAS
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}>
            →
          </div>
        </div>
      </div>
    </motion.button>
  ))}
</div>
    </main>
      {activo === "hockey" && (
         <div ref={infoRef}>
        <DeporteInfo
          titulo="HOCKEY DEL CLUB"
          descripcion="Formación deportiva desde edades tempranas hasta primera división..."
          imagen={hockey}
          categorias="SUB 12 · SUB 14 · SUB 18 · Primera"
          ubicacion="Cancha Municipal - Junín de los Andes"
          data={dataHockey}
          competencias={["Liga Cordillerana","Regional Neuquino"]}
          imagenesGaleria={imagenesHockey}
          openIndex={openIndex}
          toggle={toggle}
        />
      </div>
    )}

      {activo === "futbol" && (
         <div ref={infoRef}>
        <DeporteInfo
          titulo="FÚTBOL DEL CLUB"
          descripcion="Formación y competencia para todas las edades..."
          imagen={futbol}
          categorias="9na · 8va · 5ta · Primera"
          ubicacion="Predio Ceos - Junín de los Andes"
          data={dataFutbol}
          imagenesGaleria={imagenesFutbol}
          competencias={["Lifune Sur","Torneo Local"]}
          reverse
          openIndex={openIndex}
          toggle={toggle}
        />
      </div>
    )}
    </section>
  );
}
