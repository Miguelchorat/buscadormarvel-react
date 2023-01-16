import './sass/App.sass';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Encabezado from './componentes/Encabezado';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import Listado_comic from './componentes/Listado_comic';
import Listado_personaje from './componentes/Listado_personaje';
import Listado_serie from './componentes/Listado_serie';
import Informacion from './componentes/Informacion';
import NotFound from './componentes/NotFound';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <Router>
      <Encabezado/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/busqueda_comics" element={<Listado_comic/>}/>
        <Route path="/busqueda_personajes" element={<Listado_personaje/>}/>
        <Route path="/busqueda_series" element={<Listado_serie/>}/>
        <Route path="/informacion" element={<Informacion/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
