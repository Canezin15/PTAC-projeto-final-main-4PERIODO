import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cadastro.css";
import Menu from "../Componentes/Menu";

export default function Cadastro() {
  //Objetos
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [canal, setCanal] = useState("");
  const [data, setData] = useState("");
  const [link, setLink] = useState("");
  const [lista, setLista] = useState(listaLocalStorage);
  const [id, setId] = useState(
    listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1
  );

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const navigate = useNavigate();

  const salvar = async(e) => {
    e.preventDefault();
    await setLista([
      ...lista,
      {
        titulo: titulo,
        descricao: descricao,
        tipo: tipo,
        canal: canal,
        data: data,
        link: link,
        id: id,
      },
    ]);

    setTitulo("");
    setDescricao("");
    setTipo("");
    setCanal("");
    setData("");
    setLink("");
    setId(id + 1);
    navigate("/")
  };

  return (
    <div>
      <Menu />

      <div className="container-1">
        <h1>Cadastrar Tutoriais</h1>

        <form onSubmit={salvar}>
          <h2 class="subTitulo">Titulo</h2>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />

          <h2 class="subTitulo">Descrição</h2>
          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <h2 class="subTitulo">Tipo de Tutorial</h2>
          <input value={tipo} onChange={(e) => setTipo(e.target.value)} />

          <h2 class="subTitulo">Canal</h2>
          <input value={canal} onChange={(e) => setCanal(e.target.value)} />

          <h2 class="subTitulo">Data</h2>
          <input value={data} onChange={(e) => setData(e.target.value)} />

          <h2 class="subTitulo">Link</h2>
          <input value={link} onChange={(e) => setLink(e.target.value)} />

          <h2 class="subTitulo">ID</h2>
          <input value={id} onChange={(e) => setId(e.target.value)} />

          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
