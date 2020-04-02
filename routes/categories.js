const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js');


//Mostrar todas las categorias
router.get('/', CategoryController.getAll);

//Mostrar una categoria por id
router.get('/id/:id', CategoryController.getId);

//Crear una categoria
router.post('/', CategoryController.insert);

//Modificar una categoria
router.put('/update/:id', CategoryController.updateId);




module.exports = router;


