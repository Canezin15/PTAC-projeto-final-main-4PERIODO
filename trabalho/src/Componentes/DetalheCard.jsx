import { Link } from "react-router-dom";

export default function DetalheCard({ video }) {
  return (
    <div>
      <div class="container-2">
        

        <div class="left-side">
          <h2>{video.titulo}</h2>
          <h2>{video.canal}</h2>
          <h2>{video.tipo}</h2>
          <p>{video.data}</p>
          <p>{video.descricao}</p>
         
         
          
        </div>



        <div class="card-header">
          <iframe
            width="350"
            height="300"
            src={`https://www.youtube.com/embed/${video.link.slice(17)}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
