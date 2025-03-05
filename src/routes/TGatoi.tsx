import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { StoryContext } from '@/lib/StoryContext';
import { useHoverThreshold } from '@/lib/useHoverThreshold';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { cn } from '@/lib/utils';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FirstTGatoi() {
  const navigate = useNavigate();
  const { setPhase } = useContext(StoryContext);
  const { setHovered, progress } = useHoverThreshold(5, () => {
    setPhase(2);
    navigate('/bram-lomas');
  });
  return (
    <>
      <Passage className="font-thought">
        <HighlightText
          inline
          text={`T’Gatoi’s embrace then was warm. I was caged, but I was safe. Her stings were narcotic, not painful; 
      there was no pain in who T’Gatoi was to me. There was nothing to be afraid of, nothing that wasn’t safe within the `}
        />
        <HighlightText
          inline
          highlightAll
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          text={`doors of our house.`}
          hoverClassName="text-primary-light tracking-widest"
        />
      </Passage>
      <div
        className="bg-primary-light pointer-events-none absolute inset-0 z-10 transition-opacity"
        style={{ opacity: progress }}
      />
    </>
  );
}

function SecondTGatoi() {
  const { setPhase } = useContext(StoryContext);
  return (
    <Passage className="font-thought flex flex-col gap-16">
      <HighlightText
        text={`I remember sitting alone that evening in the kitchen, when T’Gatoi came. I wasn’t ready to
      move forward, to move past the image of Lomas’ body and fulfill the duty I was assigned at
      birth.`}
      />
      <HighlightText
        text={`“Ask me, Gatoi.”`}
        highlightAll
      />
      <HighlightText
        text={`“For my children’s lives?”`}
        highlightAll
      />
      <HighlightText
        text={`That evening, it was going to be me or Hoa who would receive the seed that had led to Lomas’
      suffering. Hoa wanted it. Hoa would have been proud to have it.`}
      />
      <div>
        <HighlightText
          inline
          text={`It was my choice then. I could have chosen `}
        />
        <Link
          onClick={() => setPhase(3)}
          to={'/xuan-hoa'}
        >
          <HighlightText
            inline
            text={'Hoa.'}
            hoverClassName="tracking-widest text-grayscale-0"
          />
        </Link>
      </div>
    </Passage>
  );
}

function ThirdTGatoi() {
  const [hoveredNum, setHoveredNum] = useState(0);

  return (
    <Passage className="font-thought flex flex-col gap-16">
      <HighlightText
        text={`T’Gatoi misunderstood me then. T’Gatoi was never my target, but rather myself. I wanted to
      make my own decision. Even when I made my decision, I did not turn it in. It was to be used
      someday for good, to protect somebody or save somebody.`}
      />
      <div>
        <HighlightText
          text={`But not that day, `}
          inline
          onMouseOver={() => setHoveredNum(Math.max(hoveredNum, 1))}
          highlightAll
        />
        <HighlightText
          text={`nor today, `}
          inline
          onMouseOver={() => setHoveredNum(Math.max(hoveredNum, 2))}
          className={cn(
            'pointer-events-none opacity-0',
            hoveredNum > 0 && 'pointer-events-auto opacity-100'
          )}
          highlightAll
        />
        <Link to={'/power'}>
          <HighlightText
            text={`nor hopefully any day at all.`}
            inline
            hoverClassName="text-grayscale-0"
            className={cn(
              'pointer-events-none opacity-0',
              hoveredNum > 0 && 'pointer-events-auto opacity-100'
            )}
            highlightAll
          />
        </Link>
      </div>
    </Passage>
  );
}
export default function TGatoi() {
  usePhaseWall(1);
  const { phase } = useContext(StoryContext);

  return phase === 1 ? <FirstTGatoi /> : phase === 2 ? <SecondTGatoi /> : <ThirdTGatoi />;
}
