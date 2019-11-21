const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var User = new Schema({
    userId: ObjectId,
    username: String,
    name: String,
    password: String,
    avatar: {type: String, default: ''}
});

module.exports = mongoose.model('User', User);
