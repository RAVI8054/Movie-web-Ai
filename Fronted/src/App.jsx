
import { Routes, Route } from 'react-router-dom';

import Chat from "./Componets/Chat";
import Mainpage from "./Componets/Mainpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
