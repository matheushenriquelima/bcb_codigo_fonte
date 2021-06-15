const jwt =  require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Cliente = require('../models/Cliente');
const authConfig = require('../config/auth');
const Barbeiro = require('../models/Barbeiro');

class AutenticacaoService {
    async autenticarCliente(req, res) {
        try {
            const { email, senha } = req.body;

            const user = await Cliente.findOne({ email }).select("+senha");

            if (!user) {
                return res.status(400).send({ error: "Usuario não existe" });
            }

            if (!(await bcrypt.compare(senha, user.password))) {
                return res.status(400).send({ error: "Senha invalida" });
            }
            user.password = undefined;

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400,
            });
            return res.status(200).json({ user, token });
        } catch (err) {
            return res.status(400).json({ message: "Usuario não cadastrado" });
        }
    }

    async autenticarBarbeiro(req, res) {
        try {
            const { email, senha } = req.body;

            const user = await Barbeiro.findOne({ email }).select("+senha");

            if (!user) {
                return res.status(400).send({ error: "Barbeiro não existe" });
            }

            if (!(await bcrypt.compare(senha, user.password))) {
                return res.status(400).send({ error: "Senha invalida" });
            }
            user.password = undefined;

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400,
            });
            return res.status(200).json({ user, token });
        } catch (err) {
            return res.status(400).json({ message: "Barbeiro não cadastrado" });
        }
    }
}

module.exports = new AutenticacaoService();
