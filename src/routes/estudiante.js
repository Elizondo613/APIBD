const express = require("express");
const estudianteSchema = require("../models/estudiante");
const articuloSchema = require("../models/articulo");
const comentarioSchema = require("../models/comentario");

const router = express.Router();

//ESTUDIANTE----------------------------------------------------------------------------
//Crear estudiante
router.post('/estudiante', (req, res) => {
    const estudiante = estudianteSchema(req.body);
    estudiante
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los estudiantes
router.get('/estudiante', (req, res) => {
    estudianteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener un estudiante
router.get('/estudiante/:id', (req, res) => {
    const { id } = req.params;
    estudianteSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un estudiante
router.put('/estudiante/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, noAprobaciones, noArticulos, noComentarios, usuario, password } = req.body;
    estudianteSchema
    .updateOne({ _id: id}, { $set: { nombre, apellido, noAprobaciones, noArticulos, noComentarios, usuario, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Borrar un estudiante
router.delete('/estudiante/:id', (req, res) => {
    const { id } = req.params;
    estudianteSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ARTICULO-------------------------------------------------------------------------
router.post('/articulos/:_id', async function(req, res){
    //Crea el articulo para el estudiante
    const articuloNuevo = new articuloSchema(req.body)

    //Busca al estudiante para asignarle el articulo
    const estudiante = await estudianteSchema.findById(req.params)

    //Asigna al estudiante como propietario
    articuloNuevo.stud = estudiante

    //Guarda el articulo para el estudiante
    await articuloNuevo.save()

    //Asigna el articulo dentro del array
    estudiante.art.push(articuloNuevo)
    
    //Guarda al estudiante con el articulo nuevo
    await estudiante.save()

    //Envia al estudiante el carro
    res.send(articuloNuevo)
})

router.get('/:_id/articulos', async function(req, res){
    //busca el estudiante y lista los articulos
    const estudiante = await estudianteSchema.findById(req.params).populate('art')
    res.send(estudiante)
})

//COMENTARIO-----------------------------------------------------------------------
router.post('/comentarios/:_id', async function(req, res){
    //Crea el comentario para el estudiante
    const comentarioNuevo = new comentarioSchema(req.body)

    //Busca al estudiante para asignarle el comentario
    const estudiante = await estudianteSchema.findById(req.params)


    //Asigna al estudiante como propietario
    comentarioNuevo.student = estudiante

    //Guarda el comentario para el estudiante
    await comentarioNuevo.save()

    //Asigna el comentario dentro del array
    estudiante.coment.push(comentarioNuevo)
    
    //Guarda al estudiante con el comentario nuevo
    await estudiante.save()

    //Envia al estudiante el carro
    res.send(comentarioNuevo)
})

router.get('/:_id/comentarios', async function(req, res){
    //busca el estudiante y lista los comentarios
    const estudiante = await estudianteSchema.findById(req.params).populate('coment')
    res.send(estudiante)
})

module.exports = router;