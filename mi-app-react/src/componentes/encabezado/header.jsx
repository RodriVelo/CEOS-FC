import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import escudo from "../../assets/img/header/ESCUDO.png";
import { ArrowRightToLine } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navega = (dir) => {
    navigate(dir);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/78 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div
            onClick={() => navega("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800"
            >
              <img src={escudo} className="w-full h-full object-cover" />
            </motion.div>

            <span className="font-['Lato'] text-white font-bold tracking-tight text-lg group-hover:text-red-400 transition">
              CLUB CEOS
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {["Inicio", "Deportes", "El Club"].map((item, i) => {
              const routes = ["/", "/deportes", "/infoClub"];
              return (
                <motion.button
                  key={i}
                  onClick={() => navega(routes[i])}
                  whileHover={{ y: -2 }}
                  className="text-sm text-white/70 hover:text-white transition relative"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
                </motion.button>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navega("/informacionSocios")}
              className="bg-white px-5 py-2 rounded-full text-sm font-bold"
            >
              CONSULTAS
            </motion.button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full px-4 pt-4 pb-6"
          >
            <div className="bg-zinc-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex flex-col gap-3 p-4">

                {["Inicio", "Deportes", "El Club"].map((item, i) => {
                  const routes = ["/", "/deportes", "/infoClub"];
                  return (
                    <motion.button
                      key={i}
                      onClick={() => navega(routes[i])}
                      whileTap={{ scale: 0.97 }}
                      className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition"
                    >
                      {item}
                      <ArrowRightToLine />
                    </motion.button>
                  );
                })}

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navega("/informacionSocios")}
                  className="mt-2 bg-white py-3 rounded-xl font-bold text-black "
                >
                  CONSULTAS
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
