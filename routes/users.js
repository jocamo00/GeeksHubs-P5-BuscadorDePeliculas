const router = require('express').Router();
const UserController = require('../controllers/UserController.js');



//Mostrar todos los usuario
router.get('/', UserController.getAll);

//Crear una usuario
router.post('/', UserController.insert);




module.exports = router;


