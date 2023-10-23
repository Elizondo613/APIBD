const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const libroRoutes = require("./routes/libro");

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use('/api', libroRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("Api funcionando");
});

//mongodb conexion
mongoose.connect("mongodb+srv://josejavierem:HolaMundo123456@cluster0.wokzbub.mongodb.net/?retryWrites=true&w=majority");

app.listen(port, () => console.log('server listening on port', port));