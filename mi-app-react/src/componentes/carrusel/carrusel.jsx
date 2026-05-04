import React from "react";
import donia from "../../assets/img/carrusel/carrusel/donia.webp"
import huemul from "../../assets/img/carrusel/carrusel/huemul.webp"
import kiwi from "../../assets/img/carrusel/carrusel/kiwi.webp"
import lourdes from "../../assets/img/carrusel/carrusel/lourdes.webp"
import murrita from "../../assets/img/carrusel/carrusel/murrita.webp"
import picuru from "../../assets/img/carrusel/carrusel/picuru.webp"
import traumatologia from "../../assets/img/carrusel/carrusel/traumatologia.webp"


export default function Carrusel() {
  const sponsors = [
    donia,
    huemul,
    kiwi,
    lourdes,
    murrita,
    picuru,
    traumatologia
  ];

  return (
    <div className="w-full bg-[#ffc800] py-3 overflow-hidden">
      <div className="relative">
        <div className="flex w-max animate-scroll">
          {/* Duplicamos para efecto infinito */}
          {[...sponsors, ...sponsors].map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-10"
            >
              <img
                src={img}
                alt="sponsor"
                className="h-20 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}