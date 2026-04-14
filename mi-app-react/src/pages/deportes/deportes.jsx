import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import futbol from "../../assets/img/deportes/futbol.jpg";
import hockey from "../../assets/img/deportes/hockey.jpg";
import { Users, MapPin, Trophy, Goal } from "lucide-react";

export default function Deportes() {
  const [activo, setActivo] = useState(null);
  const infoRef = useRef(null);

  const handleClick = (deporte) => {
    setActivo(deporte);

    setTimeout(() => {
      infoRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="deportes" className="bg-white">
      <main className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-black text-white py-25 md:pt-24">

        {/* TITULO */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros Deportes
          </h2>
          <p>Entrená, competí y formá parte del equipo</p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto"
        >

          {/* HOCKEY */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
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
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick("futbol")}
            className="bg-white text-black rounded-2xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer"
          >
            <Trophy className="w-12 h-12 mb-3 text-[#ffc800]" />
            <h2 className="text-xl font-semibold mb-2">Fútbol</h2>
            <p className="text-gray-500">
              Información sobre fútbol, ligas y competencias.
            </p>
          </motion.div>

        </motion.div>

        {/* INFO CON ANIMACION */}
        <AnimatePresence mode="wait">
          {activo && (
            <motion.div
              key={activo}
              ref={infoRef}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.6 }}
              className="bg-white mt-16"
            >

              {/* HOCKEY */}
              {activo === "hockey" && (
                <div className="w-full flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img src={hockey} className="w-full h-full object-cover" />
                  </div>

                  <div className="w-full md:w-1/2 px-6 md:px-16 py-12 text-black">
                    <h2 className="text-3xl font-bold mb-4 text-[#ffc800]">
                      HOCKEY SOBRE CÉSPED
                    </h2>

                    <p className="mb-8">
                      Desarrollo deportivo desde categorías formativas hasta primera división.
                    </p>

                    <div className="space-y-5">
                      <div className="flex gap-4">
                        <Trophy className="text-red-600" />
                        <div>
                          <p className="font-semibold">Categorías</p>
                          <p>SUB 12 · SUB 14 · SUB 18 · Primera</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Users className="text-red-600" />
                        <div>
                          <p className="font-semibold">Cuerpo técnico</p>
                          <p>Fernando Vallejos · Lucila Solorza</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <MapPin className="text-red-600" />
                        <div>
                          <p className="font-semibold">Lugar</p>
                          <p>Cancha Municipal - Junín de los Andes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FUTBOL */}
              {activo === "futbol" && (
                <div className="w-full flex flex-col md:flex-row-reverse">
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img src={futbol} className="w-full h-full object-cover" />
                  </div>

                  <div className="w-full md:w-1/2 px-6 md:px-16 py-12 text-black">
                    <h2 className="text-3xl font-bold mb-4 text-[#c80000]">
                      FÚTBOL
                    </h2>

                    <p className="mb-8">
                      Entrenamientos formativos y competitivos para todas las edades.
                    </p>

                    <div className="space-y-5">
                      <div className="flex gap-4">
                        <Trophy className="text-red-600" />
                        <div>
                          <p className="font-semibold">Categorías</p>
                          <p>9na · 8va · 5ta · Primera</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Users className="text-red-600" />
                        <div>
                          <p className="font-semibold">Cuerpo técnico</p>
                          <p>Leonel Guenchullan · Raul Paiz</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <MapPin className="text-red-600" />
                        <div>
                          <p className="font-semibold">Lugar</p>
                          <p>Estadio Municipal - Junín de los Andes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </section>
  );
}