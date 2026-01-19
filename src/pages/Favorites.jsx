import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Al cargar la página, leemos el bolsillo (localStorage)
    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavs);
    }, []);

    // Función para eliminar de favoritos desde esta misma pantalla
    const removeFavorite = (id) => {
        const newFavorites = favorites.filter(fav => fav.id !== id);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    return (
        <div className="p-10">
            <Link to="/" className="mb-5 inline-block text-blue-400 hover:text-blue-300">
                ← Volver al inicio
            </Link>

            <h2 className="text-3xl mb-8 font-bold text-center text-yellow-400">
                Mis Favoritos ⭐
            </h2>

            {favorites.length === 0 && (
                <div className="text-center text-gray-400 mt-10">
                    <p className="text-xl">Aún no tienes favoritos.</p>
                    <Link to="/personajes" className="text-blue-400 underline mt-2 inline-block">
                        ¡Ve a agregar unos cuantos!
                    </Link>
                </div>
            )}

            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((item) => (
                    <li key={item.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition relative border border-yellow-500/50">
                        <img src={item.image} alt={item.name} className="w-full h-auto"/>
                        
                        {/* Botón para eliminar (X) */}
                        <button 
                            onClick={() => removeFavorite(item.id)}
                            className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-700 shadow-lg"
                            title="Eliminar de favoritos"
                        >
                            ✕
                        </button>

                        <div className="p-4">
                            <h3 className="text-xl font-bold truncate">{item.name}</h3>
                            <p className={item.status === 'Alive' ? 'text-green-400' : 'text-red-400'}>
                                {item.status} - {item.species}
                            </p>
                            <Link to={`/personaje/${item.id}`} className="text-blue-400 hover:underline mt-2 block">
                                Ver más información
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}