import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoryContext } from './StoryContext';

export function usePhaseWall(minPhase: number) {
  const { phase } = useContext(StoryContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (phase < 1) navigate('/');
  }, [navigate, phase]);
}
