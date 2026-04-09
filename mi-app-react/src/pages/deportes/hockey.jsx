import React from 'react';
import { User, Trophy, Star, Users } from 'lucide-react';
import hockeyMinis from "../../assets/img/deportes/hockeyMinis.jpg";
import hockeySub18 from "../../assets/img/deportes/hockeySub18.jpg";
import hockeyPrimera from "../../assets/img/deportes/hockeyPrimera.jpg";

export default function HockeyInfo() {

  const categorias = [
    { id: "minis", nombre: "Minis", icono: <Star className="w-5 h-5" />, color: "bg-zinc-900 text-yellow-400 border-zinc-700" },
    { id: "sub16", nombre: "Sub 16", icono: <Users className="w-5 h-5" />, color: "bg-zinc-900 text-yellow-400 border-zinc-700" },
    { id: "primera", nombre: "Primera División", icono: <Trophy className="w-5 h-5" />, color: "bg-zinc-900 text-yellow-400 border-zinc-700" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 return (
  <div className="text-white">

    {/* 🔴 BLOQUE ROJO */}
    <div className="bg-gradient-to-b from-[#c80000] to-black py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Hockey <span className="text-yellow-400">CEOS</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Formación, disciplina y pasión por el hockey. Desarrollamos jugadoras desde sus primeros pasos
            hasta el alto rendimiento competitivo.
          </p>
        </section>

        {/* BOTONES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/20 bg-black/30 backdrop-blur hover:scale-105 hover:bg-black/50 transition-all text-white"
            >
              {cat.icono}
              {cat.nombre}
            </button>
          ))}
        </div>

      </div>
    </div>


    {/* ⚪ BLOQUE BLANCO */}
    <div className="bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* MINIS */}
        <section id="minis" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-red-600">
                <Star /> Minis
              </h2>
              <p className="text-gray-600 mb-6">
                Iniciación al hockey a través del juego...
              </p>

              <div className="bg-gray-100 p-5 rounded-xl border">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <User size={18}/> Profesores
                </h4>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Prof. Fernando Vallejos</li>
                  <li>Lucila Solorza</li>
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <img
                src={hockeyMinis}
                alt="Minis"
                className="rounded-xl object-cover w-full h-64"
                />
            </div>
          </div>
        </section>

        {/* SUB 18 */}
        <section id="sub16" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-red-600">
                <Users /> Sub 18
              </h2>
              <p className="text-gray-600 mb-6">
                Etapa de desarrollo técnico y táctico...
              </p>

              <div className="bg-gray-100 p-5 rounded-xl border">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <User size={18}/> Staff
                </h4>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Fernando Aminahuel</li>
                  <li>Juan Rocha</li>
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <img
                src={hockeySub18}
                alt="Sub 16"
                className="rounded-xl object-cover w-full h-64"
              />
            </div>
          </div>
        </section>

        {/* PRIMERA */}
        <section id="primera" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-red-600">
                <Trophy /> Primera
              </h2>
              <p className="text-gray-600 mb-6">
                Equipo de alto rendimiento...
              </p>

              <div className="bg-gray-100 p-5 rounded-xl border">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <User size={18}/> Cuerpo técnico
                </h4>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Fernando Aminahuel</li>
                  <li>Juan Rocha</li>
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <img
                src={hockeyPrimera}
                alt="Primera"
                className="rounded-xl object-cover w-full h-64"
              />
            </div>
          </div>
        </section>

      </div>
    </div>

  </div>

  );
}