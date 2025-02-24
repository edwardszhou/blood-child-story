import Passage from '@/components/Passage';
import { Link } from 'react-router-dom';

export default function TGatoi() {
  return (
    <>
      <Passage>
        Gan recalls his positive relationship with T&apos;Gatoi, where he viewed T&apos;Gatoi as a
        sort of mother-like figure. He notes that this has <Link to={'/bram-lomas'}>changed</Link>.
      </Passage>
      <Passage>
        Gan recalls his <Link to="/protection">conversation</Link> with T&apos;Gatoi after the Bram
        Lomas incident and leading up to his impregnation. He recalls the emotion of the moment and
        the mention of Xuan Hoa then, as well as Qui
      </Passage>
    </>
  );
}
