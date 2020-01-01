const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema({
    username: String,
    name: String,
    password: String,
    avatar: {type: String, default: ''}
});

module.exports = mongoose.model('UserModel', UserModel);
