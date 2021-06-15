const ReservaService = require('../services/ReservaService');

class ReservaController {
    salvar(req,res){
        return ReservaService.salvar(req,res);
    }
    
    obterPorIdCliente(req, res) {
        return ReservaService.obterPorId(req,res);
    }
  
    alterar(req, res) {
        return ReservaService.alterar(req,res);
    }
}

module.exports = new ReservaController();