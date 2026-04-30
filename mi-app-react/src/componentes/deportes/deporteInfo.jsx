import { motion } from "framer-motion";
import {
  Trophy,
  ChevronDown,
  Calendar,
  MapPin,
  User,
  Clock,
  Users,
} from "lucide-react";
import GaleriaFotos from "./carrusel";

export default function DeporteInfo({
  titulo,
  descripcion,
  imagen,
  categorias,
  ubicacion,
  data,
  competencias,
  imagenesGaleria,
  reverse = false,
  openIndex,
  toggle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gray-50 pt-10"
    >
      {/* HEADER */}
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12`}
      >
        {/* IMAGEN */}
        <div className="relative flex justify-center items-center">
          <div className="w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            <motion.img
              src={imagen}
              className="w-full h-full object-cover rounded-full"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {titulo}
          </h2>

          <p className="text-gray-600 mb-8">{descripcion}</p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 p-3 rounded-full text-white">
                <Trophy size={18} />
              </div>
              <div className="text-left">
                <p className="font-semibold ">Categorías</p>
                <p className="text-gray-500 ">{categorias}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-500 p-3 rounded-full text-white">
                <MapPin size={18} />
              </div>
              <div className="text-left">
                <p className="font-semibold">Ubicación</p>
                <p className="text-gray-500">{ubicacion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LINEA */}
      <div className="flex justify-center">
        <div className="w-48 md:w-100 h-[2px] bg-gray-300 my-10 rounded-full"></div>
      </div>

      {/* CONTENIDO */}

      <div className="w-full bg-gray-50/50 p-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-2 ">
          {/* GALERIA - Se recomienda un aspect-ratio fijo para mayor orden */}
           <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} className="w-full md:w-[300px] flex-shrink-0">
            <div className="sticky top-4 h-[400px]  md:h-[600px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <GaleriaFotos imagenes={imagenesGaleria} />
            </div>
          </motion.div>

          {/* INFO */}
           <motion.div
          initial={{ opacity: 0, x: 60}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} className="flex-1 space-y-5">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-bg-gray-50/50 border-b border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300"
              >
                {/* HEADER DE LA CATEGORIA */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                      {item.cat}
                    </h2>
                    <p className=" text-gray-400 uppercase tracking-wider">
                      {openIndex === i ? "Cerrar detalles" : "Ver información"}
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-8 h-8 text-[#c80000] transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* CONTENIDO EXPANDIBLE */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 border-t border-gray-50">
                      {/* GRID DE DETALLES */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-6 h-6 text-[#c80000]" />

                          <p className="font-semibold text-gray-900">Edades:</p>
                          <p>{item.edad}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-6 h-6 text-[#c80000]" />
                          <p className="font-semibold text-gray-900">
                            Profesor:
                          </p>
                          <p>{item.profe}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-6 h-6 text-[#c80000]" />

                          <p className="font-semibold text-gray-900">Días:</p>
                          <p>{item.dias}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-6 h-6 text-[#c80000]" />
                          <p className="font-semibold text-gray-900">
                            Horario:
                          </p>{" "}
                          <p>{item.horario}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 md:col-span-2">
                          <MapPin className="w-6 h-6 text-[#c80000]" />

                          <p className="font-semibold text-gray-900">
                            Ubicación:
                          </p>
                          <p>{item.lugar}</p>
                        </div>
                      </div>

                      {/* IMAGENES CON MÁSCARA */}
                      <div className="flex gap-4">
                        {item.imgs.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            className="w-full h-50 object-cover rounded-lg shadow-sm"
                            alt={`Detalle ${idx}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-gray-50/50 py-3 flex flex-col items-center justify-center md:flex-row md:items-center gap-6">
        {/* Título izquierda */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight text-center md:text-right">
          COMPETENCIAS <br /> ACTUALES
        </h1>

        {/* Divisor vertical */}
        <span className="hidden md:block text-[#c80000] text-7xl leading-none select-none">
          |
        </span>

        {/* Lista de competencias */}
        <div className="flex flex-col items-center md:items-start gap-1">
          {competencias.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c80000] flex-shrink-0" />
              <span className="text-gray-800 text-xl font-medium whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
          </motion.div>
        </div>
      </div>

      
      
    </motion.div>
  );
}
