import estilos from "./Artigo.module.css";
export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3> Artigo 1 de exemplo</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
        praesentium harum assumenda atque exercitationem facilis commodi laborum
        quas, dicta, eveniet iste accusamus vero impedit, architecto rem. Fuga,
        culpa. Reiciendis.
      </p>
    </article>
  );
}
