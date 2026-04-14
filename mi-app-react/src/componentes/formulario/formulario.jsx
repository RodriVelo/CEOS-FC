import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bmwiygl",
      "template_3qt9o1j",
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
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-6 text-black">
        <h2 className="text-2xl font-semibold mb-6">
          Contacto
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            required
            rows="4"
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}