const { Status } = require('../models/index.js');

//Otra forma de hacer un controlador
/*
class StatusController {
    getAll(req, res) {
        Status.findAll()
            .then(statuses => res.send(statuses))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar los estados'
                });
            });
    }
}

module.exports = new StatusController();
*/

const StatusController = {
    getAll(req, res) {
        Status.findAll()
            .then(statuses => res.send(statuses))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar los estados'
                });
            });
    },
    insert(req, res) {
        Status.create({...req.body})
            .then(statuses => res.status(201).send(statuses))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al crear el estado'
                });
            });
    }
}


module.exports = StatusController;