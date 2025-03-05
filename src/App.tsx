import Layout from '@/Layout';
import { StoryContextProvider } from '@/lib/StoryContext';
import BramLomas from '@/routes/BramLomas';
import Home from '@/routes/Home';
import Innocence from '@/routes/Innocence';
import Mother from '@/routes/Mother';
import Power from '@/routes/Power';
import Protection from '@/routes/Protection';
import Qui from '@/routes/Qui';
import TGatoi from '@/routes/TGatoi';
import XuanHoa from '@/routes/XuanHoa';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <StoryContextProvider initialPhase={1}>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="innocence"
            element={<Innocence />}
          />
          <Route
            path="mother"
            element={<Mother />}
          />
          <Route
            path="t-gatoi"
            element={<TGatoi />}
          />
          <Route
            path="bram-lomas"
            element={<BramLomas />}
          />
          <Route
            path="qui"
            element={<Qui />}
          />
          <Route
            path="xuan-hoa"
            element={<XuanHoa />}
          />
          <Route
            path="protection"
            element={<Protection />}
          />
          <Route
            path="power"
            element={<Power />}
          />
        </Route>
      </Routes>
    </StoryContextProvider>
  );
}
