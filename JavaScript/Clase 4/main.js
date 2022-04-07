
// Función simple - No recibe ni devuelve datos
function pedirNombre(){
    let nombreIngresado = prompt('Ingrese nombre: ');
    console.log('El nombre es: ' + nombreIngresado);
}

pedirNombre();

// Función compleja - Recibe dos parametros
function conParametros(parametro1, parametro2){
    console.log(parametro1, parametro2);
}

conParametros('parametro1', 'parametro2');

let resultado = 0;

// Función compleja - Recibe dos valores y devuelve un valor.
function sumar(valor1, valor2){
    resultado = valor1 + valor2;
    return resultado;
}

console.log(sumar(10,5));

// FUNCIÓN ANONIMA -> No tiene nombre
const restar = function (a, b) { return a - b}

// FUNCIÓN FLECHA -> No es necesario usar function y return
const dividir = (a, b) => a / b;