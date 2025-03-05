import { cn } from '@/lib/utils';
import { useEffect, useState, type HTMLAttributes, type PropsWithChildren } from 'react';

export default function Passage({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const [fadedIn, setFadedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadedIn(true), 1000);
  }, []);

  return (
    <div
      className={cn(
        'pointer-events-none w-[48rem] text-3xl tracking-wider opacity-0 transition-opacity duration-[3000ms] select-none',
        fadedIn && 'pointer-events-auto opacity-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
