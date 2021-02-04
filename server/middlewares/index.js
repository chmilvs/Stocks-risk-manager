const express = require('express');
const cors = require('cors');
const dbConnect = require('./db-connect');

module.exports = function useMiddleware(app) {
    dbConnect();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
};
