const app = require('./app');

const userRouter = require('../Routes/User');

const authRouter = require('../Routes/Auth');

const posterRouter = require('../Routes/Poster');
const apiPrefix = '/api/v1';

// Routers users.
app.use('/users', userRouter);

app.use(`${apiPrefix}/auth`, authRouter);

app.use(`${apiPrefix}/poster`, posterRouter);
