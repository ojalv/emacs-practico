//npm install node-fetch
//https://fakeapi.platzi.com/
//https://api.escuelajs.co/api/v1/products
import fetch from "node-fetch";

/*Top level await permite utilizar la palabra reservada await, 
sin estar dentro de una función asíncrona con async. 
Sin embargo, únicamente se puede utilizar await en la parte 
superior del archivo de un módulo. */

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export {products};

