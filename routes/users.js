const router = require('express').Router();
const UserController = require('../controllers/UserController.js');



//Mostrar todos los usuario
router.get('/', UserController.getAll);

//Mostrar un usuario por id
router.get('/id/:id', UserController.getId);

//Crear un usuario
router.post('/', UserController.insert);

//Modificar un usuario
router.put('/update/:id', UserController.updateId);

//Eliminar un usuario
//router.put('/destroy/:id', UserController.destroyId);




module.exports = router;


