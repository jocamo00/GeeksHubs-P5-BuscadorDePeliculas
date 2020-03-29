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




module.exports = router;