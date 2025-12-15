import notFound from "../../assets/404.png";
import "./Error404.css";

export default function Error404() {
  return (
    <main className="page error-page">
      <img src={notFound} alt="404 Error" className="error-img" />
      <h2>Oops! Página no encontrada</h2>
      <p>La ruta que has intentado abrir no existe.</p>
    </main>
  );
}
