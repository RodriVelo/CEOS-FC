import futbol from "../../assets/img/deportes/futbol.jpg";
import hockey from "../../assets/img/deportes/hockey.jpg";
import { useNavigate } from "react-router-dom";
import { Users, MapPin, Trophy } from "lucide-react";

export default function Deportes() {
  const navigate = useNavigate();

  const navega = (direccion) => {
    navigate(direccion);
  };

  return (
    <section id="deportes" className="bg-white py-16 md:pt-24">
      <div className="mx-auto">

        {/* Título */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-red-700 mb-4">
            Nuestros Deportes
          </h2>
          <p className="text-zinc-500">
            Entrená, competí y formá parte del equipo
          </p>
        </div>

        {/* ================= HOCKEY ================= */}
        <div className="w-full flex flex-col md:flex-row">

          {/* IMAGEN */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src={hockey}
              alt="Hockey"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXTO */}
          <div className="w-full md:w-1/2 text-[#c80000] px-6 md:px-16 py-10 md:py-12 flex flex-col justify-center">

            <div className="w-12 h-2 bg-[#c80000] mb-4 rounded"></div>

            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
              HOCKEY SOBRE <br /> CÉSPED
            </h2>

            <p className="text-sm md:text-base text-black mb-8 leading-relaxed">
              Desarrollo deportivo desde categorías formativas hasta primera división, promoviendo el trabajo en equipo, la disciplina y la pasión por el hockey.
            </p>

            <div className="space-y-5">

              <div className="flex gap-4">
                <Trophy className="text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-800">Categorías</p>
                  <p className="text-zinc-600">
                    SUB 12 · SUB 14 · SUB 18 · Primera División
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-800">Cuerpo técnico</p>
                  <p className="text-zinc-600">
                    SUB 12 y SUB 14: Fernando Vallejos , Lucila Solorza
                  </p>
                  <p className="text-zinc-600">
                    Sub 18 y Primera División: Fernando Aminahuel
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-800">Lugar de entrenamiento</p>
                  <p className="text-zinc-600">
                    Cancha Municipal de Hockey - Junin de los Andes
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent my-16"></div>
        {/* ================= FUTBOL ================= */}
        <div className="w-full flex flex-col md:flex-row-reverse">

          {/* IMAGEN */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src={futbol}
              alt="Fútbol"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXTO */}
          <div className="w-full md:w-1/2 text-[#c80000] px-6 md:px-16 py-10 md:py-12 flex flex-col justify-center">

            <div className="w-12 h-2 bg-[#c80000] mb-4 rounded"></div>

            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
              FÚTBOL
            </h2>

            <p className="text-sm md:text-base text-black mb-8 leading-relaxed">
              Entrenamientos formativos y competitivos para todas las edades,
              fomentando el trabajo en equipo, la disciplina y el desarrollo deportivo.
            </p>

            <div className="space-y-5">

              <div className="flex gap-4">
                <Trophy className="text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-800">Categorías</p>
                  <p className="text-zinc-600">
                    9na Division · 8va Division · 5ta Division · Primera Division
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-800">Cuerpo técnico</p>
                  <p className="text-zinc-600">
                    8va Division y 9na Division: Leonel Guenchullan · Raul Paiz
                  </p>
                  <p className="text-zinc-600">
                    5ta Division: Leonardo Kretman
                  </p>
                  <p className="text-zinc-600">
                    Primera Division: Lihuen Sibon
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-800">Lugar de entrenamiento</p>
                  <p className="text-zinc-600">
                    Estadio Municipal - Junín de los Andes
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}