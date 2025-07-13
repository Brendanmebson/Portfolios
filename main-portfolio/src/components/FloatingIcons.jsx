import React, { useEffect, useRef } from 'react';
import {
  FaReact, FaJs, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker,
  FaCss3Alt, FaHtml5, FaCloud
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiFirebase, SiPhp, SiFigma, SiKotlin, SiCplusplus, SiReact, SiTailwindcss, SiExpress, SiSupabase, 
} from 'react-icons/si';

const ICONS = [
  { icon: <FaReact />, size: 80 },
  { icon: <FaJs />, size: 75 },
  { icon: <SiTypescript />, size: 78 },
  { icon: <FaNodeJs />, size: 82 },
  { icon: <FaPython />, size: 75 },
  { icon: <FaJava />, size: 80 },
  { icon: <SiMongodb />, size: 78 },
  { icon: <FaGitAlt />, size: 75 },
  { icon: <SiReact />, size: 80 },
  { icon: <FaCss3Alt />, size: 77 },
  { icon: <FaHtml5 />, size: 79 },
  { icon: <SiFirebase />, size: 81 },
  { icon: <FaCloud />, size: 83 },
  { icon: <FaDocker />, size: 80 },
  { icon: <SiKotlin />, size: 78 },
  { icon: <SiCplusplus />, size: 76 },
  { icon: <SiPhp />, size: 74 },
  { icon: <SiFigma />, size: 75 },
  { icon: <SiTailwindcss />, size: 80 },
  { icon: <SiExpress />, size: 82 },
  { icon: <SiSupabase />, size: 77 }
];

const FloatingIcons = () => {
  const iconRefs = useRef([]);
  const velocities = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    iconRefs.current.forEach((ref, i) => {
      if (ref) {
        // Random initial position
        ref.style.left = `${Math.random() * width}px`;
        ref.style.top = `${Math.random() * height}px`;

        // Random velocity
        velocities.current[i] = {
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
        };
      }
    });

    const animate = () => {
      iconRefs.current.forEach((refA, i) => {
        if (!refA) return;
        let x = parseFloat(refA.style.left);
        let y = parseFloat(refA.style.top);
        let { dx, dy } = velocities.current[i];

        // Move
        x += dx;
        y += dy;

        // Bounce off walls
        if (x <= 0 || x >= width - ICONS[i].size) velocities.current[i].dx *= -1;
        if (y <= 0 || y >= height - ICONS[i].size) velocities.current[i].dy *= -1;

        // Repel from nearby icons
        iconRefs.current.forEach((refB, j) => {
          if (i !== j && refB) {
            const x2 = parseFloat(refB.style.left);
            const y2 = parseFloat(refB.style.top);
            const dx = x - x2;
            const dy = y - y2;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = (ICONS[i].size + ICONS[j].size) / 1.5;

            if (dist < minDist && dist > 0) {
              const angle = Math.atan2(dy, dx);
              x += Math.cos(angle);
              y += Math.sin(angle);
            }
          }
        });

        // Apply new position
        refA.style.left = `${x}px`;
        refA.style.top = `${y}px`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="floating-icons-container" ref={containerRef}>
      {ICONS.map((item, index) => (
        <div
          key={index}
          ref={(el) => (iconRefs.current[index] = el)}
          className="floating-icon"
          style={{
            fontSize: `${item.size}px`,
            position: 'absolute',
            color: 'rgba(255, 255, 255, 0.05)',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          {item.icon}
        </div>
      ))}

      <style jsx>{`
        .floating-icons-container {
          position: fixed;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          top: 0;
          left: 0;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;
