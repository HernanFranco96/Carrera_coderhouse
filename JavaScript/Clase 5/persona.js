/**
 * CLASES
 */

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido;
        this.edad = parseInt(edad);
        this.mayor = false;
    }

    hablar () {
        if(this.calcularEdad() <= 2004)
            return `Hola! mi nombre es ${this.nombre} ${this.apellido} y naci en ${this.calcularEdad()}, por lo tanto soy mayor de edad`;
        else
            return `Hola! mi nombre es ${this.nombre} ${this.apellido} y naci en ${this.calcularEdad()}, por lo tanto soy menor de edad`;
    }

    calcularEdad() {
        return (2022 - this.edad) - 1;
    }
}

const persona1 = new Persona('Hernan', 'Franco', 25);
const persona2 = new Persona('Lautaro', 'Aquino', 15);

console.log(persona1.hablar());
console.log(persona2.hablar());