import { useState, useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Ensure it's visible if it wasn't (covers edge cases where mouseenter didn't fire)
      // We check a ref to avoid state dependency if we wanted, but strictly speaking
      // separating this is cleaner. For now we trust mouseenter/leave.
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    // Use document instead of body for better coverage
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
        opacity: isVisible ? 1 : 0,
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
