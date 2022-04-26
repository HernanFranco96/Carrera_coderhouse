/**
 * BIBLIOTECA VIRTUAL
 * HERNÁN FRANCO
 * Clase 30335
 */

class Libro{
    constructor(legajo, titulo, autor, precio, url){
        this.legajo = legajo;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.url = url;
    }
    mostrarLibros = () => `[${this.legajo}] ${this.titulo} - ${this.autor} $${this.precio}`;
}

class Biblioteca {
    constructor(arrayLibros){
        this.arrayLibros = arrayLibros;
    }
    inicio = () => {
        let cantidad = parseInt(prompt(`!BIENVENIDO A LA BIBLIOTECA!\nLe informamos que puede adquirir un maximo de 5 libros.\nIngrese la cantidad de libros que llevara: `));
        if(cantidad > 0 && cantidad <= 5)
            return cantidad;
        else
            return -1;
    }
    mostrarBiblioteca = () => {
        let ul = document.getElementById('ul');
        this.arrayLibros.forEach(i => {
            let li = document.createElement('li');
            let portada = document.createElement('img');
            let precio = document.createElement('p');
            let titulo = document.createElement('p');
            let autor = document.createElement('p');
            li.id = 'li';
            portada.id = `portada`;
            portada.src = `${i.url}`
            precio.id = `precioLibro`;
            precio.innerText = `$${i.precio}`;
            autor.id = `autor`;
            autor.innerText = `${i.autor}`;
            titulo.id = `titulo`;
            titulo.innerText = `${i.titulo}`;
            li.append(precio);
            li.append(autor);
            li.append(titulo);
            li.append(portada);
            ul.append(li);
        });
    };
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
        let div = document.getElementById('contenedor-precio');
        let precio = document.createElement('p');
        let precioIva = document.createElement('p');
        let fecha = document.createElement('p');
        precio.id = 'precio';
        precioIva.id = 'precioIva';
        fecha.id = 'fecha';
        precio.innerText = `Precio: $${this.calcularPrecioTotal(arrayLibros)}`; 
        precioIva.innerText = `Precio + IVA: $${this.calcularPrecioTotalMasIva(arrayLibros)}`; 
        fecha.innerText = `Fecha: ${this.fechaCompra()}`;
        div.append(precio);
        div.append(precioIva);
        div.append(fecha);
    }
    fechaCompra = () => {
        let fecha = new Date();
        return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
    }
}

let instanciarLibros = () => {
    let libro0 = new Libro(1, 'El Hobbit', 'J.R.R Tolkien', 1200, 'assets/libros-portadas/Hobbit.jpg');
    let libro1 = new Libro(2, 'Harry Potter y la piedra filosofal', 'J.K Rowling', 2200, 'assets/libros-portadas/Harry-Potter.jpg');
    let libro2 = new Libro(3, 'El Huracan Rojo', 'Alejandro Horowicz', 4500, 'assets/libros-portadas/Huracan-Rojo.png');
    let libro3 = new Libro(4, 'La voz del gran jefe', 'Felipe Piña', 3200, 'assets/libros-portadas/La-voz-del-gran-jefe.jpg');
    let libro4 = new Libro(5, 'Economia', 'David Ricardo', 800, 'assets/libros-portadas/economia-ricardo.jpg');
    let libro5 = new Libro(6, 'El contrato social', 'Jean Jacques Rousseau', 1000, 'assets/libros-portadas/contrato-social.jpg');
    let libro6 = new Libro(7, 'El Leviatan', 'Hobbes', 650, 'assets/libros-portadas/leviatan.jpg');
    let libro7 = new Libro(8, 'El Principe', 'Maquiavelo', 700, 'assets/libros-portadas/principe.jpg');
    let libro8 = new Libro(9, 'Las riquezas de las naciones', 'Adam Smith', 1500, 'assets/libros-portadas/las-riquezas-naciones.jpg');
    let libro9 = new Libro(10, 'El manifiesto comunista', 'Karl Marx', 1450, 'assets/libros-portadas/comunista.jpg');
    return [libro0,libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9];
}

let instanciarBiblioteca = () => {
    let biblio = new Biblioteca(instanciarLibros());
    return biblio;
}

let cantidad = 0;
let acumulador = [];
let i = 0;
let libro;
let mostrar = true;

let biblio = instanciarBiblioteca();
biblio.mostrarBiblioteca();
cantidad = biblio.inicio();
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
    




