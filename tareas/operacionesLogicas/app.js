//E J E R C I C I O   D E   O P E R A D O R E S   L O G I C O S
// se debe de mostrar los casos para cada operador logico, AND y OR 
// var compara = 5>2 && 6!= 8;
// console.log(compara);

// var numero1 = parseInt(prompt("Ingrese numero entre 0 y 1"));
// var numero2 = parseInt(prompt("Ingrese numero entre 0 y 1"));

// var and = numero1 && numero2;
// var or = numero1 || numero2;

// console.log(typeof and);

// console.log("AND: " + and);
// console.log("OR: " + or);


//OPERADORES LOGICOS 
console.log("OPERADOR AND");
console.log("true&&true  =", true && true);
console.log("true&&false =", true && false);
console.log("false&&true  =", false && true);
console.log("false&&false =", false && false);

console.log("OPERADOR OR");
console.log("true||true  =", true || true);
console.log("true||false =", true || false);
console.log("false||true  =", false || true);
console.log("false||false =", false || false);

var entrada1 = prompt("Ingrese 1 para true o 0 para false");
var entrada2 = prompt("Ingrese 1 para true o 0 para false");

var valor1 = entrada1 === "1";
var valor2 = entrada2 === "1";
var and = valor1 && valor2;
var or = valor1 || valor2;

console.log("Tus valores son: " + valor1 + " y " + valor2);
console.log("AND: " + and);
console.log("OR: " + or);

