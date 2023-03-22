import React from 'react'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { cartQuantity } from '../cartQuantity/cartQuantity';
import { openCart } from '../openCart/openCart';

export const NadvarComponent = () => {
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tienda El Mirador</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Verdura
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Lechuga</a></li>
                <li><a class="dropdown-item" href="#">Tomate</a></li>
                <li><a class="dropdown-item" href="#">Zanahoria</a></li>
              </ul>
            </li>
          </ul>
        </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bebidas
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Guarana</a></li>
                <li><a class="dropdown-item" href="#">KR</a></li>
                <li><a class="dropdown-item" href="#">Inkacola</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Aseo
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Cepillo</a></li>
              <li><a class="dropdown-item" href="#">Shanpoo</a></li>
              <li><a class="dropdown-item" href="#">Jabon</a></li>
            </ul>
          </li>
        </ul>
      </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Escolar
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Lapicero</a></li>
              <li><a class="dropdown-item" href="#">Borrador</a></li>
              <li><a class="dropdown-item" href="#">Tajador</a></li>
            </ul>
          </li>
        </ul>
      </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Enlatados
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Atun</a></li>
              <li><a class="dropdown-item" href="#">Leche</a></li>
              <li><a class="dropdown-item" href="#">Cervesa</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Otros
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Fideo</a></li>
            <li><a class="dropdown-item" href="#">Sopa Instantanea</a></li>
            <li><a class="dropdown-item" href="#">Matamosca</a></li>
            <li><a class="dropdown-item" href="#">Insecticida</a></li>
            <li><a class="dropdown-item" href="#">Cargadores</a></li>
            <li><a class="dropdown-item" href="#">Focos</a></li>
            <li><a class="dropdown-item" href="#">Dulces</a></li>
            <li><a class="dropdown-item" href="#">Encendedor</a></li>
            <li><a class="dropdown-item" href="#">Colonia</a></li>
          </ul>
        </li>
      </ul>
      </div>
      <div>
      <button
            onClick=""
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
        >
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>

        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%, 25%)",
          }}
        >
          3
        </div></button>
            
      </div>
    </div>
    </nav>
    </div>
  )
}
