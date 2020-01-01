const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TokenModel = new Schema({
    userId: {type: String, required: true, default: ''},
    value: {type: String, required: true, default: ''},
});

module.exports = mongoose.model('TokenModel', TokenModel);
