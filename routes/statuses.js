const router = require('express').Router();
const StatusController = require('../controllers/StatusController.js');


//Mostrar todos los estados
router.get('/', StatusController.getAll);

//Mostrar un estado por id
router.get('/id/:id', StatusController.getId);

//Crear un estado
router.post('/', StatusController.insert);



module.exports = router;