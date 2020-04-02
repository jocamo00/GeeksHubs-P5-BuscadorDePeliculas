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

    getId(req, res) {
        let _id = req.params.id

        User.findAll({
                where: { id: _id }
            })
            .then(users => { res.send(users)})
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar el usuario'
                });
            });
    },

    insert(req, res) {
        User.create({ ...req.body })
            .then(users => res.status(201).send(users))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al crear el usuario'
                });
            });
    },

    updateId(req, res) {
        let _id = req.params.id

        User.update({ ...req.body },
        {
            where: { id: _id }
        })
        .then(users => res.status(201).send(users))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al modificar el usuario'
                });
            });
        }
}


module.exports = UserController;




