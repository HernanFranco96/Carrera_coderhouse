/**
 * BIBLIOTECA VIRTUAL
 * HERNÁN FRANCO
 * Clase 30335
 */

class Libro{
    constructor(legajo, titulo, autor, precio, url, stock, repetidos){
        this.legajo = legajo;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.url = url;
        this.stock = stock;
        this.repetidos = repetidos;
    }
}

class Biblioteca {
    constructor(arrayLibros){
        this.arrayLibros = arrayLibros;
    }
    inicio = () => {
        let lista = "";
        let ul = document.getElementById('ul-libros');
        let libros = this.getLibros();
        libros.forEach(i => {
            lista += `
            <li id="libro-${i.legajo}" class="libro">
                <div id="libros"><img id="portada" src="${i.url}"></img></div>
                <div id="libros"><p id="titulo-${i.legajo}" class="titulo">${i.titulo}</p></div>
                <div id="libros"><p id="autor">${i.autor}</p></div>
                <div id="libros"><p id="precio">$${i.precio}</p></div>
                <div id="libros"><p id="stock">Stock: ${i.stock}</p></div>
            </li>
            `;
        });
        ul.innerHTML = lista;
    };
    buscarLibro = (titulo) => this.arrayLibros.find((i) => i.titulo.toLowerCase() == titulo.toLowerCase());
    calcularPrecioTotal = (arrayLibros) => {
        let precioTotal = 0;
        arrayLibros.forEach((i) => {
            precioTotal += i.precio * i.repetidos;
        });
        return precioTotal;
    }
    calcularPrecioTotalMasIva = (arrayLibros) => this.calcularPrecioTotal(arrayLibros) * 1.21;
    restarCantidad = (libro) => {
        let biblio = this.getLibros();
        biblio.find((i) => {
            if(i.legajo == libro.legajo){
                if(i.stock > 0){
                    i.stock = i.stock - libro.repetidos;
                    this.setLibros(biblio);
                    indexStock = true;
                }else if(i.stock <= 0){
                    this.error(2);
                    indexStock = false;
                }                                      
            }
        });
    }
    librosSeleccionados = (arrayLibros) => {
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
                <p id="precio">(${i.repetidos})</p>
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
        <li id="li-comprar"><p>--------------TICKET--------------</p></li>
        <li id="li-comprar"><p id="total">Precio: $${this.calcularPrecioTotal(arrayLibros)}</p></li>
        <li id="li-comprar"><p id="total">Precio + IVA: $${this.calcularPrecioTotalMasIva(arrayLibros)}</p></li>
        <li id="li-comprar"><p id="total">Fecha: ${this.fechaCompra()}</p></li>
        <li id="li-comprar">-----------------------------------</li>`;
        ul.innerHTML = lista;
    }
    verificarRepetidos = (arrayLibros, libro) => {
        if(arrayLibros.length === 0 || arrayLibros.indexOf(libro) === -1){
            libro.repetidos = 1;
            arrayLibros.push(libro);
        }else{
            arrayLibros.forEach(i => {
                if(i.legajo == libro.legajo){
                    i.repetidos++;
                }
            })
        }   
        return arrayLibros;
    }
    /*****************************FECHA****************************/
    fechaCompra = () => {
        let fecha = new Date();
        return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
    }
    /***************************ALERTAS****************************/
    error = (n) => {
        let contenedor = document.getElementById('contenedor-titulo');
        let p = document.createElement('p');
        p.id = 'alerta-roja';
        if(n == 0)
            p.innerText = 'Usted ya ha realizado una compra. Cargue nuevamente la pagina para proceder a otra compra.';
        else if(n == 1)
            p.innerText = 'Debe hacer click en el titulo del libro.';
        else if(n == 2)
            p.innerText = 'NO HAY STOCK.';
        else if(n == 3)
            p.innerText = 'Primero debe seleccionar algun libro para ejecutar su compra.';
        contenedor.append(p);
    }
    compraRealizada = () => {
        let contenedor = document.getElementById('contenedor-titulo');
        let p = document.createElement('p');
        p.id = 'alerta-verde';
        p.innerText = 'Compra realizada con exito!';
        contenedor.append(p);
    }

    /************************ALMACENAMIENTO************************/
    setLibros = (arrayLibros) => {
        arrayLibros.forEach(i => {
            localStorage.setItem(`Legajo: ${i.legajo}`, JSON.stringify(i));
        });
    }
    getLibros = () => {
        let nuevoArray = [];
        for(let i = 1;i <= 10; i++){
            nuevoArray.push(JSON.parse(localStorage.getItem(`Legajo: ${i}`)));        
        }
        return nuevoArray;
    }
}

let instanciarLibros = () => {
    let libro0 = new Libro(1, 'El Hobbit', 'J.R.R Tolkien', 1200, 'assets/libros-portadas/Hobbit.jpg', 6, 0);
    let libro1 = new Libro(2, 'Harry Potter y la piedra filosofal', 'J.K Rowling', 2200, 'assets/libros-portadas/Harry-Potter.jpg', 18, 0);
    let libro2 = new Libro(3, 'El Huracan Rojo', 'Alejandro Horowicz', 4500, 'assets/libros-portadas/Huracan-Rojo.png', 3, 0);
    let libro3 = new Libro(4, 'La voz del gran jefe', 'Felipe Piña', 3200, 'assets/libros-portadas/La-voz-del-gran-jefe.jpg', 15, 0);
    let libro4 = new Libro(5, 'Economia', 'David Ricardo', 800, 'assets/libros-portadas/economia-ricardo.jpg', 5, 0);
    let libro5 = new Libro(6, 'El contrato social', 'Jean Jacques Rousseau', 1000, 'assets/libros-portadas/contrato-social.jpg', 5, 0);
    let libro6 = new Libro(7, 'El Leviatan', 'Hobbes', 650, 'assets/libros-portadas/leviatan.jpg', 7, 0);
    let libro7 = new Libro(8, 'El Principe', 'Maquiavelo', 700, 'assets/libros-portadas/principe.jpg', 7, 0);
    let libro8 = new Libro(9, 'Las riquezas de las naciones', 'Adam Smith', 1500, 'assets/libros-portadas/las-riquezas-naciones.jpg', 11, 0);
    let libro9 = new Libro(10, 'El manifiesto comunista', 'Karl Marx', 1450, 'assets/libros-portadas/comunista.jpg', 13, 0);
    return [libro0,libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9];
}

let instanciarBiblioteca = () => {
    let biblio = new Biblioteca(instanciarLibros());
    // Tuve que realizar esta sentencia para que guarde la libreria en su localStorage por primera vez. 
    // Una ves guardados puede comentar la sentencia que esta abajo para que no se sobre escriban en el LocalStorage.
    // if(setLibros){
    //     biblio.setLibros(instanciarLibros());
    //     setLibros = false;
    // }
        
    return biblio;
}

let acumulador = [];
let index = true;
var indexStock = true;
// var setLibros = true;
let biblio = instanciarBiblioteca();
biblio.inicio();

biblio.arrayLibros.forEach(i => {
    let libro = document.getElementById(`libro-${i.legajo}`);
    libro.addEventListener('click', (e) =>{
        e.preventDefault();
        let libroId = document.getElementById(e.target.id); //Obtenemos ID
        if(biblio.buscarLibro(libroId.innerHTML) != undefined){
            let lib = biblio.buscarLibro(libroId.innerHTML);
            if(index != false){
                if(indexStock){
                    biblio.librosSeleccionados(biblio.verificarRepetidos(acumulador, lib));
                }
            }else
                biblio.error(0);
        }else
            biblio.error(1);
    });
});

let comprar = document.getElementById('btn-comprar');
comprar.addEventListener('click', (e) => {
    e.preventDefault();
    if(index){
        if(indexStock){
            if(acumulador.length > 0){
                acumulador.forEach(i => {
                    biblio.restarCantidad(i);
                });
                biblio.comprarLibros(acumulador);
                biblio.compraRealizada();
                biblio.inicio();
                index = false;
            }else
                biblio.error(3);
        }else
            biblio.error(2);
    }else
        biblio.error(0);
});

let borrar = document.getElementById('btn-borrar');
borrar.addEventListener('click', () => {
    let ul = document.getElementById('ul-buscar');
    ul.innerText = "";
    acumulador = [];
});







    




