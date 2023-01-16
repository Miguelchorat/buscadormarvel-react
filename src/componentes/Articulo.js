import React, {useState, useEffect} from 'react';
import '../sass/components/Articulo.sass';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";

const Articulo = (props) => {
    
    return (
        <article className="principal__secciones__articulo">
            <img className="principal__secciones__articulo__icono" src={props.icono} alt="icono de la sección series"/>
            <h2 className="principal__secciones__articulo__titulo">{props.titulo}</h2>
            <p className="principal__secciones__articulo__info">{props.descripcion}</p>
            <Link className="principal__secciones__articulo__boton" to={props.enlace} state={{busqueda: ''}}>ENTRAR</Link>
        </article>
    )
};

export default Articulo;