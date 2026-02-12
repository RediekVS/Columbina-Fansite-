
import React from 'react';

export const Sanctuary: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h2 className="font-celestial text-4xl md:text-6xl text-white tracking-[0.4em] uppercase">El Santuario</h2>
          <p className="text-blue-200/40 text-xs md:text-sm tracking-[0.5em] uppercase">Presencia el canto eterno de la Damisela</p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-6" />
        </div>

        {/* CONTENEDOR DE VIDEO */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto group">
          <div className="absolute -inset-4 bg-blue-500/5 blur-2xl rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative w-full h-full bg-black/40 border border-white/10 rounded-sm overflow-hidden backdrop-blur-md">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/ME4OGvcPBUs?autoplay=0&rel=0&modestbranding=1" 
              title="Columbina Sanctuary Vision"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Decoración celestial en esquinas */}
          <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-white/20" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-white/20" />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-blue-100/60 font-soft italic text-sm md:text-base leading-relaxed tracking-wide">
            "En el silencio más profundo se halla la mayor de las fuerzas. Su voz no solo se escucha, se siente en los huesos de quienes osan profanar su descanso."
          </p>
        </div>
      </div>
    </section>
  );
};
