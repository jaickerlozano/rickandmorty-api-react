// components/Character.jsx
import { Link, useParams } from "react-router-dom"; // 1. Importamos useParams
import { useFetch } from "../useFetch"; 

export function Character() {
    // 2. Agarramos el ID de la URL (ej: 1, 2, 100)
    const { id } = useParams(); 
    
    // 3. Hacemos fetch directo a ese ID
    const { data } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);

    // Si la data no ha llegado, mostramos un cargando
    if (!data) return <div className="text-center mt-10">Cargando personaje...</div>;

    // 4.- Lista de Episodios en los que aparece el personaje
    const episodios = data?.episode.map((epi) => {
        return epi.match(/\d+/g);
    }).join(', ');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10">
            
            <Link to="/personajes" className="mb-5 text-blue-400 hover:text-blue-300">
                ← Volver a la lista
            </Link>

            {/* Tarjeta individual centrada */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-lg w-full border border-slate-700">
                <img src={data.image} alt={data.name} className="w-full object-cover"/>
                
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2 text-white">{data.name}</h1>
                    
                    <div className="space-y-2 text-gray-300">
                        <p><span className="font-bold text-gray-400">Estado:</span> {data.status}</p>
                        <p><span className="font-bold text-gray-400">Especie:</span> {data.species}</p>
                        <p><span className="font-bold text-gray-400">Género:</span> {data.gender}</p>
                        <p><span className="font-bold text-gray-400">Origen:</span> {data.origin?.name}</p>
                        <p><span className="font-bold text-gray-400">Ubicación:</span> {data.location?.name}</p>
                        <p><span className="font-bold text-gray-400">Episodios en los que aparece:</span> {episodios} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}