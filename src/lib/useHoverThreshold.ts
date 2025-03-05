import { useEffect, useRef, useState } from 'react';

export function useHoverThreshold(seconds: number, callback: () => void) {
  const [hovered, setHovered] = useState(false);
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 100);
    } else {
      intervalRef.current = setInterval(() => {
        setCounter((counter) => Math.max(0, counter - 1));
      }, 100);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered]);

  useEffect(() => {
    if (counter > seconds * 10) callback();
  }, [callback, seconds, counter]);

  return { setHovered, progress: counter / (seconds * 10) };
}
