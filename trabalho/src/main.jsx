import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './Cadastro/Cadastro'
import Home from './Home/Home'
import Destaque from './Destaque/Destaque'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
