const { Task } = require('../models/index.js');


const TaskController = {
    getAll(req, res) {
        Task.findAll()
            .then(tasks => res.send(tasks))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar las tareas'
                });
            });
    },

    getId(req, res) {
        let _id = req.params.id

        Task.findAll({
            where: { id: _id }
        })
        .then(tasks => { res.send(tasks)})
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar la tarea'
            });
        });
    },

    insert(req, res) {
        Task.create({...req.body})
            .then(tasks => res.status(201).send(tasks))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al crear la tarea'
                });
            });
    }
    
}


module.exports = TaskController;