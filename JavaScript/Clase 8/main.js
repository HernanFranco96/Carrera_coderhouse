/**
 * Modelo de objetos del documento (DOM)
 * Es una estructurea de objetos generada por el navegador, la cual representa la pagina HTML actual.
 * Con JS la empleamos para acceder y modificar de forma dinámica elementos de la interfaz.
 * En el DOM cada etiqueta HTML es un objeto, al que podemos llamar nodo.
 * Las etiquetas anidadas son llamadas "nodos hijos" de la etiqueta "nodo padre" que las contiene.
 * Todos los objetos son accesibles empleando JS mediante el objeto global document.
 * Al tener contenido en un nodo, se genera un nodo aparte con su contenido.
 */

/**
 * TIPOS DE NODOS
 * Document: Nodo raíz del que derivan todos los demás nodos del árbol.
 * Element: Representa cada una de las etiquetas XHTML. Puede contener atributos y derivar otros nodos de él.
 * Attr: Se dife un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.
 * Text: Nodo que contiene el texto encerrado por una etiqueta HTML.
 * Comment: Representa los comentarios incluidos en la página HTML.
 */

/**
 * ACCEDER A LOS NODOS
 * getElementById() sirve para acceder a un elemento de la estructura HTML utilizando su atributo ID como identificación.
 * getElementsByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificación. Se retornara un array de elementos con todas las coincidencias.
 * getElementsByTagName() sirve para acceder a un conjunto de elemenetos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Esta opción es la menos especifica de todas, ya que es muy probable que las etiquetas se repitan en el código HTML.
 */

let text = document.getElementById('pais');
// innerHTML muestra todo el contenido obtenido de la etiqueta
console.log(text.innerHTML);
// innerText muestra el texto dentro de la etiqueta obtenida
console.log(text.innerText);

text.innerText = 'Nuevo texto';
// Podemos modificar el valor del html y hasta agregar nuevos nodos
text.innerHTML += '<strong>jeje</strong>';

let user = document.getElementsByClassName('user');

for(let i of user){
    i.innerHTML += ' oye chango'
}

/**
 * CREAR ELEMENTOS
 * document.create
 * .append() recibe nodo y lo añade a otro nodo. (Agrega elementos hijos)
 * .createElement() crea un nuevo nodo, recibe un tipo de etiqueta que queramos crear.
 */

let p_padre = document.createElement('p');
let p_hijo = document.createElement('string');

p_padre.innerText = 'Hola ';
p_hijo.innerText = 'Como estas?';

p_padre.append(p_hijo);

console.log(p_padre);

/**
 * ELIMINAR NODOS
 * .remove() Elimina el nodo
 */

p_padre.remove();

/**
 * OBTENER VALORES
 * Podemos acceder a la propiedad value para obtener el valor 
 */

let inputNombre = document.getElementById('nombre');
let inputApellido = document.getElementById('apellido');

console.log(inputNombre.value);
console.log(inputApellido.value);

/*************************************** */

let paises = ['Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay'];

let selectPais = document.getElementById('paises');


paises.forEach( (pais, iPais) => {
    let option = document.createElement('option');
    option.innerText = pais;
    option.value = iPais;

    selectPais.appendChild(option);
});

/****************************************** */

let alumnos = [
    {
        nombre: 'Hernan',
        edad: 25,
    },
    {
        nombre: 'Lautaro',
        edad: 26,
    },
    {
        nombre: 'Gonzalo',
        edad: 28,
    }
]

const ul = document.getElementById('alumnos')

alumnos.forEach((alumno) => {
    const li = document.createElement('li');
    li.innerText = `Nombre: ${alumno.nombre}`;

    const sublista = document.createElement('ul');
    const edad = document.createElement('li');

    edad.innerText = `Edad: ${alumno.edad}`;

    sublista.append(edad);

    li.append(sublista);

    ul.append(li);
})

/**
 * QUERY SELECTOR
 * Nos permite seleccionar y trabajar con propiedades CSS
 * querySelector(clase) Nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS
 * querySelectorAll(clase) Selecciona todas las clases
 */

let alumn = document.querySelector('alumnos');
alumn.style.color = "red";