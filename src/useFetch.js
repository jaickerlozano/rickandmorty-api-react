import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Arrancamos cargando
    const [error, setError] = useState(null);     // Arrancamos sin errores

    useEffect(() => {
        // Cada vez que cambia la URL, activamos el loading y limpiamos errores viejos
        setLoading(true);
        setError(null);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // OJO: La API de Rick y Morty devuelve un objeto { error: "..." } si falla (ej: 404)
                if (data.error) {
                    // Si es error 404 (no encontrado), a veces preferimos manejarlo como "data vacía"
                    // pero aquí guardaremos el error para mostrarlo si queremos.
                    setError(data.error); 
                    setData(null);
                } else {
                    setData(data);
                }
            })
            .catch((error) => {
                // Errores de red (se fue el internet, servidor caído)
                console.error("Error fetching data:", error);
                setError("Error de conexión");
            })
            .finally(() => {
                // Pase lo que pase (éxito o error), ya terminamos de cargar
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}