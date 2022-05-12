/**
 * ASINCRONÍA Y PROMESAS
 */

/**
 * SINCRONICO
 * En este modelo, nuestro programa funciona de manera lineal, 
 * ejecutando una acción y después otra. Sólo podemos realizar una tarea 
 * a la vez y cada tarea es bloqueante de la siguiente
 */

/**
 * ASINCRONICO
 * Este modelo permite que múltiples tareas sucedan a la vez. Al 
 * comenzar una acción, nuestro programa sigue en ejecución; y cuando 
 * la acción termina nuestro programa es informado y consigue acceso al 
 * resultado correspondiente
 */

/**
 * Si desea realizar dos peticiones
 * En el asincronico Ambas peticiones pueden realizarse en paralelo, y sólo debemos sincronizar los resultados cuando terminen
 * En el sincronico La segunda petición empezaría solamente cuando termine la primera, y tendríamos el resultado de ambas luego de finalizar la segunda.
 */

/**
 * Ventajas de asincrónica
 * Una de las principales ventajas del modelo asincrónico: facilita el manejo de programas que realizan múltiples acciones a la vez.
 * Uno de sus principales riesgos: puede dificultar la comprensión de aquellos programas que tienden a seguir una única línea de acción
 */

/**
 * setTimeout 
 * Es una función que permite realizar acciones asincrónicamente. La función recibe dos parametros.
 * Una función de callback y un valor numérico que representa milisegundo.
 */

function hola (){
    // Hasta que no allá modificador la función hola y quitado debugger no va a seguir con la siguiente función.
    // debugger;
    setTimeout(() => {
        console.log('Termino con setTimeout');
    }, 2000);
    console.log('Termino función');
} 
hola();

function holaMundo(){
    for(let letra of "hola"){
        setTimeout(() => {
            console.log(letra);
        }, 1000);
    }

    for(let mundo of "mundo"){
        setTimeout(() => {
            console.log(mundo);
        }, 1000);
    }
}
holaMundo();

/**
 * Lo visto anteriormente en los ejemplos no se explica 
 * precisamente con el tiempo de ejecución del proceso, sino con 
 * el orden que ocupa en el listado de peticiones a ejecutar.
 */

/**
 * CALL STACK (PILA)
 * Es una lista donde se apilan las distintas tareas a ejecutar por 
 * nuestro programa. Javascript es un lenguaje single threaded, o 
 * de un único hilo, lo que significa que tiene un único stack o pila de 
 * ejecución. De ahí que la ejecución es implícitamente sincrónica.
 */

/**
 * EVENT LOOP
 * Muchas funciones asincrónicas se ejecutan en un stack diferente. El Event 
 * Loop es la herramienta que permite la sincronización entre nuestro call stack 
 * con estas tareas asincrónicas que funcionan en un thread aparte.
 * Si el stack está vacío, el Event Loop envía la primera función que esté en la 
 * callback queue al call stack y comienza a ejecutarse. 
 */

/**
 * Loupe es una visualización que nos ayuda a comprender cómo interactúan entre 
 * sí call stak, event loop y callback queue. Podemos escribir código sincrónico y 
 * asincrónico y ver cómo es el funcionamiento de estas piezas en conjunto
 */

/**
 * EVENT LOOP -> CALLBACK QUEUE -> CALL STACK
 */

/**
 * setInterval
 * Tiene la misma sintaxis que setTimeout, pero la unidad de tiempo es un intervalo para la repetición de la función asociada
 */

/**
 * En caso de querer remover un Intervalo, utilizamos la función clearInterval (). 
 * También podemos detener la ejecución de un setTimeout invocando clearTimeout ()
 */
let contador = 0;
const intervalo = setInterval(() => {
    console.log("Tic");
    contador++;
    contador == 3 && clearInterval(intervalo);
}, 1000);

/**
 * PROMESAS
 * Es un objeto de Javascript que representa un evento a futuro. Es una 
 * acción asincrónica que se puede completar en algún momento y producir 
 * un valor, y notificar cuando esto suceda.
 * Una promesa cuenta con tres estados posibles: pending, fulfilled y 
 * rejected. Las promesas pueden de ser resueltas o rechazadas.
 */

/**
 * Podemos crear promesas a través de su constructor new Promise. Su sintaxis 
 * es algo compleja, ya que recibe una función por parámetro que a su vez recibe 
 * por parámetro las funciones de resolve y reject
 */

/**
 * THEN y CATCH
 * Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(), los cuales 
 * reciben una función por parámetro con la cual se captura el valor de la promesa:
 * .then() : Si la promesa es resuelta , su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.
 * .catch() : si la promesa es rechazada , su valor se captura dentro de un .catch() siguiendo la misma lógica
 */

const obtenerTotalAlumnos = () => {
    return new Promise((resolve, reject) => {
        // resolve(100); Resuelta
        // reject('Error al obtener datos'); Rechazada
        setTimeout(() => {
            reject('Error del servidor');
        }, 1000);
    });
};

/**
 * Para cada promesa podemos definir una estructura para trabajar los distintos 
 * casos posibles. Cada promesa sólo puede resolverse o rechazarse una 
 * única vez. Es un mecanismo de control claro y ordenado para trabajar la 
 * asincronía y los posibles valores a recibir
 */

/**
 * FINALLY
 * finally() es un método que recibe una función la cual se ejecutará siempre al 
 * finalizar la secuencia, sin importar si se haya resuelto o no la promesa:
 */

 obtenerTotalAlumnos().then((totalAlumnos) => {
    console.log('El total de alumnos es: ' + totalAlumnos);
}).catch((error) => {
    console.log('Error al obtener alumnos: ' + error);
}).finally(() => {
    console.log('Finally se ejecuta siempre');
});

const alumnos = [
    {
        nombre: 'Hernan',
        edad: 25
    },
    {
        nombre: 'Camila',
        edad: 21
    },
    {
        nombre: 'Martin',
        edad: 20
    },
    {
        nombre: 'Diego',
        edad: 52
    },
    {
        nombre: 'Gabriela',
        edad: 48
    },
];

const obtenerAlumnoss = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const jsonAlumnos = JSON.stringify(alumnos);
            const random = Math.random();

            if(random < 0.5){
                reject('Error en la API');
            }else{
                resolve(jsonAlumnos);
            }
            
        }, 2000);
    });
};

obtenerAlumnoss().then((response) => {
    const alumnos = JSON.parse(response);
    alumnos.forEach(i => {
        console.log(i);
    }); 
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('Termino de ejecutar respuesta a la API');
}); 