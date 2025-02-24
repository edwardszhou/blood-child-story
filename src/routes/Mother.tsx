import Passage from '@/components/Passage';
import { Link } from 'react-router-dom';

export default function Mother() {
  return (
    <Passage>
      Gan reflects on his mother&apos;s relationship with <Link to={'/t-gatoi'}>T&apos;Gatoi</Link>{' '}
      from the past, comparing it with his own.
    </Passage>
  );
}
