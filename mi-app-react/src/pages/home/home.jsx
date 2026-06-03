import Header from "../../componentes/encabezado/header";
import Footer from "../../componentes/footer/footer";

import escudo from "../../assets/img/CEOS.webp";
import Carrusel from "../../componentes/carrusel/carrusel.jsx"
import fotoFutbol from "../../assets/img/deportes/futbol.jpg";
import fotoHockey from "../../assets/img/deportes/hockey.jpg";
import { useNavigate } from "react-router-dom";
import fotoFutbol2 from "../../assets/img/home/futbol1.jpg";
import fotoHockey2 from "../../assets/img/home/hockey1.jpg";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

import Counter from "../../componentes/home/counter.jsx";

import { lazy, Suspense } from "react";



export default function Home(){
    const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } },
  };

  const navigate = useNavigate();

  const navega = (direccion) => {
    navigate(direccion);
  };

  const Carrusel = lazy(() => import("../../componentes/carrusel/carrusel.jsx"));
  return (
    // mt-16 compensa la altura del Header fijo (h-16).
    // El degradado va de arriba (from-[#c80000]) hacia abajo (to-[#8b0000]).
    <main className="overflow-x-hidden min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-[BLACK] text-white">
      {/* Contenedor centrado */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:py-32 flex flex-col items-center justify-center text-center">
        {/* Escudo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-28 h-28 md:w-48 md:h-48 mb-4 overflow-hidden"
        >
          <motion.img
            src={escudo}
            alt="Escudo Club Ceos"
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          CLUB CEOS
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed"
        >
          Deporte, pasión y comunidad en un solo lugar.
        </motion.p>

        {/* Botones */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navega("/informacionSocios")}
            className="bg-white text-black px-8 py-3 rounded-full text-base font-semibold shadow-md"
          >
            Informacion socios
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navega("/deportes")}
            className="bg-transparent border-2 border-white/40 text-white px-8 py-3 rounded-full text-base font-semibold"
          >
            Ver deportes
          </motion.button>
        </motion.div>
      </div>
      <section>
        <div>
         <Suspense fallback={null}>
  <Carrusel />
</Suspense>
        </div>
      </section>

      {/* DEPORTES */}
      <section className="w-full bg-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          {/* IMÁGENES */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start gap-4 md:gap-6"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={fotoHockey}
                className="w-[150px] h-[220px] md:w-[220px] md:h-[320px] lg:w-[260px] lg:h-[360px] object-cover"
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-[#c80000] to-black text-white p-4 md:p-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold">+200</h3>
                <p className="text-xs md:text-sm">Jugadores/as en deportes</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 md:mt-16 lg:mt-20"
            >
              <img
                src={fotoFutbol}
                className="w-[150px] h-[220px] md:w-[220px] md:h-[320px] lg:w-[260px] lg:h-[360px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-[#c80000] font-medium mb-3">
              — SOBRE DISCIPLINAS
            </p>

            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-black uppercase leading-none mb-4">
              Deportes
            </h2>

            <p className="text-gray-500 mb-4 text-sm md:text-base">
              Descubrí nuestras disciplinas deportivas pensadas para todas las
              edades...
            </p>

            <p className="text-gray-500 mb-8 text-sm md:text-base">
              Sumate a los entrenamientos...
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navega("/deportes")}
              className="bg-gradient-to-r from-[#c80000] to-black text-white px-6 py-3 rounded-md font-medium"
            >
              Ver más deportes
            </motion.button>
          </motion.div>
        </div>
      </section>

      <div className="bg-gray-100 flex justify-center">
        <div className="w-48 md:w-100 h-[2px] bg-gray-300 rounded-full"></div>
      </div>

      <section className="flex flex-col lg:flex-row justify-center lg:justify-start bg-gray-100 py-16 md:py-20 gap-10 items-center overflow-hidden">
        {/* Barra lateral: se oculta en móviles para no romper el flujo, o puedes dejarla */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block bg-gradient-to-b from-[#c80000] to-black w-[95px] h-80"
        ></motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-black uppercase leading-none mb-4">
            POR QUE <span className="text-[#c80000] ">ELEGIRNOS?</span>
          </h2>

          <p className="text-gray-800 max-w-xl mt-4 text-sm md:text-base">
            En CEOS no solo jugamos ni competimos. Construimos una familia donde
            cada persona puede crecer, superarse y sentirse parte de algo más
            grande.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center py-5 gap-8">
            {/* Stat 1 */}
            <div className="flex items-center gap-2">
              <h3 className="text-5xl md:text-5xl text-[#c80000] font-extrabold">
                <Counter to={200} prefix="+" />
              </h3>
              <p className="text-black text-left leading-tight text-sm md:text-base">
                Jugadoras/es <br /> en deportes
              </p>
            </div>

            {/* Línea vertical (oculta en móvil si están apilados) */}
            <div className="hidden sm:block w-[1px] h-10 bg-gray-300"></div>

            {/* Stat 2 */}
            <div className="flex items-center gap-2">
              <h3 className="text-6xl md:text-5xl text-[#c80000] font-extrabold">
                <Counter to={400} prefix="+" />
              </h3>
              <p className="text-black text-sm md:text-base">Socios/as</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 px-4 lg:px-0"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={fotoHockey2}
            className="w-full max-w-[350px] h-[200px] md:max-w-[400px] lg:w-[460px] lg:h-[180px] object-cover lg:pl-15 pl-10 lg:shadow-none"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={fotoFutbol2}
            className="w-full max-w-[350px] h-[200px] md:max-w-[400px] lg:w-[460px] lg:h-[180px] object-cover lg:pr-15 pr-10 lg:shadow-none"
          />
        </motion.div>
      </section>

       <section className="bg-black py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 
        {/* COLUMNA IZQUIERDA: texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          {/* Etiqueta */}
          <div className="flex items-center gap-2 mb-5">
            <span className="block w-8 h-[3px] bg-[#ffc800]" />
            <span className="text-[#ffc800] text-xs font-bold uppercase tracking-widest">
              Dónde encontrarnos
            </span>
          </div>
 
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-white uppercase leading-[0.9] mb-6">
            Nuestro<br />
            <span className="text-[#ffc800]">predio</span>
          </h2>
 
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm">
            Estamos ubicados en Carilafquen Lanín, en el corazón de Junín de los Andes.
            Un espacio pensado para el deporte, la comunidad y el crecimiento de cada socio.
          </p>
 
          {/* Datos de contacto */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 w-8 h-8 rounded-full bg-[#ffc800]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ffc800]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold text-sm">Dirección</p>
                <p className="text-gray-400 text-sm">Carilafquen Lanín, Junín de los Andes</p>
              </div>
            </div>
 
            <div className="flex items-start gap-3">
              <span className="mt-1 w-8 h-8 rounded-full bg-[#ffc800]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ffc800]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold text-sm">Teléfono</p>
                <p className="text-gray-400 text-sm">+54 9 2972 40-5717</p>
              </div>
            </div>
          </div>
 
          {/* CTA */}
          <motion.a
            href="https://www.google.com/maps?q=-39.970552,-71.0791061"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 bg-[#ffc800] text-gray-900 text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-red-700 transition-colors"
          >
            Abrir en Google Maps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
 
        {/* COLUMNA DERECHA: mapa */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Acento decorativo */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#ffc800] rounded-sm -z-10 hidden lg:block" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#ffc800/20 rounded-sm -z-10 hidden lg:block" />
 
          <div className="overflow-hidden rounded-sm shadow-2xl border border-white/10">
            {/* Header del mapa */}
            <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-1.5">
       
              </div>
              <span className="text-gray-500 text-xs ml-2 font-mono">Club CEOS — Junín de los Andes</span>
            </div>
 
            <iframe
              src="https://www.google.com/maps?q=-39.970552,-71.0791061&z=15&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Mapa del predio Club CEOS"
            />
          </div>
        </motion.div>
 
      </div>
    </section>
    </main>
  );
}
