import { useState } from "react";
import fotoFutbol1 from "../../assets/img/infoClub/futbol1.jpg"
useState
import fotoHockey1 from "../../assets/img/infoClub/hockey1.jpg"

import {
MapPin,
Calendar,
Target,
Users,
Trophy,
Clock,
Shield,
HeartHandshake
} from "lucide-react"


const images = [fotoFutbol1, fotoHockey1];

export default function InfoClub(){

    const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

return ( 
<section className="w-full text-black py-16 md:py-24 font-['Inter']">
  <div className="max-w-6xl mx-auto px-4">

    {/* Top label */}
    <p className="text-orange-500 text-sm mb-4">
      — CEOS
    </p>

    {/* Title */}
    <h2 className="font-['Lato'] text-3xl md:text-5xl font-black mb-10">
      EL CLUB
    </h2>

      <div className="w-full mb-12 relative">
      <img
        src={images[index]}
        alt="Club CEOS"
        className="w-full h- object-cover"
      />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg"
      >
        ›
      </button>
    </div>

    {/* Bottom content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT INFO */}
      <div className="space-y-8 lg:border-r lg:border-gray-300 lg:pr-10">
        
        <div>
          <p className="text-gray-400 text-sm mb-1">Fundación:</p>
          <p className="text-black font-medium">2019</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1">Ubicación:</p>
          <p className="text-black font-medium">
            Lanín Carilafquen, Barrio Jardines
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1">Disciplina:</p>
          <p className="text-black font-medium">Fútbol formativo</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1">Categorías:</p>
          <p className="text-black font-medium">
            Infantiles y juveniles
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1">Objetivo:</p>
          <p className="text-black font-medium">
            Formación deportiva y desarrollo personal
          </p>
        </div>

      </div>

      {/* RIGHT TEXT */}
     <div className="lg:col-span-2 space-y-10">

  {/* SOBRE EL CLUB */}
  <div>
    <h3 className="font-['Lato'] text-2xl font-bold mb-4">
      Sobre el club
    </h3>

    <p className="text-gray-500 mb-4 leading-relaxed">
      CEOS es un club deportivo fundado en el año 2019 con el inicio de la 
      disciplina fútbol, comenzando con la categoría Primera División. Con el 
      paso del tiempo se fueron incorporando las divisiones formativas, 
      consolidando un proyecto orientado al crecimiento deportivo y humano 
      de niños y jóvenes.
    </p>

    <p className="text-gray-500 mb-4 leading-relaxed">
      En el año 2022 el club amplió su propuesta deportiva con la incorporación 
      de hockey, iniciando con Primera División y posteriormente sumando 
      categorías formativas. Un año más tarde, en 2023, se sumó la disciplina 
      Patín Artístico, destinada a niños desde los 5 años en adelante.
    </p>

    <p className="text-gray-500 leading-relaxed">
      Actualmente el club continúa su desarrollo con las disciplinas de fútbol 
      y hockey, manteniendo el objetivo de brindar un espacio deportivo, social 
      y formativo para toda la comunidad, promoviendo valores como el respeto, 
      el compromiso y el trabajo en equipo.
    </p>
  </div>


  {/* HISTORIA */}
  <div>
    <h3 className="font-['Lato'] text-2xl font-bold mb-4">
      Historia deportiva
    </h3>

    <div className="space-y-3 text-gray-500">
      <p>
        <span className="font-semibold text-black">2019:</span> 
        Inicio del club con fútbol Primera División.
      </p>

      <p>
        <span className="font-semibold text-black">2020 - 2021:</span> 
        Incorporación de divisiones inferiores: 9na, 8va, 7ma, 6ta, 5ta y 4ta división.
      </p>

      <p>
        <span className="font-semibold text-black">2022:</span> 
        Se suma la disciplina hockey con Primera División y luego categorías formativas.
      </p>

      <p>
        <span className="font-semibold text-black">2023:</span> 
        Incorporación de Patín Artístico desde los 5 años en adelante.
      </p>
    </div>
  </div>


  {/* DISCIPLINAS ACTUALES */}
  <div>
    <h3 className="font-['Lato'] text-2xl font-bold mb-4">
      Disciplinas actuales
    </h3>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="border rounded-xl p-5">
        <h4 className="font-semibold text-lg mb-3">
          ⚽ Fútbol
        </h4>

        <ul className="text-gray-500 space-y-1">
          <li>• 9na División</li>
          <li>• 8va División</li>
          <li>• 5ta División</li>
          <li>• Primera División</li>
        </ul>
      </div>

      <div className="border rounded-xl p-5">
        <h4 className="font-semibold text-lg mb-3">
          🏑 Hockey
        </h4>

        <ul className="text-gray-500 space-y-1">
          <li>• Sub 12</li>
          <li>• Sub 14</li>
          <li>• Sub 16</li>
          <li>• Sub 18</li>
          <li>• Primera División</li>
        </ul>
      </div>

    </div>
  </div>


  {/* DISCIPLINAS QUE FORMARON PARTE */}
  <div>
    <h3 className="font-['Lato'] text-2xl font-bold mb-4">
      Disciplinas que formaron parte del club
    </h3>

    <p className="text-gray-500 leading-relaxed">
      A lo largo de su crecimiento el club también contó con la disciplina 
      de Patín Artístico, incorporada en el año 2023 para niños desde los 
      5 años en adelante, formando parte del desarrollo deportivo e 
      institucional durante ese período.
    </p>
  </div>


  {/* HORARIOS */}
  <div>
    <h3 className="font-['Lato'] text-2xl font-bold mb-4">
      Horarios de entrenamiento
    </h3>

    <div className="grid md:grid-cols-2 gap-6 text-gray-500">

      <div>
        <h4 className="font-semibold text-black mb-2">
          ⚽ Fútbol
        </h4>
        <p>Lunes y Miércoles</p>
        <p>Divisiones formativas: 18:00 hs</p>
        <p>Primera división: 20:00 hs</p>
      </div>

      <div>
        <h4 className="font-semibold text-black mb-2">
          🏑 Hockey
        </h4>
        <p>Martes y Jueves</p>
        <p>Formativas: 18:00 hs</p>
        <p>Primera división: 20:00 hs</p>
      </div>

    </div>
  </div>


  {/* VALORES */}
  <div>
    <h3 className="font-['Lato'] text-2xl font-bold mb-4">
      Valores del club
    </h3>

    <div className="grid md:grid-cols-3 gap-4 text-gray-500">

      <div className="border rounded-xl p-4">
        Respeto
      </div>

      <div className="border rounded-xl p-4">
        Compañerismo
      </div>

      <div className="border rounded-xl p-4">
        Compromiso
      </div>

      <div className="border rounded-xl p-4">
        Formación
      </div>

      <div className="border rounded-xl p-4">
        Inclusión
      </div>

      <div className="border rounded-xl p-4">
        Trabajo en equipo
      </div>

    </div>
  </div>

</div>

    </div>
  </div>
</section>
)
}