const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    name: String,
    password: String,
    avatar: {type: String, default: ''}
});

module.exports = mongoose.model('User', User);
