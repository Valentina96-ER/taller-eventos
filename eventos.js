const botonSaludar = document.getElementById('botonSaludar');
let boton = document.querySelector('button')
botonSaludar.addEventListener('click', function () {
alert('Hola! Soy el Div');
});

boton.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Hola! Soy el botón');
});