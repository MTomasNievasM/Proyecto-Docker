import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App'
import Contenido from './components/Contenido/Contenido'; 
import NotFoundPage from './pages/NotFoundPage';
import FotosPage from './pages/FotosPage';
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import PorQueElegirnosPage from './pages/PorQueElegirnosPage';
import NoticiasPage from './pages/NoticiasPage';
import TiendaPage from './pages/TiendaPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [       
      {
        index: true,  
        element: <Contenido />, 
      },
      {
        path: "contacto", 
        
        element: <NotFoundPage />,
      },
      {
        path: "servicios", 
        element: <FotosPage />,
      },
      {
        path: "sobre-nosotros",
        element: <SobreNosotrosPage />,
      },
      {
        path: "por-que-elegirnos",
        element: <PorQueElegirnosPage />,
      },
      {
        path: "noticias",
        element: <NoticiasPage />,
      },
      {
        path: "tienda",
        element: <TiendaPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
    <RouterProvider router={router} />
  </StrictMode>,
)