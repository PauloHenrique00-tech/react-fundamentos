import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import cursos from "../../data/cursos";
import ListaCursos from "../ListaCursos/ListaCursos";
import { useState } from "react";

export default function Conteudo() {
  /* Definindo o state para categoria ativa/selecionada, 
  podendo ser null (valor padrão, inicial) ou string
  (quando uma categoria for selecionada) */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

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
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mx-1 bg-amber-200 
            hover:bg-green-300"
            >
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <p>
            Categoria selecionada: <b>{categoriaAtiva}</b>
          </p>
        )}

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
