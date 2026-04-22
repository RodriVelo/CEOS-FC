import { useState } from "react";
import {
  MapPin,
  Calendar,
  Target,
  Users,
  Trophy,
  Clock,
  Shield,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Crown,
  UserCheck,
  FileText,
  FilePlus,
  Wallet,
  PiggyBank,
  User,
} from "lucide-react";

import { motion } from "framer-motion";
// Imports de imágenes
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const roles = [
    {
      titulo: "Presidente",
      nombre: "Marcelo Barroso",
      descripcion:
        "Máxima autoridad, toma decisiones estratégicas y representa al club.",
      icono: Crown,
    },
    {
      titulo: "Vicepresidente",
      nombre: "Micho",
      descripcion: "Apoya al presidente y lo reemplaza cuando no está.",
      icono: UserCheck,
    },
    {
      titulo: "Secretario",
      nombre: "Tito",
      descripcion:
        "Se encarga de la parte administrativa (actas, reuniones, documentación).",
      icono: FileText,
    },

    {
      titulo: "Tesorero",
      nombre: "Messi dea",
      descripcion: "Maneja las finanzas (ingresos, egresos, balances).",
      icono: Wallet,
    },
    {
      titulo: "Vocal",
      nombre: "Marcelo Barroso (El mellizo)",
      descripcion: "Miembros que participan en decisiones y votaciones.",
      icono: User,
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 font-['Inter']">
      <main className="w-full bg-gradient-to-b from-[#c80000] to-black text-white pt-25 md:pt-20">
        {/* CONTENEDOR GENERAL */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}

           
            transition={{ delay: 0.2 }} className="flex flex-col mb-12">
            <h2 className="font-['Lato'] text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight">
              ASOCIACIÓN CIVIL <br />
              <span className="text-white">DEPORTIVO CEOS</span>
            </h2>
          </motion.div>

          {/* Slider */}
          <div className="relative group mb-16 overflow-hidden rounded-3xl shadow-2xl bg-slate-100">
            <img
              src={images[index]}
              alt="Club CEOS"
              className="w-full h-[260px] sm:h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

            <button
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-[#c80000] text-white p-2 md:p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/20"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-[#c80000] text-white p-2 md:p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/20"
            >
              <ChevronRight size={22} />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    index === i
                      ? "w-8 bg-[#ffc800]"
                      : "w-2 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BLOQUE BLANCO */}
        <div className="bg-white text-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* SIDEBAR */}
              <aside className="lg:col-span-4">
                <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
           
            transition={{ delay: 0.2 }} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 sticky top-8 shadow-sm">
                  <h4 className="font-bold text-xl mb-8 flex items-center gap-2">
                    <Target className="text-[#c80000]" /> Datos del Club
                  </h4>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <Calendar size={20} />,
                        label: "Fundación",
                        val: "2019",
                      },
                      {
                        icon: <MapPin size={20} />,
                        label: "Ubicación",
                        val: "Lanín Carilafquen, Barrio Jardines",
                      },
                      {
                        icon: <Trophy size={20} />,
                        label: "Disciplinas",
                        val: "Fútbol y Hockey",
                      },
                      {
                        icon: <Users size={20} />,
                        label: "Categorías",
                        val: "Infantiles, Juveniles y Mayores",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="mt-1 p-2 rounded-lg bg-white text-[#c80000] shadow-sm group-hover:bg-[#c80000] group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">
                            {item.label}
                          </p>
                          <p className="text-slate-800 font-bold leading-tight">
                            {item.val}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </aside>

              {/* CONTENIDO */}
              <div className="lg:col-span-8 space-y-16">
                {/* Sobre */}
                <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
           
                transition={{ delay: 0.2 }} >

                
                <article>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-10 bg-[#c80000]"></div>

                    <h2 className="text-2xl md:text-3xl font-[Lato] font-extrabold text-gray-900">
                      SOBRE EL CLUB
                    </h2>
                  </div>

                  <div className="space-y-4 text-slate-600 leading-relaxed md:text-lg">
                    <p>
                      CEOS nació en{" "}
                      <span className="text-[#c80000] font-bold">2019 </span>
                      con una visión clara: convertirse en un referente del
                      crecimiento deportivo y humano en la región.
                    </p>

                    <p>
                      Lo que comenzó como un proyecto de Primera División de
                      fútbol, evolucionó hacia una estructura formativa sólida,
                      sumando Hockey en 2022 y expandiendo horizontes año tras
                      año.
                    </p>

                    <p>
                      Ese mismo año también se incorporó Patín Artístico como
                      una nueva disciplina, ampliando la propuesta deportiva del
                      club. Si bien actualmente ya no forma parte de las
                      actividades, marcó un paso importante en el crecimiento
                      institucional.
                    </p>

                    <p>
                      Durante la temporada de verano, CEOS ofrece su Colonia de
                      Vacaciones, un espacio pensado para el disfrute,
                      aprendizaje y desarrollo de los más chicos, coordinado por
                      profesores de educación física y docentes de nivel
                      inicial. La misma se desarrolla durante un mes, combinando
                      actividades recreativas, deportivas y educativas.
                    </p>

                    <p>
                      Hoy, CEOS continúa consolidándose como un espacio donde el
                      deporte es una herramienta de formación, promoviendo
                      valores como el compromiso, el respeto, el trabajo en
                      equipo y la superación personal en cada uno de sus
                      integrantes.
                    </p>

                    <p>
                      Más allá de lo deportivo, CEOS cumple un importante rol
                      social, brindando un espacio de contención, formación y
                      pertenencia para niños, jóvenes y familias, donde el
                      deporte se convierte en una herramienta para educar en
                      valores y acompañar el desarrollo personal.
                    </p>

                    <p>
                      Con una comunidad en constante crecimiento, CEOS proyecta
                      seguir ampliando su propuesta deportiva y formativa en los
                      próximos años.
                    </p>
                  </div>
                </article>
</motion.div>
                {/* Disciplinas */}
                <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
           
            transition={{ delay: 0.2 }} >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-10 bg-[#c80000]"></div>

                    <h2 className="text-2xl md:text-3xl font-[Lato] font-extrabold text-gray-900">
                      DISCIPLINAS ACTUALES
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Fútbol",
                        icon: <CheckCircle2 className="text-[#c80000]" />,
                        list: [
                          "9na División",
                          "8va División",
                          "5ta División",
                          "Primera División",
                        ],
                      },
                      {
                        title: "Hockey",
                        icon: <CheckCircle2 className="text-[#ffc800]" />,
                        list: ["Sub 12, 14, 16, 18", "Primera División"],
                      },
                    ].map((disc, i) => (
                      <div
                        key={i}
                        className="p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition"
                      >
                        <h4 className="text-xl md:text-2xl font-black mb-6 flex items-center justify-between">
                          {disc.title}
                          <span className="text-2xl">
                            {disc.title === "Fútbol" ? "⚽" : "🏑"}
                          </span>
                        </h4>

                        <ul className="space-y-3">
                          {disc.list.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-3 text-slate-600"
                            >
                              {disc.icon} {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full min-h-[600px] flex flex-col md:flex-row overflow-hidden">
          {/* Lado izquierdo: Información y Mapa */}
          <div className="flex-1 bg-[#ffc800] flex items-center justify-center py-16 px-6 md:px-12">
            <div className="max-w-xl w-full">
              {/* Etiqueta decorativa */}
              <span className="uppercase tracking-widest text-sm font-bold text-slate-900/60 mb-2 block">
                Ubicación
              </span>

              <h2 className="font-['Lato'] text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
                NUESTRO
                <br /> PREDIO
              </h2>

              <p className="text-lg text-slate-800/80 mb-8 max-w-md leading-relaxed">
                Contamos con instalaciones diseñadas para potenciar cada
                entrenamiento. ¡Vení a conocernos!
              </p>

              {/* Contenedor del Mapa con efecto de elevación */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-slate-900/10 rounded-2xl blur transition duration-300 group-hover:opacity-100"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white p-2">
                  <iframe
                    src="https://www.google.com/maps?q=-39.970552,-71.0791061&z=15&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    className="rounded-lg"
                    loading="lazy"
                    title="Mapa del predio"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho: Imagen Full-Bleed */}
          <div className="flex-1 min-h-[400px] md:min-h-full relative">
            <img
              src={fotoPredio}
              alt="Instalaciones del Predio"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay sutil para dar profundidad */}
            <div className="absolute inset-0 bg-slate-900/5 md:bg-transparent"></div>
          </div>
        </section>

        <section>
          <div className="bg-white mx-auto px-4 sm:px-10 lg:px-18 py-20">
            <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        
            transition={{ delay: 0.2 }}> 
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-10 bg-[#c80000]"></div>

              <h2 className="text-2xl md:text-3xl font-[Lato] font-extrabold text-gray-900">
                COMISION DIRECTIVA
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row bg-[#f5f5f0] rounded-xl overflow-hidden">
              {roles.map((rol, index) => {
                const Icon = rol.icono;

                return (
                  <div
                    key={index}
                    className={`group flex-1 p-8 transition-all duration-300 cursor-pointer
        hover:bg-[#ffc800] hover:flex-[1.2]`}
                  >
                    {/* Separador */}
                    {index !== 0 && (
                      <div className="hidden lg:block absolute h-20 w-px bg-gray-300 -ml-8"></div>
                    )}

                    {/* Icono */}
                    <div className="mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
                        <Icon className="text-[#c80000]" size={20} />
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-black text-lg font-bold mb-1 uppercase tracking-wide">
  {rol.titulo}
</h3>

<p className="text-sm text-[#c80000] font-medium mb-2">
  {rol.nombre}
</p>

<p className="text-sm text-gray-600 group-hover:text-black transition-colors">
  {rol.descripcion}
</p>
                  </div>
                );
              })}
            </div>
            </motion.div>
          </div>
        </section>
      </main>
    </section>
  );
}
