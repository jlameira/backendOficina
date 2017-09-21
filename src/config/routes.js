const express = require('express');
const auth = require('./auth')

module.exports = function (server) {
    /**
     * Rotas protegidas por JWT
     */
    const routerProtected = express.Router();
    server.use('/api', routerProtected);
    routerProtected.use(auth)

    const veiculoService = require('../api/veiculo/veiculoService');
    veiculoService.register(routerProtected, '/veiculo');

    /**
     * Rotas públicas
     */
    const routerPublic = express.Router();
    server.use('/open', routerPublic)
    const authService = require('../api/user/authService');
    routerPublic.post('/login', authService.login);
    routerPublic.post('/signup', authService.signup);
    routerPublic.post('/validateToken', authService.validateToken);

}