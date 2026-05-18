import { useRef } from "react";
import { User, Mail, Phone, CreditCard , Calendar} from "lucide-react";

export default function FormularioInscripcion() {
  const form = useRef();

  const subbmit = (e) => {
    e.preventDefault();

    const data = new FormData(form.current);

    const nombres = data.get("nombres");
    const apellidos = data.get("apellidos");
    const dni = data.get("dni");
    const email = data.get("email");
    const telefono = data.get("telefono");
    const categoria = data.get("categoria");
    const fechaNacimiento = data.get("fechaNacimiento");

    const mensaje = encodeURIComponent(
      `Hola, quiero inscribirme:

      • Nombre: ${nombres} ${apellidos}
      • DNI: ${dni}
      • Fecha de nacimiento: ${fechaNacimiento}
      • Email: ${email}
      • Teléfono: ${telefono}
      • Categoría: ${categoria}`,
    );

    const url = `https://wa.me/+542944537198?text=${mensaje}`;

    window.open(url, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-white to-white rounded-3xl p-6 md:p-8">
      <form ref={form} onSubmit={subbmit} className="space-y-4">
        {/* NOMBRE Y APELLIDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              name="nombres"
              placeholder="Nombre"
              required
              className="w-full bg-white rounded-full pl-10 pr-5 py-3 border border-[#D6D6D6] outline-none text-sm text-black placeholder:text-gray-400 focus:border-black transition"
            />
          </div>

          <div className="relative w-full">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              required
              className="w-full bg-white rounded-full pl-10 pr-5 py-3 border border-[#D6D6D6] outline-none text-sm text-black placeholder:text-gray-400 focus:border-black transition"
            />
          </div>
        </div>

        {/* DNI */}
        <div className="relative w-full">
          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="number"
            name="dni"
            placeholder="DNI"
            required
            className="w-full bg-white rounded-full pl-10 pr-5 py-3 border border-[#D6D6D6] outline-none text-sm text-black placeholder:text-gray-400 focus:border-black transition"
          />
        </div>

       <div className="relative w-full">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10 pointer-events-none" />
          
          <input
            type="text"
            name="fechaNacimiento"
            placeholder="Fecha de nacimiento"
            required
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            className="w-full bg-white rounded-full pl-10 pr-5 py-3 border border-[#D6D6D6] outline-none text-sm text-black placeholder:text-gray-400 focus:border-black transition appearance-none"
          />
        </div>
        {/* EMAIL */}
        <div className="relative w-full">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-white rounded-full pl-10 pr-5 py-3 border border-[#D6D6D6] outline-none text-sm text-black placeholder:text-gray-400 focus:border-black transition"
          />
        </div>

        {/* TELÉFONO */}
        <div className="relative w-full">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            className="w-full bg-white rounded-full pl-10 pr-5 py-3 border border-[#D6D6D6] outline-none text-sm text-black placeholder:text-gray-400 focus:border-black transition"
          />
        </div>

        {/* CATEGORÍA */}
        <div className="relative w-full">
        <select
          name="categoria"
          required
          defaultValue=""
          className="w-full bg-white rounded-full pl-5 pr-10 py-3 border border-[#D6D6D6] outline-none text-sm text-gray-400 focus:text-black focus:border-black transition appearance-none cursor-pointer valid:text-black"
        >
          <option value="" disabled hidden>
            Categoría
          </option>
          <option value="Fútbol" className="text-black bg-white">Fútbol</option>
          <option value="Hockey" className="text-black bg-white">Hockey</option>
          <option value="Externo" className="text-black bg-white">Externo</option>
        </select>

        {/* Flecha personalizada del select */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

        {/* BOTÓN */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="bg-[#c80000] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-black transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
