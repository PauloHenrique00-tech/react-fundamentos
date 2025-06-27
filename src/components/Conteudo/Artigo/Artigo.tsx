import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  // Podemos receber a prop dados para depois desestruturar:

  const [artigo, setArtigo] = useState(false);

  const alternarCor = () => {
    setArtigo((artigo) => !artigo);
  };

  const { titulo, preco, categoria } = dados;
  return (
    <article
      className={estilos.artigo}
      style={{ backgroundColor: artigo ? "yellow" : "white" }}
      onClick={alternarCor}
    >
      <h3>{titulo}</h3>
      <p>
        <b>Categoria:</b>
        {categoria}
      </p>
      <p>Preço:{preco}</p>
    </article>
  );
}
