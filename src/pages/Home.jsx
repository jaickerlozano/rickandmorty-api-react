import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <h1 className='mb-10 text-5xl font-bold text-blue-400'>
                Rick and Morty App
            </h1>
            
            <nav className="flex gap-6">
                {/* Este Link te lleva a la ruta "/personajes" que definimos en App.jsx */}
                <Link to="/personajes" className="border-2 border-blue-500 rounded-xl px-6 py-3 bg-blue-900/50 hover:bg-blue-800 transition font-semibold text-lg">
                    Personajes
                </Link>

                <Link to="/episodios" className="border-2 border-blue-500 rounded-xl px-6 py-3 bg-blue-900/50 hover:bg-blue-800 transition font-semibold text-lg">
                    Episodios
                </Link>

                {/* Estos botones no harán nada hasta que crees las rutas en App.jsx */}
                <Link to="/ubicaciones" className="border-2 border-blue-500 rounded-xl px-6 py-3 bg-blue-900/50 hover:bg-blue-800 transition font-semibold text-lg">
                    Ubicaciones
                </Link>
            </nav>
        </div>
    )
}