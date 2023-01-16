import React, {useState, useEffect} from 'react';
import '../sass/components/Popup.sass';
import CloseIcon from '@mui/icons-material/Close';

function Popup({popup, setPopup}){

    const MIN_EDAD_PERMITIDA = 12
    const [correo , setCorreo ] = useState("placeholder@correo.com");
    const [usuario , setUsuario ] = useState('PLACEHOLDER');
    const [password , setPassword ] = useState('');
    const [nuevaPassword , setNuevaPassword ] = useState('');
    const [fecha , setFecha ] = useState('1970-01-01');
    const [resultado , setResultado ] = useState(true);
    const [informacion , setInformacion ] = useState('');

    useEffect(() => {        
    }, [resultado])

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
                            togglePopup()
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

    const togglePopup = () => {
        setPassword("")
        setNuevaPassword("")
        setResultado(true)
        setPopup( !popup )
    }

    return(
        <div className={popup ? "popup popup__activo" : "popup"}>     
            <CloseIcon className="popup__icono" onClick={togglePopup}/>
            <form className="popup__actualizar">
                <h2 className="popup__actualizar__titulo">MODIFICAR</h2>
                <input type="text" className="popup__actualizar__input" placeholder="Nombre de usuario" name="nombreUsuario" value={usuario} onChange={inputUsuario}/>
                <input type="password" className="popup__actualizar__input" placeholder="Introduce tu nueva contraseña" name="clave" value={password} onChange={inputPassword}/>
                <input type="password" className="popup__actualizar__input" placeholder="Introduce tu nueva contraseña de nuevo" name="claveRepetida" value={nuevaPassword} onChange={inputNuevaPassword}/>
                <input type="email" className="popup__actualizar__input" placeholder="Introduce tu correo" name="correo" value={correo} onChange={inputCorreo}/>
                <input type="date" className="popup__actualizar__input" name="fecha" value={fecha} onChange={inputFecha}/>
                <input type="button" className="popup__actualizar__boton" value="GUARDAR" onClick={validacion}></input>
                <p className={!resultado ? "popup__actualizar__informacion popup__actualizar__informacion__activo" : "popup__actualizar__informacion"}>{informacion}</p>                
                <div className="popup__actualizar__borrar">
                    <p className="popup__actualizar__borrar__info">¿Quieres eliminar la cuenta?</p>
                    <a className="popup__actualizar__borrar__enlace" href="#">Borrar cuenta</a>
                </div>            
            </form>
        </div>
    )
}

export default Popup;