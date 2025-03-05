import { StoryContext } from '@/lib/StoryContext';
import { cn } from '@/lib/utils';
import {
  useContext,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode
} from 'react';

function sparseMerge(arr: string[]) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    let merged = '';
    for (let j = i; j < i + 3 && j < arr.length; j++) {
      merged += `${arr[j]} `;
    }
    result.push(merged);
  }
  return result;
}

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
  const spanRef = useRef<HTMLSpanElement>(null);
  const { phase } = useContext(StoryContext);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!spanRef.current) return;

      const elementRect = spanRef.current.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(e.clientX - (elementRect.left + elementRect.width / 2), 2) +
          Math.pow(e.clientY - (elementRect.top + elementRect.height / 2), 2)
      );

      if (distance < 50) {
        setHovered(true);
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <span
      ref={spanRef}
      onMouseOver={(e) => {
        // setHovered(true);
        onMouseOver?.(e);
      }}
      className={cn(
        'text-grayscale-50 transition-all duration-1000',
        className,
        hovered
          ? cn(
              phase === 0 && 'text-grayscale-100',
              phase === 1 && 'text-grayscale-0',
              phase >= 2 && 'text-primary-light',
              hoverClassName
            )
          : (unhoverClassName ?? 'blur-xxs')
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
  highlightAll = false,
  ...props
}: {
  text: string;
  className?: string;
  containerClassName?: string;
  hoverClassName?: string;
  unhoverClassName?: string;
  inline?: boolean;
  highlightAll?: boolean;
} & HTMLAttributes<HTMLSpanElement>) {
  const stringArr = text.split(/(\s+)/).filter((e) => e.trim().length > 0);
  const sparseStringArr = sparseMerge(stringArr);

  const renderText = () => {
    return highlightAll ? (
      <HighlightSpan
        className={className}
        hoverClassName={hoverClassName}
        unhoverClassName={unhoverClassName}
        {...props}
      >
        {text}
      </HighlightSpan>
    ) : (
      sparseStringArr.map((str, i) => (
        <HighlightSpan
          key={i}
          className={className}
          hoverClassName={hoverClassName}
          unhoverClassName={unhoverClassName}
          {...props}
        >
          {str}{' '}
        </HighlightSpan>
      ))
    );
  };

  return inline ? <>{renderText()}</> : <div className={containerClassName}>{renderText()}</div>;
}
