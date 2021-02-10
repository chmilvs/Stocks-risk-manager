const express = require('express');
const app = express();
const useMiddleware = require('./middlewares/index');
const useErrorHandlers = require('./middlewares/error-handlers');
const stockRouter = require('./routes/stock')
const authRouter = require('./routes/auth')

useMiddleware(app);

// useErrorHandlers(app);

app.use('/api/auth', authRouter)
app.use('/api/stock',stockRouter)

module.exports = app;
