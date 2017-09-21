const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculoSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    cor: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Veiculo', veiculoSchema)