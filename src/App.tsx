import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";
import Qualificacoes from "./Pages/Qualificações";
import Sobre from "./Pages/Sobre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
      <Routes>
        <Route path="/Projetos" element={<Projetos />} />
      </Routes>
      <Routes>
        <Route path="/Qualificacoes" element={<Qualificacoes />} />
      </Routes>
      <Routes>
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
