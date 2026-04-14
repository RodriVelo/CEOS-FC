import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CreditCard, Gift } from "lucide-react";
import Formulario from "../../componentes/formulario/formulario";

export default function InformacionSocios() {
  const [activo, setActivo] = useState(null);
  const infoRef = useRef(null);

  const handleClick = (tipo) => {
    setActivo(tipo);

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
    <section className="w-full bg-white">
      <main className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-black text-white py-25 md:pt-24">

        <div className="max-w-6xl mx-auto px-6 pb-15">

          {/* HEADER */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-white font-[Lato]">
              Socios del Club
            </h2>
            <p className="text-white mt-3 font-[Inter]">
              Sumate al club y disfrutá de beneficios exclusivos
            </p>
          </motion.div>

          {/* CARDS */}
          <motion.div 
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >

            {/* BENEFICIOS */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClick("beneficios")}
              className="cursor-pointer bg-white border rounded-2xl p-7 shadow-sm text-black"
            >
              <Gift className="text-[#c80000] mb-3" />
              <h3 className="text-xl font-bold mb-4 text-[#c80000]">
                Beneficios
              </h3>
              <p className="text-gray-600">
                Conocé todos los beneficios exclusivos para socios del club.
              </p>
            </motion.div>

            {/* ASOCIARTE */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClick("asociarte")}
              className="cursor-pointer bg-white border rounded-2xl p-7 shadow-sm text-black"
            >
              <Users className="text-[#c80000] mb-3" />
              <h3 className="text-xl font-bold mb-4 text-[#c80000]">
                ¿Cómo asociarte?
              </h3>
              <p className="text-gray-600">
                Pasos simples para formar parte del club.
              </p>
            </motion.div>

            {/* CUOTAS */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClick("cuotas")}
              className="cursor-pointer bg-white border rounded-2xl p-7 shadow-sm text-black"
            >
              <CreditCard className="text-[#c80000] mb-3" />
              <h3 className="text-xl font-bold mb-4 text-[#c80000]">
                Pago de Cuota
              </h3>
              <p className="text-gray-600">
                Formas disponibles para abonar tu cuota mensual.
              </p>
            </motion.div>

          </motion.div>

          {/* INFO DINAMICA */}
          <AnimatePresence mode="wait">
            {activo && (
              <motion.div
                key={activo}
                ref={infoRef}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.5 }}
                className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12 text-black"
              >

                {activo === "beneficios" && (
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-[#c80000]">
                      Beneficios para Socios
                    </h3>

                    <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                      <li>• Acceso a todas las instalaciones</li>
                      <li>• Prioridad en eventos deportivos</li>
                      <li>• Descuentos en actividades</li>
                      <li>• Participación en torneos</li>
                      <li>• Noticias exclusivas del club</li>
                      <li>• Sorteos mensuales</li>
                    </ul>
                  </div>
                )}

                {activo === "asociarte" && (
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-[#c80000]">
                      ¿Cómo asociarte?
                    </h3>

                    <ul className="space-y-3 text-gray-700">
                      <li>• Completar formulario</li>
                      <li>• Presentar DNI</li>
                      <li>• Elegir categoría</li>
                      <li>• Abonar primera cuota</li>
                    </ul>
                  </div>
                )}

                {activo === "cuotas" && (
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-[#c80000]">
                      Pago de Cuota
                    </h3>

                    <ul className="space-y-3 text-gray-700">
                      <li>• Transferencia bancaria</li>
                      <li>• Mercado Pago</li>
                      <li>• Efectivo en secretaría</li>
                      <li>• Débito automático</li>
                    </ul>
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* WHATSAPP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-gray-50 border p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              ¿Tenés alguna consulta?
            </h3>
            <p className="text-gray-600 text-sm">
              Escribinos por WhatsApp por dudas o más info.
            </p>
          </div>

          <a
            href="https://wa.me/5492972405717"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg transition"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Formulario />
        </motion.div>

      </main>
    </section>
  );
}