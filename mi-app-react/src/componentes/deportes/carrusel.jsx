import { useState, useEffect } from "react"


export default function GaleriaFotos({imagenes}) {
  const [actual, setActual] = useState(0)
  const [animando, setAnimando] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAnimando(true)
      setTimeout(() => {
        setActual((prev) => (prev + 1) % imagenes.length)
        setAnimando(false)
      }, 400)
    }, 2000)

    return () => clearInterval(intervalo)
  }, [])

 return (
  <div className="relative overflow-hidden bg-black w-full h-full">
      <img
        key={actual}
        src={imagenes[actual]}
        alt={`Foto fútbol ${actual + 1}`}
        className={`w-full h-full object-cover object-center block transition-opacity duration-[400ms] ease-in-out ${
          animando ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {imagenes.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ease-in-out ${
              i === actual
                ? "w-5 bg-white"
                : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}