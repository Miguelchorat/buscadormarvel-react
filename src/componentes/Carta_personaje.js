import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/Carta_personaje.sass';

/**
 * Componente que muestra la información en el listado de los personajes
 *
 * @component
 * @example
 * const props.id = 123
 * const props.formato = 'comics'
 * const props.imagen = 'https://marvel.com/spiderman/'
 * const props.extension = '.jpg/'
 * const props.nombre = 'Spiderman'
 * 
 * return (
 * 
 *   <Carta_personaje id={id} formato={formato} nombre={nombre} imagen={imagen} formato={formato} />
 * )
 */
const Carta_personaje = (props) => {

    return (
        <Link className="principal__personaje__item" to="/informacion" state={{id: props.id, formato: "characters"}}>                
            <div className="principal__personaje__item__imagen">
                <img className="principal__personaje__item__imagen__img" src={props.imagen+"/portrait_xlarge."+props.extension} alt="icono de hulk"/>
            </div>   
            <h3 className="principal__personaje__item__nombre">{props.nombre}</h3>
        </Link>
    )
    
};

export default Carta_personaje;