const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
//Crear el servidor 
const app = express();
//Conectar a la base de datos
conectarDB();
//Habilitar cors
app.use(cors());
//habilitar express.json
app.use(express.json({extended:true }));
//puerto de el app
const port = process.env.por || 4000;
//Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));
app.listen(port, '0.0.0.0', ()=>{
    console.log(`El Servidor esta funcionando en el puerto ${PORT}`)
})
