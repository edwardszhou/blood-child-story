import Passage from '@/components/Passage';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Innocence() {
  const [familyHovered, setFamilyHovered] = useState(false);

  return (
    <>
      <Passage>
        Gan is at the start of the story in T&apos;Gatoi&apos;s embrace, wondering why his{' '}
        <span
          onMouseEnter={() => {
            setFamilyHovered(true);
            setTimeout(() => {
              setFamilyHovered(false);
            }, 3000);
          }}
        >
          family
        </span>{' '}
        never indulged in the same pleasures that he did with T&apos;Gatoi.
      </Passage>
      {familyHovered && <Link to="/mother">Mother</Link>}
    </>
  );
}
