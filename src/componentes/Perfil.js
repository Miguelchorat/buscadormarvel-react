import React, {useState, useEffect} from 'react';
import '../sass/components/Perfil.sass';
import Popup from './Popup';

/**
 * Perfil del usuario y su información 
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
function Perfil(){

    const [popup , setPopup ] = useState(false);
    
    useEffect(() => {        
    }, [popup])

    /**
     * Configura que si el popup se puede mostrar o no
     */
    const togglePopup = () => {
        setPopup( !popup )
    }

    return(
        <main className="principal principal--perfil">
            <header className="principal__encabezado principal__encabezado--perfil">
                <h2 className="principal__encabezado__titulo">MI CUENTA</h2>    
                <img className="principal__encabezado__fondo" src="assets/img/informacion.jpg"/>     
                <div className="principal__encabezado__desenfoque"/>
            </header>
            
            <section className="principal__perfil">
                <h3 className="principal__perfil__titulo">Nombre de usuario</h3>
                <p className="principal__perfil__texto">PLACEHOLDER</p>
                <h3 className="principal__perfil__titulo">Correo</h3> 
                <p className="principal__perfil__texto">PLACEHOLDER@correo.com</p>
                <h3 className="principal__perfil__titulo">Fecha de nacimiento</h3>
                <p className="principal__perfil__texto">01/01/1970</p>  
                <button type='button' className="principal__perfil__boton" onClick={togglePopup}>Modificar</button>
            </section>
            <Popup popup={popup} setPopup={setPopup}/>
            <div className={`fondo__desplegable ${ popup ? 'fondo__desplegable__activo' : ""}`} onClick={togglePopup}></div>
        </main>
    )
}

export default Perfil;