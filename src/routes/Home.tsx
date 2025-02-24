import Passage from '@/components/Passage';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Passage>
        Gan is in T&apos;Gatoi&apos;s clutches, remiscing his{' '}
        <Link to={'/innocence'}>innocence</Link> in that same position from his past only a few days
        ago.
      </Passage>
      <Passage>
        Gan (in T&apos;Gatoi&apos;s embrace, in the present) reflects on how his conversation with
        Qui and Bram Lomas has changed his view of T&apos;Gatoi and the Tlic, and the differences in
        himself before and after the Bram Lomas incident. <Link to={'/xuan-hoa'}>Hoa</Link>
      </Passage>
      <Passage>
        Gan (in T&apos;Gatoi&apos;s embrace, in the preset) feels his wound from the impregnation.
        He alludes to various aspects of it, and notes of his feelings now towards his loss of
        innocence as well as T&apos;Gatoi herself
      </Passage>
    </>
  );
}
