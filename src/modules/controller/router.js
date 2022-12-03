const {productRouter} = require("./products/products.controller");
const {genderRouter} = require("./genders/genders.controller");
const {movieRouter} = require("./movies/movies.controller");

module.exports = {
  productRouter, genderRouter, movieRouter,
};