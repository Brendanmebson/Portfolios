import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingIcons = () => {
  const [icons] = useState([
    { name: 'React', symbol: '⚛️', size: 40 },
    { name: 'JavaScript', symbol: '🟨', size: 35 },
    { name: 'TypeScript', symbol: '🔷', size: 38 },
    { name: 'Node.js', symbol: '🟢', size: 42 },
    { name: 'Python', symbol: '🐍', size: 36 },
    { name: 'Java', symbol: '☕', size: 40 },
    { name: 'MongoDB', symbol: '🍃', size: 38 },
    { name: 'Git', symbol: '🌿', size: 35 },
    { name: 'React Native', symbol: '📱', size: 40 },
    { name: 'CSS', symbol: '🎨', size: 37 },
    { name: 'HTML', symbol: '🌐', size: 39 },
    { name: 'Firebase', symbol: '🔥', size: 41 },
    { name: 'AWS', symbol: '☁️', size: 43 },
    { name: 'Docker', symbol: '🐳', size: 38 },
    { name: 'Kotlin', symbol: '🤖', size: 36 },
  ]);

  const generateRandomPosition = () => ({
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 100),
  });

  return (
    <div className="floating-icons">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          initial={generateRandomPosition()}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'fixed',
            fontSize: `${icon.size}px`,
            zIndex: 1,
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
      <style jsx>{`
        .floating-icons {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-icon {
          user-select: none;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;
