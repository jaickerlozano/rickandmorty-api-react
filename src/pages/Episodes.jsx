import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
import { useState } from "react";

export function Episodes() {
    const [name, setName] = useState('');
    // const [episode, setEpisode] = useState(''); // Opcional por si se quiere filtrar por código de episodio
    const [page, setPage] = useState(1);

    const API_URL = `https://rickandmortyapi.com/api/episode/?page=${page}&name=${name}`;
    const { data } = useFetch(API_URL);
    const episodes = data?.results;

    const info = data?.info;

    // FUNCIONES PARA CAMBIAR DE PÁGINA
    const handleNext = () => setPage(page + 1);
    const handlePrev = () => setPage(page - 1);

    // FUNCIONES DE FILTRO (IMPORTANTE: Resetear página a 1)
    const handleNameChange = (e) => {
        setName(e.target.value);
        setPage(1); // Si escribo, vuelvo a la pág 1
    }

    return (
        <div className="p-10">
            <Link to="/" className="mb-5 inline-block text-blue-400 hover:text-blue-300">
                ← Volver al inicio
            </Link>

            <h2 className="text-3xl mb-8 font-bold text-center">Episodios</h2>

            {/* Input de Búsqueda */}
            <div className="flex justify-center mb-8">
                <input 
                    value={name}
                    onChange={handleNameChange}
                    type="text" 
                    placeholder="Buscar episodio..."
                    className="p-2 rounded bg-slate-700 text-white w-64 border border-slate-600"
                />
            </div>

            {!episodes && (
                <p className="text-center text-red-400 text-xl">
                    No se encontró ningún episodio con esos datos 😢
                </p>
            )}

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {episodes?.map((epi) => (
                        <li key={epi.id} className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">
                                {epi.episode}: {epi.name}
                            </h3>
                            <p className="text-gray-300 mb-4">📅 {epi.air_date}</p>
                            
                            {/* Obtención de los personajes */}
                            <div>
                                <p className="font-bold text-sm mb-2 text-gray-400">Personajes en este episodio:</p>
                                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2">
                                    {epi.characters.slice(0, 10).map((urlCharacter) => {
                                        // Se cortamos la URL por los '/' y agarramos el último pedazo (el ID)
                                        const characterId = urlCharacter.split("/").pop();
                                        
                                        return (
                                            <Link 
                                                key={characterId} 
                                                to={`/personaje/${characterId}`}
                                                className="bg-slate-700 hover:bg-blue-600 text-xs text-white px-2 py-1 rounded transition"
                                            >
                                                Personaje {characterId}
                                            </Link>
                                        )
                                    })}
                                    {/* Si hay muchos, ponemos un aviso */}
                                    {epi.characters.length > 10 && (
                                        <span className="text-xs text-gray-500 flex items-center">
                                            ... y {epi.characters.length - 10} más
                                        </span>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* 5. BOTONES DE PAGINACIÓN */}
            {/* Solo mostramos la paginación si hay personajes */}
            {episodes && (
                <div className="flex justify-center items-center gap-4 pb-10">
                    <button 
                        onClick={handlePrev}
                        disabled={!info?.prev} // Desactivar si no hay página anterior
                        className={`px-4 py-2 rounded font-bold ${!info?.prev ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                    >
                        Anterior
                    </button>

                    <span className="text-xl font-bold">
                        Página {page} de {info?.pages}
                    </span>

                    <button 
                        onClick={handleNext}
                        disabled={!info?.next} // Desactivar si no hay página siguiente
                        className={`px-4 py-2 rounded font-bold ${!info?.next ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    )
}