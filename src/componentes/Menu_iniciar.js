import React, {useState, useEffect} from 'react';
import '../sass/components/Menu.sass';

function Menu_iniciar({ apartado, setApartado, setSesion}){

    const [correo , setCorreo ] = useState('');
    const [password , setPassword ] = useState('');
    const [checkbox , setCheckbox ] = useState(false);
    const [resultado , setResultado ] = useState(true);
    const [informacion , setInformacion ] = useState('');

    function validacion(){
        let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/

        if(emailValidation.test(correo)){
           if(passwordValidation.test(password)){
                if(checkbox){
                    localStorage.setItem('sesion',true);                    
                }
                setSesion(true)
                cambiarApartado('inicio');
                setResultado(true)                        
           } else {
               setResultado(false)
               setInformacion('La contraseña tiene que tener 8 caracteres, una letra y un número.')        
           }            
        }else{
           setResultado(false)
           setInformacion('El correo no es válido.')
        } 
   }

    const inputCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const inputCheckbox = () => {        
        setCheckbox(!checkbox)
    }

    function cambiarApartado (nuevo) {
        setApartado(nuevo)
    }
    

    return(
        <form className={`desplegable__iniciar ${ apartado==='iniciar' ? 'desplegable__iniciar__activo' : ""}`}>
            <h2 className="desplegable__iniciar__titulo">INICIAR SESIÓN</h2>
            <input type="email" value={correo} onChange={inputCorreo} className="desplegable__iniciar__input" placeholder="Correo" name="nombreUsuario"/>
            <input type="password" value={password} onChange={inputPassword} className="desplegable__iniciar__input" placeholder="Contraseña" name="clave"/>  
            <div className='desplegable__iniciar__remember'>
                <input type="checkbox" defaultChecked={checkbox} onChange={inputCheckbox} className="desplegable__iniciar__remember__checkbox" name="remember"/>
                <label className="desplegable__iniciar__remember__label">Recordarme</label>
            </div>                      
            <p className={!resultado ? "desplegable__iniciar__informacion desplegable__iniciar__informacion__activo" : "desplegable__iniciar__informacion"}>{informacion}</p>
            <input type="button" className="desplegable__iniciar__boton" value="ENTRAR" onClick={validacion}/>
            <a className="desplegable__iniciar__enlace" href="#" onClick={ () => cambiarApartado('recuperar') }>Recuperar contraseña</a>
            <p className="desplegable__iniciar__registro">¿No tienes cuenta?</p>
            <a className="desplegable__iniciar__boton" href="#" onClick={ () => cambiarApartado('registrar') }>REGISTRARSE</a>
        </form>
    )
}
export default Menu_iniciar;