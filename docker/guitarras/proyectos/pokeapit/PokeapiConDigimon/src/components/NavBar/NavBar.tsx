import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  const handleGenClick = (gen: number) => {
    navigate(`/gen/${gen}`);
    // Esta línea fuerza la recarga completa de la página para no tener que salir a otra gen para regargar pokemones
    window.location.reload();
  };

  return (
    <header className="nav">
      <nav className="nav__row">
        <NavLink to="/" className="nav__brand">Pokédex</NavLink>
        <div className="nav__links">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/gen/1" onClick={() => handleGenClick(1)}>Gen1</NavLink>
          <NavLink to="/gen/2" onClick={() => handleGenClick(2)}>Gen2</NavLink>
          <NavLink to="/gen/3" onClick={() => handleGenClick(3)}>Gen3</NavLink>
          <NavLink to="/digimon">Digimon</NavLink>
        </div>
      </nav>
    </header>
  );
}
