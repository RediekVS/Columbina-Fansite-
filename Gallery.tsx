
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
}

const images: GalleryItem[] = [
  { id: 1, url: '/gallery/columbina-1.png.jpg', title: 'Silencio Lunar', category: 'Etéreo' },
  { id: 2, url: '/gallery/columbina-2.png.jpg', title: 'Noche Celestial', category: 'Gracia' },
  { id: 3, url: '/gallery/columbina-3.png.jpg', title: 'Serenata de la Damisela', category: 'Paz' },
  { id: 4, url: '/gallery/columbina-4.png.jpg', title: 'Velo Estelar', category: 'Etéreo' },
  { id: 5, url: '/gallery/columbina-5.png.jpg', title: 'Sueño Galáctico', category: 'Divino' },
  { id: 6, url: '/gallery/columbina-6.png.jpg', title: 'Gracia de Nebulosa', category: 'Gracia' },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-4 md:space-y-0">
        <div className="text-left">
          <h3 className="font-celestial text-3xl md:text-4xl text-white tracking-widest uppercase">El Archivo</h3>
          <p className="text-blue-300/40 text-xs tracking-[0.3em] mt-2">REGISTROS VISUALES SELECCIONADOS</p>
        </div>
        <div className="h-px bg-white/10 flex-grow mx-8 hidden lg:block" />
        <div className="flex space-x-6 text-[10px] tracking-[0.2em] uppercase text-blue-200/50">
          <span className="cursor-pointer hover:text-white transition-colors">Todos</span>
          <span className="cursor-pointer hover:text-white transition-colors">Concepto</span>
          <span className="cursor-pointer hover:text-white transition-colors">Oficial</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 blur-2xl transition-all duration-500 rounded-full scale-75 group-hover:scale-100" />
            
            <div className="overflow-hidden aspect-[4/5] relative bg-gray-900/50 border border-white/5 transition-all duration-500 group-hover:border-blue-200/30">
              <motion.img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.5] group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="mt-4 flex justify-between items-end border-b border-transparent group-hover:border-white/10 pb-2 transition-all">
              <div>
                <span className="text-blue-300/40 text-[10px] tracking-widest uppercase block mb-1 group-hover:text-blue-300/80 transition-colors">{img.category}</span>
                <h4 className="font-celestial text-white tracking-widest text-lg group-hover:text-blue-100 transition-colors uppercase">{img.title}</h4>
              </div>
              <div className="text-blue-200/30 text-xs font-light">0{idx + 1}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 backdrop-blur-xl bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-0 right-0 p-4 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-h-[80vh] w-auto shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/5"
              />
              
              <div className="mt-8 text-center">
                <h5 className="font-celestial text-2xl text-white tracking-[0.3em] uppercase">{selectedImage.title}</h5>
                <p className="text-blue-200/40 text-xs tracking-widest mt-2 uppercase">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
