import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { Link } from 'react-router-dom';

export default function Qui() {
  usePhaseWall(1);

  return (
    <Passage>
      <div className="font-thought">
        <HighlightText
          inline
          text={`I remember that I used to be close with Qui. Not anymore. I remembered that I always wondered why he suddenly grew distant, why he suddenly grew to fear T’Gatoi. Like with my `}
        />
        <Link to={'/mother'}>
          <HighlightText
            inline
            text={`mother,`}
            hoverClassName={'tracking-widest text-primary-light'}
          />
        </Link>
        <HighlightText
          inline
          text={`there was something that happened.`}
        />
      </div>
    </Passage>
  );
}
