import { Link } from "react-router-dom";
import { useFetch } from "../useFetch"; 
import { useState } from "react";

export function Characters() {
    const [name, setName] = useState('');
    const [status, setStatus] = useState(''); // 1. Nuevo estado para el status
    const [species, setSpecies] = useState(''); // (Opcional) Nuevo estado para la especie

    // 2. CONSTRUIMOS LA URL DINÁMICA
    // Cada vez que 'name' o 'status' cambien, esta URL cambia.
    // Y como tu useFetch tiene [url] en su dependencia, ¡se vuelve a ejecutar solo!
    const API_URL = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}`; // Esto es mucho más eficiente que usar una lista filtrada porque la url es dinámica y el servidor busca exactamente la url pasada

    // Usamos el hook aquí
    const { data } = useFetch(API_URL);

    const personajes = data?.results;

    return (
        <div className="p-10">
            {/* Botón para regresar al Home */}
            <Link to="/" className="mb-5 inline-block text-blue-400 hover:text-blue-300">
                ← Volver al inicio
            </Link>

            <h2 className="text-3xl mb-8 font-bold text-center">Personajes</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                {/* Input Nombre */}
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    className="bg-slate-800 rounded border border-slate-600 text-white p-3 focus:outline-none focus:border-blue-500" 
                    placeholder="🔍 Nombre..." 
                />

                {/* Select Estado */}
                <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="bg-slate-800 rounded border border-slate-600 text-white p-3 focus:outline-none focus:border-blue-500"

                >
                    <option value="">Todos los estados</option>
                    <option value="alive">Vivo (Alive)</option>
                    <option value="dead">Muerto (Dead)</option>
                    <option value="unknown">Desconocido (Unknown)</option>
                </select>

                {/* Select Especie (Extra)*/}
                <select 
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
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
                    ¡No se encontró a nadie con esos datos 😢!
                </p>
            )}

            {/* Grid para mostrar los personajes bonitos */}
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {personajes?.map((item) => (
                    <li key={item.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                        <img src={item.image} alt={item.name} className="w-full h-auto"/>
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <ul className={item.status === 'Alive' ? 'text-green-400' : 'text-red-400'}>
                                <li>- Estado: {item.status}</li>
                                <li>- Especie: {item.species}</li>
                            </ul>
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