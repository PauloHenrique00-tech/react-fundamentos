import { Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Container from "./components/Container/Container";
import Pagina404 from "./pages/Pagina404";

export default function App() {
  return (
    <>
      <Cabecalho />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </Container>

      <Rodape />
    </>
  );
}

/* -Crie e estilize uma nova página chamada Pagina404
- Adicione no App um novo Route com path para qualquer lugar (*) e 
que use o novo componente/pagina404
-Teste tentando acessar rotas/páginas que não existem (/servicos,/sei-la, /ect) */
