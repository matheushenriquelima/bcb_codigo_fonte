const Barbeiro = require('../models/Barbeiro');

class BarbeiroService {
    async salvar(req,res){
        try {
            const barbeiro = await Barbeiro.create(req.body);
            return res.json(barbeiro);
        } catch (error) {
            return res.status.send({error: 'Não foi possivel cadastrar o barbeiro'});
        } 
    }

    async obterPorId(req, res) {
        try {
          const barbeiro = await Barbeiro.findById(req.params.id);
          return res.json(barbeiro);
        } catch (error) {
          return res
            .status(404)
            .send({ error: 'Nao foi possivel encontrar o barbeiro' });
        }
    }

      async alterar(req, res) {
        try {
          const barbeiro = await Barbeiro.findByIdAndUpdate(
            req.params.id,
            req.body
          );
          return res.status(200).json(barbeiro);
        } catch (error) {
          return res
            .status(400)
            .send({ error: 'Nao foi possivel alterar o barbeiro' });
        }
    }
}

module.exports = new BarbeiroService();