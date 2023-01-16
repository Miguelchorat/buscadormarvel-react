import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../sass/components/Informacion.sass';
import { useNavigate } from "react-router-dom";

/**
 * Encabezado de la página de información de algun articulo del listado
 *
 * @component
 * @example
 * const props.descripcion = 'Esto es una descripcion'
 * const props.formato = 'comics'
 * const props.imagen = 'https://marvel.com/spiderman/'
 * const props.extension = '.jpg/'
 * const props.nombre = 'Spiderman'
 * 
 * return (
 * 
 *   <Encabezado_informacion formato={formato} nombre={nombre} imagen={imagen} descripcion={descripcion} />
 * )
 */
function Encabezado_informacion(props){

    /**
     * Path donde esta ubicado el usuario para la navegación
     */
	const navigate = useNavigate();

    /**
    * Vuelve a la ruta anterior en la que estuvo el usuario.
    */
    const goBack = () => {
		navigate(-1);
	}

    return (
        <header className="principal__encabezado">
            <img className="principal__encabezado__imagen" src={props.imagen+"/portrait_xlarge."+props.extension}/>
            <section className="principal__encabezado__informacion">
                <h2 className="principal__encabezado__informacion__titulo">{props.nombre}</h2>
                <p className="principal__encabezado__informacion__descripcion">{props.description}</p>      
            </section>
            <img className="principal__encabezado__fondo"/>
            <a href="https://www.marvel.com" target="_blank"><LanguageIcon className="principal__encabezado__enlace"/></a>
            <a className="principal__encabezado__volver" onClick={goBack}>
                <ArrowBackIcon className="principal__encabezado__volver__atras"></ArrowBackIcon>
                <p className="principal__encabezado__volver__info">VOLVER ATRAS</p>
            </a>            
            <div className="principal__encabezado__desenfoque"/>
        </header>
    )
}

export default Encabezado_informacion;