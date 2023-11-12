const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const proyectoRoutes = require("./routes/proyecto");
var cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(
    cors({
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  )

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })

//middleware
app.use(express.json());
app.use('/api', proyectoRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("Api funcionando");
});

//mongodb conexion
//pass = QcDLajPjyYQWAvMY
mongoose.connect("mongodb+srv://josejavierem:QcDLajPjyYQWAvMY@cluster0.eb4pats.mongodb.net/?retryWrites=true&w=majority");

app.listen(port, () => console.log('server listening on port', port));