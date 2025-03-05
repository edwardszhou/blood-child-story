import { StoryContext } from '@/lib/StoryContext';
import { cn } from '@/lib/utils';
import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const { phase } = useContext(StoryContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <>
      <div
        className={cn(
          'from-grayscale-100 to-grayscale-75 text-grayscale-50 flex min-h-screen max-w-screen items-center justify-center bg-gradient-to-b',
          phase === 2 && 'bg-secondary-dark',
          phase === 3 && 'bg-primary-dark'
        )}
      >
        <Outlet />
      </div>
      <div
        className="pointer-events-none fixed inset-0 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,245,245,.24), transparent 50%)`
        }}
      />
    </>
  );
}
