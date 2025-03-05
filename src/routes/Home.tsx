import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { StoryContext } from '@/lib/StoryContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function FirstHome() {
  const { setPhase } = useContext(StoryContext);
  return (
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
  );
}

function SecondHome() {
  return (
    <Passage className="flex flex-col gap-16">
      <HighlightText
        text={`I feel the bruise on my temple. It was worth it in that moment, to rid myself of Qui’s boasting. It was healing, and soon it would disappear.`}
        hoverClassName="text-grayscale-100"
      />
      <HighlightText
        text={`I wish that it would disappear with everything that came with it. I wish I didn’t have to know
      what Qui saw, or what he thought of my relationship with T’Gatoi, or what he thought about the
      Tlic in general. I didn’t want that, but now I have it, and I can’t lose it.`}
        hoverClassName="text-grayscale-100"
      />
      <div>
        <HighlightText
          inline
          text={`T’Gatoi’s embrace feels warm, but not quite warm in the same way as it did then. Only `}
          hoverClassName="text-grayscale-100"
        />
        <Link to={'/xuan-hoa'}>
          <HighlightText
            inline
            text={'my older sister'}
            hoverClassName="tracking-widest text-primary-dark"
          />
        </Link>
        <HighlightText
          inline
          text={`still felt that warm, still felt that love towards T’Gatoi without the asterisk implanted in my head that day.`}
          hoverClassName="text-grayscale-100"
        />
      </div>
    </Passage>
  );
}

function ThirdHome() {
  return (
    <Passage className="flex flex-col gap-16">
      <HighlightText
        text={`I feel the faint scar of my puncture wound from three days ago. T’Gatoi was holding me in her
      limbs still, as before. But who I am is not as before. Nor who T’Gatoi is to me.`}
        hoverClassName="text-grayscale-100"
      />
      <div>
        <HighlightText
          text={`I was not ready that day, when the door opened. I didn’t know what I would be on the other
      side of what seemed like a regular day then. `}
          inline
          hoverClassName="text-grayscale-100"
        />
        <HighlightText
          text={`Today, I know that my last night of childhood
      began with a visit home.`}
          inline
          highlightAll
          hoverClassName="text-primary-dark"
        />
      </div>
    </Passage>
  );
}

export default function Home() {
  const { phase } = useContext(StoryContext);
  return phase === 1 ? <FirstHome /> : phase === 2 ? <SecondHome /> : <ThirdHome />;
}
