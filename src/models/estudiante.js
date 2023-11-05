const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    noAprobaciones: {
        type: Number,
        required: true
    },
    noArticulos: {
        type: Number,
        required: true
    },
    noComentarios: {
        type: Number,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    art: [{
        type: Schema.Types.ObjectId,
        ref: 'articulo'
    }],
    coment: [{
        type: Schema.Types.ObjectId,
        ref: 'comentario'
    }]
});

module.exports = mongoose.model('estudiante', estudianteSchema);