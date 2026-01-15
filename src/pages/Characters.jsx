import { Link } from "react-router-dom";
import { useFetch } from "../useFetch"; 

export function Characters() {
    // Usamos el hook aquí
    const { data } = useFetch("https://rickandmortyapi.com/api/character");

    return (
        <div className="p-10">
            {/* Botón para regresar al Home */}
            <Link to="/" className="mb-5 inline-block text-blue-400 hover:text-blue-300">
                ← Volver al inicio
            </Link>

            <h2 className="text-3xl mb-8 font-bold text-center">Personajes</h2>
            
            {/* Grid para mostrar los personajes bonitos */}
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.results?.map((item) => (
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