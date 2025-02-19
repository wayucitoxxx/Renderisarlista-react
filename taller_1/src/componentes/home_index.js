import React from "react";
import "../stylos/home_index.css";

function Home_index() {
    return (
        <html lang="en">

            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"/>
                    {/* <!--se trae la libreria fontawesome para iconos...--> */}
                    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
                    integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"
                    crossorigin="anonymous"></script>
                <title> Home Little Paws </title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </head>

            <body class="p-3 m-0 border-0 bd-example m-0 border-0">

                {/* <!-- Example Code --> */}
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="./home-index.html"><img src={require(`../img/clinica13-removebg-preview.png`)} alt="" width="70%"/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="./home-index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"></a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Servicios
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="./citas.html">Citas</a></li>
                                        <li><a class="dropdown-item" href="./adopcion.html">Adopciones</a></li>
                                        <li>
                                            <hr class="dropdown-divider"/>
                                        </li>
                                        <li><a class="dropdown-item" href="#contact">contactenos</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"  href="./index_log_in_up.html">Usuario</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* <!-- End Example Code --> */}

                <div class="contenedor">
                    {/* <!-- Contenedor de la Imagen --> */}
                    <div class="imagen-container">
                        <img src={require(`../img/Tres-perros-de-pie.jpg`)} alt="Imagen de perros"/>
                    </div>

                    {/* <!-- Contenedor del Mensaje --> */}
                    <div class="mensaje-container">
                        <h1>Bienvenido a Little Paws</h1>
                        <p>
                            En Little Paws, nos preocupamos por el bienestar y la felicidad de tus mascotas. Ofrecemos servicios de
                            calidad que garantizan el cuidado que ellos merecen. ¡Conoce más sobre nosotros y nuestros servicios
                            diseñados para tu mejor amigo!
                        </p>
                    </div>
                </div>

                {/* <!-- Footer --> */}
                <footer class="footer" id="contact">
                    <div class="contact-info">
                        <h3>Contacto</h3>
                        <p>Dirección: Calle Ficticia 123, Ciudad, País</p>
                        <p>Teléfono: +123 456 789</p>
                        <p>Email: contacto@littlepaws.com</p>
                    </div>

                    <div class="social-media">
                        <h3>Redes Sociales</h3>
                        <ul>
                            <li><i class="fab fa-facebook"></i><a href="#">Facebook</a></li>
                            <li><i class="fab fa-instagram"></i><a href="#">Instagram</a></li>
                            <li><i class="fab fa-twitter"></i><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </footer>

            </body>

        </html>
    );
}

export default Home_index;