const mongoose =  require('mongoose');

const ReservaSchema = new mongoose.Schema(
    {
        servico: {
            type: String,
            required: true
        },
        data: {
            type: Date, 
            required: true,
        },
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cliente",
        },
        barbeiro: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Barbeiro",
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Reserva", ReservaSchema);