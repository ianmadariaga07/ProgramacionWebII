// alert("Hola desde app.js");
// solo linea
console.log("Hola desde app.js y consola");

// String
console.log("Otra linea de codigo");
console.log("a");
console.log('a');

// Numero
console.log(5);
console.log(5, 6);
console.log(5 + 7);

// Booleano
console.log(true);
console.log(false);

// Variables con var, let y const
// var es una variable global, se puede redeclarar y reasignar
var nombre = "Ian";
var nombre = 36;
console.log(nombre);

// let es una variable local, no se puede redeclarar pero si reasignar
let dato = 312412412;
//let dato = 312412412; Esto no se puede hacer, dará un error
console.log(dato);

// const es una variable local, no se puede redeclarar ni reasignar
const pi = 3.14;
//pi = 3.1416;  Esto no se puede hacer, dará un error
console.log(pi);

//cosas que no se hacen
// const edad = 25; Esto no se hace, se recomienda usar let o const

var nombre = "Ian";
var carrera = "Ingenieria en Computacion";
var edad = 21;
var unir = nombre + carrera + edad;
console.log("MIS DATOS SON:")
// concatencacion
console.log("Mi nombre es " + nombre + ", estudio " + carrera + " y tengo " + edad + " años");
console.log(unir);
console.log("Hola " + nombre);
// Template string
console.log(`Mi nombre es ${nombre}, estudio ${carrera} y tengo ${edad} años`);

var numero1 = 2;
var numero2 = 2;
var suma = numero1 + numero2;

console.log(numero1 + numero2);
console.log(suma);



var dato1 = prompt("Ingrese numero 1");
console.log(dato1);
var dato2 = parseInt(prompt("Ingrese numero 2"));
console.log(dato2);
console.log(typeof dato1);
// como es un string, se concatena
console.log(dato1 + dato2);
// para convertirlo a numero, se puede usar parseInt o parseFloat   
var suma = parseInt(dato1) + dato2;
console.log(suma);





