const router = require('express').Router();
const { Status } = require('../models/index.js');
const StatusController = require('../controllers/StatusController.js');


//Mostrar todos los estados
router.get('/', StatusController.getAll);


//Crear un estado
router.post('/', (req, res) => {
    Status.create({...req.body})
        .then(statuses => res.status(201).send(statuses))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al crear el estado'
            });
        });
});




module.exports = router;