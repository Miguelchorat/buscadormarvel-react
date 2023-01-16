import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import '../sass/components/Encabezado.sass';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import Buscador from './Buscador';

/**
 * Encabezado de la página que mostrará la navegación de la página web y el botón para acceder al menu.
 *
 * @component
 * @example
 * 
 * return (
 * 
 *   <Encabezado/>
 * )
 */
function Encabezado(){

    const [menu , setMenu ] = useState(false);
    const location = useLocation();

    /**
    * Cambia el valor del booleano que informa si el menu se tiene que mostrar o no.
    */
    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
        <header className={location.pathname=="/" ? 'encabezado encabezado--index' : 'encabezado encabezado--listado'}>
            <Link className="encabezado__logo" to="/"/>
            <div className="encabezado__explorador">
                <Buscador />
            </div>
            <nav className="encabezado__nav">
                <ul className="encabezado__nav__lista">
                    <li className={location.pathname=="/busqueda_personajes" ? 'encabezado__nav__lista__item encabezado__nav__lista__item__active' : 'encabezado__nav__lista__item'}><Link to="/busqueda_personajes" state={{busqueda: ''}}>Personajes</Link></li>
                    <li className={location.pathname=="/busqueda_comics" ? 'encabezado__nav__lista__item encabezado__nav__lista__item__active' : 'encabezado__nav__lista__item'}><Link to="/busqueda_comics" state={{busqueda: ''}}>Comics</Link></li>
                    <li className={location.pathname=="/busqueda_series" ? 'encabezado__nav__lista__item encabezado__nav__lista__item__active' : 'encabezado__nav__lista__item'}><Link to="/busqueda_series" state={{busqueda: ''}}>Series</Link></li>
                </ul>
            </nav>
            <a className="encabezado__menu" onClick={ toggleMenu }>                
                <MenuIcon className={location.pathname=="/" ? "encabezado__menu__icono" : "encabezado__menu__icono encabezado__menu__icono--alter" }/>
            </a>     
            
            <Menu menu={menu} setMenu={setMenu}/>    
            <div className={`fondo__desplegable ${ menu ? 'fondo__desplegable__activo' : ""}`} onClick={toggleMenu}></div>
        </header>

    );
}

export default Encabezado;