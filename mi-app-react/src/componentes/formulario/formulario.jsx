import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail } from "lucide-react";
import Toast from "../Toast";

export default function Formulario() {
  const form = useRef();

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmwiygl",
        "template_3wku43k",
        form.current,
        "5GiRQhIlFcQFoh4ac"
      )
      .then(() => {
        setToast({
          show: true,
          type: "success",
          message: "Mensaje enviado correctamente",
        });

        form.current.reset();

        setTimeout(() => {
          setToast((prev) => ({ ...prev, show: false }));
        }, 3000);
      })
      .catch(() => {
        setToast({
          show: true,
          type: "error",
          message: "Error al enviar el mensaje",
        });

        setTimeout(() => {
          setToast((prev) => ({ ...prev, show: false }));
        }, 3000);
      });
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#E8E8E8] rounded-3xl p-6 md:p-8">
      
      <Toast show={toast.show} type={toast.type} message={toast.message} />

      <form ref={form} onSubmit={sendEmail} className="space-y-4">

        {/* FILA 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="relative w-full">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full bg-white rounded-full pl-10 pr-5 py-3 border border-[#D6D6D6] outline-none text-sm text-black placeholder:text-gray-400 focus:border-black transition"
            />
          </div>

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

        </div>

        {/* MENSAJE */}
        <textarea
          name="message"
          placeholder="Escriba aquí su mensaje"
          rows="5"
          required
          className="w-full bg-white rounded-2xl px-5 py-3 border border-[#D6D6D6] outline-none text-sm resize-none text-black placeholder:text-gray-400 focus:border-black transition"
        />

        {/* BOTÓN */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="bg-[#c80000] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-black transition"
          >
            Enviar consulta
          </button>
        </div>

      </form>
    </div>
  );
}