const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Token = new Schema({
    userId: {type: String, required: true},
    value: {type: String, required: true},
    status: {type: Number},
});

module.exports = mongoose.model('Token', Token);
