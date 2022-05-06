/**
 * Operador Ternario
 * Es una simplificación de la estrcutura condicional if else.
 * Tiene la siguiente sintaxis:
 * condicion ? operacion1 (si es true) : operacion2 (si es false)
 * Esto funciona con solo una sola sentencia.
 * Sus operaciones pueden retornar valores
 */
let a = 3;
(a == 3) ? console.log('La variable es igual a 3') : console.log('No es igual a 3');

// Si a es igual a 3, se le asigna 4 sino se le asigna 2.
a = (a == 3) ? 4 : 2;
console.log(a);

/**
 * Operador lógico and
 * Es una reduccion de un condicional, pero trata de ejecutar algo solo si la condición es verdadera,
 * reduce un if sencillo con un solo bloque de ejecución.
 */
let b = 5;
b === 5 && console.log('b es 3');

// Si b es igual a 5, se le asigna 15.
b = b === 5 && 15;
console.log(b);

/**
 * Operador lógico OR
 * Es sintácticamente similar al anterior, con la diferencia que consta de dos operandos
 * y no de una condición explicita: operador1 || operador2
 * Si no es falso (si es distinto de 0, null, undefined, NaN, false, o string vació)

 */
console.log(b || 'El valor de b es 0');

/**
 * Operador Nullish Coalescing
 * El operador (??) funciona igual que el operador OR, con la diferencia que admite
 * mas valores como true. En este caso, solo obtenemos nullish en dos casos.
 * null o undefined son los unicos casos que arroja falso.
 */
let c = 5;
console.log(c ?? 'c es falso');
c = 0;
console.log(c ?? 'c es falso');

/**
 * ACCESO CONDICIONAL A UN OBJETO
 * Si intentamos acceder a un objeto que no existe naturalmente obtendremos un error.
 * Pero, si usamos el operador ? sobre la referencia de un objeto para condicionar su
 * acceso podemos tener un mejor control de errores en la ejecución.
 */
const productos = [
    {
        nombre: 'Arroz',
        precio: 35,
        categoria: {
            nombre: "Cereal"
        },
        stock: 25,
        vencimiento: '25/08/2022'
    }
];

productos.forEach(i => {
    // Si el objeto tiene categoria, muestra su nombre sino muestra "sin categoria".
    const categoria = i.categoria?.nombre || 'Sin categoria';
    console.log(categoria + ": " + i.nombre)
});

const persona = {
    nombre: 'Hernan',
    apellido: 'Franco',
    edad: 25,
}


/**
 * DESESTRUCTURACIÓN
 * let {prop, prop} = objeto
 * Declaramos variables y en ellas almacenamos los valores de las propiedades. 
 * Hacemos esto para trabajar con inmutabilidad, es decir utilizar valores sin riesgo de alterar las propiedades del objeto.
 */

// Busca en el objeto si existe algun parentesco con las variables que estan entre llaves
// Si existen almacenan el valor de la propiedad del objeto.
const {nombre, apellido, edad} = persona;
console.log(nombre + " " + apellido + " " + edad);
// const {categoria: {nombre}} = producto;

/**
 * ALIAS
 * Esto lo hacemos simplemenete con el operador : luego del nombre de la propiedad
 * En este caso desestrcturamos todas las propiedades de item, pero lo almacenamos en variables denominadas id,
 * nombre, precio, a través del alias que indicamos.
 */

const {
    nombre: nombre_del_producto,
    apellido: precio_del_producto
} = persona

console.log(nombre_del_producto);
console.log(precio_del_producto);

/**
 * DESESTRUCTURACIÓN EN FUNCIÓN
 */
const productoPrueba = { nombre: 'Mario' };

function imprimirNombreDelProducto({nombre: nombre_del_producto}) {
    console.log('El nombre es: ' + nombre_del_producto);
}
imprimirNombreDelProducto(productoPrueba);

/**
 * DESESTRUCTURACIÓN EVENTOS
 */
let boton = document.getElementById('boton');
boton.addEventListener('click', ({target}) => {
    // const target = e.target
    console.log(target);
});

/**
 * DESESTRUCTURACIÓN ARRAYS
 * Es posible desestructurar arrays de forma similar, usando corcheter en vez de llaves.
 * La diferencia con la desestructuracion de objetos es que la array es posicional.
 */

const miArray = ['elemento 1', 'elemento 2', 'elemento 3'];
const [ele1, ele2, ele3] = miArray;
console.log(ele1, ele2, ele3);

/**
 * SPREAD
 * Es una herramienta que nos permite, desparramar un array
 * Si paso un array por parámetro a alguna función, ésta recibe el arran entero como tal
 * Si en cambio enviamos un spread ... podemos enviar muchos elementos por parametros y se transformaran en un array.
 */

function mostrarArray(...array){
    console.log(array);
}

mostrarArray('elemento 1','elemento 2','elemento 3','elemento 4','elemento 5',);

/**
 * SPREAD DE ARRAYS
 */

const numeros = [2,4,6,1,7,3,8];
console.log( Math.max(...numeros) );

/**
 * SPREAD CON CONCATENACION
 */

const array1 = ['Producto 1', 'Producto 2'];
const array2 = ['Producto 3', 'Producto 4'];

const concatenacion = [
    ...array1,
    ...array2
];

console.log(concatenacion);

/**
 * SPREAD DE OBJETOS
 * Un spread aplicado sobre un objeto presentaría cada par de clave-valor separado por comas,
 * y ésto en una función no sería admisible, pero si puede serlo dentro de otro objeto.
 */

const usuario1 = {
    nombre: "Hernan",
    edad: 25,
    curso: 'CSS3'
};
const usuario2 = {
    ...usuario1,
    nombre: 'German',
};

console.log(usuario1, usuario2);