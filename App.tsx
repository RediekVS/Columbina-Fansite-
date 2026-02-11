
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { CelestialBackground } from './components/CelestialBackground';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { FanArtPage } from './components/FanArtPage';
import { Sanctuary } from './components/Sanctuary';

type View = 'home' | 'sanctuary' | 'fan-art';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<View>('home');
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (view: View) => {
    setShowFlash(true);
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setShowFlash(false);
    }, 500);
  };

  const renderView = () => {
    switch (currentView) {
      case 'sanctuary':
        return <Sanctuary />;
      case 'fan-art':
        return <FanArtPage />;
      default:
        return (
          <>
            <Hero onEnter={() => navigateTo('sanctuary')} />
            <Gallery />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen font-soft overflow-hidden selection:bg-blue-200/30">
      <CustomCursor />
      
      {/* Transición Celestial entre vistas */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white backdrop-blur-3xl"
            transition={{ duration: 0.5 }}
          >
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
                  className="w-40 h-40 bg-blue-100 rounded-full blur-[100px]" 
                />
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.95, 1, 0.95],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-center"
            >
              <h1 className="font-celestial text-3xl md:text-5xl tracking-[0.3em] text-blue-100">COLUMBINA</h1>
              <p className="mt-4 text-sm tracking-[0.5em] text-blue-300/60 uppercase">Gracia Etérea</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-10"
          >
            <CelestialBackground />
            <Header currentView={currentView} onNavigate={navigateTo} />
            
            <div className="relative z-20">
              {renderView()}
            </div>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
