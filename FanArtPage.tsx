
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FanArtItem {
  id: number;
  author: string;
  image: string;
}

const initialFanArt: FanArtItem[] = [];

export const FanArtPage: React.FC = () => {
  const [items, setItems] = useState<FanArtItem[]>(initialFanArt);
  const [author, setAuthor] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewImage) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const entry: FanArtItem = {
        id: Date.now(),
        author: author.trim() || 'Peregrino Anónimo',
        image: previewImage,
      };
      setItems((prev) => [entry, ...prev]);
      setAuthor('');
      setPreviewImage(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setIsSubmitting(false);
    }, 1200);
  };

  const selectedItem = selectedImage
    ? items.find((i) => i.image === selectedImage)
    : null;

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Título al estilo El Archivo */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-4 md:space-y-0">
          <div className="text-left">
            <h3 className="font-celestial text-3xl md:text-4xl text-white tracking-widest uppercase">
              Santuario de Ecos
            </h3>
            <p className="text-blue-300/40 text-xs tracking-[0.3em] mt-2 uppercase">
              Donde la devoción se vuelve arte
            </p>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-8 hidden lg:block" />
          {/* Formulario compacto a la derecha */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap items-end gap-4 text-[10px] tracking-[0.2em] uppercase"
          >
            <div>
              <label className="block text-blue-200/50 mb-1 uppercase">Autor</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Alias..."
                className="bg-white/5 border border-white/10 rounded-sm py-2 px-3 text-white text-xs w-36 focus:outline-none focus:border-blue-200/30 placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="block text-blue-200/50 mb-1 uppercase">Imagen</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="h-10 px-4 border border-white/10 rounded-sm flex items-center justify-center cursor-pointer hover:border-blue-200/30 transition-colors bg-white/5"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {previewImage ? (
                  <span className="text-blue-100">Lista</span>
                ) : (
                  <span className="text-blue-200/50">Elegir</span>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!previewImage || isSubmitting}
              className="py-2 px-4 border border-white/20 text-white hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed uppercase"
            >
              {isSubmitting ? 'Enviando...' : 'Ofrendar'}
            </button>
          </form>
        </div>

        {/* Grid igual que El Archivo: misma estética y animaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 blur-2xl transition-all duration-500 rounded-full scale-75 group-hover:scale-100" />

              <div className="overflow-hidden aspect-[4/5] relative bg-gray-900/50 border border-white/5 transition-all duration-500 group-hover:border-blue-200/30">
                <motion.img
                  src={item.image}
                  alt={item.author}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.5] group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="mt-4 flex justify-between items-end border-b border-transparent group-hover:border-white/10 pb-2 transition-all">
                <div>
                  <span className="text-blue-300/40 text-[10px] tracking-widest uppercase block mb-1 group-hover:text-blue-300/80 transition-colors">
                    Ofrenda
                  </span>
                  <h4 className="font-celestial text-white tracking-widest text-lg group-hover:text-blue-100 transition-colors uppercase">
                    {item.author}
                  </h4>
                </div>
                <div className="text-blue-200/30 text-xs font-light">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-blue-200/40 text-sm tracking-widest uppercase py-16">
            Aún no hay ofrendas. Sube la primera.
          </p>
        )}

        {/* Lightbox igual que en Gallery */}
        <AnimatePresence>
          {selectedItem && (
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
                  type="button"
                  className="absolute top-0 right-0 p-4 text-white/50 hover:text-white transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <img
                  src={selectedItem.image}
                  alt={selectedItem.author}
                  className="max-h-[80vh] w-auto shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/5"
                />

                <div className="mt-8 text-center">
                  <h5 className="font-celestial text-2xl text-white tracking-[0.3em] uppercase">
                    {selectedItem.author}
                  </h5>
                  <p className="text-blue-200/40 text-xs tracking-widest mt-2 uppercase">
                    Ofrenda
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
