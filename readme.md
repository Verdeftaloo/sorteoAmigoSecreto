# Amigo secreto :smile:
App sencilla para realizar un sorteo; añadiendo nombres a una lista de la cual se elegirá uno al azar

### Funciones

## Agregar amigo
Valida que el nombre no esté vacío y añade el nombre al array **amigos** y actualiza la lista.
 
```function agregarAmigo() {
    let nombre = document.querySelector('#amigo').value.trim();
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    limpiarCaja();
} 
```

##  Limpiar campo de Entrada
Limpia el campo de texto tras agregar un nombre.

```function limpiarCaja() {
    document.querySelector('#amigo').value = '';
} 
```


## Actualizar lista
Muestra la lista de amigos y crea un **<li>** por cada amigo en el array.

```function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
```


## Sortear amigo
Finalmente, selecciona un nombre al azar de la lista y lo muestra en la interfaz.

```function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista.');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}
```


### Modo de uso 

-Abre el archivo HTML en el navegador.
-Escribe el nombre de un amigo y presiona **"Agregar Amigo"**.
-La lista se actualizará automáticamente.
-Presiona **"Sortear Amigo Secreto"** para seleccionar un nombre al azar.
