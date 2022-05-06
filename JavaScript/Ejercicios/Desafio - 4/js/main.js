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
    mostrarBiblioteca = () => {
        let lista = "";
        let ul = document.getElementById('ul-libros');
        this.arrayLibros.forEach(i => {
            lista += `
            <div>
                <li id="li"><img id="portada" src="${i.url}"></img></li>
                <li id="li"><p id="titulo">${i.titulo}</p></li>
                <li id="li"><p id="autor">${i.autor}</p></li>
                <li id="li"><p id="precio">$${i.precio}</p></li>
            </div>
            `;
        });
        ul.innerHTML = lista;
    };
    buscarLibro = (titulo) => this.arrayLibros.find((i) => i.titulo.toLowerCase() == titulo.toLowerCase());
    calcularPrecioTotal = (arrayLibros) => {
        let precioTotal = 0;
        arrayLibros.forEach((i) => {
            precioTotal += i.precio;
        })
        return precioTotal;
    }
    calcularPrecioTotalMasIva = (arrayLibros) => this.calcularPrecioTotal(arrayLibros) * 1.21;
    mostrarLibrosComprados = (arrayLibros) => {
        let lista = '';
        let div = document.getElementById('contenedor-comprar');
        div.style.display = 'flex';
        let ul = document.getElementById('ul-buscar');
        arrayLibros.forEach((i) => {
            lista += `
            <li id="li-comprar">
                <img id="portada-comprar" src="${i.url}"/>
                <p id="titulo">${i.titulo} -</p>
                <p id="autor">${i.autor} -</p>
                <p id="precio">$${i.precio}</p>
            </li>
        `;
        });
        ul.innerHTML = lista;
        div.append(ul);
    }
    comprarLibros = (arrayLibros) => {
        let lista = '';
        let ul = document.getElementById('ul-comprar');
        lista = `
        <li id="li"><p>--------------TICKET--------------</p></li>
        <li id="li"><p id="total">Precio: $${this.calcularPrecioTotal(arrayLibros)}</p></li>
        <li id="li"><p id="total">Precio + IVA: $${this.calcularPrecioTotalMasIva(arrayLibros)}</p></li>
        <li id="li"><p id="total">Fecha: ${this.fechaCompra()}</p></li>
        <li id="li">-----------------------------------</li>`;
        ul.innerHTML = lista;
    }
    fechaCompra = () => {
        let fecha = new Date();
        return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
    }
    /***************************ALERTAS****************************/
    alertaCompra = () => alert('USTED YA REALIZO UNA COMPRA.');
    alertaNoExiste = () => alert('NO DISPONEMOS DE DICHO EJEMPLAR.');
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

let acumulador = [];
let index = false;

let biblio = instanciarBiblioteca();
biblio.mostrarBiblioteca();

let comprar = document.getElementById('btn-comprar');
let buscar = document.getElementById('btn-buscar');
let input = document.getElementById('titulo-buscar');
buscar.addEventListener('click', (e) => {
    e.preventDefault();
    if(input != ''){
        if(index == false){
            if(biblio.buscarLibro(input.value) != undefined){
                acumulador.push(biblio.buscarLibro(input.value));
                biblio.mostrarLibrosComprados(acumulador);
                input.value = '';
            }else{
                biblio.alertaNoExiste();
            }
        }else{
            biblio.alertaCompra();
        }
    }
});

comprar.addEventListener('click', (e) => {
    e.preventDefault();
    if(index == false){
        biblio.comprarLibros(acumulador);
        index = true;
    }else{
        biblio.alertaCompra();
    }
});




    




