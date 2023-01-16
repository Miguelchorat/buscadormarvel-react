import React, {useState, useEffect} from 'react';
import '../sass/components/Secciones.sass';
import icono_personajes from '../img/icono_personajes.svg';
import icono_comics from '../img/icono_comics.svg';
import icono_series from '../img/icono_series.svg';
import Articulo from './Articulo';

/**
 * Tiene un listado de articulos
 * 
 * @component
 * 
 * return (
 * 
 *   <Secciones />
 * )
 */
const Secciones = () => {
    return (
        <section className="principal__secciones">
            <Articulo icono={icono_personajes} enlace={"/busqueda_personajes"} titulo={"PERSONAJES"} descripcion={"Entra y encuentra una lista con todos los heroes y villanos de Marvel sacados de los comics."}/> 
            <Articulo icono={icono_comics} enlace={"/busqueda_comics"} titulo={"COMICS"} descripcion={"Entra y encuentra una lista con todos los famosos comics de la editorial Marvel."}/>             
            <Articulo icono={icono_series} enlace={"/busqueda_series"} titulo={"SERIES"} descripcion={"Entra y encuentra una lista con todos las famosas series que recopilan comics de la editorial Marvel."}/>             
        </section>
    )    
};

export default Secciones;