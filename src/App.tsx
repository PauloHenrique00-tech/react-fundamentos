import Cabecalho from "./Cabecalho";

export default function App() {
  // Comentário de uma linha
  /* Comentário de múltiplas linhas*/
  return (
    <>
      <Cabecalho />

      {/* Comentários no meio do JSX, normal ficarem entre {} */}
      {/* Ao usar outros elementos HTML no JSX, é importante 
      envolver tudo em único <> </> (Fragmento React) */}

      <main>
        <section>
          <h2>Seja bem-vindo(a) aos Fundamentos de React!</h2>
          <p>Este é um exemplo de aplicação React.</p>

          <article>
            <h3> Artigo 1 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
              praesentium harum assumenda atque exercitationem facilis commodi
              laborum quas, dicta, eveniet iste accusamus vero impedit,
              architecto rem. Fuga, culpa. Reiciendis.
            </p>
          </article>

          <article>
            <h3> Artigo 2 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
              praesentium harum assumenda atque exercitationem facilis commodi
              laborum quas, dicta, eveniet iste accusamus vero impedit,
              architecto rem. Fuga, culpa. Reiciendis.
            </p>
          </article>

          <article>
            <h3> Artigo 3 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
              praesentium harum assumenda atque exercitationem facilis commodi
              laborum quas, dicta, eveniet iste accusamus vero impedit,
              architecto rem. Fuga, culpa. Reiciendis.
            </p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Pequeno site criado com React</h2>
        <p>
          Desenvolvido por <b>Paulo</b> &copy; 2025
        </p>
      </footer>
    </>
  );
}
