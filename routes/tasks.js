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


//Crear una tarea
router.post('/', (req, res) => {
    Task.create({...req.body})
        .then(tasks => res.status(201).send(tasks))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al crear la tarea'
            });
        });
});

module.exports = router;
