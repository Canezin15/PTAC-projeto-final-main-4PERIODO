import { useEffect, useState } from "react";
import Header from '../Componentes/Header'
import Menu from '../Componentes/Menu';


export default function Destaque(){
    const lista = JSON.parse(localStorage.getItem("Lista")).slice(-4)

return(
    <div>
        <Menu/>
    </div>
)
}