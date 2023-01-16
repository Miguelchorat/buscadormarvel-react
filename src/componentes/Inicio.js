import React, {useState, useEffect} from 'react';
import '../sass/components/Inicio.sass';
import Buscador from './Buscador';
import Secciones from './Secciones';

/**
 * Es el apartado inicial donde llegara el usuario al acceder a la web. Desde aqui navegará al listado correspondiente
 *
 * @component
 * 
 * return (
 * 
 *   <Inicio />
 * )
 */
const Inicio = () => {
    
    const [titulo , setTitulo] = useState(false);

    useEffect(() => {        
        const parpadeo = setInterval(() => parpadearBarra(), 4000);
        return () => clearInterval(parpadeo);
    }, [titulo])

    /**
     * Altera el booleano entre verdadero y falso.
     */
    function parpadearBarra(){ 
        setTitulo(!titulo)
    }

    return (
        <main className="principal principal--index">
            <section className="principal__identidad">
                <svg className="principal__identidad__logo"></svg>
                <h1 className={titulo ? "principal__identidad__titulo principal__identidad__titulo__activo" : "principal__identidad__titulo"}>Buscador Marvel</h1>
            </section>
            <Buscador />
            <Secciones />
        </main>
    )
};

export default Inicio;