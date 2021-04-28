const ClienteService = require('../services/ClienteService');

class ClienteController {
    salvar(req,res){
        return ClienteService.salvar(req,res);
    }
    
    obterPorId(req, res) {
        return ClienteService.obterPorId(req,res);
    }
  
    alterar(req, res) {
        return ClienteService.alterar(req,res);
    }
}

module.exports = new ClienteController();