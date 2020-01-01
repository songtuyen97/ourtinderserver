let UserModel = require('../MongoDB/UserModel');
let TokenModel = require('../MongoDB/TokenModel');
const jwt = require('json-web-token');

class AuthService {
    constructor() {
        this.user = null;
        this.token = null;
    }

    async register(body) {
        try {
            if (!body.username || !body.password) {
                return {
                    message: 'username_or_password_is_required',
                    data: null
                };
            }
            const user = await UserModel.findOne({username: body.username}).exec();
            if (user) {
                return {
                    message: 'user_is_exist',
                    data: null
                };
            }
            const dataInsert = new UserModel({
                username: body.username,
                password: body.password,
                name: body.name,
                avatar: body.avatar,
            });
            this.user = await dataInsert.save();
            let token = jwt.encode(Env.APP_KEY, {
                id: this.user._id,
                timestamp: new Date().getTime()
            });
            const dataTokenInsert = new TokenModel({
                userId: this.user._id,
                value: token.value,
            });
            this.token = await dataTokenInsert.save();
            return {
                message: 'register_success',
                data: token.value
            };
        } catch (e) {
            console.log(e);
        }
    }

    async login(body) {
        if (!body.username || !body.password) {
            return {
                message: 'username_or_password_is_required',
                data: null
            };
        }
        const user = await UserModel.findOne({username: body.username, password: body.password}).exec();
        if (user) {
            this.user = user;
            let token = jwt.encode(Env.APP_KEY, {
                id: user._id,
                timestamp: new Date().getTime()
            });
            const dataTokenInsert = new TokenModel({
                userId: user._id,
                value: token.value,
            });
            this.token = await dataTokenInsert.save();
            return {
                token: token.value,
                data: {
                    name: user.name,
                    avatar: user.avatar,
                }
            };
        }
    }
}

module.exports = new AuthService();
