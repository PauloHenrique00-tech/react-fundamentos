import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import Saudacao from "./Saudacao";
import cursos from "../../data/cursos";
import ListaCursos from "../ListaCursos/ListaCursos";
import { useEffect, useState } from "react";

export default function Conteudo() {
  /* Definindo o state para categoria ativa/selecionada, 
  podendo ser null (valor padrão, inicial) ou string
  (quando uma categoria for selecionada) */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  /* Trocando o title da página conforme a categoria escolhida */
  useEffect(() => {
    document.title = categoriaAtiva
      ? categoriaAtiva + "| Meu App React"
      : "Meu App React";
  }, [categoriaAtiva]);

  const categoriasUnicas = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <>
      <section>
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Paulo" classe="bg-emerald-100" />

        <p>Este é um exemplo de aplicação React.</p>

        {categoriasUnicas.map((categoria, index) => {
          return (
            <button
              key={index}
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mx-1 bg-amber-200 
            hover:bg-green-300"
            >
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <>
            <button
              onClick={() => setCategoriaAtiva(null)}
              className="px-2 py-1 rounded bg-red-300"
            >
              Limpar
            </button>
            <p>
              Categoria selecionada: <b>{categoriaAtiva}</b>
            </p>
          </>
        )}

        <ListaCursos categoria={categoriaAtiva} />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </>
  );
}
