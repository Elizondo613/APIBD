const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: String,
        required: true
    },
    fechaFin: {
        type: String,
        required: true
    },
    presupuesto: {
        type: Number,
        required: true
    },
    encargado: [{
        type: Schema.Types.ObjectId,
        ref: 'encargado'
    }],

    familia:[{
        type: Schema.Types.ObjectId,
        ref: 'familia'
    }]
});

module.exports = mongoose.model('proyecto', proyectoSchema);