export function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-64">
            {/* Círculo animado usando Tailwind */}
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-blue-400 mt-4 font-bold text-lg animate-pulse">
                Cargando datos del multiverso...
            </p>
        </div>
    )
}