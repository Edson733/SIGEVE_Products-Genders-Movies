const {productRouter} = require("./products/products.controller");
const {genderRouter} = require("./genders/genders.controller");
const {movieRouter} = require("./movies/movies.controller");
const {roomRouter} = require("./rooms/rooms.controller");
const {movieShowsRouter} = require("./movie_shows/movie_shows.controller");

module.exports = {
  productRouter, genderRouter, movieRouter, roomRouter, movieShowsRouter,
};