const mongoose =  require('mongoose');

const BarbeiroSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        senha: {
            type: String,
            required: true,
            select: false
        },
        endereco: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

BarbeiroSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
});

module.exports = mongoose.model("Barbeiro", BarbeiroSchema);