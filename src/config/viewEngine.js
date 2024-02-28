const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    app.set('views',path.join(__dirname,'src','views'));
    app.set('view engine', 'ejs');
    //static public file
    app.use(express.static(path.join(__dirname, '..',  'public')));
}

module.exports = configViewEngine;