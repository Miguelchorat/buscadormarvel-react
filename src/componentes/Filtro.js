import React, {useState, useEffect} from 'react';
import '../sass/components/Listado.sass';


const Filtro = (props) => {

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