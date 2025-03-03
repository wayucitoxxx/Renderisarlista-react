import React from 'react';
import { useState, useEffect } from 'react';
import '../Stylos/Renderizarlista.css';

export function Renderizarlista(url) {
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setDatos(data))
            .catch(error => setError(error));
    }, [url]);
    return(
        {datos, error}
    );
}