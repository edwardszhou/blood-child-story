import HighlightText from '@/components/HighlightText';
import Passage from '@/components/Passage';
import { StoryContext } from '@/lib/StoryContext';
import { useHoverThreshold } from '@/lib/useHoverThreshold';
import { usePhaseWall } from '@/lib/usePhaseWall';
import { cn } from '@/lib/utils';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FirstQui() {
  return (
    <Passage>
      <div className="font-thought">
        <HighlightText
          inline
          text={`I remember that I used to be close with Qui. Not anymore. I remembered that I always wondered why he suddenly grew distant, why he suddenly grew to fear T’Gatoi. Like with my `}
        />
        <Link to={'/mother'}>
          <HighlightText
            inline
            text={`mother,`}
            hoverClassName={'tracking-widest text-primary-light'}
          />
        </Link>
        <HighlightText
          inline
          text={`there was something that happened.`}
        />
      </div>
    </Passage>
  );
}

function SecondQui() {
  const navigate = useNavigate();
  const { setHovered, progress } = useHoverThreshold(5, () => {
    navigate('/home');
  });
  const [fadedIn, setFadedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadedIn(true), 2000);
  }, []);
  return (
    <>
      <Passage className="font-thought flex flex-col gap-8">
        <HighlightText
          text={`“Finally found out more than you wanted to know, eh?”`}
          highlightAll
        />
        <HighlightText
          text={`I didn’t need to wonder anymore about Qui, then. Only then, when something had happened to me,
did he share that something that happened to him. That something that changed everything, made
him question reality, made me question reality at that moment. I didn’t want to.`}
        />
      </Passage>
      {progress > 0.3 && <div className="bg-grayscale-0 pointer-events-none absolute inset-0" />}
      <HighlightText
        text={`I hit him.`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        hoverClassName={cn('text-grayscale-0', progress > 0.3 && 'text-grayscale-100')}
        className={cn(
          'tran font-emphasis absolute bottom-48 left-1/2 z-20 -translate-x-1/2 text-3xl tracking-wider opacity-0 select-none',
          fadedIn && 'opacity-100',
          progress > 0.3 && 'transition-none'
        )}
      />
    </>
  );
}
export default function Qui() {
  const { phase } = useContext(StoryContext);
  usePhaseWall(1);

  return phase === 1 ? (
    <FirstQui />
  ) : phase === 2 ? (
    <SecondQui />
  ) : (
    <Passage>
      <div className="font-thought">
        <HighlightText
          inline
          text={`I remember that I used to be close with Qui. Not anymore. I remembered that I always wondered why he suddenly grew distant, why he suddenly grew to fear T’Gatoi. Like with my `}
        />
        <Link to={'/mother'}>
          <HighlightText
            inline
            text={`mother,`}
            hoverClassName={'tracking-widest text-primary-light'}
          />
        </Link>
        <HighlightText
          inline
          text={`there was something that happened.`}
        />
      </div>
    </Passage>
  );
}
