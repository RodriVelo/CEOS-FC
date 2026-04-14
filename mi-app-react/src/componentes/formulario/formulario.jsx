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
   <section className="bg-gradient-to-b from-white to-zinc-100">
  <div className="max-w-xl mx-auto px-6">
    
    {/* Card */}
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-zinc-200">
      
      {/* Título */}
      <h2 className="text-3xl font-bold mb-2 text-center">
        Contacto
      </h2>
      <p className="text-zinc-500 text-center mb-8">
        Dejanos tu mensaje y te respondemos a la brevedad
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        name="contact-form"
        className="space-y-5"
      >
        {/* Nombre */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
            className="w-full border border-zinc-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-zinc-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        {/* Mensaje */}
        <div>
          <textarea
            name="message"
            placeholder="Escribí tu mensaje..."
            required
            rows="4"
            className="w-full border border-zinc-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black focus:border-black transition resize-none"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-zinc-800 transition duration-300"
        >
          Enviar consulta
        </button>
      </form>
    </div>
  </div>
</section>
  );
}