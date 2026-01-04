import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const StarryBackground = () => {
  const stars = useMemo(() => {
    const starArray: Star[] = [];
    for (let i = 0; i < 80; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    return starArray;
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      startX: Math.random() * 80 + 10,
      startY: Math.random() * 30,
      delay: i * 5 + Math.random() * 3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static shimmer stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: `radial-gradient(circle, hsl(var(--primary) / ${star.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${star.size * 2}px hsl(var(--primary) / ${star.opacity * 0.5})`,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Colored accent stars */}
      {stars.slice(0, 20).map((star) => (
        <motion.div
          key={`accent-${star.id}`}
          className="absolute rounded-full"
          style={{
            left: `${(star.x + 50) % 100}%`,
            top: `${(star.y + 30) % 100}%`,
            width: star.size * 0.8,
            height: star.size * 0.8,
            background: `radial-gradient(circle, hsl(var(--secondary) / ${star.opacity * 0.8}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${star.size * 3}px hsl(var(--secondary) / ${star.opacity * 0.4})`,
          }}
          animate={{
            opacity: [star.opacity * 0.2, star.opacity * 0.8, star.opacity * 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration * 1.5,
            delay: star.delay + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))',
            boxShadow: '0 0 6px hsl(var(--primary)), 0 0 12px hsl(var(--secondary))',
          }}
          initial={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            opacity: 0,
            scaleX: 1,
          }}
          animate={{
            left: [`${star.startX}%`, `${star.startX + 20}%`],
            top: [`${star.startY}%`, `${star.startY + 15}%`],
            opacity: [0, 1, 1, 0],
            scaleX: [1, 30, 30, 1],
          }}
          transition={{
            duration: 1.5,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Large shimmer orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          left: '10%',
          top: '20%',
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          right: '15%',
          top: '40%',
          background: 'radial-gradient(circle, hsl(var(--secondary) / 0.04) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full"
        style={{
          left: '60%',
          bottom: '10%',
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.03) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          delay: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default StarryBackground;
