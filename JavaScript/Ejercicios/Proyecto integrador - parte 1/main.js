
/**
 * BIBLIOTECA VIRTUAL
 * HERNÁN FRANCO
 * Clase 30335
 */

/**
 * Muestra un mensaje de bienvenida, aclara el maximo de libros y solicita un entero.
 * @returns retorna un entero.
 */
function inicio(){
    let cantidad = parseInt(prompt(`!BIENVENIDO A LA BIBLIOTECA!\nLe informamos que puede adquirir un maximo de 5 libros.\nIngrese la cantidad de libros que llevara: `));
    return cantidad;
}

/**
 * Muestra una lista por consola de los libros disponibles.
 * @returns retorna legajo del libro elegido. En caso de no existir el legajo retorna -1.
 */
function mostrarLibros(){
    console.log(`[1] El Hobbit - J.R.R Tolkien - $1200
[2] Harry Potter y la piedra filosofal - J.K Rowling - $2200
[3] El Huracan Rojo - Alejandro Horowicz - $2500
[4] La voz del gran jefe - Felipe Piña - $3200
[5] Economia - David Ricardo - $800
[6] El contrato social - Jean Jacques Rousseau - $1000
[7] El leviatan - Hobbes - $650
[8] El principe - Maquiavelo - $700
[9] Las riquezas de las naciones - Adam Smith - $1500
[10] El manifiesto comunista - Karl Marx - $1450`);

    let legajo = parseInt(prompt(`[ATENCIÓN: La lista de libros se muestra por console.log]\nPor favor eliga el legajo del libro: `));
    if(legajo > 0 && legajo <= 10)
        return legajo;
    else{
        return -1;
    }
}

/**
 * Vincula el legajo con el libro y devuelve un string.
 * @param {*} legajo 
 * @returns retorna un string con el nombre del libro.
 */
function elegirLibro(legajo){
    switch(legajo){
        case 1:{
            return 'El Hobbit - J.R.R Tolkien';
        }
        case 2:{
            return 'Harry Potter y la piedra filosofal - J.K Rowling';
        }
        case 3:{
            return 'El Huracan Rojo - Alejandro Horowicz';
        }
        case 4:{
            return 'La voz del gran jefe - Felipe Piña';
        }
        case 5:{
            return 'Economia - David Ricardo';
        }
        case 6:{
            return 'El contrato social - Jean Jacques Rousseau';
        }
        case 7:{
            return 'El leviatan - Hobbes';
        }
        case 8:{
            return 'El principe - Maquiavelo';
        }
        case 9:{
            return 'Las riquezas de las naciones - Adam Smith';
        }
        case 10:{
            return 'El manifiesto comunista - Karl Marx';
        }
    }
}

/**
 * Vincula el legajo con el precio del libro y devuelve un entero.
 * @param {*} legajo 
 * @returns retorna el valor del libro.
 */
function calcularPrecio(legajo){
    switch(legajo){
        case 1:{
            return 1200;
        }
        case 2:{
            return 2200;
        }
        case 3:{
            return 2500;
        }
        case 4:{
            return 3200;
        }
        case 5:{
            return 800;
        }
        case 6:{
            return 1000;
        }
        case 7:{
            return 650;
        }
        case 8:{
            return 700;
        }
        case 9:{
            return 1500;
        }
        case 10:{
            return 1450;
        }
    }
}

let acumulador = 0;
let cantidad = 0;
let i = 0;
let legajo = 0;
let acumuladorNombres = "";
let acumuladorPrecio = 0;
let precioActual = 0;
let iva = 1.21;
let precioTotal = 0;

cantidad = inicio();

if(cantidad > 0 && cantidad <= 5){
    while(i < cantidad){
        legajo = mostrarLibros();
        if(legajo != -1){
            precioActual = calcularPrecio(legajo);
            acumuladorPrecio += calcularPrecio(legajo);
            acumuladorNombres += `[${legajo}] ` + elegirLibro(legajo) + `. Precio: $${precioActual}\n`;
            precioActual = 0;
            i++;
        }
        else{
            alert('El legajo no existe.');
            break;
        }
    }
    if(i == cantidad){
        precioTotal = acumuladorPrecio * iva;
        console.log(`Usted escogio: \n${acumuladorNombres}\nLibros: $${acumuladorPrecio}\niva: 21%\nTotal + iva: $${precioTotal}`);
    }else{
        alert('Operación interrumpida.');
    }
}else{
    alert('La cantidad ingresa, no es valida.');
}
