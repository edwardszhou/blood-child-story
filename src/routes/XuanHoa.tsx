import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { Link } from 'react-router-dom';

export default function XuanHoa() {
  usePhaseWall(1);

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
