
/**
 * Valores booleanos
 * true o false
 * verdadero o falso
 */

/**
 * CONDICIONAL IF
 * El if se traduce como "Si o No"
 * Es una pregunte, para verificar si algo es verdadero o falso
 * CONTROL DE FLUJO
 * Normalmente el flujo de codigo no para. Pero con los condicional esto cambia.
 * Si la condicion es verdadera, se ejecutara el codigo dentro del condicional y eso detiene el flujo.
 */

/**
 * OPERADOR DE COMPARACIÓN
 * == -> Si es igual
 * === -> Si es estrictamente igual
 * < -> Si es menor
 * > -> Si es mayor
 * != -> Si es distinto
 * ! -> Negación
 */

/**
 * OPERACIONES COMPUESTAS 
 * && [AND] -> Si todas las condiciones son verdaderas, es verdadero
 * || [OR] -> Si alguna de las condiciones es verdadera, es verdadero 
 */

/**
 * typeof 
 * Nos devuelve el tipo de dato
 */

let numero = 8;

if(numero == 5){
    console.log('El numero es igual a 5');
}
else if(numero == 10){
    console.log('El numero es igual a 10');
}
else{
    console.log('El numero no es igual a 5');
}

let booleano = (numero == 5);
console.log(booleano);

if(numero > 5){
    console.log('Es mayor a 5');
}
else if(numero < 5){
    console.log('El numero es menor a 5');
}

/****************************************************/

// let nombreUsuario = prompt('Ingrese nombre de usuario: ');

// if(nombreUsuario == ""){
//     alert('No ingresaste el nombre de usuario.');
// }
// else if(nombreUsuario == "Hernan"){
//     alert('Es el profesor');
// }
// else if(nombreUsuario != "Hernan"){
//     alert('Es un alumno.');
// }

/****************************************************/

/** && */
let nombre = 'Gaston'
let apellido = 'Franco'

if(nombre == 'Gaston' && apellido == 'Franco'){
    console.log('Hola profesor ' + nombre + " " + apellido);
}

if(nombre == 'Gaston' || apellido == 'Lorenzo'){
    console.log('Hola alumno ' + nombre + ' ' + apellido);
}

/**************************************************** */

let numerO = prompt('Ingrese un numero: ');

if(parseInt(numerO) > 1000){
    alert('El numero es mayor a 1000');
}
if(parseInt(numerO) >= 10 || parseInt(numerO) <= 50){
    alert('El numero esta entre 10 o 50');
}
if(!parseInt(numerO)){
    console.log('No es un numero');
}

/**
 * Number nos permite crear un objeto de tipo Number
 */
let num = Number('3333');
console.log(num);