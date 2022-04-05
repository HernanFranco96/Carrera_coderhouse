
/**
 * TIPOS DE BUCLES
 * Ciclos por conteo:
 *  Repiten un bloque de código un número de veces especifica. Ejemplo: FOR
 * Cilos condicionales:
 *  Repiten un bloque de código mientras la condición evaluada es verdadera. Ejemplo: While y Do While
 */

 let condicion = true;
 let condicion2 = false;
 let i = 0;

/**
 * FOR
 * Se ejectura mientras se cumplan las condiciones
 * desde, hasta, actualización
 */
for(i = 0, i < 10 , i++){
    console.log('incrementa: ' + i); 
    if(i == 5)
        // break corta el ciclo for
        break;  
    if(i == 6)
        // continue saltea esta repetición y sigue con la proxima
        continue;
}

/**
 * WHILE EJECUTA SIEMPRE QUE LA CONDICIÓN SEA VERDADERA
 */

while(condicion == condicion2){
    console.log('Ejectura si la condición es verdera');
    i++;
}


/**
 * DO WHILE SE EJECUTA AL MENOS UNA VEZ
 * Si la consición es verdera se volvera a ejecutar
 */
do{
    console.log('Ejectura por lo menos una ves');
    i++;
}while( condicion2 > condicion)

/**
 * SWITCH 
 * Esta desarrollada para tener múltiples condiciones sobre la misma variable
 * Si la consición es verdadera, buscara el case correspondiente.
 * Switch compara tipo y valor como un ===
 */

switch(condicion){
    case 5:
        console.log('Ingreso 5');
        break;
    case 10:
        console.log('Ingreso 10');
        break;
    case 15:
        console.log('Ingreso 15');
        break;
    default:
        console.log('Ingreso cualquier cosa');
        break;
}

/**
 * Crear un algoritmo que repita un bloque de instrucciones
 */

let entrada = "";
let texto = "";

do{
    entrada = prompt('Ingrese un texto');
    if(texto != ""){
        texto += " ";
    }
    if(entrada != 'ESC'){
        texto += entrada;
    }
    
    console.log(texto);
}while(entrada != 'ESC');