import React from "react";
import "../stylos/citas.css";

function Citas() {
    return (
        <div className="contenedor">
            <div className="logo">
                <a href="./home-index.html">
                    <img src="./img/clinica13-removebg-preview.png" alt="Logo" className="logo" />
                </a>
            </div>

            <form>
                <h2 className="titulo">Programar Cita</h2>

                <div className="input-fila">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Nombre" />
                </div>

                <div className="input-fila">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Apellido" />
                </div>

                <div className="input-fila">
                    <i className="fas fa-paw"></i>
                    <input type="text" placeholder="Nombre mascota" />
                </div>

                <div className="input-fila">
                    <i className="fas fa-paw"></i>
                    <label htmlFor="genero-masculino">
                        <input type="checkbox" id="genero-masculino" name="genero" value="masculino" />
                        Masculino
                    </label>
                </div>

                <div className="input-fila">
                    <i className="fas fa-paw"></i>
                    <label htmlFor="genero-femenino">
                        <input type="checkbox" id="genero-femenino" name="genero" value="femenino" />
                        Femenino
                    </label>
                </div>

                <div className="input-fila">
                    <i className="fas fa-calendar-days"></i>
                    <label htmlFor="fecha-hora">Fecha y Hora</label>
                    <input type="datetime-local" id="fecha-hora" name="fecha-hora" />
                </div>

                <div className="input-fila">
                    <i className="fas fa-search"></i>
                    <input type="text" id="opciones" name="opciones" list="opciones-lista" placeholder="Selecciona una opción" />
                    <datalist id="opciones-lista">
                        <option value="Baño" />
                        <option value="Vacunación" />
                        <option value="Corte de pelo" />
                        <option value="Cirugía" />
                    </datalist>
                </div>

                <input type="submit" value="Programar cita" className="boton" />
            </form>
        </div>
    );
}

export default Citas;
