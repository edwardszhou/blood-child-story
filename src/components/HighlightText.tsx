import { cn } from '@/lib/utils';
import { useState, type HTMLAttributes, type ReactNode } from 'react';

function HighlightSpan({
  children,
  className,
  hoverClassName,
  unhoverClassName,
  onMouseOver,
  ...props
}: {
  children: ReactNode;
  className?: string;
  hoverClassName?: string;
  unhoverClassName?: string;
} & HTMLAttributes<HTMLSpanElement>) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseOver={(e) => {
        setHovered(true);
        onMouseOver?.(e);
      }}
      className={cn(
        'text-grayscale-50 transition-all duration-1000',
        className,
        hovered ? cn('text-grayscale-0', hoverClassName) : cn('blur-xxs', unhoverClassName)
      )}
      {...props}
    >
      {children}
    </span>
  );
}
export default function HighlightText({
  text,
  className,
  containerClassName,
  hoverClassName,
  unhoverClassName,
  inline = false,
  ...props
}: {
  text: string;
  className?: string;
  containerClassName?: string;
  hoverClassName?: string;
  unhoverClassName?: string;
  inline?: boolean;
} & HTMLAttributes<HTMLSpanElement>) {
  const stringArr = text.split(/(\s+)/).filter((e) => e.trim().length > 0);

  return inline ? (
    <>
      {stringArr.map((str, i) => (
        <HighlightSpan
          key={i}
          className={className}
          hoverClassName={hoverClassName}
          unhoverClassName={unhoverClassName}
          {...props}
        >
          {str}{' '}
        </HighlightSpan>
      ))}
    </>
  ) : (
    <div className={containerClassName}>
      {stringArr.map((str, i) => (
        <HighlightSpan
          key={i}
          className={className}
          hoverClassName={hoverClassName}
          unhoverClassName={unhoverClassName}
        >
          {str}{' '}
        </HighlightSpan>
      ))}
    </div>
  );
}
