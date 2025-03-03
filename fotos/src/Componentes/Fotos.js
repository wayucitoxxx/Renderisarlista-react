import React, { useState, useEffect } from "react";
import '../Stylos/Fotos.css'// Importamos los estilos

function Photos() {
  const [fotos, setFotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10") // Obtenemos 10 imágenes
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al obtener las fotos");
        }
        return response.json();
      })
      .then(data => setFotos(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div className="fotos-container">
      {fotos.map(foto => (
        <div key={foto.id} className="foto-item">
          <img src={foto.url} alt="Gato" />
        </div>
      ))}
    </div>
  );
}

export default Photos;

