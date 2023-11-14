const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encargadoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    dpi: {
        type: String
    },
    proyecto: [{
        type: Schema.Types.ObjectId,
        ref: "Proyecto"
    }]
});

module.exports = mongoose.model('encargado', encargadoSchema);