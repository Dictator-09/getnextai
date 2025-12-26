import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, x, y]);

  return (
    <>
      {/* Main spotlight glow */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Primary glow */}
        <div
          className="w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.08) 30%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Secondary trailing glow */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-screen"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <div
          className="w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--secondary) / 0.1) 0%, transparent 60%)`,
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Small bright core */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          className="w-4 h-4 rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)`,
            boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Particle trail effect */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-30"
          style={{
            x,
            y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            opacity: isVisible ? 0.3 - i * 0.05 : 0,
            scale: 1 + i * 0.2,
          }}
          transition={{ 
            duration: 0.3 + i * 0.1, 
            delay: i * 0.03,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              background: `radial-gradient(circle, hsl(var(--primary) / ${0.2 - i * 0.03}) 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CursorSpotlight;
