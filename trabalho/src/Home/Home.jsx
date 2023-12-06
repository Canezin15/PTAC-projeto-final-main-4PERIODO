import Menu from "../Componentes/Menu";

export default function Home() {
  const lista = JSON.parse(localStorage.getItem("Lista"));

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

      {lista.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
}
