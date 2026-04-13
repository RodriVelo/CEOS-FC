import { useState, useRef } from "react";
import { Users, CreditCard, Gift, Form } from "lucide-react";
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

  return (
    <section className="w-full bg-white">
      <main className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-[#c80000] to-black text-white py-25 md:pt-24  ">
      <div className="max-w-6xl mx-auto px-6 pb-15">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white font-[Lato]">
            Socios del Club
          </h2>
          <p className="text-white mt-3 font-[Inter]">
            Sumate al club y disfrutá de beneficios exclusivos
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Beneficios */}
          <div
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
          </div>

          {/* Asociarte */}
          <div
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
          </div>

          {/* Cuotas */}
          <div
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
          </div>
        </div>

        {/* INFO DINAMICA */}
        {activo && (
       
          <div ref={infoRef} className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12">

            {/* BENEFICIOS */}
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

            {/* ASOCIARTE */}
            {activo === "asociarte" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#c80000]">
                  ¿Cómo asociarte?
                </h3>

                <p className="mb-6 text-gray-700">
                  Podés hacerte socio acercándote a la secretaría del club
                  o completando el formulario online.
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li>• Completar formulario</li>
                  <li>• Presentar DNI</li>
                  <li>• Elegir categoría</li>
                  <li>• Abonar primera cuota</li>
                </ul>

                {/* <button className="mt-8 bg-[#c80000] hover:bg-black text-white px-6 py-3 rounded-xl transition">
                  Asociarme
                </button> */}
              </div>
            )}

            {/* CUOTAS */}
            {activo === "cuotas" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#c80000]">
                  Pago de Cuota
                </h3>

                <p className="mb-6 text-gray-700">
                  Podés abonar tu cuota mensual de forma presencial o digital.
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li>• Transferencia bancaria</li>
                  <li>• Mercado Pago</li>
                  <li>• Efectivo en secretaría</li>
                  <li>• Débito automático</li>
                </ul>

                {/* <button className="mt-8 bg-[#ffc800] hover:bg-[#c80000] hover:text-white text-black px-6 py-3 rounded-xl transition font-semibold">
                  Pagar cuota
                </button> */}
              </div>
            )}

          </div>
        )}

      </div>

      
     
    <div className="w-full bg-gray-50 border border-gray-200  p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          ¿Tenés alguna consulta?
        </h3>
        <p className="text-gray-600 text-sm">
          Escribinos por WhatsApp por dudas, consultas generales o más información.
        </p>
      </div>

      <a
        href="https://wa.me/5492991234567"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-lg transition whitespace-nowrap"
      >
        Consultar por WhatsApp
      </a>

    </div>
   
      </main>
    </section>
  );
}