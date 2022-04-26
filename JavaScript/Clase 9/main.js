let productos = [
    {
        nombre: 'Producto 1',
        precio: 200,
        codigo: 0
    },
    {
        nombre: 'Producto 2',
        precio: 150,
        codigo: 1
    },
    {
        nombre: 'Producto 3',
        precio: 640,
        codigo: 2
    },
    {
        nombre: 'Producto 4',
        precio: 500,
        codigo: 3
    },
    {
        nombre: 'Producto 5',
        precio: 780,
        codigo: 4
    }
]

/**
 * EVENTOS
 * Los eventos son la manera que tenemos en js de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.
 * Con js es posible definir qué sucede cuando se produce un evento.
 * JavaScript permite asignar una función a cada uno de los eventos. Estas funciones se llaman event hadlers o manejadores de eventos.
 * JavaScript nos permite escuchar eventos sobre elementos seleccionados.
 * El método addEventListener() permite definir qué evento escuchar sobre cualquier elemento seleccionado.
 * Emplear una propiedad del nodo para definir la respuesta al evento. Las propiedades se identifican con el nombre de evento y el prefijo on. Tambien es posible emplear funciones anónimas para definir los manejadores de eventos.
 * Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML. La denominación del atributo es idéntica al de la propiedad de la opción 2.
 */

let boton1 = document.getElementById('boton1');

/**
 * FORMA 1
 * Recibe 2 parámetros
 * Primero el evento
 * Segundo una función
 */


let producto = productos[productos.length -1];

boton1.addEventListener('click', () => {
    agregarProducto(producto);
});

/**
 * FORMA 2
 */
// boton1.onclick = () => {
//     let contenedor = document.getElementById('contenedor2');
//     contenedor.innerText = "FORMA 2";
// }

let botonOrdenar = document.getElementById('ordenar');

botonOrdenar.addEventListener('click', () => {
    productos.sort((a, b) => {
        if(parseInt(a.precio) > parseInt(b.precio)){
            return -1;
        }
        if(parseInt(a.precio) < parseInt(b.precio)){
            return 1;
        }
    })
});

let mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', () => {
    productos.forEach(i => {
        agregarProducto(i);
    });
});

function agregarProducto(producto) {
    let contenedor = document.getElementById('contenedor');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');

    li1.innerHTML = 'Nombre ' + producto.nombre;
    li2.innerHTML = 'Precio ' + producto.precio;
    ul.append(li1, li2);
    contenedor.append(ul);
}

/**
 * TIPOS DE EVENTOS
 */
/**
 * MOUSE
 * mousedown/mouseup Se oprime/suelta el botón.
 * mouseover/mouseout El punto del mouse se mueve sobre/sale del elemento.
 * mousemove El movimiento del mouse sobre el elemento activa el evento
 * click
 */

/**
 * TECLADO
 * keydown Cuando se presiona una tecla
 * keyup Cuando se suelta una tecla
 */

/**
 * CHANGE
 * Se activa cuando se detecta un cambio en el valor del evento.
 */

/**
 * EVENTO INPUT
 * Si queremos ejecutar una función cada vez que se tipea sobre el campo.
 */

let input = document.getElementById('input-1');

input.addEventListener('change', () => {
    console.log('Evento change');
});

let contenedor = document.getElementById('contenedor');

input.addEventListener('input', () => {
    let v = input.value;
    let productosBuscados = productos.filter((i) => {
        // return i.nombre.toLowerCase() == v.toLowerCase();
        const index = i.nombre.toLowerCase().indexOf(v);
        if(index === -1)
            return false;
        return true;
    });

    contenedor.innerHTML = "";

    if(productosBuscados.length > 0){
        productosBuscados.forEach(i => {
            agregarProducto(i);
        });
    }
});

/**
 * EVENTO SUBMIT
 * El evento submit se activa cuando el formulario se envía.
 */

/**
 * INFORMACIÓN DEL EVENTO
 * En algunos casos, necesitamos obenter informacion contextual del evento para poder realizar acciones
 * objeto evento
 * En todos los navegadores se crea de forma automática un parámetro que se pasa a la función manejadora, por lo que no es necesario incluirlo en la llamada.
 */

let inputs = document.getElementsByClassName('input-prueba');

for(const input of inputs){
    input.addEventListener('input', (e) => {
        const target = e.target;
        const value = target.value;
        console.log(value);
    });
}

let select = document.getElementById('select-producto');
productos.forEach(i => {
    let option = document.createElement('option');
    option.value = i.codigo;
    option.innerText = i.nombre;

    select.append(option);
});

let boton = document.getElementById('boton');
boton.addEventListener('click', () => {
    const valueSelect = select.value;
    if(valueSelect != ''){
        const productoEncontrado = productos.find(i => {
            return i.codigo == valueSelect;
        });

        agregarProducto(productoEncontrado);
    }
})

select.addEventListener('change', () => {
    const valueSelect = select.value;
    if(valueSelect != ''){
        const productoEncontrado = productos.find(i => {
            return i.codigo == valueSelect;
        });

        agregarProducto(productoEncontrado);
    }
});

let caja = document.getElementById('caja');

caja.addEventListener('mouseover', (e) => {
    const target = e.target;
    target.style.backgroundColor = 'green';
});
caja.addEventListener('mouseout', (e) => {
    const target = e.target;
    target.style.backgroundColor = 'red';
});

/******************************************** */

let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    // Frena un el flujo de la pagina, en este caso frena el submit.
    e.preventDefault();

    // obtengo todos los inputs
    const inputs = e.target.querySelectorAll('input');
    
    for(const i of inputs){
        console.log(i.value);
    }
});