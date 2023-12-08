import { Link } from "react-router-dom";

export default function DetalheCard({ video }) {
  return (
    <div>
      <p>{video.titulo}</p>
      <p>{video.descricao}</p>
      <p>{video.tipo}</p>
      <p>{video.canal}</p>
      <p>{video.data}</p>

      <iframe
        width="800"
        height="480"
        src={`https://www.youtube.com/embed/${video.link.slice(17)}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
        </iframe>

    </div>
  );
}
