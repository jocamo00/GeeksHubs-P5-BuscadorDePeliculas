const router = require('express').Router();
const { Status } = require('../models/index.js');
const StatusController = require('../controllers/StatusController.js');


//Mostrar todos los estados
router.get('/', StatusController.getAll);

//Crear un estado
router.post('/', StatusController.insert);



module.exports = router;