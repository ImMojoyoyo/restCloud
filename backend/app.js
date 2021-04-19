const express = require('express');


const app = express();

// Routes and files
const project_routes = require('./routes/index');

// Middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Prefix - routes (API)
app.use('/api', project_routes);


module.exports = app;