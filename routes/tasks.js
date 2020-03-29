const router = require('express').Router();
const { Task } = require('../models/index.js');



//Mostrar todas las tareas
router.get('/', (req, res) => {
    Task.findAll()
        .then(tasks => res.send(tasks))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar las tareas'
            });
        });
});



module.exports = router;
