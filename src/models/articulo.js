const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articuloSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    articulo: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('articulo', articuloSchema);