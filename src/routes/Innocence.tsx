import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Innocence() {
  const [familyHovered, setFamilyHovered] = useState(false);
  const resetHoverTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const handleHover = () => {
    console.log('hi');
    setFamilyHovered(true);
    if (resetHoverTimer.current) clearTimeout(resetHoverTimer.current);
    resetHoverTimer.current = setTimeout(() => setFamilyHovered(false), 5000);
  };
  console.log(familyHovered);
  return (
    <>
      <Passage>
        <div className="font-thought">
          <HighlightText
            inline
            text={`I was with my`}
          />
          <HighlightText
            inline
            text={`family,`}
            hoverClassName="tracking-widest mx-4"
            onMouseOver={handleHover}
          />
          <HighlightText
            inline
            text={`then. Myself with my egg, and my brother and sisters with one. And my
        mother. She sat and watched. And aged. As she always strangely wanted to.`}
          />
        </div>
      </Passage>
      {familyHovered && <Link to="/mother">Mother</Link>}
    </>
  );
}
