const express = require('express');
const cors = require('cors');
const { productRouter } = require('../modules/controller/router')
require ('dotenv').config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors({origins: '*'}));

app.use(express.json({limit: '50mb'}));

app.get("/", (request, response) => {
    response.send("Bienvenido a products_node");
});

//app.use('/api/products', productRouter);

module.exports = {
    app
};