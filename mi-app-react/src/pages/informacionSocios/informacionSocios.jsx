import { useState, useRef } from "react";
import { Users, CreditCard, Gift, Form } from "lucide-react";
import Formulario from "../../componentes/formulario/formulario";
import FormularioInscripcion from "../../componentes/formulario/formularioInscripcion";
import { motion } from "framer-motion";

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

  return (
    <section className="w-full bg-white">
      <main className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-black text-white pt-25 md:pt-24  ">
        <div className="max-w-6xl mx-auto px-6 pb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-5xl font-extrabold text-white font-[Lato]">
              CONSULTAS
            </h2>
            <p className="text-white mt-3 font-[Inter]">
              Sumate al club y disfrutá de beneficios exclusivos
            </p>
          </motion.div>

          {/* CARDS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Beneficios */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleClick("beneficios")}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Gift className="text-[#c80000] mb-3" />
              <h3 className="text-xl font-bold mb-4 text-[#c80000] font-[Lato]">
                Beneficios
              </h3>

              <p className="text-gray-600">
                Conocé todos los beneficios exclusivos para socios del club.
              </p>
            </motion.div>

            {/* Asociarte */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleClick("asociarte")}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Users className="text-[#c80000] mb-3" />
              <h3 className="text-xl font-bold mb-4 text-[#c80000] font-[Lato]">
                ¿Cómo asociarte?
              </h3>

              <p className="text-gray-600">
                Pasos simples para formar parte del club.
              </p>
            </motion.div>

            {/* Cuotas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleClick("cuotas")}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <CreditCard className="text-[#c80000] mb-3" />
              <h3 className="text-xl font-bold mb-4 text-[#c80000] font-[Lato]">
                Pago de Cuota
              </h3>

              <p className="text-gray-600">
                Formas disponibles para abonar tu cuota mensual.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="bg-white w-full ">
          {/* INFO DINAMICA */}
          {activo && (
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-gray-50 rounded-3xl px-10 py-10 md:px-25 md:py-10"
            >
              {/* BENEFICIOS */}
              {activo === "beneficios" && (
                <div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight mb-">
                    BENEFICIOS PARA SOCIOS
                  </h3>

                  <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">
                        Acceso completo a las instalaciones
                      </span>
                      <span className="text-sm text-gray-600">
                        Disfrutá libremente del predio del club, con acceso al
                        gimnasio y a la cancha en todo momento.
                      </span>
                    </li>

                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">
                        Prioridad en eventos deportivos
                      </span>
                      <span className="text-sm text-gray-600">
                        Contarás con prioridad para inscribirte y participar en
                        torneos, partidos y eventos deportivos del club,
                        asegurando tu lugar antes que el resto.
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">
                        Descuentos en actividades.
                      </span>
                      <span className="text-sm text-gray-600">
                        Disfrutá de beneficios y descuentos especiales en cada
                        actividad del club, para que puedas participar más y
                        pagar menos.
                      </span>
                    </li>

                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">
                        Participacion de torneos.
                      </span>
                      <span className="text-sm text-gray-600">
                        Formá parte de competencias oficiales representando al
                        club: en fútbol participamos del Torneo local y Lifune
                        Sur, mientras que en Hockey competimos en la Liga
                        Cordillerana y el Regional Neuquino.
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {/* ASOCIARTE */}
              {activo === "asociarte" && (
               <div className="w-full space-y-8">
  <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
    ¿CÓMO ASOCIARTE?
  </h3>

  <p className="text-gray-700">
    Para asociarte al club, podés elegir entre estas dos opciones:
  </p>

  <div className="grid md:grid-cols-2 gap-10">
    
    {/* PRESENCIAL */}
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-5">
      <p className="font-semibold text-gray-900">
        Asociación presencial
      </p>

      <p className="text-sm text-gray-600">
        Acercate a la oficina del club ubicada en{" "}
        <span className="font-medium text-gray-800">
          Carilafquen y Lanin, B. Jardines del Chimehuin
        </span>.
      </p>

      <p className="text-sm font-semibold text-[#c80000]">
        Con fotocopia de DNI
      </p>

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

    {/* DIGITAL */}
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-5">
      <p className="font-semibold text-gray-900">
        Asociación online
      </p>

      <p className="text-sm text-gray-600">
        Completá el formulario y envialo por WhatsApp para iniciar el proceso de inscripción. Una vez enviada tu solicitud, recibiras una respuesta de confirmacion para realizar el pago. 
      </p>

      <div>
        <FormularioInscripcion />
      </div>
    </div>

  </div>
</div>
              )}

              {/* CUOTAS */}
              {activo === "cuotas" && (
                <div className="w-full space-y-6">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
                    PAGO DE CUOTAS
                  </h3>

                  <p className="text-gray-700">
                    Podés abonar tu cuota mensual de forma presencial o digital.
                  </p>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
                      <p className="font-semibold text-gray-900">
                        Pago digital
                      </p>

                      <ul className="space-y-3 text-gray-700">
                        <li className="text-sm">
                          <span className="font-semibold text-gray-800">
                            1.
                          </span>{" "}
                          Transferí el valor de la cuota correspondiente al mes
                          al alias{" "}
                          <span className="font-semibold text-[#c80000]">
                            Ceos2019.
                          </span>
                        </li>

                        <li className="text-sm">
                          <span className="font-semibold text-gray-800">
                            2.
                          </span>{" "}
                          Enviá el comprobante por WhatsApp al número de la
                          oficina del club.
                        </li>
                      </ul>

                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm text-gray-500">WhatsApp</p>
                        <p className="text-lg font-semibold text-gray-900 tracking-wide">
                          2944 123123
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
                      <p className="font-semibold text-gray-900">
                        Pago presencial
                      </p>

                      <ul className="space-y-3 text-gray-700">
                        <li className="text-sm">
                          <span className="font-semibold text-gray-800">
                            1.
                          </span>{" "}
                          Acercate a la oficina del club{" "}
                          <span className="font-semibold text-[#c80000]">
                            con cita previa{" "}
                          </span>
                        </li>
                      </ul>

                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm text-gray-500">Ubicacion</p>
                        <p className="text-lg font-semibold text-gray-900 tracking-wide">
                          Carilafquen y Lanin, B. Jardines del Chimehuin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        <div className="w-full bg-zinc-100 py-20 px-6 md:px-20">
          <div className="w-1/2 md:w-full h-2 bg-gradient-to-l from-[#c80000] to-black rounded-full mb-10 mx-auto"></div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* IZQUIERDA */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
                PARA CONSULTAS <br /> COMUNICATE VIA MAIL O WHATSAPP
              </h2>

              <div className="w-16 h-1 bg-gradient-to-l from-[#c80000] to-black"></div>

              <p className="text-zinc-500 max-w-md">
                Si tenes alguna duda, podes comunicarte a traves de nuestro
                whatsapp o via mail completando el formulario.
              </p>
              <a
                href="https://wa.me/5492972405717"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-lg transition whitespace-nowrap"
              >
                {" "}
                Consultar por WhatsApp{" "}
              </a>
            </motion.div>

            {/* DERECHA - FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Formulario />
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  );
}
