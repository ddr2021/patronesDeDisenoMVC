//EXPRESS
const express = require('express');
const app = express();

//RUTAS ESTATICAS PARA LINKEAR ARCHIVOS DEL PROYECTO
app.use(express.static('public'));
app.use(express.static('views'));

// RUTAS SIMPLES
const path = require('path');


// RESPUESTAS DE ABOUT
const aboutController = {
    about: (req, res) => { res.sendFile(path.resolve(__dirname, '../views', 'about.html')) },

};







// EXPORTA A ENRUTADOR
module.exports = aboutController;