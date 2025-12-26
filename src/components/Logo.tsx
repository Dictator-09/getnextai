import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <motion.div
      className={`flex items-center gap-1 font-display font-bold ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative">
        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-wide">
          GETNEXT
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent blur-sm opacity-60 tracking-wide">
          GETNEXT
        </span>
      </span>
      <span className="relative ml-0.5">
        <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
          AI
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent blur-sm opacity-60">
          AI
        </span>
      </span>
      {/* Circuit line accent */}
      <svg
        className="w-6 h-6 ml-1 text-secondary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <motion.path
          d="M2 12h6l2-4 4 8 2-4h6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="drop-shadow-[0_0_4px_hsl(var(--secondary))]"
        />
        <motion.circle
          cx="20"
          cy="12"
          r="1.5"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="drop-shadow-[0_0_6px_hsl(var(--secondary))]"
        />
      </svg>
    </motion.div>
  );
};

export default Logo;
