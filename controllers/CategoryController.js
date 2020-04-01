const { Category } = require('../models/index.js');


const CategoryController = {
    getAll(req, res) {
        Category.findAll()
            .then(categories => res.send(categories))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar las categorias'
                });
            });
    },

    getId(req, res) {
        let _id = req.params.id

        Category.findAll({
                where: { id: _id }
            })
            .then(categories => { res.send(categories)})
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar la categoria'
                });
            });
    },

    insert(req, res) {
        Category.create({...req.body})
            .then(categories => res.status(201).send(categories))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al crear la categoria'
                });
            });
    }
}


module.exports = CategoryController;