import { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        // Ensure visible on movement
        if (!isVisibleRef.current) {
          cursorRef.current.style.opacity = '1';
          isVisibleRef.current = true;
        }
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
        isVisibleRef.current = true;
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
        isVisibleRef.current = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-40 mix-blend-screen transition-opacity duration-200"
      style={{
        transform: 'translate(-50%, -50%)',
        opacity: 0, // Start invisible, JS will fade it in
      }}
    >
      {/* Simple radial glow */}
      <div
        className="w-80 h-80 rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.06) 40%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default CursorSpotlight;
