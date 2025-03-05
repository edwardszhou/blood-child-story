import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Power() {
  usePhaseWall(3);

  const [hasHovered, setHovered] = useState([false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasHovered[0] && hasHovered[1]) setTimeout(() => navigate('/home'), 3000);
  }, [hasHovered, navigate]);

  return (
    <Passage className="flex flex-col gap-16">
      <HighlightText
        text="I don’t know what to think about it now. I remember my feelings, but I don’t know what it
      means to be where I am now. I still don’t know what I am to T’Gatoi, as a Terran to a Tlic."
      />
      <div>
        <HighlightText
          inline
          highlightAll
          onMouseOver={() => setHovered(([_, t2]) => [true, t2])}
          hoverClassName="text-grayscale-0"
          text="What am I trading away for the purposes of her protection? "
        />
        <HighlightText
          inline
          highlightAll
          onMouseOver={() => setHovered(([t1, _]) => [t1, true])}
          hoverClassName="text-grayscale-0"
          text="Who am I to opine, or criticize, or run away from the Preserve?"
        />
      </div>
    </Passage>
  );
}
