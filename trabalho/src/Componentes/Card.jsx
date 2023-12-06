import "./Card.css";

export default function Card({ video }) {
  return (

      <div class="">

        <div class="card">

          <div class="card-header">

            <iframe
              width="853"
              height="580"
              src={`https://www.youtube.com/embed/${video.link.slice(17)}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>

            </iframe>
         
          </div>

          <div class="card-body">
            <h3 class="card-local">{video.titulo}</h3>
            <h2 class="card-titulo">{video.descricao}</h2>
          </div>

          <div class="card-footer">
            <a href="/produtos">Ver mais</a>
          </div>
        </div>
      </div>
    
    
   
  );
}
