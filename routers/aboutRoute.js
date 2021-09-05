// EXPRESS
const express=require('express');
const aboutController = require('../controllers/aboutController');

// ENRUTADOR
const router=express.Router();

// REQUIERE mainController
const mainController = require('../controllers/mainController');


// ENRUTA PARA aboutController
router.get('/about', aboutController.about);

// PRUEBA DIRECTA FUNCIONA
// router.get('/', (req,res)=>{res.send('home');})







// EXPORTA PARA app.js
module.exports=router;

