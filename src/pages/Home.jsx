import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate

export function Home() {
    const navigate = useNavigate();

    // Función mágica para el sonido
    const playPortalSound = (ruta) => {
        // 1. Creamos el objeto de audio apuntando a la carpeta public
        // const audio = new Audio('/portal.mp3'); 

        // Usamos una URL directa de internet
        const audio = new Audio('/portal.mp3');
        
        // 2. Le damos play
        audio.play().catch(error => console.log("El navegador bloqueó el sonido :(", error));

        // 3. Esperamos un poquito (300ms) para que se escuche antes de cambiar de página
        setTimeout(() => {
            navigate(ruta);
        }, 300);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" 
                alt="Rick and Morty Logo" 
                className="w-full max-w-lg mb-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-pulse" 
            />
            
            <nav className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                
                {/* TARJETA 1: PERSONAJES (Ahora es un div con onClick, no un Link directo) */}
                <div 
                    onClick={() => playPortalSound('/personajes')}
                    className="cursor-pointer group relative bg-slate-800/50 hover:bg-slate-800 border-2 border-blue-500/30 hover:border-blue-400 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] flex flex-col items-center"
                >
                    <span className="text-5xl mb-4 group-hover:scale-110 transition">👽</span>
                    <h2 className="text-2xl font-bold text-blue-300">Personajes</h2>
                    <p className="text-gray-400 text-sm mt-2 text-center">Explora la lista completa.</p>
                </div>

                {/* TARJETA 2: UBICACIONES */}
                <div 
                    onClick={() => playPortalSound('/ubicaciones')}
                    className="cursor-pointer group relative bg-slate-800/50 hover:bg-slate-800 border-2 border-green-500/30 hover:border-green-400 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] flex flex-col items-center"
                >
                    <span className="text-5xl mb-4 group-hover:scale-110 transition">🪐</span>
                    <h2 className="text-2xl font-bold text-green-300">Ubicaciones</h2>
                    <p className="text-gray-400 text-sm mt-2 text-center">Descubre planetas extraños.</p>
                </div>

                {/* TARJETA 3: EPISODIOS */}
                <div 
                    onClick={() => playPortalSound('/episodios')}
                    className="cursor-pointer group relative bg-slate-800/50 hover:bg-slate-800 border-2 border-pink-500/30 hover:border-pink-400 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] flex flex-col items-center"
                >
                    <span className="text-5xl mb-4 group-hover:scale-110 transition">📺</span>
                    <h2 className="text-2xl font-bold text-pink-300">Episodios</h2>
                    <p className="text-gray-400 text-sm mt-2 text-center">Revive las aventuras.</p>
                </div>

                {/* TARJETA 4: FAVORITOS */}
                <div 
                    onClick={() => playPortalSound('/favoritos')}
                    className="md:col-span-3 cursor-pointer group relative bg-yellow-900/20 hover:bg-yellow-900/40 border-2 border-yellow-500/30 hover:border-yellow-400 rounded-2xl p-6 transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] flex flex-row items-center justify-center gap-4"
                >
                    <span className="text-3xl group-hover:rotate-12 transition">⭐</span>
                    <h2 className="text-xl font-bold text-yellow-300">Mis Favoritos</h2>
                </div>
            </nav>
        </div>
    )
}