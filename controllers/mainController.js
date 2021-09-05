//EXPRESS
const express = require('express');
const app = express();

// RUTAS SIMPLES
const path = require('path');


// RESPUESTAS DE MAIN
const mainController = {
    home: (req, res) => { res.sendFile(path.join(__dirname, '../', 'views', 'home.html')) },

};










// EXPORTA MAIN A ENRUTADOR
module.exports = mainController;