import Menu from "../Componentes/Menu";
import Card from "../Componentes/Card";

export default function Home() {
  const lista = JSON.parse(localStorage.getItem("Lista")) || [];

  if (lista === null) {
    return (
      <div>
        <Menu />
      </div>
    );
  }

  return (
    <div>
      <Menu />
      <div className="container">
        {lista.map((video) => (
          <Card video={video} />
        ))}
      </div>
    </div>
  );
}
