import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bmwiygl",
      "template_3wku43k",
      form.current,
      "5GiRQhIlFcQFoh4ac"
    )
    .then(() => {
      alert("Mensaje enviado");
      form.current.reset();
    })
    .catch(() => {
      alert("Error al enviar");
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4"
    >
      {/* FILA 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="w-full bg-black/20 rounded-full px-5 py-3 outline-none text-sm"
        />

      <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full bg-black/20 rounded-full px-5 py-3 outline-none text-sm"
        />
        
      </div>

   

      {/* MENSAJE */}
      <textarea
        name="message"
        placeholder="Escriba aqui su mensaje"
        rows="5"
        required
        className="w-full bg-black/20 rounded-2xl px-5 py-4 outline-none text-sm resize-none"
      />

      {/* BOTÓN */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="bg-zinc-400/20 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 transition"
        >
          Enviar consulta
        </button>
      </div>
    </form>
  );
}