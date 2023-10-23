const express = require("express");
const libroSchema = require("../models/libro");

const router = express.Router();

//Crear libro
router.post('/libro', (req, res) => {
    const libro = libroSchema(req.body);
    libro
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los libros
router.get('/libro', (req, res) => {
    libroSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener un libro
router.get('/libro/:id', (req, res) => {
    const { id } = req.params;
    libroSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un libro
router.put('/libro/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, codigo, descripcion } = req.body;
    libroSchema
    .updateOne({ _id: id}, { $set: { nombre, codigo, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Borrar un libro
router.delete('/libro/:id', (req, res) => {
    const { id } = req.params;
    libroSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;