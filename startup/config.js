const colors = require('colors');
const path = require('path');
const dotenv = require('dotenv')
const express = require('express');
require('express-async-errors');

module.exports = function(app) {
    dotenv.config({ path: './config/config.env' });

    // Allow App to parse JSON
    app.use(express.json())

}