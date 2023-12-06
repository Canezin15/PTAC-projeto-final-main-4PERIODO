export default function Card({video}){
    return(
        <div>
                    <p>{video.titulo}</p>
                    <p>{video.descricao}</p>
                    <p>{video.tipo}</p>
                    <p>{video.canal}</p>
                    <p>{video.data}</p>
                    <p>{video.link}</p>
                    <p>{video.id}</p>

                    <iframe
                        width="853"
                        height="480"
                        src={
                            "https://www.youtube.com/embed/" + video.url.slice(17)}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>

        </div>
      
    )
}