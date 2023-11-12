const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const integranteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number
    },
    familia: [{
        type: Schema.Types.ObjectId,
        ref: 'familia'
    }]
});

module.exports = mongoose.model('integrante', integranteSchema);