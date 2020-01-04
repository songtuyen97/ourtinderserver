const jwt = require('json-web-token');
const PosterModel = require('../MongoDB/PosterModel');

class PosterService {
    constructor() {

    }

    async newPost(body) {
        return {
            "aa": "aaa"
        };
    }
}

module.exports = new PosterService();
