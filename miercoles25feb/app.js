// var numero1 = 2;
// var numero2 = 2;

// var suma = numero1 + numero2;

// console.log("La suma de: " + numero1 + " + " + numero2 + " = " + suma);

// var dato1 = prompt("Ingrese su nombre");
// console.log("Hola " + dato1);


//CALCULADORA QUE SUMA
// var numero1 = parseInt(prompt("Ingrese numero 1"));
// var numero2 = parseInt(prompt("Ingrese numero 2"));

// var suma = numero1 + numero2;
// console.log("La suma de: " + numero1 + " + " + numero2 + " = " + suma);

//OPERADORES RELACIONALES
// var resultado = 5 > 3;
// console.log(resultado);

// var resultado2 = 5 < 3;
// console.log(resultado2);

// var resultado3 = 5 >= 5;
// console.log(resultado3);

// var numero1 = parseInt(prompt("Ingrese numero 1"));
// var numero2 = parseInt(prompt("Ingrese numero 2"));

// if(numero1 > numero2){
//     console.log("El numero 1 es mayor que el numero 2");
// } else if(numero1 < numero2){
//     console.log("El numero 1 es menor que el numero 2");
// } else {
//     console.log("Los numeros son iguales");
// }

//OPERADORES LOGICOS
// && -> AND   
// || -> OR
// ! -> NOT

// var compara = true && false; // AND
// console.log(compara); 

// var numero1 = parseInt(prompt("Ingrese numero 1"));
// var numero2 = parseInt(prompt("Ingrese numero 2"));

// if(numero1 > 0 && numero2 > 0){
//     console.log("Ambos numeros son positivos");
// }   else if(numero1 < 0 || numero2 < 0){
//     console.log("Al menos uno de los numeros es negativo");
// } else {
//     console.log("Ambos numeros son cero");
// }

//E J E R C I C I O   D E   O P E R A D O R E S   L O G I C O S
// var compara = 5>2 && 6!= 8;
// console.log(compara);

// var numero1 = parseInt(prompt("Ingrese numero entre 0 y 1"));
// var numero2 = parseInt(prompt("Ingrese numero entre 0 y 1"));

// var and = numero1 && numero2;
// var or = numero1 || numero2;

// console.log(typeof and);

// console.log("AND: " + and);
// console.log("OR: " + or);

//CONDICIONALES
// var numero1 = parseInt(prompt("Ingrese un numero"));

// if(numero1 == 4){
//     console.log("El numero 1 es igual a 4");
// } else {
//     console.log("El numero 1 no es igual a 4");
// }

// let conexion;

// if(conexion){
//     console.log("Conexion establecida");
// } else {
//     console.log("Conexion no establecida");
// }

//E J E R C I C I O  COMPARACION DE NUMEROS
// var numero1 = parseInt(prompt("Ingrese numero 1"));
// var numero2 = parseInt(prompt("Ingrese numero 2"));

// console.log("Numero 1: " + numero1);
// console.log("Numero 2: " + numero2);

// if(numero1 > numero2){
//     console.log("El numero 1 es mayor que el numero 2");
// } else if(numero1 < numero2){
//     console.log("El numero 1 es menor que el numero 2");
// } else {
//     console.log("Los numeros son iguales");
// }

// console.log("Usando operador ternario");
// var resultado = numero1 > numero2 ? "El numero 1 es mayor que el numero 2" : numero1 < numero2 ?"El numero 1 no es mayor que el numero 2" : "Los numeros son iguales"; 
// console.log(resultado);

//E J E R C I C I O IMPRIMIR UN NUMERO DEL 1 AL 10 
// SI ESTA DENTRO DEL RANGO IMPRIMIRLO, SI NO DECIR QUE NO ESTA DENTRO DEL RANGO
// var numero = parseInt(prompt("Ingrese un numero del 1 al 10"));

// if(numero >= 1 && numero <= 10){
//     console.log("El numero " + numero + " esta dentro del rango");
// } else {
//     console.log("El numero " + numero + " no esta dentro del rango");
// }

//OPERADOR SWITCH
let opci = prompt(`
    Elija una opcion:
    1. Libros
    2. Pelicula
    3. Juegos
    `);

switch(opci){
    case "1":
        console.log("Has elegido la opcion 1: Libros");
        break;
    case "2":
        console.log("Has elegido la opcion 2: Pelicula");
        break;
    case "3":
        console.log("Has elegido la opcion 3: Juegos");
        break;
    default:
        console.log("Opcion no valida");
        break;
}

