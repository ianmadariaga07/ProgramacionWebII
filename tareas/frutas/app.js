//EJERCICIO frutas do while preguntar frutas dar lista de frutas que quiso, salir cuando no quiera frutas
//quieres agregar una fruta? si no quieres agregar mas frutas, escribe salir
let frutas = [];
let continuar = true;

do{
    let fruta = prompt("Ingrese una fruta o escriba 'salir' para finalizar:");
    if (fruta === "salir"){
        continuar = false;
    }else{
        frutas.push(fruta);
    }
}while(continuar);

console.log("Lista de frutas ingresadas:");
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}