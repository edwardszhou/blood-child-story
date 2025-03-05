import { Characters } from '@/lib/constants';
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

export const StoryContext = createContext<{
  phase: number;
  setPhase: Dispatch<SetStateAction<number>>;
}>(null as any);

export const StoryContextProvider = ({
  initialPhase,
  children
}: {
  initialPhase: number;
  children?: ReactNode;
}) => {
  const [phase, setPhase] = useState(initialPhase);
  const [inMemory, setInMemory] = useState(false);
  const [characterTime, setCharacterTime] = useState<{ [key in keyof typeof Characters]: number }>({
    "T'Gatoi": 0,
    Mother: 0,
    Qui: 0,
    'Xuan Hoa': 0
  });

  return <StoryContext.Provider value={{ phase, setPhase }}>{children}</StoryContext.Provider>;
};
