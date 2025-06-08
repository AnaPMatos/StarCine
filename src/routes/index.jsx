import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Perfil from '../pages/Perfil';
import CategoriaAnime from '../pages/CategoriaAnime';
import CategoriaFilme from '../pages/CategoriaFilme';
import CategoriaSerie from '../pages/CategoriaSerie';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/CategoriaAnime" element={<CategoriaAnime />} />
                <Route path="/CategoriaFilme" element={<CategoriaFilme />} />
                <Route path="/CategoriaSerie" element={<CategoriaSerie />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
