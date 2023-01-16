import React, {useState, useEffect} from 'react';
import '../sass/components/NotFound.sass';
import notfound from '../img/404.png';
import nubes from '../img/nubes.png';

const NotFound = () => {

    const [hover , setHover ] = useState(false);
    const [activo , setActivo ] = useState(false);

    const handlerHover = () =>{
        setHover(!hover)
    }

    
    const activar = () =>{
        setActivo(!activo)
    }

    return (
        <main className="principal principal--404" onDoubleClick={activar}>
            <section className={activo ? "principal__informacion principal__informacion__activo" : "principal__informacion"}>
                <h1 className="principal__informacion__error">404</h1>
                <p className="principal__informacion__pagina">PÁGINA NO ENCONTRADA</p>
            </section>
            <img className={hover ? "principal__img principal__img__hover" : "principal__img"} onMouseOver={handlerHover} onMouseOut={handlerHover} src={notfound}/>
            <div className="principal__nube" src={nubes}></div>
        </main>
    )
    
};

export default NotFound;