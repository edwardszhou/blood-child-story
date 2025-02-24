import Passage from '@/components/Passage';
import { Link } from 'react-router-dom';

export default function XuanHoa() {
  return (
    <Passage>
      Gan remembers his relationship with Hoa, which still remains good. He feels protective of Hoa.
      He notes that that <Link to="/t-gatoi">nearly wasn&apos;t the case</Link>
    </Passage>
  );
}
