import { NadvarComponent } from "./componentes";
import "./App.css"
function App() {
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
    </div>
    </nav>
    </div>
  );
}

export default App;
