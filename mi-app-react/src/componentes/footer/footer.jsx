import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
 return (
  <footer className="bg-black text-white pt-10 pb-6 px-6 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Identidad del Club */}
      <div className="space-y-5">
        <h2 className="text-3xl font-extrabold tracking-tight">
          CEOS<span className="text-blue-500">.</span>
        </h2>

        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
          Más que un club, una familia. Fomentando el deporte, la cultura y la unión de nuestra comunidad.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/ceos.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.facebook.com/CeosFCJuninDeLosAndes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <FaFacebook size={18} />
          </a>

          <a
            href="#"
            className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>

      {/* Contacto */}
      <div>
        <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-zinc-200">
          Contacto
        </h3>

        <ul className="space-y-4 text-sm text-zinc-400">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
            <span>
              Carilafquen Lanín <br />
              Junín de los Andes
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Phone size={18} className="text-blue-500 shrink-0" />
            <span>+54 2944 xxxx</span>
          </li>

          <li className="flex items-center gap-3">
            <Mail size={18} className="text-blue-500 shrink-0" />
            <span>contacto@clubceos.com</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer inferior */}
    <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
      
      <p className="text-center md:text-left">
        © {new Date().getFullYear()} CLUB CEOS — Todos los derechos reservados.
      </p>

      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">
          Política de Privacidad
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Términos y Condiciones
        </a>
      </div>
    </div>
  </footer>
);
};
export default Footer;