import { Link } from "react-router-dom";

export default function Pagina404() {
  return (
    <section className="bg-red-400 p-3 text-center">
      <h2>Ops!</h2>
      <p>404 página não encontrada!</p>
      <p>
        <Link to="/">Volte para a página inicial...</Link>
      </p>
    </section>
  );
}
