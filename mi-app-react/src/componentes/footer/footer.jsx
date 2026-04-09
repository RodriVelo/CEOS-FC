import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Identidad del Club */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black tracking-tighter text-white">
            CEOS<span className="text-blue-500">.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Más que un club, una familia. Fomentando el deporte, la cultura y la unión de nuestra comunidad desde siempre.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/ceos.oficial/" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/CeosFCJuninDeLosAndes" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Institucional */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-zinc-100">Institucional</h3>
          <ul className="space-y-3 text-zinc-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Historia del Club</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Autoridades</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Sedes y Horarios</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Portal del Socio</a></li>
          </ul>
        </div>

        {/* Deportes / Actividades */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-zinc-100">Actividades</h3>
          <ul className="space-y-3 text-zinc-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Fútbol Profesional</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Básquet / Vóley</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Gimnasio</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Escuelas Deportivas</a></li>
          </ul>
        </div>

        {/* Contacto Directo */}
        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-zinc-100">Contacto</h3>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-500 shrink-0" />
              <span>Av. Principal 1234, <br /> Ciudad, CP 5000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-blue-500 shrink-0" />
              <span>+54 11 1234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-blue-500 shrink-0" />
              <span>contacto@clubceos.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Inferior */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
        <p>© {new Date().getFullYear()} CLUB CEOS - Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:underline">Política de Privacidad</a>
          <a href="#" className="hover:underline">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;