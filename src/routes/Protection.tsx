import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { Link } from 'react-router-dom';

export default function Protection() {
  usePhaseWall(3);
  return (
    <Passage className="font-thought flex flex-col gap-16">
      <HighlightText
        text={`They weren’t legal. They could kill, just like they used to, in past wars, Terrans and Tlic
      alike. I remember how I felt when I secretly used it to kill the achti before Lomas was split
      open. I had said then that I would turn it in if T’Gatoi asked for it.`}
      />
      <div>
        <HighlightText
          inline
          text={`Yet it was only that evening where I had threatened to use it again,`}
        />
        <Link to={'/t-gatoi'}>
          <HighlightText
            inline
            highlightAll
            text={'in front of T’Gatoi. '}
            hoverClassName="tracking-widest text-grayscale-0"
          />
        </Link>
        <HighlightText
          inline
          text={`It’s still there now.
`}
        />
      </div>
    </Passage>
  );
}
