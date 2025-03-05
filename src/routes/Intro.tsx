import { Link } from 'react-router-dom';
import Passage from '../components/Passage';

export default function Intro() {
  return (
    <Passage>
      <Link
        to="/home"
        className="text-primary-dark"
      >
        “I’ll take care of you.”
      </Link>
    </Passage>
  );
}
