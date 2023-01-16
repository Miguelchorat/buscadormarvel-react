import React, {useState, useEffect} from 'react';
import '../sass/components/Paginado.sass';

/**
 * Componente que contiene el páginado y la navegación por la lista
 * 
 * @component
 * @example
 * const props.actualPagina = 2
 * const props.ultimaPagina = 4
 * 
 * return (
 * 
 *   <Paginado actualPagina={actualPagina} ultimaPagina={ultimaPagina}/>
 * )
 */
const Paginado = (props) => {
    
    return (
        <section className="principal__paginado">
            <a className={props.actualPagina==1 ? "principal__paginado__nav principal__paginado__nav--disable" : "principal__paginado__nav principal__paginado__nav--enable"} onClick={props.paginaPrev}>&#9666;Prev</a>
            <a className="principal__paginado__nav principal__paginado__nav--disable">{props.actualPagina}</a>
            <a className={props.actualPagina >= props.ultimaPagina ? "principal__paginado__nav principal__paginado__nav--disable" : "principal__paginado__nav principal__paginado__nav--enable"} onClick={props.paginaSig}>Sig&#9656;</a>
        </section>
    )
}

export default Paginado;