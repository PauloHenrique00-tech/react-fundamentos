import type { CSSProperties } from "react";

const estilosrodape: CSSProperties = {
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <>
      <footer style={estilosrodape}>
        <h2>Pequeno site criado com React</h2>
        <p style={{ color: "red", fontWeight: "bold" }}>
          Desenvolvido por <b>Paulo</b> &copy; 2025
        </p>
      </footer>
      <hr />
      <p className="outro-texto">Qualquer coisa...</p>
      <hr />
    </>
  );
}
