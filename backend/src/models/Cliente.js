const mongoose =  require('mongoose');

const ClienteSchema = new mongoose.Schema(
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
        }
    },
    {
        timestamps: true
    }
)

ClienteSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
});

module.exports = mongoose.model("Cliente", ClienteSchema);