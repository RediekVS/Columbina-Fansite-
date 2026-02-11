
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const CelestialBackground: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  const feathers = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 20,
      rotate: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]">
      {/* Nebula Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-900/10 blur-[150px] rounded-full" />
      <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-indigo-900/10 blur-[100px] rounded-full" />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-0"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Feathers (Symbolic of Columbina) */}
      {feathers.map((feather) => (
        <motion.div
          key={feather.id}
          className="absolute text-blue-100/20"
          initial={{ top: "-5%", left: `${feather.x}%`, rotate: feather.rotate }}
          animate={{
            top: "110%",
            left: `${feather.x + (Math.random() * 20 - 10)}%`,
            rotate: feather.rotate + 180,
          }}
          transition={{
            duration: feather.duration,
            repeat: Infinity,
            delay: feather.delay,
            ease: "linear",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 3C21 3 20 8 13 10C10 11 3 11 3 11C3 11 5 13 8 14C11 15 16 15 21 11C23 10 24 6 24 6L21 3Z" />
          </svg>
        </motion.div>
      ))}

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
    </div>
  );
};
