import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { Link } from 'react-router-dom';

export default function BramLomas() {
  usePhaseWall(2);

  return (
    <>
      <Passage className="font-thought">
        <HighlightText
          inline
          text={` Pain and fear laid outside the house, in the agony of a man named Bram Lomas. It was when
        T’Gatoi arrived and cut him open when the pain spread like his blood, tarnishing everything
        nearby. Me. I remember watching it happen. I held Lomas up, so T’Gatoi could do it. My`}
        />
        <Link to={'/mother'}>
          <HighlightText
            inline
            text={'mother'}
            hoverClassName="tracking-widest text-grayscale-0"
          />
        </Link>
        <HighlightText
          inline
          text={`was there, too, but`}
        />
        <Link to={'/qui'}>
          <HighlightText
            inline
            text={'Qui'}
            hoverClassName="tracking-widest text-grayscale-0"
          />
        </Link>
        <HighlightText
          inline
          text={`had left. I didn’t know, then, why he left, before I watched it happen.`}
        />
      </Passage>
    </>
  );
}
