const ClienteController = require('./controllers/ClienteController');
const BarbeiroController = require('./controllers/BarbeiroController');
const ReservaController = require('./controllers/ReservaController');
const AutenticacaoController = require('./controllers/AutenticacaoController');

const express = require("express");
const routes = express.Router();

routes.post("/autenticacao-cliente",AutenticacaoController.autenticarCliente);
routes.post("/autenticacao-barbeiro",AutenticacaoController.autenticarBarbeiro);


routes.post('/clientes',ClienteController.salvar);
routes.get("/clientes/:id",ClienteController.obterPorId);
routes.put("/clientes/:id", ClienteController.alterar);


routes.post('/barbeiro',BarbeiroController.salvar);
routes.get("/barbeiro/:id",BarbeiroController.obterPorId);
routes.put("/barbeiro/:id", BarbeiroController.alterar);


routes.post('/reserva',ReservaController.salvar);
routes.get("/reserva/:id",ReservaController.obterPorIdCliente);
routes.put("/reserva/:id", ReservaController.alterar);

module.exports = routes;