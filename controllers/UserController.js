const { User } = require('../models/index.js');


const UserController = {
    getAll(req, res) {
        User.findAll()
            .then(users => res.send(users))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar los usuarios'
                });
            });
    },
    insert(req, res) {
        User.create({...req.body})
            .then(users => res.status(201).send(users))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al crear el usuario'
                });
            });
    }
}


module.exports = UserController;