import './Menu.css'
import React  from 'react'


export default function Menu(){
    return(

        <header>
        
         <nav>
           <h1 class="logo">Central de Tutoriais DIY (Faça Você Mesmo):</h1>
           <ul class="nav-list">
             <li class="logo-link">Home</li>
             <li class="logo-link">Cadastrar</li>
             <li class="logo-link">Destaque</li>
           </ul>

           <div class="menu">
             <span class="bar"></span>
             <span class="bar"></span>
             <span class="bar"></span>
           </div>
        
         </nav>
        
        </header>
    
   )

}



