import Artigo from "./Artigo/Artigo";
import AvisoImporante from "./AvisoImportante/AvisoImporante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <Saudacao nome="Paulo" />
        <p>Este é um exemplo de aplicação React.</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>

      <DicaDoDia />

      <AvisoImporante />
    </main>
  );
}
