import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoryContext } from './StoryContext';

export function usePhaseWall(minPhase: number) {
  const { phase, setPhase } = useContext(StoryContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (phase < minPhase) {
      setPhase(minPhase);
      // navigate('/');
    }
  }, [navigate, phase, minPhase, setPhase]);
}
