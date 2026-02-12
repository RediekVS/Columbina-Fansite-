
import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [showCreatorNotice, setShowCreatorNotice] = useState(false);

  return (
    <footer className="py-24 px-6 md:px-12 text-center border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-blue-200/10 flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-blue-100 rounded-full animate-pulse" />
          </div>
          <h2 className="font-celestial text-2xl tracking-[0.5em] text-white uppercase">El Fin del Sueño</h2>
          <p className="mt-4 text-blue-200/40 text-xs tracking-widest uppercase italic">
            "Nos volveremos a encontrar bajo las alas celestiales."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5 text-[10px] tracking-[0.2em] text-blue-300/30 uppercase">
          <a href="https://genshin.hoyoverse.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">Sitio Oficial</a>
          <button
            type="button"
            onClick={() => setShowCreatorNotice(true)}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none"
          >
            Creador del Sitio
          </button>
          <div className="hover:text-white transition-colors cursor-pointer">Obras Fan</div>
        </div>

        <div className="text-[9px] tracking-[0.4em] text-blue-100/10 pt-8 uppercase">
          © 2026 Galería Celestial — Dedicado a la Tercera Heraldo
        </div>

        {showCreatorNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-6">
            <div className="max-w-md w-full bg-black/80 border border-white/10 rounded-sm p-6 text-left shadow-xl relative">
              <button
                type="button"
                onClick={() => setShowCreatorNotice(false)}
                className="absolute top-3 right-3 text-blue-200/50 hover:text-white text-xs tracking-[0.2em] uppercase"
              >
                Cerrar
              </button>
              <h3 className="font-celestial text-white text-sm tracking-[0.4em] uppercase mb-4">
                Aviso del Creador
              </h3>
              <p className="text-[11px] leading-relaxed text-blue-100/80 mb-4">
                Este es un fansite no oficial dedicado a Columbina. Genshin Impact y todos sus personajes son propiedad de HoYoverse.
                Este sitio no está afiliado ni respaldado por HoYoverse.
              </p>
              <p className="text-[11px] leading-relaxed text-blue-100/70 mb-3">
                Si te gusta el contenido, puedes apoyarme en mis redes:
              </p>
              <div className="space-y-2 text-[11px] tracking-[0.2em] uppercase">
                <a
                  href="https://www.youtube.com/@rediek/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-white transition-colors"
                >
                  YouTube: @rediek
                </a>
                <a
                  href="https://www.instagram.com/keiderlow/?next=%2Fkeider_ortega%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-white transition-colors"
                >
                  Instagram: @keiderlow
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
