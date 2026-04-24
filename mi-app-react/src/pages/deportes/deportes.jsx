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
    }, 100);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const dataFutbol = [
    {
      cat: "9na Division",
      edad: "2018 / 2019 / 2020",
      profe: "Raul Paiz, Leo Guenchullan",
      imgs: [foto9na1, foto9na2],
    },
    {
      cat: "8va Division",
      edad: "2016 / 2017",
      profe: "Raul Paiz, Leo Guenchullan",
      imgs: [foto8va1, foto8va2],
    },
    {
      cat: "5ta Division",
      edad: "2010",
      profe: "Leo Kreitman",
      imgs: [foto5ta1, foto5ta2],
    },
    {
      cat: "PRIMERA DIVISION",
      edad: "Mayores",
      profe: "Lihuen Sibon",
      imgs: [foto1ra1, foto1ra2],
    },
  ];

  const dataHockey = [
    {
      cat: "SUB 13",
      edad: "2018 / 2019 / 2020",
      profe: "Fernando Vallejos, Lucila Solorza",
      imgs: [foto141, foto142],
    },
    {
      cat: "SUB 16",
      edad: "2016 / 2017",
      profe: "Fernando Vallejos, Lucila Solorza",
      imgs: [foto161, foto162],
    },
    {
      cat: "SUB 18",
      edad: "2010",
      profe: "Fernando Aminahuel, Juan Pipe Rocha",
      imgs: [foto181, foto182],
    },
    {
      cat: "PRIMERA DIVISION",
      edad: "Mayores",
      profe: "Fernando Aminahuel, Juan Pipe Rocha",
      imgs: [foto1raH1, foto1raH2],
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
      {/* INFO HOCKEY*/}
      {activo === "hockey" && (
        <motion.div
          ref={infoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gray-50 py-16"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            {/* IMAGEN */}
            <div className="relative flex justify-center items-center">
              <div className="w-72 h-72 md:w-96 md:h-96  flex items-center justify-center">
                <motion.img
                  src={hockey}
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>

            {/* TEXTO */}
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                HOCKEY DEL CLUB
              </h2>

              <p className="text-gray-600 mb-8">
                Formación deportiva desde edades tempranas hasta primera
                división, fomentando el trabajo en equipo, la disciplina y la
                competencia.
              </p>

              {/* FEATURES */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center md:justify-start">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-3 rounded-full text-white">
                    <Trophy size={18} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm">Categorías</p>
                    <p className="text-gray-500 text-sm">
                      SUB 12 · SUB 14 · SUB 18 · Primera
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-3 rounded-full text-white">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm">Ubicación</p>
                    <p className="text-gray-500 text-sm">
                      {" "}
                      Cancha Municipal - Junín de los Andes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="w-100 h-[2px] bg-gray-300 rounded-full"></div>
            </div>

            <div className="w-full bg-gray-50 py-10 px-6 md:px-20 font-[Inter]">
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                {/* IZQUIERDA */}
                <div className="md:col-span-2 space-y-12">
                  <div className="space-y-4">
                    {dataHockey.map((item, i) => (
                      <div key={i} className="w-full max-w-4xl mx-auto">
                        {/* Card */}
                        <div
                          onClick={() => toggle(i)}
                          className="cursor-pointer bg-white border border-gray-200 rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-all"
                        >
                          <div>
                            <h2 className="text-xl font-bold font-['Lato'] text-gray-900">
                              {item.cat}
                            </h2>
                            <p className="text-sm text-gray-500 font-['Inter']">
                              Click para ver más información
                            </p>
                          </div>

                          <span
                            className={`transition-transform ${
                              openIndex === i ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </div>

                        {/* Contenido */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            openIndex === i ? "max-h-[500px] mt-4" : "max-h-0"
                          }`}
                        >
                          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <p className="text-gray-600 mb-2">
                              <span className="font-semibold">Edades:</span>{" "}
                              {item.edad}
                            </p>

                            <p className="text-gray-600 mb-4">
                              <span className="font-semibold">Profesores:</span>{" "}
                              {item.profe}
                            </p>

                            <div className="flex gap-4">
                              {item.imgs.map((img, idx) => (
                                <img
                                  key={idx}
                                  src={img}
                                  className="w-1/2 h-40 object-cover rounded-lg"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DERECHA */}
                <div className="bg-white rounded-xl shadow-md p-8 space-y-6 border border-gray-200 h-fit">
                  <h2 className="text-2xl font-[Lato] font-extrabold text-gray-900">
                    Días de Entrenamiento
                  </h2>

                  <ul className="text-gray-600 text-sm space-y-3">
                    <li className="flex justify-between border-b pb-2">
                      <span>Inferiores</span>
                      <span className="font-medium text-gray-800">
                        Lun - Mié
                      </span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span>Juveniles</span>
                      <span className="font-medium text-gray-800">
                        Mar - Jue
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Primera</span>
                      <span className="font-medium text-gray-800">Vie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* FUTBOL */}
      {activo === "futbol" && (
        <motion.div
          ref={infoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gray-50"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12 py-10">
            {/* IMAGEN */}
            <div className="relative flex justify-center items-center">
              <div className="w-72 h-72 md:w-96 md:h-96  flex items-center justify-center">
                <motion.img
                  src={futbol}
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>

            {/* TEXTO */}
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                FÚTBOL DEL CLUB
              </h2>

              <p className="text-gray-600 mb-8">
                Formación y competencia para todas las edades, promoviendo el
                desarrollo deportivo, el compromiso y el trabajo en equipo.
              </p>

              {/* FEATURES */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center md:justify-start">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-3 rounded-full text-white">
                    <Trophy size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-900 font-semibold text-sm">
                      Categorías
                    </p>
                    <p className="text-gray-500 text-sm">
                      9na · 8va · 5ta · Primera
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-3 rounded-full text-white">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-900 font-semibold text-sm">
                      Ubicación
                    </p>
                    <p className="text-gray-500 text-sm">
                      Predio Ceos - Junín de los Andes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="w-100 h-[2px] bg-gray-300 rounded-full"></div>
            </div>

            <div className="w-full bg-gray-50 py-10 px-6 md:px-20 font-[Inter]">
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                {/* IZQUIERDA */}
                <div className="md:col-span-2 space-y-12">
                  <div className="space-y-4">
                    {dataFutbol.map((item, i) => (
                      <div key={i} className="w-full max-w-4xl mx-auto">
                        {/* Card */}
                        <div
                          onClick={() => toggle(i)}
                          className="cursor-pointer bg-white border border-gray-200 rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-all"
                        >
                          <div>
                            <h2 className="text-xl font-bold font-['Lato'] text-gray-900">
                              {item.cat}
                            </h2>
                            <p className="text-sm text-gray-500 font-['Inter']">
                              Click para ver más información
                            </p>
                          </div>

                          <span
                            className={`transition-transform ${
                              openIndex === i ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </div>

                        {/* Contenido */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            openIndex === i ? "max-h-[500px] mt-4" : "max-h-0"
                          }`}
                        >
                          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <p className="text-gray-600 mb-2">
                              <span className="font-semibold">Edades:</span>{" "}
                              {item.edad}
                            </p>

                            <p className="text-gray-600 mb-4">
                              <span className="font-semibold">Profesores:</span>{" "}
                              {item.profe}
                            </p>

                            <div className="flex gap-4">
                              {item.imgs.map((img, idx) => (
                                <img
                                  key={idx}
                                  src={img}
                                  className="w-1/2 h-40 object-cover rounded-lg"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DERECHA */}
                <div className="bg-white rounded-xl shadow-md p-8 space-y-6 border border-gray-200 h-fit">
                  <h2 className="text-2xl font-[Lato] font-extrabold text-gray-900">
                    Días de Entrenamiento
                  </h2>

                  <ul className="text-gray-600 text-sm space-y-3">
                    <li className="flex justify-between border-b pb-2">
                      <span>Inferiores</span>
                      <span className="font-medium text-gray-800">
                        Lun - Mié
                      </span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span>Juveniles</span>
                      <span className="font-medium text-gray-800">
                        Mar - Jue
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Primera</span>
                      <span className="font-medium text-gray-800">Vie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
