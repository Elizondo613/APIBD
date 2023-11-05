const express = require("express");
const comentarioSchema = require("../models/comentario");

const router = express.Router();

//Crear comentario
router.post('/comentario', (req, res) => {
    const comentario = comentarioSchema(req.body);
    comentario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los comentarios
router.get('/comentario', (req, res) => {
    comentarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener un comentario
router.get('/comentario/:id', (req, res) => {
    const { id } = req.params;
    comentarioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un comentario
router.put('/comentario/:id', (req, res) => {
    const { id } = req.params;
    const { comentario, fecha } = req.body;
    comentarioSchema
    .updateOne({ _id: id}, { $set: { comentario, fecha } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Borrar un comentario
router.delete('/comentario/:id', (req, res) => {
    const { id } = req.params;
    comentarioSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;