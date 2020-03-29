const router = require('express').Router();
const { User } = require('../models/index.js');



//Mostrar todos los usuario
router.get('/', (req, res) => {
    User.findAll()
        .then(users => res.send(users))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar los usuarios'
            });
        });
});


//Crear una usuario
router.post('/', (req, res) => {
    User.create({...req.body})
        .then(users => res.status(201).send(users))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al crear el usuario'
            });
        });
});


module.exports = router;
