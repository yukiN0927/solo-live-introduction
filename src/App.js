import './App.css';
import Top from './pages/Top';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mao from './members/mao'

function App() {
  const defaultUrl = "solo-live-introduction"
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${defaultUrl}/top`} element={<Top />} />
        <Route path={`/${defaultUrl}/mao`} element={<Mao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;