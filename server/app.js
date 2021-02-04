const express = require('express');
const app = express();
const useMiddleware = require('./middlewares/index');
const useErrorHandlers = require('./middlewares/error-handlers');

useMiddleware(app);



useErrorHandlers(app);

module.exports = app;
