const {genderRouter} = require("./genders/genders.controller");
const {movieRouter} = require("./movies/movies.controller");
const {roomRouter} = require("./rooms/rooms.controller");
const {movieShowsRouter} = require("./movie_shows/movie_shows.controller");
const {clientRouter} = require("./clients/clients.controller");
const {salesTicketsRouter} = require("./sales_tickets/sales_tickets.controller");

module.exports = {
  genderRouter, movieRouter, roomRouter, movieShowsRouter, clientRouter, salesTicketsRouter,
};