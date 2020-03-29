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
    }
}


module.exports = StatusController;