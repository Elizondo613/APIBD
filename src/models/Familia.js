const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familiaSchema = new Schema({
    direccion: {
        type: String,
        required: true
    },
    ingreso: {
        type: Number,
        required: true
    },
    integrante: String
});

module.exports = mongoose.model('familia', familiaSchema);