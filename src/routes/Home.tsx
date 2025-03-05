import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { StoryContext } from '@/lib/StoryContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { setPhase } = useContext(StoryContext);
  return (
    <>
      <Passage className="flex flex-col gap-16">
        <HighlightText
          text={`I lay against T’Gatoi’s long, velvet underside, sipping from my egg now and then, wondering
        why it felt so different today compared to three days ago when I was in the same position.
        `}
          hoverClassName="text-grayscale-100"
        />
        <div>
          <HighlightText
            inline
            text={`The egg relaxed me, prolonged my life, helped me feel good, but feeling good meant something 
              else today than it used to. It helped me`}
            hoverClassName="text-grayscale-100"
          />
          <Link
            onClick={() => {
              setPhase(1);
            }}
            to={'/innocence'}
          >
            <HighlightText
              inline
              text={'remember'}
              hoverClassName="tracking-widest text-primary-dark"
            />
          </Link>
          <HighlightText
            inline
            text={`my feelings then, too. But no amount of egg could revive what I felt then.`}
            hoverClassName="text-grayscale-100"
          />
        </div>
      </Passage>
    </>
  );
}
