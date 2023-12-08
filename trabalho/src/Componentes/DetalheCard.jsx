import { Link } from "react-router-dom";
import "./DetalheCard.css";
export default function DetalheCard({ video }) {
  return (
    <div>

      <div class="content">
        <div class="left-side">
          <h2>{video.titulo}</h2>
          <h2>Canal: {video.canal}</h2>
          <h2>Gênero {video.tipo}</h2>
          <p>{video.data}</p>
          <p>Descricao{video.descricao}</p>
        </div>

        <div class="iframe">
          <iframe id="video" className="iframe2"
            width="450"
            height="600"
            src={`https://www.youtube.com/embed/${video.link.slice(17)}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
            </iframe>
        </div>
        
      </div>
    </div>
  );
}
