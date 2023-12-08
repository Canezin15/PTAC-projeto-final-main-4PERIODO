import { useParams } from "react-router-dom";
import CardDet from '../Componentes/CardDet';
import Menu from '../Componentes/Menu'

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));

    const atividade = lista.filter((video)=>{
    if(video.id == id){
    return video;
    }
    return null;
    }); 

    console.log(atividade[0]);

    return(
    <div>
    <Menu/>
    <CardDet video ={atividade[0]}/>
    </div>
    );  

}