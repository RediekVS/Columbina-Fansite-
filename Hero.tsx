
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onEnter?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnter }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"
      />
      
      <div className="relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <span className="inline-block text-blue-300 text-xs md:text-sm tracking-[1em] uppercase mb-4 opacity-70">
            La Tercera de los Once Heraldos de los Fatui
          </span>
          <div className="relative">
            <h2 className="font-celestial text-5xl md:text-8xl lg:text-9xl tracking-[0.2em] text-white leading-tight">
              DAMISELA
            </h2>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
              animate={{ left: ['-150%', '150%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 2 }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="max-w-2xl mx-auto text-blue-100 text-sm md:text-base leading-relaxed tracking-wide italic"
        >
          "Una canción suave en una fría noche de invierno, una mirada que observa las estrellas mientras los ojos permanecen cerrados. Ella camina donde los dioses temen pisar, envuelta en un silencio celestial."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="pt-10"
        >
          <button 
            onClick={onEnter}
            className="group relative px-10 py-4 border border-blue-200/20 text-blue-100 tracking-[0.3em] text-xs uppercase hover:text-white transition-all overflow-hidden rounded-sm bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="relative z-10">Entrar al Santuario</span>
            <motion.div 
              className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            />
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center space-y-2 opacity-30"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Deslizar</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
