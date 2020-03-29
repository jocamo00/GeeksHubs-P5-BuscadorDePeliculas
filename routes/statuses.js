const router = require('express').Router();
const { Status } = require('../models/index.js');


//Mostrar todos los estados
router.get('/', (req, res) => {
    Status.findAll()
        .then(statuses => res.send(statuses))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar los estados'
            });
        })
})


//Crear un estado
router.post('/', (req, res) => {
    Status.create({...req.body})
        .then(statuses => res.status(201).send(statuses))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al crear el estado'
            });
        })
})




module.exports = router;