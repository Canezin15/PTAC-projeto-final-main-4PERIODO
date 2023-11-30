import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'


export default function Cadastro(){
   //Objetos
   const [titulo, setTitulo] = useState("")
   const [descricao, setDescricao] = useState("")
   const [tipo, setTipo] = useState("")
   const [canal, setCanal] = useState("")
   const [data, setData] = useState("")
   const [link, setLink] = useState("")
   const [lista, setLista] = useState("")
   const [id, setId] = useState(  (listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1)  )
   const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || []
   
   useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista])


    const salvar = (e) => {
            e.preventDefault()
            setLista([...lista, {
        titulo:titulo,
        descricao:descricao,
        tipo:tipo,
        canal:canal,
        data:data,
        link:link,
        id:id
    }]);
     
    setTitulo("")
    setDescricao("")
    setTipo("")
    setCanal("")
    setData("")
    setLink("")
    setId(id + 1)

    }
    return(
       <h1></h1> 
    
    );
}
