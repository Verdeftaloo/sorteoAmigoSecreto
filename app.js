// Funcionalidad de sorteo 

let amigos = [];

function agregarAmigo() {
    let añadirAmigo = document.querySelector('#amigo');
    let nombre = añadirAmigo.value.trim();

    //Vacío
    if(nombre == '') {
        alert('Por favor, inserte un nombre.');
        return; //Utilizar 'return' para cerrar la función
    }        

    amigos.push(nombre); //Agrega el nombre al array
    actualizarLista(); //Actualiza la lista de amigos 
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    //Limpia la lista anterior
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Crear un nuevo elemento <li>
        item.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(item); // Agregar el <li> a la lista en el HTML como hijo de lista
    }
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert('No se han ingresado nombres a la lista');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    //Resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}