//EXPRESS
const express = require('express');
const app = express();

//SERVIDOR
const port = 3000;
app.listen(port, () => { console.log(`Servidor activo en http://www.localhost:${port}`) });

//RUTAS ESTATICAS PARA LINKEAR ARCHIVOS DEL PROYECTO
app.use(express.static('public'));
app.use(express.static('views'));


// REQUIERE RUTAS
const mainRoute = require('./routers/mainRoute');
const aboutRoute = require('./routers/aboutRoute');

// INICIA VISTAS
app.use(mainRoute); //app.use('/', mainRoute); FUNCIONA TAMBIEN
app.use(aboutRoute);
