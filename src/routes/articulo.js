const express = require("express");
const libroSchema = require("../models/articulo");

const router = express.Router();

//Crear articulo
router.post('/articulo', (req, res) => {
    const articulo = articuloSchema(req.body);
    articulo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los articulos
router.get('/articulo', (req, res) => {
    articuloSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener un articulo
router.get('/articulo/:id', (req, res) => {
    const { id } = req.params;
    articuloSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un articulo
router.put('/articulo/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, articulo, fecha } = req.body;
    articuloSchema
    .updateOne({ _id: id}, { $set: { titulo, articulo, fecha } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Borrar un articulo
router.delete('/articulo/:id', (req, res) => {
    const { id } = req.params;
    articuloSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;