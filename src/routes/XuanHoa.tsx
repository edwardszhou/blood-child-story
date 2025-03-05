import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { StoryContext } from '@/lib/StoryContext';
import { useHoverTimer } from '@/lib/useHoverTimer';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { cn } from '@/lib/utils';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function FirstHoa() {
  return (
    <Passage>
      <div className="font-thought">
        <HighlightText
          inline
          text={`My older sister was the one closest to me. She enjoyed T’Gatoi’s presence as I did. She had also raised me almost as much as my `}
        />
        <Link to={'/mother'}>
          <HighlightText
            inline
            text={`mother`}
            hoverClassName={'tracking-widest text-primary-light'}
          />
        </Link>
        <HighlightText
          inline
          text={`had.`}
        />
      </div>
    </Passage>
  );
}

function SecondHoa() {
  return (
    <Passage className="font-thought flex flex-col gap-16">
      <div>
        <HighlightText
          inline
          text={`Hoa was and is my closest sibling. I think that if she were there that day, she would have wanted to be where I was that day.`}
        />
        <Link to={'/t-gatoi'}>
          <HighlightText
            inline
            text={'That evening.'}
            hoverClassName="tracking-widest text-grayscale-0"
          />
        </Link>
        <HighlightText
          inline
          text={`Today, I wish I was where she is.`}
        />
      </div>
    </Passage>
  );
}

function ThirdHoa() {
  const { hovered, handleHover } = useHoverTimer(3000);

  return (
    <>
      <Passage className="font-thought flex flex-col gap-16">
        <HighlightText
          text={`Hoa would have done it gladly. She loved T’Gatoi. It couldn’t have been Qui—not someone who hated T’Gatoi.`}
        />
        <div>
          <HighlightText
            inline
            text={`I wondered then who would protect me, who would save me if I were to become Lomas. Or if I
        should place Hoa in that path instead. I could have let Hoa protect me from where I am now,
        just as`}
          />
          <HighlightText
            inline
            text={`Qui had done with me.`}
            highlightAll
            hoverClassName={cn('tracking-widest', hovered && 'text-grayscale-0')}
            onMouseOver={handleHover}
          />
        </div>
        <div>
          <HighlightText
            inline
            text={`I remembered how I tried to`}
          />
          <HighlightText
            inline
            text={`protect myself `}
            highlightAll
            hoverClassName={cn('tracking-widest', hovered && 'text-grayscale-0')}
            onMouseOver={handleHover}
          />
          <HighlightText
            inline
            text={` from that moment. Even before Lomas was open, I wasn’t ready.`}
          />
        </div>
      </Passage>
      <div
        className={cn(
          'pointer-events-none fixed bottom-32 flex w-full justify-between px-32 opacity-0 transition-opacity duration-[3000ms]',
          hovered && 'pointer-events-auto opacity-100'
        )}
      >
        <div className="font-emphasis text-grayscale-25 animate-floating-1 relative p-8 text-4xl">
          <div className="bg-primary-dark/50 opaciity-100 pointer-events-none absolute inset-0 blur-2xl" />
          <Link to={'/qui'}>Protecting</Link>
        </div>
        <div className="font-emphasis text-grayscale-25 animate-floating-2 relative p-8 text-4xl">
          <div className="bg-primary-dark/50 opaciity-100 pointer-events-none absolute inset-0 blur-2xl" />
          <Link to={'/protection'}>Protected</Link>
        </div>
      </div>
    </>
  );
}
export default function XuanHoa() {
  usePhaseWall(1);
  const { phase } = useContext(StoryContext);

  return phase === 1 ? <FirstHoa /> : phase === 2 ? <SecondHoa /> : <ThirdHoa />;
}
