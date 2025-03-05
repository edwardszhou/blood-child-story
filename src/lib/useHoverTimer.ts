import { useRef, useState } from 'react';

export function useHoverTimer(timer: number) {
  const [hovered, setHovered] = useState(false);
  const resetHoverTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const handleHover = () => {
    setHovered(true);
    if (resetHoverTimer.current) clearTimeout(resetHoverTimer.current);
    resetHoverTimer.current = setTimeout(() => setHovered(false), timer);
  };

  return { hovered, handleHover };
}
