import React, {useState, useEffect} from 'react';
import '../sass/components/Menu.sass';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LogoutIcon from '@mui/icons-material/Logout';

/**
 * Apartado del menu que contiene el apartado inicial del menu donde mostrara la sesión del usuario y diferentes opciones de navegación
 * 
 * @component
 * @example
 * const props.apartado = 'inicio'
 * const props.setApartado = 'setApartado()'
 * const props.sesion = 'sesion()'
 * const props.setSesion = 'setSesion()'
 * const props.toggleMenu = 'toggleMenu()'
 * 
 * return (
 * 
 *   <Menu_contacto apartado={apartado} setApartado={setApartado} sesion={sesion} setSesion={setSesion} toggleMenu={toggleMenu}/>
 * )
 */
function Menu_inicio({ apartado, setApartado, sesion, setSesion, toggleMenu }){
    
    const [modoNocturno , setModoNocturno ] = useState(localStorage.getItem('modoNocturno') ?? false);
    const [tema , setTema] = useState(localStorage.getItem('tema') ?? 'DIA');

    useEffect(() => {        
        setModoNocturno(false)
        if(tema=='NOCHE'){
            cambiarModoNoche()
        } else {
            cambiarModoDia()
        }
    }, [tema,sesion])

    /**
     * Cambia a otro apartado del menu
     * @param {String} nuevo 
     */
    function cambiarApartado (nuevo) {
        setApartado(nuevo)
        setModoNocturno(false)
    }

    /**
     * Cambia el booleano del estado de si activar o no el modo nocturno
     */
    function cambiarModoNocturno () {
        setModoNocturno(!modoNocturno)
        localStorage.setItem('modoNocturno',modoNocturno)
    }  

    /**
     * Remueve una clase al BODY para que sepa que tiene que mostrar los estilos del modo Día
     */
    function cambiarModoDia(){
        document.body.classList.remove("tema--oscuro")
        setTema('DIA')
        localStorage.setItem('tema','DIA')
    }

    /**
     * Implementa una clase al BODY para que sepa que tiene que mostrar los estilos del modo Día
     */
    function cambiarModoNoche(){
        document.body.classList.add("tema--oscuro")        
        setTema('NOCHE')
        localStorage.setItem('tema','NOCHE')
    }

    /**
     * Cerrar sesión en el localstorage y de la cuenta de usuario
     */
    function cerrarSesion(){
        localStorage.removeItem('sesion');
        setSesion(false);
    }

    return (
        <div className={`desplegable__inicio ${ apartado=='inicio' ? 'desplegable__inicio__activo' : ""}`}>
            <div className="desplegable__inicio__sesion">
                <section className="desplegable__inicio__sesion__img">
                    <a className="desplegable__inicio__sesion__img__icono material-symbols-outlined" href="#">edit</a>
                    <div className="desplegable__inicio__sesion__img__fondo"></div>
                </section>
                <section className={sesion ? "desplegable__inicio__sesion__cerrada  desplegable__inicio__sesion__cerrada__desactivo" : "desplegable__inicio__sesion__cerrada"}>
                    <p className="desplegable__inicio__sesion__cerrada__identificacion">
                        <a href="#" className="desplegable__inicio__sesion__cerrada__identificacion__enlace" onClick={ () => cambiarApartado('iniciar') }>Entra</a>
                        &nbsp;
                        o
                        &nbsp;
                        <a href="#" className="desplegable__inicio__sesion__cerrada__identificacion__enlace" onClick={ () => cambiarApartado('registrar') }>registrate</a>
                    </p>
                    <p className="desplegable__inicio__sesion__cerrada__info">para participar en la web</p>
                </section>
                <section className={sesion ? "desplegable__inicio__sesion__abierta desplegable__inicio__sesion__abierta__activo" : "desplegable__inicio__sesion__abierta"}>                    
                    <p className="desplegable__inicio__sesion__abierta__informacion">Hola,&nbsp;<span className="desplegable__inicio__sesion__abierta__informacion__usuario">
                        PLACEHOLDER
                    </span></p>
                    <Link className="desplegable__inicio__sesion__abierta__perfil" to="/perfil" onClick={toggleMenu}>                        
                        Gestionar tu cuenta
                    </Link>
                </section>
            </div>

            <ul className="desplegable__inicio__lista">
                <li className="desplegable__inicio__lista__item">                    
                    <a href="https://www.marvel.com" target="_blank" className="desplegable__inicio__lista__item__enlace">
                        <LanguageIcon className="desplegable__inicio__lista__item__enlace__icono"></LanguageIcon>
                        MARVEL.COM
                    </a>
                </li>
                <li className="desplegable__inicio__lista__item">                    
                    <a href="#" className="desplegable__inicio__lista__item__enlace" onClick={ () => cambiarApartado('contacto') }>
                        <MailIcon className="desplegable__inicio__lista__item__enlace__icono"></MailIcon>
                        CONTACTO
                    </a>
                </li>
                <li className="desplegable__inicio__lista__item">                    
                    <a href="#" className="desplegable__inicio__lista__item__enlace desplegable__inicio__lista__item__enlace--corto" onClick={ cambiarModoNocturno }>
                        <DarkModeIcon className="desplegable__inicio__lista__item__enlace__icono"></DarkModeIcon>
                        ASPECTO:<span className="desplegable__inicio__lista__item__enlace__icono__modo">{tema}</span>
                        <ArrowForwardIosIcon className={`desplegable__inicio__lista__item__enlace__desplegable ${ modoNocturno ? 'desplegable__inicio__lista__item__enlace__desplegable__activo' : ""}`}></ArrowForwardIosIcon>
                    </a>                    
                    <a onClick={cambiarModoDia} className={`desplegable__inicio__lista__item__oculto ${ modoNocturno ? 'desplegable__inicio__lista__item__oculto__activo' : ""}`}
                    href="#">MODO DÍA</a>
                    <a onClick={cambiarModoNoche} className={`desplegable__inicio__lista__item__oculto ${ modoNocturno ? 'desplegable__inicio__lista__item__oculto__activo' : ""}`}
                    href="#">MODO NOCHE</a>
                </li>
                <li className="desplegable__inicio__lista__item">                    
                    <Link to="/" className={sesion ? "desplegable__inicio__lista__item__enlace" : "desplegable__inicio__lista__item__enlace desplegable__inicio__lista__item__enlace--cerrar"} onClick={cerrarSesion}>
                        <LogoutIcon className="desplegable__inicio__lista__item__enlace__icono"></LogoutIcon>
                        CERRAR SESIÓN
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu_inicio;