import React, {useState, useEffect} from 'react';
import '../sass/components/Listado.sass';
import { MD5 } from "md5-js-tools";
import Carta_comic from './Carta_comic';
import Paginado from './Paginado';
import { useLocation } from 'react-router-dom'
import Filtro from './Filtro';
import { public_key, ts, hash } from '../Api';

/**
 * Mostrará un listado de serie que haya buscado el usuario. En caso de no tener ningun listado que mostrar se lo indicara al usuario.
 *
 * @component
 * 
 * return (
 * 
 *   <Listado_serie />
 * )
 */
const Listado_serie = () => {
    const [datosApi, setDatosApi] = useState(null)
    const [actualPagina, setActualPagina] = useState(0)
    const [indice, setIndice] = useState(0)
    /**
     * Path donde esta ubicado el usuario
     */
    const location = useLocation()
    /**
     * Información de la busqueda que hizo el usuario en el buscador
     */
    let { busqueda } = location.state;
    const [busquedaAnterior, setBusquedaAnterior] = useState(busqueda)
    const [filtro, setFiltro] = useState('title')
    /**
     * Constante que nos indica cuantos elementos mostrara en la lista
     */
    const DATOS_POR_PAGINA = 12;
    /**
     * Variable que nos indicará si habra o no lista que mostrar al usuario.
     */
    let bandera = true;

    useEffect(() => {        
        obtenerDatos().catch(console.error);
        if(busquedaAnterior!=busqueda){
            setBusquedaAnterior(busqueda)
            setIndice(0)
            setActualPagina(0)
        }
    }, [indice,busqueda,filtro])
    
    /**
     * Accede a la URL de la API y rescata todos los datos de la API guardandola en un estado. Todo lo hace de forma asincrona.
     */
    const obtenerDatos =  async () => {
        let api = null
        if(busqueda=='' ||busqueda==null){
            api = await fetch('https://gateway.marvel.com/v1/public/series?limit='+DATOS_POR_PAGINA+'&offset='+indice+'&orderBy='+filtro+'&ts='+ts+'&apikey='+public_key+'&hash='+hash);
        }
        else{
            api = await fetch('https://gateway.marvel.com/v1/public/series?limit='+DATOS_POR_PAGINA+'&offset='+indice+'&orderBy='+filtro+'&titleStartsWith='+busqueda+'&ts='+ts+'&apikey='+public_key+'&hash='+hash);
        }        
        const datosRecibidos= await api.json();
        setDatosApi(datosRecibidos); 
    }

    /**
     * Calcula si hay mas elemento que mostrar a continuación para la creación del paginado.
     * @returns {} - No devuelve nada
     */
    const paginaSig = () => {
        const siguientePagina = actualPagina + 1;
        const primerIndice = siguientePagina * DATOS_POR_PAGINA;
        
        if(primerIndice >= datosApi.data.total){
            return;
        }

        setActualPagina(siguientePagina)
        setIndice(primerIndice)
    }

    /**
     * Comprueba si hay elementos previos en el listado para la navegación en el paginado.
     * @returns {}
     */
    const paginaPrev = () => {
        const anteriorPagina = actualPagina -1;

        if(anteriorPagina < 0){
            return;
        }

        const primerIndice = anteriorPagina * DATOS_POR_PAGINA;

        setActualPagina(anteriorPagina)
        setIndice(primerIndice)
    }     
    
    return(        
        <main className="principal principal--listado">
            <Filtro setFiltro={setFiltro} mostrarNombre={false}/>
            
            <section className="principal__carta">            
                {                 
                    datosApi!=null && datosApi.data.results.length>0 && datosApi.data.results.map((item)=>
                    <Carta_comic key={item.id} id={item.id} formato={'series'} nombre={item.title} imagen={item.thumbnail.path} extension={item.thumbnail.extension}>{bandera=false}</Carta_comic>) 
                }
            </section>  

            <section className={datosApi!=null && bandera ? "principal__vacio principal__vacio__activo" : "principal__vacio"}>
                <p className="principal__vacio__parrafo">No se han encontrado ningun resultado en la busqueda realizada.</p>
                <p className="principal__vacio__parrafo">La busqueda de <span className="principal__vacio__parrafo__resultado">{busqueda}</span> no se encontró.</p>
                <ul className="principal__vacio__lista">
                    <li className="principal__vacio__lista__item">Usa palabras más generales.</li>
                    <li className="principal__vacio__lista__item">Comprueba que lo que has escrito este correctamente.</li>
                    <li className="principal__vacio__lista__item">Puede que dicha información no pertenezca al universo marvel.</li>
                </ul>
            </section>

            <Paginado actualPagina={actualPagina+1} ultimaPagina={datosApi!=null && datosApi.data.results.length>0 ? datosApi.data.total/DATOS_POR_PAGINA : 0} paginaPrev={paginaPrev} paginaSig={paginaSig}/>          
        </main>
    )    
};

export default Listado_serie;