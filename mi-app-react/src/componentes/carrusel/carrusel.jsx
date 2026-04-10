import React from "react";
import donia from "../../assets/img/carrusel/doña.png"
import huemul from "../../assets/img/carrusel/huemul.png"
import kiwi from "../../assets/img/carrusel/kiwi.png"
import lourdes from "../../assets/img/carrusel/lourdes.png"
import murrita from "../../assets/img/carrusel/murrita.png"
import picuru from "../../assets/img/carrusel/picuru.png"
import traumatologia from "../../assets/img/carrusel/traumatologia.png"

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