import React from "react";

import donia from "../../assets/img/carrusel/carrusel/donia.webp";
import huemul from "../../assets/img/carrusel/carrusel/huemul.webp";
import kiwi from "../../assets/img/carrusel/carrusel/kiwi.webp";
import lourdes from "../../assets/img/carrusel/carrusel/lourdes.webp";
import murrita from "../../assets/img/carrusel/carrusel/murrita.webp";
import picuru from "../../assets/img/carrusel/carrusel/picuru.webp";
import traumatologia from "../../assets/img/carrusel/carrusel/traumatologia.webp";

export default function Carrusel() {
  const sponsors = [
    donia,
    huemul,
    kiwi,
    lourdes,
    murrita,
    picuru,
    traumatologia,
  ];

  return (
    <div
      className="w-full bg-[#ffc800] py-3 overflow-hidden"
      style={{ contentVisibility: "auto" }}
    >
      <div className="flex w-max animate-scroll">
        {[...sponsors, ...sponsors].map((img, index) => (
          <div key={index} className="mx-10 flex items-center">
            <img
              src={img}
              alt="sponsor"
              loading="lazy" // 🚀 clave
              decoding="async"
              className="h-20 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}