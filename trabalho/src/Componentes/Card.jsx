import "./Card.css";

export default function Card({ video }) {
  return (

      <div>

        <div class="card">

          <div class="card-header">

            <iframe
              width="350"
              height="300"
              src={`https://www.youtube.com/embed/${video.link.slice(17)}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
         
          </div>

          <div class="card-body">
           
            <h2 class="card-titulo">{video.titulo}</h2>
          </div>

          <div class="card-footer">
            <a href="/">Ver mais</a>
          </div>
        </div>
      </div>
    
    
   
  );
}
