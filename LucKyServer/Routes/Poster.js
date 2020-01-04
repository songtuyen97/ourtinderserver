const express = require('express');
const AuthMiddleware = require('../App/Middlewares/AuthMiddleware');
const PosterController = require('../App/Controllers/Http/PosterController');

const router = express.Router();

// router.use((req, res, next) => {
//     AuthMiddleware.auth({req, res, next});
// });

router.post('/new_post', (req, res, next) => {
    PosterController.newPoster({req, res, next});
});

module.exports = router;
