import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menuSite}>
      <a className={estilos.link} href="">
        Home
      </a>
      <a className={estilos.link} href="">
        Sobre
      </a>
      <a className={estilos.link} href="">
        Contato
      </a>
    </nav>
  );
}
