export default function InformacionSocios() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black font-[Lato]">
            Socios del Club
          </h2>
          <p className="text-gray-600 mt-3 font-[Inter]">
            Sumate al club y disfrutá de beneficios exclusivos para socios
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Beneficios */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4 text-[#c80000] font-[Lato]">
              Beneficios
            </h3>

            <ul className="space-y-3 text-gray-700 font-[Inter]">
              <li>• Acceso a todas las instalaciones</li>
              <li>• Prioridad en eventos deportivos</li>
              <li>• Descuentos en actividades</li>
              <li>• Participación en torneos</li>
              <li>• Noticias exclusivas del club</li>
            </ul>
          </div>

          {/* Como asociarte */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4 text-[#c80000] font-[Lato]">
              ¿Cómo asociarte?
            </h3>

            <p className="text-gray-700 mb-4 font-[Inter]">
              Podés hacerte socio acercándote a la secretaría del club o
              completando el formulario online.
            </p>

            <ul className="space-y-2 text-gray-700 font-[Inter]">
              <li>• Completar formulario</li>
              <li>• Presentar DNI</li>
              <li>• Elegir categoría</li>
              <li>• Abonar primera cuota</li>
            </ul>

            <button className="mt-6 w-full bg-[#c80000] hover:bg-black text-white py-2 rounded-lg transition font-[Inter]">
              Asociarme
            </button>
          </div>

          {/* Cuotas */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4 text-[#c80000] font-[Lato]">
              Pago de Cuota
            </h3>

            <p className="text-gray-700 mb-4 font-[Inter]">
              Podés abonar tu cuota mensual de forma presencial o digital.
            </p>

            <ul className="space-y-2 text-gray-700 font-[Inter]">
              <li>• Transferencia bancaria</li>
              <li>• Mercado Pago</li>
              <li>• Efectivo en secretaría</li>
              <li>• Débito automático</li>
            </ul>

            <button className="mt-6 w-full bg-[#ffc800] hover:bg-[#c80000] text-black hover:text-white py-2 rounded-lg transition font-[Inter] font-semibold">
              Pagar Cuota
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}