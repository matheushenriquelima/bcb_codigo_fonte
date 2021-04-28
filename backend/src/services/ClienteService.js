const Cliente = require('../models/Cliente');

class ClienteService {
    async salvar(req,res){
        try {
            const cliente = await Cliente.create(req.body);
            return res.json(cliente);
        } catch (error) {
            return res.status.send({error: 'Não foi possivel cadastrar o cliente'});
        } 
    }

    async obterPorId(req, res) {
        try {
          const cliente = await Cliente.findById(req.params.id);
          return res.json(cliente);
        } catch (error) {
          return res
            .status(404)
            .send({ error: 'Nao foi possivel encontrar o cliente' });
        }
    }

      async alterar(req, res) {
        try {
          const cliente = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body
          );
          return res.status(200).json(cliente);
        } catch (error) {
          return res
            .status(400)
            .send({ error: 'Nao foi possivel alterar o cliente' });
        }
    }
}

module.exports = new ClienteService();