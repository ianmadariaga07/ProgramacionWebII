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
