import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
    render() {
        const tiendaWebMM = this.props.tiendaWebMM;
        return (
            <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#home">{tiendaWebMM}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="home">Preguntas frecuentes</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Productos
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#something">baking-only!</a></li>
                        <li><a class="dropdown-item" href="#somethingElse">collecionables!</a></li>
                        <li><a class="dropdown-item" href="#somethingElse2">evolucion</a></li>
                    </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
            </nav>
        )
    } 
}

export default NavBar;