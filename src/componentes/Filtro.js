import React, {useState, useEffect} from 'react';
import '../sass/components/Listado.sass';

/**
 * Filtro donde da a elegir al usuario porque orden quiere filtrar la lista de información.
 *
 * @component
 * @example
 * const props.mostrarNombre = 'name'
 * 
 * return (
 * 
 *   <Filtro mostrarNombre={nombre}/>
 * )
 */
const Filtro = (props) => {

    /**
    * Cambia el valor del filtro por otro valor
    * @param   {number} e  Posición nueva del select
    */
    const cambiarFiltro = (e) => {
        props.setFiltro(e)
    }

    return(        
        <div className="principal__filtro">
            <select className="principal__filtro__opciones" name="filtro" onClick={e => cambiarFiltro(e.target.value)}>
                <option value={props.mostrarNombre ? 'name' : 'title'}>Nombre &#8595;</option>
                <option value={props.mostrarNombre ? '-name' : '-title'}>Nombre &#8593;</option>
                <option value="modified">Fecha &#8595;</option>
                <option value="-modified">Fecha &#8593;</option>                
            </select>
        </div> 
    )
}

export default Filtro;