const mongoose = require('mongoose');
const secret = require('./secret')
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(secret.database, {
    useMongoClient: true,
});