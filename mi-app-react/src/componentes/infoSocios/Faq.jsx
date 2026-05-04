import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "¿Cuáles son los horarios de entrenamiento?",
    a: "Los horarios varían según la disciplina y categoría. Podes encontrarlos en la seccion de Deportes",
  },
  {
    q: "¿Hay categorías para todas las edades?",
    a: "Sí. Contamos con divisiones desde Sub 12 hasta Primera División en ambas disciplinas.",
  },
  {
    q: "¿Puedo probar antes de inscribirme?",
    a: "¡Por supuesto! Ofrecemos una semana de prueba gratuita para conocer el ambiente y las instalaciones.",
  },
  {
    q: "¿Cuanto cuesta la cuota mensual?",
    a: "Con valores definidos, a partir del mes de Abril la cuota es de $38.500 abonando del 1 al 10 de casa mes, y $44.000 fuera de esa fecha."
  },
  {
    q:"¿Como se establece el valor de la cuota?",
    a:"La cuota se calcula en base a los espacios utilizados y los profesionales que dictan y planifican las clases, por lo que las categorias mas grandes que tienen estimulos semanales deberan abonar el valor de cuota especificado primeramente. La misma tendra un incremento trimestral por IPC  y considerando lo mencionado anteriormente."
  },
   {
    q:"¿Que pasa si me doy de baja?",
    a:"Quienes se den de baja durante estos meses, deberan abonar una reinscripcion de $45.000, ademas de la cuota del mes, para ponerse al dia."
}
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

   const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="bg-zinc-100 w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
  >
    {/* Encabezado */}
    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      <div className="flex flex-col gap-1">
        <div className="w-6 sm:w-8 h-1 bg-[#c80000] rounded-full" />
        <div className="w-4 sm:w-5 h-1 bg-[#ffc800] rounded-full" />
      </div>

      <h2
        className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-gray-900"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        Preguntas Frecuentes
      </h2>
    </div>

    {/* Acordeón */}
    <div className="divide-y divide-slate-200 border-t border-slate-200">
      {faqs.map((faq, i) => {
        const isOpen = open === i;

        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 text-left group"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span
                className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#c80000] transition-colors"
                style={{ color: isOpen ? "#c80000" : undefined }}
              >
                {faq.q}
              </span>

              {/* Botón + / × */}
              <span
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-[1.5px] border-[#c80000] flex items-center justify-center shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "#c80000" : "#c80000cc",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <line x1="6" y1="1" x2="6" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            {/* Respuesta */}
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p
                className="pb-4 sm:pb-5 text-sm sm:text-base text-slate-600 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {faq.a}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  </motion.div>
)}