document.getElementById("sumForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtiene los valores de los campos de entrada
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Realiza la suma
    const resultado = num1 + num2;

    // Muestra el resultado en el div correspondiente
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});




