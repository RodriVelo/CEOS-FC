import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Consulta enviada");

    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: ""
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">
            Formulario de Consultas
          </h2>
          <p className="text-gray-500 text-sm">
            Envíanos tu consulta y te responderemos a la brevedad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl p-3 outline-none 
                       focus:ring-2 focus:ring-black/80 focus:border-transparent
                       transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl p-3 outline-none 
                       focus:ring-2 focus:ring-black/80 focus:border-transparent
                       transition-all"
          />
        </div>

        <input
          type="text"
          name="asunto"
          placeholder="Asunto"
          value={form.asunto}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 rounded-xl p-3 outline-none 
                     focus:ring-2 focus:ring-black/80 focus:border-transparent
                     transition-all"
        />

        <textarea
          name="mensaje"
          placeholder="Escribí tu consulta..."
          rows="5"
          value={form.mensaje}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 rounded-xl p-3 outline-none 
                     focus:ring-2 focus:ring-black/80 focus:border-transparent
                     transition-all resize-none"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-medium
                     hover:bg-gray-800 active:scale-[.98]
                     transition-all duration-200"
        >
          Enviar consulta
        </button>
      </form>
    </div>
  );
}