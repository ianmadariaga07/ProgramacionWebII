
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
console.log("MIS DATOS SON:")
console.log("Mi nombre es " + nombre + ", estudio " + carrera + " y tengo " + edad + " años");