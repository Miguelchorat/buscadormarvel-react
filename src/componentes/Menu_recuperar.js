import React, {useState, useEffect} from 'react';
import '../sass/components/Menu.sass';

/**
 * Apartado del menu que contiene el apartado de recuperación de contraseña
 *
 * @component
 * 
 * @example
 * const props.apartado = 'inicio'
 * 
 * return (
 * 
 *   <Menu_recuperar apartado={apartado} />
 * )
 */
function Menu_recuperar({ apartado }){

    const [recuperar , setRecuperar ] = useState('');
    const [resultado , setResultado ] = useState(true);

    /**
     * Comprueba todos los campos del formulario de contacto y garantiza que todas las opciones sean válidas.
     */
    function validacion(){
        let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(recuperar.length!==0 && emailValidation.test(recuperar)){
            alert("Validación correcta");  
            setResultado(true)
        }else{
            setResultado(false)
        } 
    }

    /**
     * Guarda la información que va escribiendo el usuario en el input en su respectivo estado
     * @param {*} e - Llega los caracteres que se registrara en el estado de correo 
     */
    const inputRecuperar = (e) => {
        setRecuperar(e.target.value)
    }

    return(
        <form className={`desplegable__recuperar ${ apartado==='recuperar' ? 'desplegable__recuperar__activo' : ""}`}>
            <h2 className="desplegable__recuperar__titulo">RECUPERAR CUENTA</h2>
            <input type="email" value={recuperar} className="desplegable__recuperar__input" placeholder="Introduce tu correo" name="correo" onChange={inputRecuperar}/>    
            <input type="button" className="desplegable__recuperar__boton" value="RECUPERAR" onClick={validacion}/>
            <p className={!resultado ? "desplegable__recuperar__informacion desplegable__recuperar__informacion__activo" : "desplegable__recuperar__informacion"}>El correo no esta registrado o no es válido.</p>
            <p className="desplegable__recuperar__cuenta">Se te enviara un correo con la contraseña.</p>
        </form>
    )
}
export default Menu_recuperar;