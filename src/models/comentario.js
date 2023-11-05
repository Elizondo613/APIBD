const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comentarioSchema = new Schema({
    coment: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    student: [{
        type: Schema.Types.ObjectId,
        ref: 'estudiante'
    }]
});

module.exports = mongoose.model('comentario', comentarioSchema);