import { StoryContext } from '@/lib/StoryContext';
import { cn } from '@/lib/utils';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const { phase } = useContext(StoryContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

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
          'from-grayscale-0 to-grayscale-25 text-grayscale-75 flex min-h-screen max-w-screen items-center justify-center bg-gradient-to-b',
          phase === 1 && 'from-grayscale-100 to-grayscale-75 bg-gradient-to-b',
          phase === 2 && 'bg-secondary-dark',
          phase === 3 && 'bg-primary-dark',
          location.pathname === '/home' &&
            'from-grayscale-0 to-grayscale-25 text-grayscale-75 bg-gradient-to-b'
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
