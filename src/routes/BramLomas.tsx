import Passage from '@/components/Passage';
import { Link } from 'react-router-dom';

export default function BramLomas() {
  return (
    <Passage>
      Gan recalls the horrors of the Bram Lomas incident, recalling the event in terms of
      T&apos;Gatoi, himself, his mother, and Bram Lomas. He recalls his{' '}
      <Link to="/qui">trauma</Link>
    </Passage>
  );
}
