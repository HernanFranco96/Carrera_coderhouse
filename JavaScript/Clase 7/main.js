/**
 * Abstracción
 * El uso de funciones y llamarlas dentro de otros metodos.
 * Resumimos un grupo complejo de instrucciones bajo una palabra clave (función)
 */

/**
 * Funciones de orden superior
 * Es quella que bien retorna una función, o recibe una función por parámetro.
 * Este tipo de funciones nos permite abstraernos sobre acciones y no sólo valores.
 */

// EJEMPLO
/**
 * Creamos una función que retorna una función.
 */
function asignarOperador(op){
    if(op == 'sumar')
        return (a, b) => a + b;
    if(op == 'restar')
        return (a, b) => a - b;
}

let suma = asignarOperador('sumar');
let restar = asignarOperador('restar');

console.log(suma(5, 6));
console.log(restar(15, 3));

//EJEMPLO
/**
 * Recibir funciones por parametros
 */

function recorrerArray(array, func){
    for(const el of array){
        func(el);
    }
}

let array = [3, 65, 1];
// let duplicar = (numero) => alert(parseInt(numero)*2);

// recorrerArray(array, duplicar);

/**
 * Sino tambien podemos crear la función directamente.
 */

 recorrerArray(array, ((numero) => {
    console.log(parseInt(numero)*2);
 }));

 /**
  * Métodos de búsqueda y transformación
  * forEach() -> Itera sobre el array y por cada elemento ejecuta la función que enviamos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo.
  * find() -> Recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutadea. El metodo retona el primer elemento que cumpla con esa condición.
  * filter() -> Recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornará un array vacio.
  * some() -> Funciona igual que find() recibiendo una función de búsqueda. En vez de retornar elemento encontrado, some() retorna true o false según el resultado de iteración de búsqueda.
  * map() -> Crea un nuevo array con todos los elementos original transformados según las operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados son el return de la función
  * reduce() -> nos permite obtener un unico valor tras iterar sobre el array. Funciona como metodo que resume el array a un unico valor de retorno. Recibe dos parametros, el primero es la funcion que ordena que queremos resumir del array. Recibe un parametro que funciona como acumulador, y el elemento del array que iteramos. El segundo es el valor inicial del acumulador. 
  * sort() -> Reordena un array según un criterio que definamos. Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica que elemento se posiciona antes o depsues.
  */

 // forEach

 let arrayCadena = ['Hernan', 'Franco', 'Gaston'];
//  let cadena = "";
//  arrayCadena.forEach((elemento) => {
//      cadena += " " + elemento;
//  })

 //find() devuelve el elemento encontrado
let alumnos = [
    {
        nombre: 'Hernán',
        edad: 19
    },
    {
        nombre: 'Lautaro',
        edad: 17
    },
    {
        nombre: 'Gonzalo',
        edad: 18
    }
];

const resultado = alumnos.find(
    (elemento) => {
        return elemento.nombre == 'Gonzalo';
});
console.log(resultado);

//filter()

const alumnosMayoresDeEdad = alumnos.filter(
    (elemento) => {
        return elemento.edad >= 18
});
console.log(alumnosMayoresDeEdad);

//some() devuelve true o false
const presente = alumnos.some(
    (elemento) => {
        return elemento.nombre == "Hernán";
});
console.log(presente);

//map()

let empleados = [
    {
        nombre: 'Hernán',
        edad: 34,
        telefono: 444-444,
        email: 'hernan@gmail.com'
    },
    {
        nombre: 'Lautaro',
        edad: 36,
        telefono: 555-555,
        email: 'lautaro@gmail.com'
    },
    {
        nombre: 'Gonzalo',
        edad: 25,
        telefono: 666-666,
        email: 'gonzalo@gmail.com'
    }
];

const nuevoEmpleado = empleados.map(
    (elemento) => {
        return elemento.edad + 1;
        // return elemento.nombreYedad = elemento.nombre + " " + elemento.edad
});

console.log(nuevoEmpleado);

// reduce()

const datosEmpleados = empleados.reduce((acumulador, elemento) => { 
    acumulador.push({
        nombre: elemento.nombre,
        email: elemento.email,
    })
    return acumulador;
}, []);

console.log(datosEmpleados);

const numeros = [1, 2, 3, 4, 5, 6];
const total = numeros.reduce(
    (acumulador, elemento) => acumulador + elemento
, 0)
console.log(total);

// sort()
empleados.sort((a, b) => {
    if(a.edad > b.edad){
        return 1;
    }
    else if(a.edad < b.edad){
        return -1;
    }
    else{
        return 0;
    }
});

console.log(empleados);

/**
 * Math
 * Funciona como contenedor de herramientas y metodos para realizar operaciones matematicas.
 */

// Constantes
console.log(Math.PI);
console.log(Math.E);

// Math.min() Math.max()
/**
 * Recibe una serie de argumentos numéricos y devuelven aquel de valor máximo o mínimo.
 * También se pueden referenciar los valores de infinito positivos o negativo a traves de la variable global infinity, de tipo Number.
 */
let infinito = Infinity;

// Ceil, Floor & Round
/**
 * Ceil devuelve el entero mayor o igual mas próximo.
 * Floor devuelve el entero mas cercano redondeado hacia abajo.
 * Round retorna el valor de un numero redondeado al entero mas cercano.
 */

// Square root
/**
 * Retorna la raíz cuadrada de un número. Si se envía un numero negativo, devuelve NAN
 */

/**
 * Abs
 * Devuelve un numeor positivo cuando se le pasa un negativo.
 */

/**
 * Random
 * genera un numero pseudo-aleatorio entre 0 y 1, siendo el 0 limite inclusivo y el 1 exclusivo
 * Para generar numeros aleatores dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado. A la vez que podemos sumar el limite de rango esperado. A la vez podemos sumar el lmite interior si lo necesitamos.
 */

let random = Math.random() * 50 + 10;
console.log(Math.floor(random));

/**
 * Redondeo
 * Al sumar math.round, esta función retornará números aleatorios en el rango de 0-100 inclusive.
 * Si usara Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba.
 * Si uso Math.floor el rango sería de 0 a 99.
 */

/**
 * class DATE
 * La clase Date nos permite crear objetos date con fechas diferentes. Puede recibir parámetros en el orden año, mes, dia, hora, minutos, segundos, milisegundos (todos tipo Number).
 * Los meses a partir de 0 a 11 (0 = enero y 11 = diciembre)
 * getMonth() nos retornará el number que representa el mes (entre 0 y 11)
 * getFullYear() nos devolverá el number que representa el año creado.
 * getDay() nos retornará el number que representa el día creado (1 = lunes, 7 = domingo)
 * 
 * CALCULOS
 * Los calculos de Date se hacen en milisegundos
 * */

/**
 * const milisegundos = 86400000;
 * const diferenciaFecha = Math.abs(fechaHoy - fechaAyer);
 * console.log(Math.floor(diferenciaFecha / milisegundos));
 */

/**
 * Formatos para mostrar valores
 * const hoy = new Date('Abril 18, 2022');
 * .toDateString() Abril 17 2022
 * .toLocaleString() 18/04/2022 00:00:00
 * .toLocaleDateString() 18/04/2022
 * .toTimeString() 00:00:00 GTM-0300 (hora estandar Argentina)
 */