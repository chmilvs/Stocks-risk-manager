const express = require('express');
const app = express();
const useMiddleware = require('./middlewares/index');
const stockRouter = require('./routes/stock')
const authRouter = require('./routes/auth')
const cors = require('cors')

useMiddleware(app);

app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/stock',stockRouter)

module.exports = app;
