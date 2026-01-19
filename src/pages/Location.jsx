import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
import { useState } from "react";

export function Location() {
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);

    const API_URL = `https://rickandmortyapi.com/api/location/?page=${page}&name=${name}`;

    const { data } = useFetch(API_URL);

    const locations = data?.results;

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

            <h2 className="text-3xl mb-8 font-bold text-center">Ubicación</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                {/* Input Nombre */}
                <input 
                    value={name}
                    onChange={handleNameChange}
                    type="text" 
                    className="bg-slate-800 rounded border border-slate-600 text-white p-3 focus:outline-none focus:border-blue-500" 
                    placeholder="🔍 Nombre..." 
                />
            </div>
            {!locations && (
                <p className="text-center text-red-400 text-xl">
                    ¡No se encontró a nadie con esos datos 😢!
                </p>
            )}

            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {locations?.map((item) => (
                    <li key={item.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="font-bold text-sm mb-2 text-gray-400">Tipo: {item.type}</p>
                            <p className="font-bold text-sm mb-2 text-gray-400">Dimensión: {item.dimension}</p>
                            <div>
                                <p className="font-bold text-sm mb-2 text-gray-400">Residentes de este planeta:</p>
                                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2">
                                    {item.residents.slice(0, 10).map((urlResident) => {
                                        // Se cortamos la URL por los '/' y agarramos el último pedazo (el ID)
                                        const characterId = urlResident.split("/").pop();
                                        
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
                                    {item.residents.length > 10 && (
                                        <span className="text-xs text-gray-500 flex items-center">
                                            ... y {item.residents.length - 10} más
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* 5. BOTONES DE PAGINACIÓN */}
            {/* Solo mostramos la paginación si hay personajes */}
            {locations && (
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