const PosterService = require('../../Services/PosterService');

class PosterController {
    constructor() {
        this.posterService = PosterService;
    }

    async newPoster({req, res, next}) {
        const result = await this.posterService.newPost(req.body);
        return res.json(result);
    }

    async updatePoster({req, res, next}) {

    }

    async deletePoster({req, res, next}) {

    }

    async getListPoster({req, res, next}) {

    }
}

module.exports = new PosterController();
