//FOR EACH Y FUNCION FLECHA
// const frutas = ['manzana', 'pera', 'platano', 'uva'];

// frutas.forEach((fruta, index, array) => {
//     console.log(fruta);
//     console.log(index);
//     console.log(array);
// });

// console.log('---');

// frutas.forEach(fruta => console.log(fruta)); 

//OBJETOS
// var miCarro = new Object();
// miCarro.marca = 'Ford';
// miCarro.modelo = 'Mustang';
// miCarro.año = 1969; 

// console.log(miCarro);
// console.log("---------");

// var miCarro2 = {
//     marca: 'Chevrolet',
//     modelo: 'Camaro',
//     año: 2020,
//     verificado: false,
//     emplacado: true,
//     fechaMultas: ['2021-01-15', '2021-03-22', '2021-06-10']
// };

// console.log(miCarro2);
// console.log(miCarro2.fechaMultas);

// console.log("---------");

// miCarro2.color = 'Rojo';
// console.log(miCarro2);
// console.log(miCarro2.color);

// miCarro2.modelo = 'KIA';
// delete miCarro2.verificado;
// console.log(miCarro2);

let alumno={
    id: 1234567890,
    nombre: "Ian",
    primerApellido: "Tranquilino",
    segundoApellido: "M",
    edad: 22,
    titulado: false,
    egresado: {
        estado: false,
        semestreCursado: 6,
        materiasFaltantes: 1,
        turno: "Matutino",
        promedio: 9.5
    },
    domicilio:{
        calle: "Calle Falsa",
        numero: 12,
        colonia:"Neza",
        cp: 10000,
        municipio: "Nezahualcoyotl",
        estado: "Edo. de Mexico",
        continente: "America"
    },
    kinder:{
        nombre:"Kinder 1",
        actividades: function(){
            console.log("estudiar");
        },
        actividadRecurrente: function(){
            console.log("jugar");
        },
        datosProfesor:{
            nombre: "Maria",
            edad: 23,
            estudios: "Licenciatura en Educacion"
        }
    },
    primaria:{
        nombre:"Primaria 1",
        comer (comida){
            // return "comer " + comida;
            return `ahora esta comiendo ${comida}`;
        },
        mensaje (mensajeAlumno){
            return `${this.nombre} es la primaria y el alumno tien que ir a ${mensajeAlumno}`;
        }
    }
}

console.log(alumno.kinder.datosProfesor.nombre);
console.log(alumno.primaria.comer("manzana"));
console.log(alumno.primaria.mensaje("Direccion"));


