/**
 * BIBLIOTECA VIRTUAL
 * HERNÁN FRANCO
 * Clase 30335
 */

class Libro{
    constructor(legajo, titulo, autor, precio){
        this.legajo = legajo;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }
    mostrarLibros = () => `[${this.legajo}] ${this.titulo} - ${this.autor} $${this.precio}`;
}

class Biblioteca {
    constructor(arrayLibros){
        this.arrayLibros = arrayLibros;
    }
    mostrarBiblioteca = () => this.arrayLibros.forEach((i) => console.log(i.mostrarLibros()));
    comprarLibro = () => {
        let legajo = parseInt(prompt(`[ATENCIÓN: La lista de libros se muestra por console.log]\nPor favor eliga el legajo del libro: `));
        if(legajo > 0 && legajo <= 10)
            return this.elegirLibro(legajo);
        else{
            return -1;
        }
    }
    elegirLibro = (legajo) =>  this.arrayLibros.find((i) => i.legajo == legajo)
    calcularPrecioTotal = (arrayLibros) => {
        let precioTotal = 0;
        arrayLibros.forEach((i) => {
            precioTotal += i.precio;
        })
        return precioTotal;
    }
    calcularPrecioTotalMasIva = (arrayLibros) => this.calcularPrecioTotal(arrayLibros) * 1.21;
    mostrarLibrosComprados = (arrayLibros) => {
        console.clear();
        let cadena = "-------------------------[TICKET]--------------------------\nProductos:\n";
        arrayLibros.forEach((i) => cadena += `${i.mostrarLibros()}\n`)
        cadena += `-----------------------------------------------------------\nTotal sin iva: $${this.calcularPrecioTotal(arrayLibros)}\nTotal con 21% iva: $${this.calcularPrecioTotalMasIva(arrayLibros)}\nFecha de su compra: ${this.fechaCompra()}`;
        return cadena;
    }
    fechaCompra = () => {
        let fecha = new Date();
        return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
    }
}

let instanciarLibros = () => {
    let libro0 = new Libro(1, 'El Hobbit', 'J.R.R Tolkien', 1200);
    let libro1 = new Libro(2, 'Harry Potter y la piedra filosofal', 'J.K Rowling', 2200);
    let libro2 = new Libro(3, 'El Huracan Rojo', 'Alejandro Horowicz', 4500);
    let libro3 = new Libro(4, 'La voz del gran jefe', 'Felipe Piña', 3200);
    let libro4 = new Libro(5, 'Economia', 'David Ricardo', 800);
    let libro5 = new Libro(6, 'El contrato social', 'Jean Jacques Rousseau', 1000);
    let libro6 = new Libro(7, 'El Leviatan', 'Hobbes', 650);
    let libro7 = new Libro(8, 'El Principe', 'Maquiavelo', 700);
    let libro8 = new Libro(9, 'Las riquezas de las naciones', 'Adam Smith', 1500);
    let libro9 = new Libro(10, 'El manifiesto comunista', 'Karl Marx', 1450);
    return [libro0,libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9];
}

let instanciarBiblioteca = () => {
    let biblio = new Biblioteca(instanciarLibros());
    return biblio;
}

let inicio = () => {
    let cantidad = parseInt(prompt(`!BIENVENIDO A LA BIBLIOTECA!\nLe informamos que puede adquirir un maximo de 5 libros.\nIngrese la cantidad de libros que llevara: `));
    if(cantidad > 0 && cantidad <= 5)
        return cantidad;
    else
        return -1;
}

let cantidad = 0;
let acumulador = [];
let i = 0;
let libro;
let mostrar = true;

cantidad = inicio();
let biblio = instanciarBiblioteca();
biblio.mostrarBiblioteca();

if(cantidad != -1){
    while(i < cantidad){
        libro = biblio.comprarLibro();
        if(libro != -1)
            acumulador.push(libro);
        else{
            mostrar = false;
            console.clear();
            alert('COMPRA INTERRUMPIDA');
            console.log('-------------------------------------------------------------\n[Se cancelo la operación ya que introdujo un legajo invalido]\n-------------------------------------------------------------');
            break;
        }
        i++;
    }
    if(mostrar)
        console.log(biblio.mostrarLibrosComprados(acumulador));
}else{
    console.clear();
    alert('OPERACIÓN INTERRUMPIDA');
    console.log('----------------------------------------------\n[La cantidad de libros ingresada no es valida]\n----------------------------------------------');
}
    




