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
  Medal,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";
// Imports de imágenes
import fotoFutbol1 from "../../assets/img/infoClub/futbol1.jpg";
import fotoHockey1 from "../../assets/img/infoClub/hockey1.jpg";
import fotoPredio from "../../assets/img/infoClub/predio.jpg";
import fotoEscudo from "../../assets/img/home/CEOS.png";
import fotoLogo from "../../assets/img/LOGO.png";

const images = [fotoFutbol1, fotoHockey1];

export default function InfoClub() {
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
    <section className="w-full bg-white text-slate-900 font-['Inter'] overflow-x-hidden">
      {/* HEADER PRINCIPAL */}
      <main className="w-full bg-gradient-to-b from-[#c80000] to-black text-white pt-24 md:pt-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0 pb-10 text-center md:text-left">
              {/* Logos */}
              <div className="flex items-center gap-3 md:mr-10">
                <img
                  src={fotoEscudo}
                  alt="Escudo Ceos"
                  className="h-20 sm:h-24 md:h-32 lg:h-36 w-auto object-contain"
                />
                <img
                  src={fotoLogo}
                  alt="Logo Ceos"
                  className="h-18 sm:h-22 md:h-30 lg:h-34 w-auto object-contain"
                />
              </div>

              {/* Línea blanca (se oculta en móviles pequeños para limpiar diseño) */}
              <div className="hidden md:block w-[4px] h-24 md:h-32 lg:h-40 bg-white mx-8"></div>

              {/* Texto Título */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl"
              >
                <h2 className="text-white font-['Lato'] font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter">
                  ASOCIACION CIVIL <br className="hidden md:block" /> DEPORTIVA
                  Y SOCIAL CEOS
                </h2>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BLOQUE BLANCO (CONTENIDO) */}
        <div className="bg-white text-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* SIDEBAR */}
              <aside className="lg:col-span-4 order-1 lg:order-1">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 lg:sticky lg:top-24 shadow-sm"
                >
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
                        <div className="mt-1 p-2 rounded-lg bg-white text-[#c80000] shadow-sm group-hover:bg-[#c80000] group-hover:text-white transition-colors flex-shrink-0">
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

              {/* CONTENIDO PRINCIPAL */}
              <div className="lg:col-span-8 space-y-16 order-2 lg:order-2">
                {/* Sobre el Club */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <article>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-10 bg-[#c80000]"></div>
                      <h2 className="text-2xl md:text-3xl font-[Lato] font-extrabold text-gray-900 uppercase">
                        SOBRE EL CLUB
                      </h2>
                    </div>

                    <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
                      <p>
                        CEOS nació en{" "}
                        <span className="text-[#c80000] font-bold">2019 </span>
                        con una visión clara: convertirse en un referente del
                        crecimiento deportivo y humano en la región.
                      </p>

                      <p>
                        Lo que comenzó como un proyecto de Primera División de
                        fútbol, evolucionó hacia una estructura formativa
                        sólida, sumando Hockey en 2022 y expandiendo horizontes
                        año tras año.
                      </p>

                      <p>
                        Ese mismo año también se incorporó Patín Artístico como
                        una nueva disciplina, ampliando la propuesta deportiva
                        del club. Si bien actualmente ya no forma parte de las
                        actividades, marcó un paso importante en el crecimiento
                        institucional.
                      </p>

                      <p>
                        Durante la temporada de verano, CEOS ofrece su Colonia
                        de Vacaciones, un espacio pensado para el disfrute,
                        aprendizaje y desarrollo de los más chicos, coordinado
                        por profesores de educación física y docentes de nivel
                        inicial. La misma se desarrolla durante un mes,
                        combinando actividades recreativas, deportivas y
                        educativas.
                      </p>

                      <p>
                        Hoy, CEOS continúa consolidándose como un espacio donde
                        el deporte es una herramienta de formación, promoviendo
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
                        Con una comunidad en constante crecimiento, CEOS
                        proyecta seguir ampliando su propuesta deportiva y
                        formativa en los próximos años.
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
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-10 bg-[#c80000]"></div>
                    <h2 className="text-2xl md:text-3xl font-[Lato] font-extrabold text-gray-900 uppercase">
                      DISCIPLINAS ACTUALES
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        emoji: "⚽",
                      },
                      {
                        title: "Hockey",
                        icon: <CheckCircle2 className="text-[#ffc800]" />,
                        list: ["Sub 12, 14, 16, 18", "Primera División"],
                        emoji: "🏑",
                      },
                    ].map((disc, i) => (
                      <div
                        key={i}
                        className="p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-shadow"
                      >
                        <h4 className="text-xl md:text-2xl font-black mb-6 flex items-center justify-between">
                          {disc.title}
                          <span className="text-2xl">{disc.emoji}</span>
                        </h4>

                        <ul className="space-y-3">
                          {disc.list.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-3 text-slate-600 text-sm md:text-base"
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

        {/* SECCIÓN PREDIO */}
        <section className="w-full flex flex-col lg:flex-row overflow-hidden bg-[#ffc800]">
          {/* Lado izquierdo: Info y Mapa */}
          <div className="flex-1 flex items-center justify-center py-16 px-6 md:px-12">
            <div className="max-w-xl w-full">
              <span className="uppercase tracking-widest text-sm font-bold text-slate-900/60 mb-2 block">
                Ubicación
              </span>
              <h2 className="font-['Lato'] text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight mb-4">
                NUESTRO <br /> PREDIO
              </h2>
              <p className="text-lg text-slate-800/80 mb-8 max-w-md leading-relaxed">
                Contamos con instalaciones diseñadas para potenciar cada
                entrenamiento. ¡Vení a conocernos!
              </p>

              {/* Mapa */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-slate-900/10 rounded-2xl blur transition duration-300"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white p-2">
                  <iframe
                    src="https://www.google.com/maps?q=-39.970552,-71.0791061&z=15&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    className="rounded-lg w-full"
                    loading="lazy"
                    title="Mapa del predio"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho: Imagen */}
          <div className="flex-1 min-h-[350px] md:min-h-[500px] lg:min-h-full relative">
            <img
              src={fotoPredio}
              alt="Instalaciones del Predio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/* COMISION DIRECTIVA */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-10 bg-[#c80000]"></div>
                <h2 className="text-2xl md:text-3xl font-[Lato] font-extrabold text-gray-900 uppercase">
                  COMISION DIRECTIVA
                </h2>
              </div>

              {/* Grid adaptable para la Comisión */}
              <div className="flex flex-col lg:flex-row bg-[#f5f5f0] rounded-2xl overflow-hidden shadow-inner">
                {roles.map((rol, index) => {
                  const Icon = rol.icono;
                  return (
                    <div
                      key={index}
                      className={`group relative flex-1 p-8 transition-all duration-500 cursor-pointer border-b lg:border-b-0 lg:border-r border-gray-200 last:border-0
                      lg:hover:bg-[#ffc800] lg:hover:flex-[1.4]`}
                    >
                      {/* Icono */}
                      <div className="mb-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110">
                          <Icon className="text-[#c80000]" size={22} />
                        </div>
                      </div>

                      {/* Título y Nombre */}
                      <h3 className="text-black text-lg font-bold mb-1 uppercase tracking-tight">
                        {rol.titulo}
                      </h3>
                      <p className="text-sm text-[#c80000] font-bold mb-3">
                        {rol.nombre}
                      </p>
                      <p className="text-sm text-gray-600 leading-snug group-hover:text-black transition-colors">
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
