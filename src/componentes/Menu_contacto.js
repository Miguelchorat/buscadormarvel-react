import React, {useState, useEffect} from 'react';
import '../sass/components/Menu.sass';

/**
 * Apartado del menu que contiene el apartado de contacto
 *
 * @component
 * 
 * @example
 * const props.apartado = 'inicio'
 * 
 * return (
 * 
 *   <Menu_contacto apartado={apartado} />
 * )
 */
function Menu_contacto({ apartado }){

    const [correo , setCorreo ] = useState('');
    const [titulo , setTitulo ] = useState('');
    const [mensaje , setMensaje ] = useState('');
    const [resultado , setResultado ] = useState(true);
    const [informacion , setInformacion ] = useState('');

    /**
     * Comprueba todos los campos del formulario de contacto y garantiza que todas las opciones sean válidas.
     */
    function validacion(){
        let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(correo.length!==0 && emailValidation.test(correo)){
            if(titulo.length>1 && titulo.length<32){
                if(mensaje.length>1 && mensaje.length<100){
                    alert("Validación correcta");  
                    setResultado(true)
                } else {
                    setResultado(false)
                    setInformacion('El mensaje es demasiado corto o demasiado largo.')            
                }
            } else {
                setResultado(false)
                setInformacion('El título es demasiado corto o demasiado largo.')        
            }            
        }else{
            setResultado(false)
            setInformacion('El correo no es válido.')
        } 
    }

    /**
     * Guarda la información que va escribiendo el usuario en el input en su respectivo estado
     * @param {*} e - Llega los caracteres que se registrara en el estado de correo 
     */
    const inputCorreo = (e) => {
        setCorreo(e.target.value)
    }

    /**
     * Guarda la información que va escribiendo el usuario en el input en su respectivo estado
     * @param {*} e - Llega los caracteres que se registrara en el estado de titulo
     */
    const inputTitulo = (e) => {
        setTitulo(e.target.value)
    }
    /**
     * Guarda la información que va escribiendo el usuario en el input en su respectivo estado
     * @param {*} e - Llega los caracteres que se registrara en el estado de mensaje
     */
    const inputMensaje = (e) => {
        setMensaje(e.target.value)
    }

    return(
        <form className={`desplegable__contacto ${ apartado==='contacto' ? 'desplegable__contacto__activo' : ""}`}>
            <h2 className="desplegable__contacto__titulo">CONTACTO</h2>            
            <input type="email" value={correo} onChange={inputCorreo} className="desplegable__contacto__input" placeholder="Introduce tu correo" name="correo"/>
            <input type="text" value={titulo} onChange={inputTitulo} className="desplegable__contacto__input" placeholder="Titulo del mensaje" name="titulo"/>
            <textarea type="text" value={mensaje} onChange={inputMensaje} className="desplegable__contacto__textarea" placeholder="Introduce tu mensaje" name="mensaje"></textarea>     
            <input type="button" className="desplegable__contacto__boton" value="ENVIAR" onClick={validacion}/>
            <p className={!resultado ? "desplegable__contacto__informacion desplegable__contacto__informacion__activo" : "desplegable__contacto__informacion"}>{informacion}</p>
        </form>
    )
}
export default Menu_contacto;