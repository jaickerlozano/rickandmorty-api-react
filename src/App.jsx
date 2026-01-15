import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Home";       
import { Characters } from "./pages/Characters"; 

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white"> 
      {/* Puse el bg aquí para que aplique a toda la app de una vez */}
      
      <Routes>
        {/* Ruta para la Landing Page (Menú) */}
        <Route path="/" element={<Index />} />

        {/* Ruta para la página de Personajes */}
        <Route path="/personajes" element={<Characters />} />
        
        {/* Aquí irían las futuras rutas */}
        {/* <Route path="/ubicaciones" element={<Ubicaciones />} /> */}
      </Routes>
    </div>
  )
}

export default App