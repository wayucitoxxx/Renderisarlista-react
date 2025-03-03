import React, { useState, useEffect, useRef } from "react";
import { initializeLoginFunctionality } from "../utils/log_in_utils";
import "../stylos/log_in_sing_up.css";

function Log_in_sing_up() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        initializeLoginFunctionality(setIsSignUpMode, containerRef);
    }, []);

    return (
        <div ref={containerRef} className={`contenedor ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="logo">
                <a href="./home-index.html"><img src="./img/clinica13-removebg-preview.png" alt="" className="logo" /></a>
            </div>
            <div className="contenedor">
                <div className="inicio-registro">
                    <form action="" className="inicio-in-form">
                        <h2 className="titulo">Iniciar sesion</h2>
                        <div className="input-fila">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Ususario" />
                        </div>
                        <div className="input-fila">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Contraseña" />
                        </div>
                        <p className="olvido"><a href="./olvido.html">Has olvidado la contraseña?</a></p><br />
                        <input type="submit" value="Ingresar" className="boton" />
                        <p className="social-tex">O inicia secion con: </p>
                        <div className="redes-sociales">
                            <a href="#" className="icono-social">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="" className="icono-social">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
                        <p className="cuenta-texto"> No tienes cuenta? <a href="#" id="sign-up-btn2">Sing up</a></p>
                    </form>
                    <form action="" className="registro-in-form">
                        <h2 className="titulo"> Registro </h2>
                        <div className="input-fila">
                            <i className="fa fa-user"></i>
                            <input type="text" placeholder="Ususario" />
                        </div>
                        <div className="input-fila">
                            <i className="fa fa-id-card"></i>
                            <input type="number" placeholder="Id" />
                        </div>
                        <div className="input-fila">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-fila">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Contraseña" />
                        </div>
                        <a href="./registro.html">
                            <input type="button" value="Registrarse" className="boton" />
                        </a>
                        <p className="social-tex">O inicia secion con: </p>
                        <div className="redes-sociales">
                            <a href="#" className="icono-social">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="" className="icono-social">
                                <i class="fab fa-google"></i>
                            </a>
                        </div>
                        <p className="cuenta-texto"> tienes cuenta? <a href="#" id="sign--btn2">Sing in</a></p>
                    </form>
                </div>
                <div className="paneles-contenedor">
                    <div className="panel izquierdo-panel">
                        <div className="contenido">
                            <h3> ¡Que bien! </h3>
                            <p>
                                Estas a solo unos pasos de darle una mejor vida a tu peludo que esperas para
                                registrarte, si ya tienes cuenta ingresa aqui.
                            </p>
                            <button className="boton" id="sign-in-btn"> Ingresar </button>
                        </div>
                        <img src="./imagenes/undraw_cat.svg" alt="" className="imagen" />
                    </div>
                    <div className="panel derecho-panel">
                        <div className="contenido">
                            <h3>Bienvenido</h3>
                            <p>
                                Que alegria tenerte de vuelta, si eres nuevo por aqui
                                has click aqui para registrarte.
                            </p>
                            <button className="boton" id="sign-up-btn"> Registrarse </button>
                        </div>
                        <img src="./imagenes/undraw_cat.svg" alt="" className="imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Log_in_sing_up;