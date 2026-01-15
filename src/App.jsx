import { Routes, Route } from "react-router-dom";
// 1. Importa cada uno desde SU propio archivo
import { Home } from "./pages/Home";       
import { Characters } from "./pages/Characters"; 

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white"> 
      {/* Puse el bg aquí para que aplique a toda la app de una vez */}
      
      <Routes>
        {/* Ruta para la Landing Page (Menú) */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la página de Personajes */}
        <Route path="/personajes" element={<Characters />} />
        
        {/* Aquí irían las futuras rutas */}
        {/* <Route path="/ubicaciones" element={<Ubicaciones />} /> */}
      </Routes>
    </div>
  )
}

export default App