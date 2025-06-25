import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menuSite}>
      <a className={estilos.link}>Home</a>
      <a className={estilos.link}>Sobre</a>
      <a className={estilos.link}>Contato</a>
    </nav>
  );
}
