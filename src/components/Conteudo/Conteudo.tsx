import Artigo from "./Artigo/Artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";

import cursos from "../../data/cursos";
import ListaCursos from "../ListaCursos/ListaCursos";

export default function Conteudo() {
  const categoriasUnicas = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Paulo" classe="bg-emerald-100" />

        <p>Este é um exemplo de aplicação React.</p>

        {categoriasUnicas.map((categoria) => {
          return (
            <button
              className="rounded py-1 px-2 mx-1 bg-amber-200 
            hover:bg-green-300"
            >
              {categoria}
            </button>
          );
        })}

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
