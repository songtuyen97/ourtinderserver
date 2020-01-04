const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PosterModel = new Schema({
    userId: {type: String, required: true, default: ''},
    content: {type: String, required: true, default: ''},
    list_image: {type: Array, default: []},
    timeStamp: Number
});

module.exports = mongoose.model('PosterModel', PosterModel);
