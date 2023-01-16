import { MD5 } from "md5-js-tools";

/**
 * Contiene la key publica para acceder a la api
 */
export const public_key = "1802098ef85a231bb394b808fb31c2de";
/**
 * Contiene la key privada para acceder a la api
 */
const private_key = "62a750925aef5f79be57b1acf905c490e29eea53"
/**
 * Contiene el numero de la fecha en la que estamos
 */
export const ts = Date.now()

/**
 * Creamos un hash con los datos anteriores datos para el acceso a la API
 */
export let hash = MD5.generate(ts+private_key+public_key);
