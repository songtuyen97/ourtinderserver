let User = require('../MongoDB/User');
let Token = require('../MongoDB/Token');
const jwt = require('json-web-token');

class AuthService {
    constructor() {
        this.user = User;
        this.toke = Token;
    }

    async register(body) {
        try {
            if (!body.username || !body.password) {
                return {
                    message: 'username_or_password_is_required',
                    data: null
                };
            }
            const user = await User.findOne({username: body.username, password: body.password}).exec();
            if (user) {
                return {
                    message: 'user_is_exist',
                    data: null
                };
            }
            const dataInsert = new User({
                username: body.username,
                password: body.password,
                name: body.name,
                avatar: body.avatar,
            });
            const userInserted = await dataInsert.save();
            let token = jwt.encode(Env.APP_KEY, {
                id: userInserted._id,
                timestamp: new Date().getTime()
            });
            const dataTokenInsert = new Token({
                userId: userInserted._id,
                value: token.value,
            });
            await dataTokenInsert.save();
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
        const user = await User.findOne({username: body.username, password: body.password}).exec();
        if (user) {
            const token = await Token.findOne({userId: user._id}).exec();
            return {
                token,
                data: null
            };
        }
    }
}

module.exports = new AuthService();
