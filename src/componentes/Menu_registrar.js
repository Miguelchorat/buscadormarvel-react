import React, {useState, useEffect} from 'react';
import '../sass/components/Menu.sass';

function Menu_registrar({ apartado, setApartado }){

    const MIN_EDAD_PERMITIDA = 12
    const [correo , setCorreo ] = useState('');
    const [usuario , setUsuario ] = useState('');
    const [password , setPassword ] = useState('');
    const [nuevaPassword , setNuevaPassword ] = useState('');
    const [fecha , setFecha ] = useState('');
    const [resultado , setResultado ] = useState(true);
    const [informacion , setInformacion ] = useState('');

    function validacion(){
        let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let usuarioValidation = /^[a-zA-Z]{3,18}$/;
        let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/

        if(usuarioValidation.test(usuario)){
           if(passwordValidation.test(password)){
               if(password === nuevaPassword){
                    if(emailValidation.test(correo)){
                        if(new Date(fecha).getFullYear() < new Date(Date.now()).getFullYear()-MIN_EDAD_PERMITIDA){
                            alert("Validación correcta");  
                            setResultado(true)
                        } else {
                            setResultado(false)
                            setInformacion('La edad no puede ser menor a 12 años.')
                        }                        
                    } else {
                        setResultado(false)
                        setInformacion('El correo no es válido.')
                    }
                   
                } else {
                   setResultado(false)
                   setInformacion('Las contraseñas no coinciden.')            
                }
           } else {
               setResultado(false)
               setInformacion('La contraseña tiene que tener 8 caracteres, una letra y un número.')        
           }            
        }else{
           setResultado(false)
           setInformacion('El usuario no es válido.')
        } 
   }

    function cambiarApartado (nuevo) {
        setApartado(nuevo)
    }

    const inputCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const inputUsuario = (e) => {
        setUsuario(e.target.value)
    }

    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const inputNuevaPassword = (e) => {
        setNuevaPassword(e.target.value)
    }

    const inputFecha = (e) => {        
        let fechaProv = e.target.value;    
        setFecha(fechaProv)
    }

    return(
        <form className={`desplegable__registrar ${ apartado==='registrar' ? 'desplegable__registrar__activo' : ""}`}>
            <h2 className="desplegable__registrar__titulo">REGISTRARSE</h2>
            <input type="text" value={usuario} onChange={inputUsuario} className="desplegable__registrar__input" placeholder="Nombre de usuario" name="nombreUsuario"/>
            <input type="password" value={password} onChange={inputPassword} className="desplegable__registrar__input" placeholder="Introduce tu contraseña" name="clave"/>
            <input type="password" value={nuevaPassword} onChange={inputNuevaPassword} className="desplegable__registrar__input" placeholder="Introduce tu contraseña de nuevo" name="claveRepetida"/>
            <input type="email" value={correo} onChange={inputCorreo} className="desplegable__registrar__input" placeholder="Introduce tu correo" name="correo"/>
            <input type="date" value={fecha} onChange={inputFecha} className="desplegable__registrar__input" name="fecha"/>
            <input type="button" className="desplegable__registrar__boton" value="REGISTRARSE" onClick={validacion}/>
            <p className={!resultado ? "desplegable__registrar__informacion desplegable__registrar__informacion__activo" : "desplegable__registrar__informacion"}>{informacion}</p>
            <p className="desplegable__registrar__iniciar">¿Ya tienes una cuenta?</p>
            <a className="desplegable__registrar__boton" href="#" onClick={ () => cambiarApartado('iniciar') }>INICIAR SESIÓN</a>
        </form>
    )
}
export default Menu_registrar;