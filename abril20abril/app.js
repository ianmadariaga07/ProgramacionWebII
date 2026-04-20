// variables y referencias al DOM
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargarBtn = document.getElementById('descargarBtn');

// Inicializar el array de usuarios desde localStorage o crear uno nuevo si no existe 
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// mostrar los usuarios en la página
mostrarUsuarios();

// evento para enviar datos desde el formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // evitar que el formulario se envíe de forma tradicional

    // obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value.trim();
    // crear obejtos con los datos del formulario
    const usuario = {
        nombre: nombre,
        email: email
    };

    // agregar el nuevo usuario al array de usuarios
    usuarios.push(usuario);
    // guardar el array actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    // mostrar los usuarios en la salida
    mostrarUsuarios();
    // limpiar el formulario
    form.reset();
});

// función para mostrar los usuarios en la página
function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2); 
}

// evento para descargar los datos en un archivo JSON
descargarBtn.addEventListener('click', function() {
    const contenidoJSON = JSON.stringify(usuarios, null, 2);
    // creacion de un blob con el contenido JSON
    // blob es un objeto que representa un archivo de datos, en este caso el contenido JSON
    const blob = new Blob([contenidoJSON], { type: 'application/json' });
    // crear un enlace para descargar el blob
    const url = URL.createObjectURL(blob);
    // crear un enlace de descarga <a> y similar un clic para iniciar la descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.json';
    a.click();
    // liberar el objeto URL después de la descarga
    URL.revokeObjectURL(url);
});







