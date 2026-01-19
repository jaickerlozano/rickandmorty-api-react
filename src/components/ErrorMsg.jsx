export function ErrorMsg({ mensaje }) {
    return (
        <div className="flex justify-center items-center h-40">
            <div className="bg-red-900/50 border border-red-500 text-red-200 px-6 py-4 rounded-lg shadow-lg text-center max-w-md">
                <h3 className="text-xl font-bold mb-2">¡Wubba Lubba Dub Dub! 🚨</h3>
                <p>{mensaje || "Ocurrió un error inesperado."}</p>
            </div>
        </div>
    )
}