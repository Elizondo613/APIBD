const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const estudianteRoutes = require("./routes/estudiante");

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use('/api', estudianteRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("Api funcionando");
});

//mongodb conexion
//pass = sbZPdVlkBM3GtwaT
mongoose.connect("mongodb+srv://josejavierem:sbZPdVlkBM3GtwaT@cluster0.xzdmfmn.mongodb.net/?retryWrites=true&w=majority");

app.listen(port, () => console.log('server listening on port', port));