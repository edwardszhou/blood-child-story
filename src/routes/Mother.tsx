import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { StoryContext } from '@/lib/StoryContext';
import { useHoverTimer } from '@/lib/useHoverTimer';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { cn } from '@/lib/utils';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Mother() {
  usePhaseWall(1);
  const { phase } = useContext(StoryContext);
  const { hovered, handleHover } = useHoverTimer(3000);

  return phase === 1 ? (
    <>
      <Passage className="font-thought flex flex-col gap-16">
        <HighlightText
          text={`I remember that my mother did not have much egg that day. She would’ve had none, had she had it her way, if not for T’Gatoi.`}
        />
        <HighlightText
          text={`I remember when my mother used to have her share of eggs. She’d pick me up from the floor and
      laugh as she talked with T’Gatoi. But at that moment she was caged, and there was no laughter.`}
        />
        <div>
          <HighlightText
            inline
            text={` My mother used to enjoy being with T’Gatoi, as I did then. I wonder if she ever enjoyed being
      caged the way I did. `}
          />
          <HighlightText
            inline
            highlightAll
            onMouseOver={handleHover}
            text={`“Take care of her”, `}
          />
          <HighlightText
            inline
            text={`my mother said to me.`}
          />
        </div>
      </Passage>
      <div
        className={cn(
          'pointer-events-none fixed bottom-32 flex w-full max-w-full items-center justify-end px-32 opacity-0 transition-opacity duration-[3000ms]',
          hovered && 'pointer-events-auto opacity-100'
        )}
      >
        <div className="font-emphasis text-grayscale-25 animate-floating-1 relative p-8 text-4xl">
          <div className="bg-grayscale-100/50 opaciity-100 pointer-events-none absolute inset-0 blur-2xl" />
          <Link to={'/t-gatoi'}>...her</Link>
        </div>
      </div>
    </>
  ) : (
    <Passage className="font-thought">
      <HighlightText
        inline
        text={`I remember that she had come to help me then, with`}
      />
      <Link to={'/bram-lomas'}>
        <HighlightText
          inline
          text={'Bram Lomas.'}
          hoverClassName="tracking-widest text-grayscale-0"
        />
      </Link>
      <HighlightText
        inline
        text={`But that was as far as she could follow. I refused her help.`}
      />
    </Passage>
  );
}
