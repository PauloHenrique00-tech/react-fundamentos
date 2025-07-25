import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre | Meu App React";
  }, []);
  return (
    <section>
      <h2>Sobre nossa empresa</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
        perspiciatis. Odit repudiandae blanditiis magni perspiciatis nesciunt
        veniam dignissimos fugit! Eos tempora quas temporibus nobis earum? Sint
        voluptatibus quaerat odio quis?
      </p>
    </section>
  );
}
