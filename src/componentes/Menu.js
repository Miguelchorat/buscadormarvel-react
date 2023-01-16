import React, {useState, useEffect} from 'react';
import '../sass/components/Menu.sass';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Menu_inicio from './Menu_inicio';
import Menu_iniciar from './Menu_iniciar';
import Menu_registrar from './Menu_registrar';
import Menu_contacto from './Menu_contacto';
import Menu_recuperar from './Menu_recuperar';

/**
 * Apartado del menu que contiene el apartado de iniciar sesión
 * 
 * @component
 * @example
 * const props.menu = 'menu'
 * const props.setMenu = 'setMenu()'
 * 
 * return (
 * 
 *   <Menu menu={menu} setMenu={setMenu}/>
 * )
 */
function Menu({ menu, setMenu }){
    
    const [apartado , setApartado ] = useState('inicio');
    const [sesion , setSesion ] = useState(localStorage.getItem('sesion'));

    useEffect(() => {        
        setApartado('inicio')
    }, [menu,sesion])

    /**
     * Le llega por parametros el nuevo apartado al cual navegara el menu
     * @param {String} nuevo - Nuevo apartado
     */
    function cambiarApartado (nuevo) {
        setApartado(nuevo)
    }

    /**
     * Cambia el estado del booleano para saber si mostrar o no el menu
     */
    const toggleMenu = () => {
        setMenu( !menu )
        setApartado('inicio')
    }  

    return (
        <div className={`desplegable ${ menu ? 'desplegable__activo' : ""}`}>
           <header className="desplegable__header">
                <ArrowBackIcon className={`desplegable__header__icono ${ apartado=='inicio' ? 'desplegable__header__icono__inactivo' : "" }`} onClick={ () => cambiarApartado('inicio') }></ArrowBackIcon>
                <CloseIcon className="desplegable__header__icono" onClick={ toggleMenu }></CloseIcon>
            </header> 

            <Menu_inicio toggleMenu={toggleMenu}sesion={sesion} setSesion={setSesion} apartado={apartado} setApartado={setApartado}></Menu_inicio>

            <Menu_iniciar setSesion={setSesion} apartado={apartado} setApartado={setApartado}></Menu_iniciar>

            <Menu_registrar apartado={apartado} setApartado={setApartado}></Menu_registrar>

            <Menu_contacto apartado={apartado}></Menu_contacto>

            <Menu_recuperar apartado={apartado}/>
        </div>   
    );
}

export default Menu;