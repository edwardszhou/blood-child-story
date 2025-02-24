import Passage from '@/components/Passage';
import { Link } from 'react-router-dom';

export default function Qui() {
  return (
    <Passage>
      Gan remembers Qui&apos;s role in the Bram Lomas incident, and his later anger towards Qui. He
      recalls how their relationship fell apart.
      <Link to={'/'}>Home</Link>
    </Passage>
  );
}
