import { type PropsWithChildren } from 'react';

export default function Passage({ children }: PropsWithChildren) {
  return <div className="rounded-xl bg-white p-4">{children}</div>;
}
