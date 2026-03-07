// function saludar(){
//     console.log("Hola mundo");
// }
// saludar();

// function saludo(nombre){
//     console.log("Hola " + nombre);
// }
// saludo("Ian");

// function sumar(n1, n2){
//     return n1 + n2;
// }

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));

// console.log("La suma es: " + sumar(numero1, numero2));
// console.log(sumar(8,9));

//FUNDAMENTOS
//TEMPLATE STRING
//let nombre = "Ian";
// console.log("Hola " + nombre);
// console.log("Hola \n como \n estas \n" + nombre);

// console.log(`
// Hola
// como
// estas
// ${nombre}`);

//METODOS
// let nombre = "Ian";
// console.log(`Tu nombre es ${nombre.toUpperCase()}`);

//OPERADOR TERNARIO
// let nombreUsuario = "Ian";
// let estado = true;

// console.log("----> IF COMUN");
// if(estado){
//     console.log(`Ganaste ${nombreUsuario}`)
// }else{
//     console.log(`Perdiste ${nombreUsuario}`)
// } 

// console.log("----> OPERADOR TERNARIO");
// console.log(estado ? `Ganaste ${nombreUsuario}` : `Perdiste ${nombreUsuario}`); 

//VARIABLES, diferencias entre var y let dentro de un bloque if
// var estado = false;
// if(estado){
//     var estado = true
// }
// console.log(estado);

// let estado2 = false;
// if(estado2){
//     let estado2 = true
// }
// console.log(estado2);

// for(let i=0; i<10; i++){
//     console.log(i);
// }

//VARIABLES CONSTANTES, aqui en el if son diferentes.Una es global y la otra interna
// const estado= true;

// if(estado){
//     const estado = false;
//     console.log(estado);
// }
// console.log(estado);

//CONST Y LOS ARREGLOS SON DIFERENTES, el arreglo es constante pero sus elementos no lo son, se pueden modificar
const array = [];
array[0] = ["Nuevo Elemento"];
console.log(array[0]);

