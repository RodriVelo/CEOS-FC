import futbol from "../../assets/img/deportes/futbol.jpg";
import hockey from "../../assets/img/deportes/hockey.jpg";
import { useNavigate } from "react-router-dom";




export default function Deportes() {

    const navigate = useNavigate();
  
    const navega = (direccion) => {
      navigate(direccion);
    };

  return (
    <section
      id="deportes"
      className="bg-gradient-to-b from-[#ffff] to-[#ffff] text-white py-20 px-6 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Título */}
        <h2 className="text-4xl text-red-700 md:text-5xl font-bold mb-4">
          Nuestros Deportes
        </h2>
        <p className="text-zinc-400 mb-12">
          Entrená, competí y formá parte del equipo
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FUTBOL */}
          <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
            <img
              src={futbol}
              alt="Fútbol"
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

            {/* Texto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-2">Fútbol</h3>
              <p className="text-sm text-zinc-300 mb-4">
                Entrenamientos y competencia
              </p>

              <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                Ver más
              </button>
            </div>
          </div>

          {/* HOCKEY */}
          <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
            <img
              src={hockey}
              alt="Hockey"
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

            {/* Texto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-2">Hockey</h3>
              <p className="text-sm text-zinc-300 mb-4">
                Formación y desarrollo deportivo
              </p>

              <button onClick={() => navega("/hockeyinfo")} className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                Ver más
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}