import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import '../sass/components/Buscador.sass';
import SearchIcon from '@mui/icons-material/Search';


const Buscador = () => {
    const location = useLocation();
    const [buscador, setBuscador] = useState('')

    const datosBuscador = (e) => {
        setBuscador(e.target.value)
    }

    const reiniciarInput = () => {
        setBuscador('')
    }

    return (
        <div className={location.pathname=="/" ? 'principal__buscador' : 'encabezado__explorador__buscador'}>
            <input type="text" value={buscador} onChange={datosBuscador} className={location.pathname=="/" ? 'principal__buscador__input' : 'encabezado__explorador__buscador__input'} placeholder="Buscar..." maxLength="72"/>
            <Link className={location.pathname=="/" ? 'principal__buscador__boton' : 'encabezado__explorador__buscador__boton'} to={location.pathname=="/" ? "busqueda_personajes" : location.pathname=="/busqueda_personajes" ? "busqueda_personajes" : location.pathname=="/busqueda_comics" ? "busqueda_comics" : location.pathname=="/busqueda_series" ? "busqueda_series" : "busqueda_personajes"} state={{busqueda: buscador}} onClick={reiniciarInput}>
                <SearchIcon className={location.pathname=="/" ? 'principal__buscador__boton__icono' : 'encabezado__explorador__buscador__boton__icono'}></SearchIcon>
            </Link>
        </div>
    )
}

export default Buscador;