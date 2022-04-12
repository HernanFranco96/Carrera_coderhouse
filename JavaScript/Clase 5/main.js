/**
 * OBJETOS
 * Los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
 * Podemos decir qeu un objeto es una colección de datos relacionados como una entidad.
 * Se componen de un listado de pares clave-valor, contienen propiedades y valores agrupados.
 * */

// const persona = {
//     nombre: 'Hernan',
//     apellido: 'Franco',
//     edad: 25,
//     email: 'hernan.franco051096@gmail.com',
//     telefono: '123456789'
// }

/**
 * Para acceder al objeto se llama al nombre del objeto y por consiguiente un punto y el nombre de la propiedad.
 * Tambien se puede usar corchetes y comillas para acceder a la propiedad.
 */
// console.log(persona.nombre + " " + persona['apellido']);

/**
 * Cambiamos el valor de la propiedad.
 */
// persona.email = 'sazara@hotmail.com.ar';
// persona['edad'] = 35;

/**
 * CONSTRUCTORES
 * El constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.
 * Con esta "función constructura" podemos inicializar las propiedades del objeto al momento de ser instanciado con new.
 * La palabra clave this refiere al lemento actual en el que se está escribiendo codigo.
 * Cuando se emplea un función constructora para crear un objeto, this esta enlazado al nuevo objeto instanciado.
 * This es muy util para asegurar que se emplean las propiedades del objeto actual.
 */

/**
 * Direncia entre MÉTODO Y FUNCIÓN
 * Las funciones pueden declararse en cualquier momento.
 * Los metodos son como las funciones solo que se declaran dentro de un objeto y funciona dentro de dicho ambito.
 * Los metodos funcionan como funciones anonimas o flechas
 * */

/**
 * Operador in devuelve true si la propiedad especificada existe en el objeto
 * Bucle For In permite acceder a todas las propiedades del objeto
 */

function Persona(nombre, apellido, edad){
    // Propiedades
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    // Metodos
    this.calcularEdad = () => {
        return 2022 - edad;
    }

    this.mostrar = () => {
        return `${this.nombre} ${this.apellido} ${this.edad} ${this.calcularEdad()}`
    }
};

let nombre, apellido, edad;
nombre = prompt('Ingrese nombre: ');
apellido = prompt('Ingrese nombre: ');
edad = parseInt(prompt('Ingrese nombre: '));

const persona1 = new Persona(nombre,apellido,edad);
const persona2 = new Persona('Lautaro','Aquino',26);

console.log(persona1.mostrar());

// Preguna si el objeto persona2 tiene la propiedad nombre
if('nombre' in persona2){
    console.log(persona2.nombre);
}

// for lo que hace es recorrer todas las propiedades del objeto
for(const propiedad in persona2){
    console.log(persona2[propiedad]);
}

/**
 * Otros metodos
 */

let cadena = 'Hola como andas?';
// Pasa el string a minuscula
console.log(cadena.toLocaleLowerCase());
// Pasa el string a mayuscula
console.log(cadena.toLocaleUpperCase());
// typeof indica tipo de dato
console.log(typeof cadena);
// Devuelve la cantidad de string
console.log(cadena.length);

