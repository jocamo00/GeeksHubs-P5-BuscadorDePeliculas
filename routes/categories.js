const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js');


//Mostrar todas las categorias
router.get('/', CategoryController.getAll);

//Crear una categoria
router.post('/', CategoryController.insert);




module.exports = router;


