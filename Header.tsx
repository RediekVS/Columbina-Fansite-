
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: 'home' | 'sanctuary' | 'fan-art') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-8 md:px-12 flex justify-between items-center backdrop-blur-sm bg-black/10"
    >
      <div 
        className="flex items-center space-x-2 cursor-pointer" 
        onClick={() => onNavigate('home')}
      >
        <div className="w-8 h-px bg-blue-200/50 hidden md:block" />
        <h1 className="font-celestial text-xl md:text-2xl tracking-[0.4em] text-white">COLUMBINA</h1>
      </div>
      
      <nav className="hidden md:block">
        <ul className="flex space-x-12 font-soft text-sm tracking-widest text-blue-200/70">
          <li 
            onClick={() => onNavigate('home')}
            className={`transition-colors cursor-pointer border-b pb-1 uppercase ${currentView === 'home' ? 'text-white border-white/40' : 'hover:text-white border-transparent hover:border-white/20'}`}
          >
            Inicio
          </li>
          <li 
            onClick={() => onNavigate('sanctuary')}
            className={`transition-colors cursor-pointer border-b pb-1 uppercase ${currentView === 'sanctuary' ? 'text-white border-white/40' : 'hover:text-white border-transparent hover:border-white/20'}`}
          >
            Santuario
          </li>
          <li 
            onClick={() => onNavigate('fan-art')}
            className={`transition-colors cursor-pointer border-b pb-1 uppercase ${currentView === 'fan-art' ? 'text-white border-white/40 font-medium' : 'hover:text-white border-transparent hover:border-white/20 text-blue-200/50'}`}
          >
            Arte de Fans
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <div 
          onClick={() => setIsPlaying(!isPlaying)}
          className="group flex items-center space-x-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border border-blue-200/30 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-all overflow-hidden relative">
            <div className="flex items-end space-x-0.5 h-3">
               {[1, 2, 3].map((i) => (
                 <motion.div
                   key={i}
                   animate={isPlaying ? { height: [4, 12, 6, 10, 4] } : { height: 4 }}
                   transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                   className="w-0.5 bg-blue-100"
                 />
               ))}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
