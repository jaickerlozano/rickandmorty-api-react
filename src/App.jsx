import { Routes, Route } from "react-router-dom";
// 1. Importa cada uno desde SU propio archivo
import { Home } from "./pages/Home";       
import { Characters } from "./pages/Characters"; 
import { Character } from "./components/Character"; 
import { Episodes } from "./pages/Episodes";
import { Location } from "./pages/Location";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <div className="min-h-screen text-white"> 
      {/* Puse el bg aquí para que aplique a toda la app de una vez */}
      
      <Routes>
        {/* Ruta para la Landing Page (Menú) */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la página de Personajes */}
        <Route path="/personajes" element={<Characters />} />
        <Route path="/personaje/:id" element={<Character />} />
        
        {/* Ruta para la página de Episodios */}
        <Route path="/episodios" element={<Episodes />} />

        {/* Ruta para la página de Ubicaciones */}
        <Route path="/ubicaciones" element={<Location />} />

        {/* Ruta para la página de Favoritos */}
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App