const ClienteController = require('./controllers/ClienteController');
const BarbeiroController = require('./controllers/BarbeiroController');

const express = require("express");
const routes = express.Router();


routes.post('/clientes',ClienteController.salvar);
routes.get("/clientes/:id",ClienteController.obterPorId);
routes.put("/clientes/:id", ClienteController.alterar);


routes.post('/barbeiro',BarbeiroController.salvar);
routes.get("/barbeiro/:id",BarbeiroController.obterPorId);
routes.put("/barbeiro/:id", BarbeiroController.alterar);

module.exports = routes;