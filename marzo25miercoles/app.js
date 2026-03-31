let tareas = [];

// function de inicio para el flujo del programa

function iniciar(){
    let bandera = true;

    while (bandera){
        let opcion = mostrarMenu();
        switch (opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaRealizada();
                break;
            case 4:
                bandera = false;
                break;
            default:
                alert("Opcion no valida, elige una opcion del menu");
                break;
        }
    }    
}
iniciar();

// function para mostrar el menu
function mostrarMenu(){
    return parseInt(prompt(`
        "Bienvenido a tu lista de tareas"
        1- Agregar tarea
        2- ver todas las tareas
        3- Marcar tarea como realizada
        4- Salir
        "ELIJE UNA OPCION: "
        `))
}

function agregarTarea(){
    let nombre = prompt("Ingrese el nombre de la tarea: \n");
    if(nombre){
        let tarea = {
            nombre: nombre,
            realizada: false
        };
        tareas.push(tarea);
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
    console.log("Agregando tarea...");
}

function verTareas(){
    console.log("Mostrando tareas...");
    if(tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Tareas:\n";
        tareas.forEach((tarea, index) => {
            // mensaje += "Tarea no." + (index + 1) + ": " + tarea.nombre + " - " + (tarea.realizada ? "Realizada" : "Pendiente") + "\n";
            mensaje += `${index + 1} .- ${tarea.nombre} - ${tarea.realizada ? "Completada" : "Pendiente"}\n`;
        });
        alert(mensaje);
        // for(let index = 0; index < tareas.length; index++){
        //     let tarea = tareas[index];
        //     console.log("Tarea no." + (index + 1) + ": " + tarea.nombre + " - " + (tarea.realizada ? "Realizada" : "Pendiente"));
        // }
    }
}

function marcarTareaRealizada(){
    console.log("Marcando tarea como realizada...");
    let numero = parseInt(prompt("Ingrese el numero de la tarea que desea marcar como realizada: \n"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero - 1].realizada = true;
        
        alert(`
            Tarea no. ${numero}: ${tareas[numero - 1].nombre} ha sido marcada como realizada
            `)
    }else {
        alert("Numero de tarea no valido, por favor ingrese un numero valido");
    }
}


/* hacer nueva version menu de productos con carrito de compras, 
poner cantidad o contador a cada objeto de ropa, camisas 3
agregar a objeto cantidad si el user quiere comprar mas camisas no poder, inventario
mensaje de no se puede porque ya no hay
modificar arreglo y modulo agregar producto
agregar ahora la cantidad de camisas que quiere
*/
