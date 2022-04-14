/**
 * ARRAY
 * Un array es un tipo de dato que sirve para almacenar valores en forma de lista.
 * Puede ser una colección de números, strings, booleanos, objetos o hasta una lista de listas.
 * Los valores del array pueden ser distintos y es posible agregar o quitar elementos en todo momento.
 * Los elementos del array tiene un índice que va desde 0 (el primer elemento del array) hasta el ultimo elemento.
 * Se declara una variable y asigar un array empleamos los corchetes ([]) y dentro de ellos definimos todos los valores separados por coma.
 * let array = [];
 * El primer elemento del array, su indice es [0].
 * Podemos recorrer el array con el bucle for y usando el index para mostrar el valor.
 * Si el index no existe, devuelve undefined
 * */

let random = [1,"2",true,"hola",false];

// Agrega elemento al final.
random.push('ultimo elemento');

// Elimina el ultimo elemento.
let elementoEliminado = random.pop();

for(let index = 0; index < random.length; index++){
    console.log(random[index]);
}

console.log(elementoEliminado);


let arrayNombres = ['Hernán', 'Flavio', 'Federico', 'Mauro', 'Lautaro'];
console.log(arrayNombres);

// arrayNombres.splice(2,2);
// console.log(arrayNombres);

console.log('indice: ' + arrayNombres.indexOf('Federico'));

console.log(arrayNombres.includes('Mauro'));

let stringNombres = arrayNombres.join(', ');
console.log(stringNombres);

let totalNombres = arrayNombres.concat(stringNombres);
console.log(totalNombres);

let parteDelTotal = totalNombres.slice(0,3); 
console.log(parteDelTotal); // hernan flavio federico
console.log(parteDelTotal.reverse());

/**
 * Metodos y propiedades del array
 * .length = Propiedad, devuelve la cantidad de elementos del array.
 * .push() = Metodo, agrega un elemento al final del array.
 * .pop() = Metodo, remueve el ultimo elemento del array y lo retorno.
 * .unshift() = Metodo, agrega elementos al principio del array.
 * .shift() = Metodo, quita une elemento al principio del array y cambia el orden de los indices.
 * .splice(indice, cantidad) = Metodo, permite eliminar varios elementos de un array en cualquier posición. Funciona con 2 parámetros: El primero "indice" donde se ubica el método para trabajar y el segundo es la cantidad de elementos a "eliminar" desde esa posición
 * .join() = Metodo, nos permite generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro.
 * .concat() = Metodo, nos permite combinar dos arrays en uno mismo.
 * .slice(indice, indice) = Metodo, nos devuelve una copia de una parte del Array dentro de un nuevo Array. empezando por el inicio hasta el fin (fin no incluído). El array original no se modifica.
 * .indexOf() = Metodo, nos permite obtener el indice de un elemento de un array. Recibe por parametro un elemento que queremos buscar en el array y, en caso de existir, nos retoma su indice. Si el elemento no existe nos retornará como valor: -1.
 * .includes() = Metodo, nos permite saber si un elemento existe dentro del array. Si existe devuelve true, en caso contrario false.
 * .reverse() = Metodo, nos invierte el orden de los elementos dentro de un array.
 * */

/**
 * ARRAY Y OBJETOS
 */

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let persona = new Persona('Hernan', 'Franco', 25);
let persona1 = new Persona('Aylen', 'Moreno', 23);
let persona2 = new Persona('Martin', 'Franco', 21);
let persona3 = new Persona('Gabriela', 'Guerra', 49);

let arrayPersonas = [persona, persona1, persona2, persona3];

for(let i = 0;i < arrayPersonas.length;i++){
    console.log(arrayPersonas[i].nombre);
    console.log(arrayPersonas[i].edad);
}

let indice = arrayPersonas.findIndex(persona => persona.nombre == 'Hernan');
console.log(indice)

/**
 * findIndex(condicion) = Metodo, preguntamos si existe un valor dentro de los objetos y nos devuelve el indice del objeto que contiene ese valor
 */

/**
 * For of nos recorre un array de objetos
 */
for(i of arrayPersonas){
    console.log(i);
}