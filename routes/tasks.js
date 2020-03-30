const router = require('express').Router();
const TaskController = require('../controllers/TaskController.js');


//Mostrar todas las tareas
router.get('/', TaskController.getAll);

//Crear una tarea
router.post('/', TaskController.insert );




module.exports = router;
