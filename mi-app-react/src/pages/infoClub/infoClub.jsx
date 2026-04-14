import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Calendar, Target, Users, Trophy, 
  ChevronLeft, ChevronRight, CheckCircle2 
} from "lucide-react";

import fotoFutbol1 from "../../assets/img/infoClub/futbol1.jpg";
import fotoHockey1 from "../../assets/img/infoClub/hockey1.jpg";
import fotoPredio from "../../assets/img/infoClub/predio.jpg";

const images = [fotoFutbol1, fotoHockey1];

export default function InfoClub() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-white text-slate-900 font-['Inter']">
      
      <main className="w-full bg-gradient-to-b from-[#c80000] to-black text-white py-25 md:py-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="flex flex-col mb-12"
        >
          <h2 className="font-['Lato'] text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight">
            ASOCIACIÓN CIVIL <br />
            <span className="text-white">DEPORTIVO CEOS</span>
          </h2>
        </motion.div>

        {/* SLIDER */}
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group mb-16 overflow-hidden rounded-3xl shadow-2xl bg-slate-100"
        >
          <img
            src={images[index]}
            alt="Club CEOS"
            className="w-full h-[260px] sm:h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
          
          <button onClick={prev} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-[#c80000] text-white p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition">
            <ChevronLeft size={22} />
          </button>

          <button onClick={next} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-[#c80000] text-white p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition">
            <ChevronRight size={22} />
          </button>
        </motion.div>
        </div>

        {/* BLOQUE BLANCO */}
        <div className="bg-white text-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* SIDEBAR */}
              <motion.aside 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-4"
              >
                <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border sticky top-8 shadow-sm">
                  <h4 className="font-bold text-xl mb-8 flex items-center gap-2">
                    <Target className="text-[#c80000]" /> Datos del Club
                  </h4>

                  <div className="space-y-6">
                    {[
                      { icon: <Calendar size={20}/>, label: "Fundación", val: "2019" },
                      { icon: <MapPin size={20}/>, label: "Ubicación", val: "Lanín Carilafquen, Barrio Jardines" },
                      { icon: <Trophy size={20}/>, label: "Disciplinas", val: "Fútbol y Hockey" },
                      { icon: <Users size={20}/>, label: "Categorías", val: "Infantiles, Juveniles y Mayores" },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 items-start"
                      >
                        <div className="mt-1 p-2 rounded-lg bg-white text-[#c80000] shadow-sm">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">
                            {item.label}
                          </p>
                          <p className="font-bold">{item.val}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.aside>

              {/* CONTENIDO */}
              <div className="lg:col-span-8 space-y-16">

                {/* SOBRE */}
                <motion.article
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h3 className="text-3xl font-bold text-[#c80000] mb-6">
                    Sobre el Club
                  </h3>
                  <p className="text-slate-600">
                    CEOS nació en 2019 con una visión clara...
                  </p>
                </motion.article>

                {/* DISCIPLINAS */}
                <motion.section
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.2 }}
                >
                  <h3 className="text-3xl font-bold mb-8">
                    Disciplinas Actuales
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { title: "Fútbol", list: ["9na", "8va", "5ta", "Primera"] },
                      { title: "Hockey", list: ["Sub 12,14,16,18", "Primera"] }
                    ].map((disc, i) => (
                      <motion.div 
                        key={i}
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-3xl border bg-white shadow-sm"
                      >
                        <h4 className="text-xl font-black mb-4">
                          {disc.title}
                        </h4>

                        <ul className="space-y-2">
                          {disc.list.map((item, j) => (
                            <li key={j} className="flex gap-2 items-center text-slate-600">
                              <CheckCircle2 size={16}/> {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

              </div>
            </div>
          </div>
        </div>

        {/* MAPA + IMAGEN */}
        <section className="w-full min-h-[600px] flex flex-col md:flex-row overflow-hidden">
          
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#ffc800] flex items-center justify-center py-16 px-6"
          >
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4">
                Nuestro Predio
              </h2>

              <div className="overflow-hidden rounded-xl shadow-2xl bg-white p-2">
                <iframe
                  src="https://www.google.com/maps?q=-39.970552,-71.0791061&z=15&output=embed"
                  width="100%"
                  height="300"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <img
              src={fotoPredio}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

        </section>

      </main>
    </section>
  );
}