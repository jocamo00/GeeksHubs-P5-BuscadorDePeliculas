const router = require('express').Router();
const UserController = require('../controllers/UserController.js');



//Mostrar todos los usuario
router.get('/', UserController.getAll);

//Mostrar un usuario por id
router.get('/id/:id', UserController.getId);

//Crear una usuario
router.post('/', UserController.insert);




module.exports = router;


