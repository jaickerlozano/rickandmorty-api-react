import { Link } from "react-router-dom";
import { useFetch } from "../useFetch"; 
import { useState, useEffect } from "react";

export function Characters() {
    const [name, setName] = useState(''); 
    const [status, setStatus] = useState(''); 
    const [species, setSpecies] = useState(''); 
    const [page, setPage] = useState(1);
    const [favorites, setFavorites] = useState([]);

    // EFECTO: Al cargar, leemos los favoritos guardados
    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavs);
    }, []);

    // 3. LA FUNCIÓN MÁGICA: Agregar o Quitar
    const toggleFavorite = (personaje) => {
        // Revisamos si ya existe
        const isFavorite = favorites.some(fav => fav.id === personaje.id);
        
        let newFavorites;
        if (isFavorite) {
            // Si existe, lo sacamos (filtro todos MENOS ese)
            newFavorites = favorites.filter(fav => fav.id !== personaje.id);
        } else {
            // Si no existe, lo agregamos al array
            newFavorites = [...favorites, personaje];
        }

        setFavorites(newFavorites);
        // Guardamos en el bolsillo
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    // Función auxiliar para saber si un personaje es favorito (para pintar el corazón)
    const isFavorite = (id) => favorites.some(fav => fav.id === id);

    const API_URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}`;

    const { data } = useFetch(API_URL);
    const personajes = data?.results; 
    
    // Obtenemos la info de paginación (para saber si hay next/prev)
    const info = data?.info;

    // 3. FUNCIONES PARA CAMBIAR DE PÁGINA
    const handleNext = () => setPage(page + 1);
    const handlePrev = () => setPage(page - 1);

    // 4. FUNCIONES DE FILTRO (IMPORTANTE: Resetear página a 1)
    const handleNameChange = (e) => {
        setName(e.target.value);
        setPage(1); // Si escribo, vuelvo a la pág 1
    }
    
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        setPage(1); // Si cambio filtro, vuelvo a la pág 1
    }

    const handleSpeciesChange = (e) => {
        setSpecies(e.target.value);
        setPage(1); // Si cambio filtro, vuelvo a la pág 1
    }

    return (
        <div className="p-10">
            <Link to="/" className="mb-5 inline-block text-blue-400 hover:text-blue-300">
                ← Volver al inicio
            </Link>

            <h2 className="text-3xl mb-8 font-bold text-center">Personajes</h2>
            
            {/* FILTROS */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <input 
                    value={name}
                    onChange={handleNameChange} // Usamos la nueva función
                    type="text" 
                    className="bg-slate-800 rounded border border-slate-600 text-white p-3 focus:outline-none focus:border-blue-500" 
                    placeholder="🔍 Nombre..." 
                />

                <select 
                    value={status}
                    onChange={handleStatusChange} // Usamos la nueva función
                    className="bg-slate-800 rounded border border-slate-600 text-white p-3 focus:outline-none focus:border-blue-500"
                >
                    <option value="">Todos los estados</option>
                    <option value="alive">Vivo (Alive)</option>
                    <option value="dead">Muerto (Dead)</option>
                    <option value="unknown">Desconocido (Unknown)</option>
                </select>

                <select 
                    value={species}
                    onChange={handleSpeciesChange} // Usamos la nueva función
                    className="bg-slate-800 rounded border border-slate-600 text-white p-3 focus:outline-none focus:border-blue-500"
                >
                    <option value="">Todas las especies</option>
                    <option value="human">Humano</option>
                    <option value="alien">Alien</option>
                    <option value="robot">Robot</option>
                </select>
            </div>

            {!personajes && (
                <p className="text-center text-red-400 text-xl">
                    No se encontró a nadie con esos datos 😢
                </p>
            )}

            {/* LISTA DE PERSONAJES */}
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {personajes?.map((item) => (
                    <li key={item.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition relative">
                        <img src={item.image} alt={item.name} className="w-full h-auto"/>
                        
                        {/* 4. BOTÓN DE FAVORITO (Corazón) */}
                        <button 
                            onClick={() => toggleFavorite(item)}
                            className="absolute top-2 right-2 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition text-2xl"
                        >
                            {isFavorite(item.id) ? '❤️' : '🤍'}
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

            {/* 5. BOTONES DE PAGINACIÓN */}
            {/* Solo mostramos la paginación si hay personajes */}
            {personajes && (
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