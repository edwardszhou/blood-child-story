import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { useHoverTimer } from '@/lib/useHoverTimer';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function Innocence() {
  usePhaseWall(1);
  const { hovered, handleHover } = useHoverTimer(3000);

  return (
    <>
      <Passage className="font-thought">
        <HighlightText
          inline
          text={`I was with my`}
        />
        <HighlightText
          inline
          text={`family,`}
          hoverClassName={cn('tracking-widest mx-4', hovered && 'text-primary-light')}
          onMouseOver={handleHover}
        />
        <HighlightText
          inline
          text={`then. Myself with my egg, and my brother and sisters with one. And my
        mother. She sat and watched. And aged. As she always strangely wanted to.`}
        />
      </Passage>
      <div
        className={cn(
          'pointer-events-none fixed bottom-32 flex w-full justify-between px-32 opacity-0 transition-opacity duration-[3000ms]',
          hovered && 'pointer-events-auto opacity-100'
        )}
      >
        <div className="font-emphasis text-grayscale-25 animate-floating-1 relative p-8 text-4xl">
          <div className="bg-grayscale-100/50 opaciity-100 pointer-events-none absolute inset-0 blur-2xl" />
          <Link to={'/qui'}>Brother</Link>
        </div>
        <div className="font-emphasis text-grayscale-25 animate-floating-2 relative p-8 text-4xl">
          <div className="bg-grayscale-100/50 opaciity-100 pointer-events-none absolute inset-0 blur-2xl" />
          <Link to={'/mother'}>Mother</Link>
        </div>
        <div className="font-emphasis text-grayscale-25 animate-floating-3 relative p-8 text-4xl">
          <div className="bg-grayscale-100/50 opaciity-100 pointer-events-none absolute inset-0 blur-2xl" />
          <Link to={'/xuan-hoa'}>Sister</Link>
        </div>
      </div>
    </>
  );
}
