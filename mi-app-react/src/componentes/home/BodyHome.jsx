import React from "react";
import escudo from "../../assets/img/home/CEOS.png";
import Carrusel from "../carrusel/carrusel";
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

import Counter from "./counter";

export default function Home() {
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
          <Carrusel></Carrusel>
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

      <section className="flex flex-col lg:flex-row justify-center lg:justify-start bg-white py-5 gap-10 items-center overflow-hidden">
        {/* Barra lateral: se oculta en móviles para no romper el flujo, o puedes dejarla */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block bg-gradient-to-b from-[#c80000] to-black w-[60px] h-80"
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

          <div className="flex flex-col sm:flex-row items-center justify-center py-10 gap-8">
            {/* Stat 1 */}
            <div className="flex items-center gap-2">
              <h3 className="text-5xl md:text-5xl text-gray-900 font-extrabold">
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
              <h3 className="text-6xl md:text-5xl text-gray-900 font-extrabold">
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
            className="w-full max-w-[350px] h-[200px] md:max-w-[400px] lg:w-[460px] lg:h-[180px] object-cover lg:pl-15 pl-10   shadow-md lg:shadow-none"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={fotoFutbol2}
            className="w-full max-w-[350px] h-[200px] md:max-w-[400px] lg:w-[460px] lg:h-[180px] object-cover lg:pr-15 pr-10 shadow-md lg:shadow-none"
          />
        </motion.div>
      </section>
    </main>
  );
}
