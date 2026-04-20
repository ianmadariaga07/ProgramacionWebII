// arreglo donde se guardaran los usuarios
const usuarios = [];

// guardar el formulario y salida
const form = document.getElementById("userForm");
const salida = document.getElementById("salidaJSON");

// función manejar el envio del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // evitar que se recargue la página

    // obtener los valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("correo").value.trim();
    
    // crear un objeto usuario
    const usuario = {
        nombre: nombre,
        email: email
    };

    // agregar el usuario al arreglo
    usuarios.push(usuario);

    // mostrar el arreglo de usuarios en formato JSON
    salida.textContent = JSON.stringify(usuarios, null, 2);

    form.reset(); // limpiar el formulario
});