import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { StoryContext } from '@/lib/StoryContext';
import { useHoverThreshold } from '@/lib/useHoverThreshold';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TGatoi() {
  usePhaseWall(1);
  const { setPhase } = useContext(StoryContext);
  const navigate = useNavigate();
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
