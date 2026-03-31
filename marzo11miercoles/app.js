// const arreglo = [];
// arreglo[0] = ["Aaron"];

// console.log(arreglo[0][0]);

//AGREGAR ELEMENTOS A UN ARREGLO
// const frutas = ["Manzana", "Pera", "Uva"];
// frutas.push("Sandia");
// console.log(frutas);

// //AGREGA UN ELEMENTO AL INICIO
// frutas.unshift("Mango");
// console.log(frutas);

// //ELIMINA EL ULTIMO ELEMENTO
// console.log(frutas.pop());
// console.log(frutas);

// //ELIMINA EL PRIMER ELEMENTO
// frutas.shift();
// console.log(frutas);

// if(confirm("Eres estudiante de la UNAM?")){
//     console.log("Bienvenido a la UNAM");
// }else{
//     console.log("Lo siento, no puedes ingresar");
// }

//funciones declarativas
// function numAleatorio(min, max){
//     return Math.floor(Math.random()*(max - min + 1)) + min;
// }

// console.log(numAleatorio(1, 15));

// //funciones expresivas
// const numAleatorio2 = function(min, max){
//     return Math.floor(Math.random()*(max - min + 1)) + min;
// }

// console.log(numAleatorio2(1, 15));



//EJERCICIO frutas do while preguntar frutas dar lista de frutas que quiso, salir cuando no quiera frutas
//quieres agregar una fruta? si no quieres agregar mas frutas, escribe salir
let frutas = [];
let continuar = true;

do {
    let fruta = prompt("Ingrese una fruta (o escriba 'salir' para terminar):");
    if (fruta === "salir") {
        continuar = false;
    } else {
        frutas.push(fruta);
    }
} while (continuar);

console.log("Lista de frutas ingresadas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
