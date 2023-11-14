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
    proyecto: [{
        type: Schema.Types.ObjectId,
        ref: "Proyecto"
    }]
});

module.exports = mongoose.model('familia', familiaSchema);