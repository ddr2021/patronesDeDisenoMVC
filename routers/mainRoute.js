// REQUIERE EXPRESS
const express=require('express');

// REQUIERE ENRUTADOR DE EXPRESS
const router=express.Router();

// REQUIERE mainController
const mainController = require('../controllers/mainController');


// ENRUTADOR A /home
router.get('/', mainController.home);

// PRUEBA DIRECTA FUNCIONA
// router.get('/', (req,res)=>{res.send('home');})









// EXPORTA RUTAS PARA app.js
module.exports=router;

