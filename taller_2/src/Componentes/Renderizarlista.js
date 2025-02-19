import React from 'react';
import { useState, useEffect } from 'react';
import '../Stylos/Renderizarlista.css';

export function Renderizarlista(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error))
    }, [url]);
    return(
        {data, error}
    );
}