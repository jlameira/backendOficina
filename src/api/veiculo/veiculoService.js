const Veiculo = require('./veiculo');

Veiculo.methods(['get', 'post', 'put', 'delete']);

// No node-restfull quando eu atualizar um determinado registro no mongo eu quero q a resposta seja o próprio resgitro atualizado
// quero q o node-restfull valide os campos require true
Veiculo.updateOptions({ new: true, runValidators: true });

module.exports = Veiculo;