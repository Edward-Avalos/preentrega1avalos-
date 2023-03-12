import React from 'react'

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
      </div>
      </nav>
    </div>
  )
}
