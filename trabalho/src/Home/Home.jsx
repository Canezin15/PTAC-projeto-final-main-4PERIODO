import Menu from '../Componentes/Menu';

export default function Home(){
    return(
        
        <div>
            <Menu/>
        
    
        <h1>PTAC 2 - PROJETO FINAL</h1>

        {lista.map((tutorial) =>
            <div className="tutoriais">
                <p>{tutorial.titulo}</p>
                <p>{tutorial.descricao}</p>
                <p>{tutorial.tipo}</p>
                <p>{tutorial.canal}</p>
                <p>{tutorial.data}</p>
                <p>{tutorial.link}</p>
                <p>{tutorial.id}</p>
            </div>

        )}
        
    </div>
 );
}