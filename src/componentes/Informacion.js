import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import '../sass/components/Informacion.sass';
import Encabezado_informacion from './Encabezado_informacion';
import { public_key, ts, hash } from '../Api';

/**
 * Mostrará la información del articulo elegido en el listado
 *
 * @component
 * 
 * return (
 * 
 *   <Informacion />
 * )
 */
function Informacion(){
    const [datosApi, setDatosApi] = useState(null)
    /**
     * Variable usada para saber si hay un listado dentro de la información o le indica al usuario que no hay mas contenido
     */
    let bandera = false;

    /**
     * Path donde esta ubicado el usuario
     */
    const location = useLocation();
    let { id } = location.state;
    let { formato } = location.state;
    
    useEffect(() => {        
        obtenerDatos().catch(console.error);
    }, [datosApi])

    /**
     * Accede a la URL de la API y rescata todos los datos de la API guardandola en un estado. Todo lo hace de forma asincrona.
     */
    const obtenerDatos =  async () => {
        let api = null    
        api = await fetch('http://gateway.marvel.com/v1/public/'+formato+'/'+id+'?ts='+ts+'&apikey='+public_key+'&hash='+hash); 
        const datosRecibidos= await api.json();
        setDatosApi(datosRecibidos); 
    }

    return (
        <main className="principal principal--informacion"> 
            {datosApi!=null && datosApi.data.results.length>0 && datosApi.data.results.map((item)=>
            <Encabezado_informacion key={item.id} nombre={formato=='characters' ? item.name : item.title} description={item.description} imagen={item.thumbnail.path} extension={item.thumbnail.extension}/>
        )}

            <h2 className="principal__titulo">{formato=='characters' ? 'COMICS' : 'PERSONAJES'} RELACIONADOS</h2>
            {datosApi!=null && formato=='characters' && datosApi.data.results.length>0 && datosApi.data.results.map((item)=>
                <ul className='principal__lista' key={item.name}>{
                    item!=null && item.comics.items.map((item2)=><li className='principal__lista__item' key={item2.name}>{bandera=true}<p className='principal__lista__item__enlace'>{item2.name}</p></li>)
                }</ul>)}     

            {datosApi!=null && !bandera && formato=='characters' ? <p className='principal__info'>No se pudo encontrar ningun dato relacionado.</p> : ""}                 

            {datosApi!=null && formato=='comics' && datosApi.data.results.length>0 && datosApi.data.results.map((item)=>                       
                <ul className='principal__lista' key={item.title}>{
                     item!=null && item.characters.items.map((item2)=><li className='principal__lista__item' key={item2.name}>{bandera=true}<p className='principal__lista__item__enlace'>{item2.name}</p></li>)
                }</ul>)}                      

            {datosApi!=null && !bandera && formato=='comics' ? <p className='principal__info'>No se pudo encontrar ningun dato relacionado.</p> : ""}

            {datosApi!=null && formato=='series' && datosApi.data.results.length>0 && datosApi.data.results.map((item)=>                       
                <ul className='principal__lista' key={item.title}>{
                     item!=null && item.characters.items.map((item2)=><li className='principal__lista__item' key={item2.name}>{bandera=true}<p className='principal__lista__item__enlace'>{item2.name}</p></li>)
                }</ul>)}                      

            {datosApi!=null && !bandera && formato=='series' ? <p className='principal__info'>No se pudo encontrar ningun dato relacionado.</p> : ""}
        </main>
    )
}

export default Informacion;