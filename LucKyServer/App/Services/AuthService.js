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

            // Step 2
            if (!body.username || !body.password) {
                return {
                    message: 'username_or_password_is_required',
                    data: null
                };
            }

            // Step 3
            //const user = await User.findOne({username: body.username, password: body.password});

            // Step 4
            // if (user) {
            //     return {
            //         message: 'user_is_exist',
            //         data: null
            //     };
            // }

            // Step 5
            // TODO
            const password = body.password;

            const dataInsert = new User({
                username: body.username,
                password: body.password,
                name: body.name,
                avatar: body.avatar,
            });

            const userInserted = await dataInsert.save();

            let token = jwt.encode(Env.APP_KEY, {
                id: userInserted.userId,
                timestamp: new Date().getTime()
            });

            const dataTokenInsert = new Token({
                userId: userInserted.id,
                value: token.value,
                status: 1
            });
            dataTokenInsert.save();
            return {
                message: 'register_success',
                data: token.value
            };
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new AuthService();
