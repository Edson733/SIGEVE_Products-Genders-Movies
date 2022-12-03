const express = require('express');
const cors = require('cors');
const { productRouter, genderRouter, movieRouter } = require('../modules/controller/router')
require ('dotenv').config(); //Importaciones

const app = express(); //Instanciar server
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(cors({origins: '*'})); //Permite recibir cualquier peticion con X origen
app.use(express.json({limit: '50mb'})); //Permite peticiones hasta 50mb

//Routes
app.get("/", (request, response) => {
    response.send("Bienvenido a products_node");
});

//Endpoints
app.use('/api/products', productRouter);
app.use('/api/genders', genderRouter);
app.use(`/api/movies`, movieRouter);

module.exports = {
    app,
}; //{app:app}