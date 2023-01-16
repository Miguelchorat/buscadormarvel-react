import React, {useState, useEffect} from 'react';
import '../sass/components/Carta_comic.sass';
import { Link } from 'react-router-dom';

/**
 * Componente que muestra la información en el listado de los comics y series
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
 *   <Carta_comic id={id} formato={formato} nombre={nombre} imagen={imagen} formato={formato} />
 * )
 */
const Carta_comic = (props) => {

    return (
        <Link className="principal__carta__item" to="/informacion" state={{id: props.id, formato: props.formato}}>
            <div className="principal__carta__item__imagen">
                <img className="principal__carta__item__imagen__img" src={props.imagen+"/portrait_xlarge."+props.extension} alt="icono de comics"/>
            </div>
            <h3 className="principal__carta__item__nombre">{props.nombre}</h3>
        </Link>
    )
    
};

export default Carta_comic;