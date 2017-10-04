const bodyParser = require('body-parser');
const express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);
var secret = require('./secret');
var allowCors = require('./cors');
const server = express();
const port = process.env.PORT || secret.port;
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
server.use(allowCors);
server.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secret.authSecret,
    store: new MongoStore({
        url: secret.database,
        autoReconnect: true
    })
}));
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`);
});


module.exports = server;