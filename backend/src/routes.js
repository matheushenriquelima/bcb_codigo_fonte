const ClienteController = require('./controllers/ClienteController');
const express = require("express");
const routes = express.Router();


routes.post('/clientes',ClienteController.salvar);
routes.get("/clientes/:id",ClienteController.obterPorId);
routes.put("/clientes/:id", ClienteController.alterar);

module.exports = routes;