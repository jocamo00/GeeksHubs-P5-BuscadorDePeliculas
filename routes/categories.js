const router = require('express').Router();
const { Category } = require('../models/index.js');


//Mostrar todas las categorias
router.get('/', (req, res) => {
    Category.findAll()
        .then(categories => res.send(categories))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar las categorias'
            });
        });
});


//Crear una categoria
router.post('/', (req, res) => {
    Category.create({...req.body})
        .then(categories => res.status(201).send(categories))
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al crear la categoria'
            });
        });
});

module.exports = router;