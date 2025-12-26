import { motion } from 'framer-motion';

const CircuitPattern = () => {
  const circuitLines = [
    // Horizontal lines with nodes
    { d: "M0 200 H150 V300 H350 V200 H500", delay: 0 },
    { d: "M0 400 H100 V350 H250 V450 H400 V400 H500", delay: 0.5 },
    { d: "M0 600 H200 V500 H350 V600 H500", delay: 1 },
    // Vertical connectors
    { d: "M150 0 V100 H250 V200", delay: 0.3 },
    { d: "M350 0 V150 H300 V250", delay: 0.8 },
    { d: "M100 800 V700 H200 V600", delay: 1.2 },
    { d: "M400 800 V650 H300 V550", delay: 0.7 },
  ];

  const nodes = [
    { cx: 150, cy: 200, delay: 0.2 },
    { cx: 350, cy: 300, delay: 0.4 },
    { cx: 250, cy: 450, delay: 0.9 },
    { cx: 100, cy: 350, delay: 0.6 },
    { cx: 400, cy: 400, delay: 1.1 },
    { cx: 200, cy: 600, delay: 1.3 },
    { cx: 300, cy: 550, delay: 0.8 },
    { cx: 250, cy: 200, delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left circuit pattern */}
      <svg
        className="absolute left-0 top-0 w-1/3 h-full opacity-30"
        viewBox="0 0 500 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Circuit lines */}
        {circuitLines.map((line, index) => (
          <motion.path
            key={index}
            d={line.d}
            fill="none"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2, delay: line.delay, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: line.delay },
            }}
          />
        ))}

        {/* Circuit nodes */}
        {nodes.map((node, index) => (
          <motion.g key={index}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="hsl(var(--background))"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: node.delay + 0.5 }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill="url(#circuitGradient)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, delay: node.delay + 0.7 }}
            />
            {/* Pulsing glow effect */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="8"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 0.6, 0], scale: [1, 2, 2.5] }}
              transition={{
                duration: 2,
                delay: node.delay + 1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Right circuit pattern (mirrored) */}
      <svg
        className="absolute right-0 top-0 w-1/3 h-full opacity-30"
        viewBox="0 0 500 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: 'scaleX(-1)' }}
      >
        <defs>
          <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Circuit lines */}
        {circuitLines.map((line, index) => (
          <motion.path
            key={index}
            d={line.d}
            fill="none"
            stroke="url(#circuitGradient2)"
            strokeWidth="1.5"
            filter="url(#glow2)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2, delay: line.delay + 0.5, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: line.delay + 0.5 },
            }}
          />
        ))}

        {/* Circuit nodes */}
        {nodes.map((node, index) => (
          <motion.g key={index}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="hsl(var(--background))"
              stroke="url(#circuitGradient2)"
              strokeWidth="2"
              filter="url(#glow2)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: node.delay + 1 }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill="url(#circuitGradient2)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, delay: node.delay + 1.2 }}
            />
            {/* Pulsing glow effect */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="8"
              fill="none"
              stroke="hsl(var(--secondary))"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 0.6, 0], scale: [1, 2, 2.5] }}
              transition={{
                duration: 2,
                delay: node.delay + 1.5,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Animated data flow lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <motion.stop
              offset="0%"
              stopColor="transparent"
              animate={{ offset: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.stop
              offset="30%"
              stopColor="hsl(var(--primary))"
              animate={{ offset: ["30%", "130%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.stop
              offset="70%"
              stopColor="hsl(var(--secondary))"
              animate={{ offset: ["70%", "170%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.stop
              offset="100%"
              stopColor="transparent"
              animate={{ offset: ["100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CircuitPattern;
