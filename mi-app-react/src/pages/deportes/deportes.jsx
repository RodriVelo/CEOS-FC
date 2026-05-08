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

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="deportes" className="bg-white">
      <main className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-black text-white pt-25 pb-10 md:pb-10 md:pt-30">
        {/* TITULO */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl pb-2 font-extrabold text-white font-[Lato]">
            NUESTROS DEPORTES
          </h2>
          <p>Entrená, competí y formá parte del equipo</p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
          {/* HOCKEY */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick("hockey")}
            className="bg-white text-black rounded-2xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer"
          >
            <Goal className="w-12 h-12 mb-3 text-[#ffc800]" />
            <h2 className="text-xl font-semibold mb-2">Hockey</h2>
            <p className="text-gray-500">
              Información sobre hockey, equipos y torneos.
            </p>
          </motion.div>

          {/* FUTBOL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: 0.2 }}
            onClick={() => handleClick("futbol")}
            className="bg-white text-black rounded-2xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer"
          >
            <Trophy className="w-12 h-12 mb-3 text-[#ffc800]" />
            <h2 className="text-xl font-semibold mb-2">Fútbol</h2>
            <p className="text-gray-500">
              Información sobre fútbol, ligas y competencias.
            </p>
          </motion.div>
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
