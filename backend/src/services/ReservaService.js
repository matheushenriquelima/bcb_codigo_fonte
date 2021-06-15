const Reserva = require('../models/Reserva');

class ReservaService {
    async salvar(req,res){
        try {
            const reserva = await Reserva.create(req.body);
            return res.json(reserva);
        } catch (error) {
            return res.status.send({error: 'Não foi possivel cadastrar a reserva'});
        } 
    }

    async obterPorIdCliente(req, res) {
        try {
          const reserva = await Reserva.find({cliente: req.params.id})
          return res.json(reserva);
        } catch (error) {
          return res
            .status(404)
            .send({ error: 'Nao foi possivel encontrar a reserva' });
        }
    }

      async alterar(req, res) {
        try {
          const reserva = await Reserva.findByIdAndUpdate(
            req.params.id,
            req.body
          );
          return res.status(200).json(reserva);
        } catch (error) {
          return res
            .status(400)
            .send({ error: 'Nao foi possivel alterar a reserva' });
        }
    }
}

module.exports = new ReservaService();