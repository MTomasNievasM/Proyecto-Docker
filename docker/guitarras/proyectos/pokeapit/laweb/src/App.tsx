import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import PokemonGenPage from "./pages/Pokemon/PokemonGenPage";
import DigimonPage from "./pages/Digimon/DigimonPage"; 
import Error404 from "./pages/Error404/Error404";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* El Home */}
        <Route path="/" element={<Home />} />

        {/* Para escoger generacion con :numero de gen de Pokémon */}
        <Route path="/gen/:num" element={<PokemonGenPage />} />

        {/* La ruta de Digimon */}
        <Route path="/digimon" element={<DigimonPage />} />

        {/* Redirección para rutas inexistentes usando el elemento  404. Este hara referencia a la foto*/}
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </>
  );
}
