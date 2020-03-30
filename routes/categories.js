const router = require('express').Router();
const { Category } = require('../models/index.js');


//Mostrar todas las categorias
router.get('/', CategoryController.getAll);

//Crear una categoria
router.post('/', CategoryController.insert);




module.exports = router;


