const BarbeiroService = require('../services/BarbeiroService');

class BarbeiroController {
    salvar(req,res){
        return BarbeiroService.salvar(req,res);
    }
    
    obterPorId(req, res) {
        return BarbeiroService.obterPorId(req,res);
    }
  
    alterar(req, res) {
        return BarbeiroService.alterar(req,res);
    }
}

module.exports = new BarbeiroController();