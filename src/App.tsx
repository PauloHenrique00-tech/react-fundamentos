import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

export default function App() {
  // Comentário de uma linha
  /* Comentário de múltiplas linhas */
  return (
    <>
      <Cabecalho />

      {/* Comentários no meio do JSX, normal ficarem entre {} */}
      {/* Ao usar outros elementos HTML no JSX, é importante 
      envolver tudo em único <> </> (Fragmento React) */}

      <Conteudo />
      <Rodape />
    </>
  );
}
