const express = require("express");
const encargadoSchema = require("../models/Encargado");
const familiaSchema = require("../models/Familia");
const integranteSchema = require("../models/Integrante");
const proyectoSchema = require("../models/Proyecto");

const router = express.Router();

//PROYECTO-----------------------------------------------------------------------------------------
//Crear proyecto
router.post('/proyecto', (req, res) => {
    const proyecto = proyectoSchema(req.body);
    proyecto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los proyectos
router.get('/proyecto', (req, res) => {
    proyectoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener un proyecto por id
router.get('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    proyectoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un proyecto
router.put('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, fechaInicio, fechaFin, presupuesto } = req.body;
    proyectoSchema
    .updateOne({ _id: id}, { $set: { nombre, fechaInicio, fechaFin, presupuesto } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Borrar un proyecto
router.delete('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    proyectoSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ENCARGADO-------------------------------------------------------------------------------------------
router.post('/encargado/:_id', async function(req, res){
    //Crea el encargado para el proyecto
    const encargadoNuevo = new encargadoSchema(req.body)

    //Busca el proyecto para asignarle al encargado
    const proyecto = await proyectoSchema.findById(req.params)

    encargadoNuevo.proyecto = proyecto

    //Guarda el encargado
    await encargadoNuevo.save()

    //Asigna el encargado dentro del array
    proyecto.encargado.push(encargadoNuevo)
    
    //Guarda el proyecto con el encargado nuevo
    await proyecto.save()

    //Envia al encargado con el proyecto
    res.send(encargadoNuevo)
})

router.get('/:_id/encargado', async function(req, res){
    //busca el proyecto con el encargado
    const proyecto = await proyectoSchema.findById(req.params).populate('encargado')
    res.send(proyecto)
})

//FAMILIA-------------------------------------------------------------------------------------------
router.post('/familia/:_id', async function(req, res){
    //Crea la familia para el proyecto
    const familiaNuevo = new familiaSchema(req.body)

    //Busca el proyecto para asignarle la familia
    const proyecto = await proyectoSchema.findById(req.params)

    familiaNuevo.proyecto = proyecto

    //Guarda la familia
    await familiaNuevo.save()

    //Asigna a la familia dentro del array
    proyecto.familia.push(familiaNuevo)
    
    //Guarda el proyecto con la familia nueva
    await proyecto.save()

    //Envia la familia con el proyecto
    res.send(familiaNuevo)
})

router.get('/:_id/familia', async function(req, res){
    //busca el proyecto con la familia
    const proyecto = await proyectoSchema.findById(req.params).populate('familia')
    res.send(proyecto)
})

module.exports = router;