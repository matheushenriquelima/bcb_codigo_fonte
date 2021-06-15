const AutenticacaoService = require('../services/AutenticacaoService'); 

class AutenticacaoController {
    autenticarCliente(req, res) {
        return AutenticacaoService.autenticarBarbeiro(req, res);
    }

    autenticarBarbeiro(req, res) {
        return AutenticacaoService.autenticarBarbeiro(req, res);
    }
}

module.exports = new AutenticacaoController();