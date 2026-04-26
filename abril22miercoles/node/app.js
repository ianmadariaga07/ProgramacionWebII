// traer el modulo de express
const express = require('express');
const path = require('path');

// creamos una instancia de express
const app = express();

// puerto para el servidor
const PORT = 3010;

// configurar el servidor para recibir datos en texto plano
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

// iniciar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});


//TAREA: INVESTIGACION