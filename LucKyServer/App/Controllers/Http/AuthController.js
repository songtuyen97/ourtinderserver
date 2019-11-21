const AuthService = require('../../Services/AuthService');

class AuthController {
    constructor() {
        this.authService = AuthService;
    }

    async register({req, res, next}) {
        const {body} = req;
        const result = await this.authService.register(body);
        return res.json(result);
    }

    async login({req, res, next}) {
        const {body} = req;
        const result = await this.authService.login(body);
        return res.json(result);
    }
}

module.exports = new AuthController();
