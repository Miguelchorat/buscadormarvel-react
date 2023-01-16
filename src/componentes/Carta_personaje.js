import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/Carta_personaje.sass';

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