/* Tudo que for usado dentro de componentes (imagens, fontes etc),
deve ser importado. Desta forma, no momento do build, haverá otimizações para
este conteúdo. */
import logo from "../../assets/logo-react.png";
import Menu from "./Menu/Menu";

/* Importando o módulo CSS para o componente Cabecalho */
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={estilos.topoSite}>
      <h1 className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" /> Olá React! 😊
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
