import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav>
        <h1 class="logo">Faça Você Mesmo</h1>

        <ul class="nav-list">

          <Link to="/">
            <li class="logo-link">
              <a class="logo-link">Home</a>
            </li>
          </Link>

          <Link to="/cadastro">
            <li class="logo-link">
              <a class="logo-link">Cadastrar</a>
            </li>
          </Link>

          <Link to="/destaque">
            <li class="logo-link">
              <a class="logo-link">Destaque</a>
            </li>
          </Link>
          
        </ul>

        <div class="menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
}
