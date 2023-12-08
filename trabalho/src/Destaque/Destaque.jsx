import { useEffect, useState } from "react";
import Menu from "../Componentes/Menu";
import Card from '../Componentes/Card'

export default function Destaque(){
  const lista = JSON.parse(localStorage.getItem("Lista")).slice(-4) || []

  return(
      <div>
          <Menu/>
      
          {lista.slice(-4).map((video) =>
              
                  
              <Card video = {video}/>
    
          )}
        
      </div>
   );
}